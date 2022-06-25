import { create, Whatsapp, Message, SocketState } from 'venom-bot'

class Sender {
    private client: Whatsapp

    constructor() {
        this.initialize()
    }

    async sendText(to: string, body:string) {
        //557199954976@c.us
        await this.client.sendText(to, body)
    }

    private initialize() {

        const qr = (base64Qrimg: string) => {}
        //const status = (statusSession: string) => {}
        const start = (client: Whatsapp) => {
            this.client = client

            //this.sendText('5571999549776@c.us', 'eu sou um bot')
        }

        create('orcamento', qr, /* status */)
            .then((client) => start(client))
            .catch((error) => console.log(error))
    }
}

export default Sender