import * as dotenv from 'dotenv'
import app from './server'

dotenv.config()

app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})