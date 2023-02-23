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

    payRouter.get('/feedback', function (req, res) {
        res.json({
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        });
    });

    module.exports = {payRouter}