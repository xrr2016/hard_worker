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
  Article.create({
    title: 'This is a title!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde, vel ad inventore ex maiores id aliquid obcaecati, officia maxime ducimus. Cupiditate asperiores assumenda accusantium libero eligendi ducimus et ut.'
  })
})