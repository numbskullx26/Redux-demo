console.log("From Index.js");
// A constant defining the state of the variable
const CAKE_ORDERED = "CAKE_ORDERED";
// First action in Redux
// An action is an object with the type property
// An action creator is an pure function that returns the object
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
//hemnloooo
