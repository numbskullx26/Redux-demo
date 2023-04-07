const redux = require("redux");
//redux-logger is a middleware which we are importing from the redux library

const reduxLogger = require("redux-logger");
// Using redux to create a new store to implement the following functions of a redux store

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//using the createLogger() function of the reduxLogger library
const logger = reduxLogger.createLogger();
//using the applyMiddleware() function of the redux library
const applyMiddleware = redux.applyMiddleware;

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

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberOfIcecreams: 20,
};

// Creating the reducer function
// Syntax: (previousState,action) => newState

const cakeReducer = (state = initialCakeState, action) => {
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
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         numberOfIcecreams: state.numberOfIcecreams + action.payload,
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
// whenever the state of the objkect is updated, this function will get called which will ultimately print the updated state as console.log
const unsubscribe = store.subscribe(() => {});

//each Dispatch call will update the state of the object. orderCake() function is passed in this, which is an action creator.
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(restockIcecream());
unsubscribe();
