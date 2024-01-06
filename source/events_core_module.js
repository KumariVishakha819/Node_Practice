const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log("order received, baking a pizza");
  console.log(size, topping);
});
emitter.on("order-pizza", (size, topping) => {
  if (size === "large") {
    console.log("Serving Complimentary Drings");
  }
});
console.log("Do work before event occurs");
emitter.emit("order-pizza", "large", "mushroom");
