const { Router } = require('express');
const payRouter = Router()
const mercadopago = require("mercadopago");

payRouter.post("/create_preference", (req, res) => {
    console.log(req.body)
        let preference = {
            items: [
                {
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                }
            ],		
            back_urls: {
                "success": "http://localhost:3001/pay/feedback",
                "failure": "http://localhost:3001/pay/feedback",
                "pending": "http://localhost:3001/pay/feedback"
            },
            auto_return: "approved",
        };console.log("PREFERENCE", preference)
    
        mercadopago.preferences.create(preference)
            .then(function (response) {
                res.send({
                    id: response.body.id
                })
                console.log("MERCADOPAGO.PREFERENCES.CREATE", response.body.id);
            }).catch(function (error) {
                console.log(error);
            });
    });

    payRouter.get('/feedback/success', function (req, res) {
        const paymentId = req.query.payment_id;
        const status = req.query.status;
        const merchantOrderId = req.query.merchant_order_id;
    
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Mi página HTML</title>
                </head>
                <body>
                    <ul>
                    <li>Payment ID: ${paymentId}</li>
                    <li>Status: ${status}</li>
                    <li>Merchant Order ID: ${merchantOrderId}</li>
                    </ul>
                    <h1> el pago se ha realizado con exito!</h1>
                    <a href="http://localhost:3000/Products">SEGUIR COMPRANDO</a>
                        <p>Este es un párrafo de ejemplo.</p>
                </body>
                </html>
            `)
    })
    payRouter.get('/feedback/pending', function (req, res) {
        res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Mi página HTML</title>
            </head>
            <body>
            <h1> el pago está pendiente de aprobacion!</h1>
            <a href="http://localhost:3000/Products">SEGUIR COMPRANDO</a>
                <p>Este es un párrafo de ejemplo.</p>
            </body>
        </html>
      `)
    })
    payRouter.get('/feedback/failure', function (req, res) {
        res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Mi página HTML</title>
            </head>
            <body>
            <h1> el pago ha fallado!</h1>
            <a href="http://localhost:3000/Products">SEGUIR COMPRANDO</a>
                <p>Este es un párrafo de ejemplo.</p>
            </body>
        </html>
      `)
    })

    module.exports = {payRouter}