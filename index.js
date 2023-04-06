const redux = require("redux");
// Using redux to create a new store to implement the following functions of a redux store

const createStore = redux.createStore;

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

// Creating the initial or default state which is always an object containing different attributes

const initialState = {
  numberOfCakes: 10,
};

// Creating the reducer function
// Syntax: (previousState,action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
