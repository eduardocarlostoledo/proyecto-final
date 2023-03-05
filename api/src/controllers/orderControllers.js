const { Order } = require("../db");

const postOrder = async (cartUserId, paymentId, statusId, merchantOrderId) => {
    // const {
    //     cartUserId, 
    //     paymentId,
    //     statusId, 
    //     merchantOrderId    
    // } = order
          
    try {
        console.log("POST CONTROLLER ORDER",         cartUserId,         paymentId,        statusId,         merchantOrderId        )
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