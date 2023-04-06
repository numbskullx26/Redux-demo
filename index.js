console.log("From Index.js");
// A constant defining the state of the variable
const CAKE_ORDERED = "CAKE_ORDERED";
// First action in Redux
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
