const Sequelize = require('sequelize')

const connention = new Sequelize('demo_schema', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

const Article = connention.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
})

connention.sync().then(() => {
  Article.findAll()
         .then(articles => console.log(articles.length))
})