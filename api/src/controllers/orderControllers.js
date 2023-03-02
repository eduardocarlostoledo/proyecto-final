const { Order } = require("../db");

const postOrder = async (order) => {
    const {
        cartUserId, 
        paymentId,
        statusId, 
        merchantOrderId    
    } = order
        
    console.log("POST CONTROLLER ORDER", 
        cartUserId, 
        paymentId,
        statusId, 
        merchantOrderId    
    );   
    try {
        const newOrder = await Order.create({ 
            cartUserId, 
            paymentId,
            statusId, 
            merchantOrderId        
        });
        
        console.log("POST CONTROLLER CREATED ORDER", newOrder );   

        return newOrder
    } catch (error) {
        throw Error(error.message);
    }  
    
};

module.exports = {postOrder}