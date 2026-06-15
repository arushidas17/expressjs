const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error(err))

const userRoutes = require('./routes/users')
app.use('/api/users', userRoutes)

app.listen(3000, () => console.log('Server on port 3000'))