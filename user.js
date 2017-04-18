const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')

const connection = new Sequelize('demo_schema', 'root', 'root')

const User = connection.define('User', {
  username: Sequelize.TEXT,
  password: Sequelize.TEXT,
  // approved: {
  //   type: Sequelize.BOOLEAN,
  //   defaultValue: false
  // }
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
    // return User.create({
    //   approved: true,
    //   username: 'test username 3',
    //   password: 'test password 3'
    // })
    // .then(user => {
    //   console.log(user.username)
    // })
    // const user = User.build({
    //   username: 'another username',
    //   password: 'another password'
    // })
    // user.save()
    User.bulkCreate([
      {
        username: 'name01',
        password: 'password01'
      },
      {
        username: 'name02',
        password: 'password02'
      },
      {
        username: 'name04',
        password: 'password04'
      },
      {
        username: 'name03',
        password: 'password03'
      }
    ])
  })
  .then(users => console.log(users))
  .catch(err => console.log('err', err))












