const { Order, User } = require("../db");

const postOrder = async (
    paymentId,
    statusId,
    merchantOrderId,
    product_description,     
    total_order_price,      
    prodId,
    buyer_email,
    product_name,
    product_image,
    product_amount,
    product_unit_price) => {  

  try {
    console.log(
      "POST CONTROLLER ORDER",
      paymentId,
      statusId,
      merchantOrderId,
      product_description,     
      total_order_price,      
      prodId,
      buyer_email,
      product_name,
      product_image,
      product_amount,
      product_unit_price
    );
    const newOrder = await Order.create({
        paymentId,
        statusId,
        merchantOrderId,
        product_description,     
        total_order_price,      
        prodId,
        buyer_email,
        product_name,
        product_image,
        product_amount,
        product_unit_price
    });

    console.log("POST CONTROLLER CREATED ORDER", newOrder);

    return newOrder;
  } catch (error) {
    throw Error(error.message);
  }
};

const getOrders = async () => {
  try {
    const allorders = await Order.findAll();     
    return allorders;
  } catch (error) {
    throw new Error("Error retrieving orders: " + error.message);
  }
};


// const getOrders = async () => {
//   const orders = await Order.findAll({
//     include: {
//       model: User,
//       attributes: [
//         "name",
//         "email",
//         "phonenumber",
//         "country",
//         "city",
//         "address",
//       ],
//       through: {
//         attributes: [],
//       },
//     },
//   });
//   return orders;
// };

module.exports = { postOrder, getOrders };
