const express = require('express')
const cors = require('cors')
const rulesEngine = require('./rulesEngine')
const lenders = require('./lenders')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/submit', async (req, res) => {})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * Simulates an API call to bank
 * @param {object} lender
 * @return {Promise<>}
 */
function sendToBank(lender) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Applied to ${lender.name}`)
      resolve({
        name: lender.name,
        response: `Successfully applied to ${lender.name}`
      })
    }, 1000)
  })
}
