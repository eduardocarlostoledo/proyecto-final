const { Order } = require("../db");

const postOrder = async (order) => {
    const {
        userId, 
        paymentId,
        statusId, 
        merchantOrderId    
        } = order
        
console.log("POST CONTROLLER ORDER", 
userId, 
paymentId,
statusId, 
merchantOrderId    
);   
    try {
        const newOrder = await Order.create({ 
            userId, 
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