const nodemailer = require('nodemailer')

enviarMail = async (producto, precio, email) => {

    let cantidades = producto.split(',')
    let usuario = localStorage.getItem('email')

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'computer.store.original@gmail.com',
            pass: 'ahqdrlukahufvbnt'
        }
    }

    const mensaje = {
        from: 'computer.store.orinal@gmail.com',
        to: usuario,
        subject: 'compra realizada de forma exitosa!' ,
        text: `muchas gracias por comprar en Computer Store a continuacion adjunto el detalle de su compra:
        producto/s: ${producto}
        cantidad de productos: ${cantidades.length}
        compra total: ${precio}
                `
    }

    const transport = nodemailer.createTransport(config)

    const info = await transport.sendMail(mensaje)

    console.log(info)
}

module.exports = enviarMail