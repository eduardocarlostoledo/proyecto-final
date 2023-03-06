const { Order } = require("../db");

const postOrder = async (
    product_description,
    total_order_price,
    prodId,
    buyer_email,
    product_name,
    product_image,
    product_amount,
    product_unit_price,
    paymentId,
    statusId,
    merchantOrderId
  ) => {   
          
    try {
        const newOrder = await Order.create(
            product_description,
            total_order_price,
            prodId,
            buyer_email,
            product_name,
            product_image,
            product_amount,
            product_unit_price,
            paymentId,
            statusId,
            merchantOrderId
          );
        console.log("POST CONTROLLER CREATED ORDER", newOrder );   
        return newOrder
    } catch (error) {
        throw Error(error.message);
    }      
};

module.exports = {postOrder}