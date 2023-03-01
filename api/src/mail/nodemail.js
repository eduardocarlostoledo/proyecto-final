const nodemailer = require('nodemailer')

enviarMail = async () => {

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'laiamiaperezlupia@gmail.com',
            pass: 'hzdyvzxqaogwzsrh'
        }
    }

    const mensaje = {
        from: 'laiamiaperezlupia@gmail.com',
        to: 'laiperez1020@gmail.com',
        subject: 'probando nodemail' ,
        text: 'prueba exitosa con nodemail'
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(mensaje)

    console.log(info)
}

module.exports = enviarMail