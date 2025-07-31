// all the backend code goes here
const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()

const fs = require('fs')

const multer = require('multer')

const { GoogleGenerativeAI } = require("@google/generative-ai")

new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.listen(PORT, () => console.log("Listening to changes on PORT " + PORT))
