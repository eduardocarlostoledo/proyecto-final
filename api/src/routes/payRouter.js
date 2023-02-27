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
                "success": "http://localhost:3001/pay/feedback/success",
                "failure": "http://localhost:3001/pay/feedback/failure",
                "pending": "http://localhost:3001/pay/feedback/pending"
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
    
        res.sendFile(__dirname + '/payHtml/succes.html');
    })
    payRouter.get('/feedback/pending', function (req, res) {

        res.sendFile(__dirname + '/payHtml/pending.html');

    })
    
    payRouter.get('/feedback/failure', function (req, res) {

        res.sendFile(__dirname + '/payHtml/failure.html');
    })

    module.exports = {payRouter}