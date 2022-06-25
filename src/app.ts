import express, { Request, Response } from "express";

import Sender from "./sender";

const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/status", (req: Request, res: Response) => {

})

app.post('/send', async (req: Request, res: Response) => {
    try {
        await sender.sendText('5571999549776@c.us', 'TE AMO')
        return res.status(200).json()
    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'error', message: error })
    }
})

const port = 5000
app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})