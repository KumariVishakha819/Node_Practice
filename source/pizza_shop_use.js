const pizzaShop = require("./pizza_shop");

const pizza1 = new pizzaShop();
pizza1.on("order", (size, topping) => console.log(size, topping));
pizza1.order("medium", "mushroom");
pizza1.displayOrderNumber();
