// Core Redux Concepts
// Fill in the reducer function so that it updates state immutably. The setToLate action should set the isLate property to true.

const initialState = {
   isLate: false,
   ETA: '11:00',
   destination: 'Mars'
};

const arrivalReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'setToLate': {
        return {
          ...state, 
          isLate: true
        };
      }
      default:
        return state;
   }
};


// Fill in the reducer function so that it updates state immutably. The addTodo action should add the action.payload value to the state array.

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload];
    default:
      return state;
  }
}


// Define a valid action so that newState equals 3

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'incrementByAmount':
      return state + action.payload;
    default:
      return state;
  }
}

const action = {
  type: 'incrementByAmount',
  payload: 2 
};


// newState should be 3
const newState = reducer(1, action);
