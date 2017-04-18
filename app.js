const Sequelize = require('sequelize')

const connention = new Sequelize('demo_schema', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

const Article = connention.define('article', {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [10, 150],
        msg: 'title should be between 10 to 150'
      }
    }
  },
  body: {
    type: Sequelize.TEXT,
    // defaultValue: 'Coming soon...'
    // validate: {
    //   customValidate: function(value) {
    //     const firstChar = value.charAt(0)
    //     if (firstChar !== 'X') {
    //       throw new Error('title first char must be "X"')
    //     }
    //   }
    // }
  }
}, {
  force: true,
  // timestamps: false,
  // freezeTableName: true
  hooks: {
    beforeValidate: function() {
      console.log('beforeValidate')
    },
    afterValidate: function() {
      console.log('afterValidate')
    },
    beforeCreate: function() {
      console.log('beforeCreate')
    },
    afterCreate: function(res) {
      console.log('afterCreate: article is create', res)
    }
  }
})

connention
  .sync({
    // force: true,
    logging: console.log
  }).then(() => {
    return Article.create({
        title: 'some-title',
        slug: 'some-slug',
        body: 'X Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt accusantium aliquam sed fugit illum ad modi magni, at obcaecati dolore quibusdam numquam iste sunt pariatur harum nulla minima molestiae!'
      })
      .then(articles => console.log(articles.length))
  })
  .catch(err => {
    // console.log(err)
  })