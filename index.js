const redux = require("redux");
// Using redux to create a new store to implement the following functions of a redux store

const createStore = redux.createStore;

// A constant defining the state of the variable
/// this is called an action type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";
// First action in Redux
// An action is an object with the type property

// An action creator is an pure function that returns the object
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}
// Creating the initial or default state which is always an object containing different attributes

const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams: 20,
};

// Creating the reducer function
// Syntax: (previousState,action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
// whenever the state of the objkect is updated, this function will get called which will ultimately print the updated state as console.log
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

//each Dispatch call will update the state of the object. orderCake() function is passed in this, which is an action creator.
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));


unsubscribe();
