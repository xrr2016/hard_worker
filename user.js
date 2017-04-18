const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

const connection = new Sequelize('demo_schema', 'root', 'root')

const User = connection.define('User', {
  username: Sequelize.TEXT,
  password: Sequelize.TEXT
}, {
  hooks: {
    afterValidate(user) {
      user.password = bcrypt.hashSync(user.password, 8)
    }
  }
})

connection
  .sync({
    force: true,
    logging: console.log
  })
  .then(() => {
    return User.create({
      username: 'test username',
      password: 'test password'
    })
  })
  .catch(err => console.log('err', err))












