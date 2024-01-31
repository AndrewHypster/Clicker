const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
// const HOST = 'localhost'
const PORT = 1503

app.get('/register/:username/:password', (req, res) => {                      /* Р Е Є С Т Р А Ц І Я */
  const dataBase = JSON.parse(fs.readFileSync('dataBase.json', 'utf-8'))

  if(!dataBase[req.params.username]){ // якщо нема такого користувача
    dataBase[req.params.username] = {
      password: req.params.password,
      coins: '0',
      earn: '0',
      shop: [ 0, 0, 0, 0, 0, 0 ]
    }
    fs.writeFileSync('dataBase.json', JSON.stringify(dataBase))
    res.send(JSON.stringify(`Користувача ${req.params.username} успішно створено`))
  }
  else res.send(`Користувач з іменем ${req.params.username} вже існує`)
})

app.get('/enter/:username/:password', (req, res) => {                      /* В Х І Д */
  const dataBase = JSON.parse(fs.readFileSync('dataBase.json', 'utf-8'))

  if(dataBase[req.params.username])
    if(dataBase[req.params.username].password === req.params.password)
      res.send(JSON.stringify(
        {
          message: 'true',
          "user-info": {
            userName: req.params.username,
            coins: dataBase[req.params.username].coins,
            earn: dataBase[req.params.username].earn,
            shop: dataBase[req.params.username].shop
          }
        }))
    else
      res.send(JSON.stringify({message: 'password'}))
  else
    res.send(JSON.stringify({message: 'username'}))
})

app.get('/save-game/:username/:coins/:earn/:shop', (req, res) => {                      /* З Б Е Р Е Ж Е Н Н Я   Г Р И */
  if (req.params.username !== 'null') {
    const dataBase = JSON.parse(fs.readFileSync('dataBase.json', 'utf-8'))

    dataBase[req.params.username].coins = req.params.coins
    dataBase[req.params.username].earn = req.params.earn
    dataBase[req.params.username].shop = req.params.shop.split(',')

    fs.writeFileSync('dataBase.json', JSON.stringify(dataBase))
    res.send(JSON.stringify('З Б Е Р Е Ж Е Н О'))
  } else {
    res.send(JSON.stringify('Н Е   З Б Е Р Е Ж Е Н О!!!'))
  }
})

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
})