function placeOrder(order, callback){
   setTimeout(() => {

        console.log(`Order placed for ${order.item}`);
        
        order.status = "Placed";

        callback(order);

   }, 1000);
}

function prepareOrder(order, callback){
    setTimeout(() => {

        console.log(`${order.item} is being prepared`);

        order.status = "Preparing";

        callback(order);

    }, 1000);
}

function packed(order, callback){
    setTimeout(() => {

        console.log(`${order.item} is packed`);

        order.status = "Packed";

        callback(order);

    }, 1000);
}

function delivered(order, callback){
    setTimeout(() => {

        console.log(`${order.item} delivered`);

        order.status = "Delivered";

        callback(order);

    }, 1000);
}


const order = {
    item: "Pizza",
    quantity: 2,
    price: 500
};



placeOrder(order, (updatedOrder) => {

    prepareOrder(updatedOrder, (updatedOrder) => {

        packed(updatedOrder, (updatedOrder) => {

            delivered(updatedOrder, (updatedOrder) => {

                console.log("Final Order Object:");
                console.log(updatedOrder);

            });

        });

    });

});