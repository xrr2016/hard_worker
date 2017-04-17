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
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    // defaultValue: 'Coming soon...'
  }
}, {
  timestamps: false,
  // freezeTableName: true
})

connention.sync({
  force: true,
  logging: console.log
}).then(() => {
  // Article.findAll()
  //        .then(articles => console.log(articles.length))
})