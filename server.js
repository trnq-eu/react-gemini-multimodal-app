// all the backend code goes here
const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()

const { GoogleGenerativeAI } = require("@google/generative-ai")
new GoogleGenerativeAI(process.env.GEMINI_API_KEY)


const fs = require('fs')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage:storage }).single('file')

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            return res.send(500).json(err)
        }
    })

})

app.listen(PORT, () => console.log("Listening to changes on PORT " + PORT))
