// ActionTypes for actions
const ActionTypes = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    RESET: 'RESET'
  };
  
  // Initial state
  let state = {
    count: 0
  };
  
  // Function to get current state
  const getState = () => state;
  
  // Function to update state based on action
  const reducer = (currentState, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
        return { ...currentState, count: currentState.count + 1 };
      case ActionTypes.SUBTRACT:
        return { ...currentState, count: currentState.count - 1 };
      case ActionTypes.RESET:
        return { ...currentState, count: 0 };
      default:
        return currentState;
    }
  };
  
  // Array to hold subscribers
  let subscribers = [];
  
  // Function to subscribe to state changes
  const subscribe = (callback) => {
    subscribers.push(callback);
  };
  
  // Function to dispatch actions and update state
  const dispatch = (action) => {
    state = reducer(state, action);
    // Notify subscribers after state has been updated
    subscribers.forEach(callback => callback());
  };
  
  // Example usage:
  console.log('Initial State:', getState()); // Initial state: { count: 0 }
  
  // Subscribe to state changes and log to console
  subscribe(() => {
    console.log('State updated:', getState());
  });
  
  // SCENARIO 1: Initial State Verification
  console.log('\nSCENARIO 1:');
  console.log('Current State:', getState()); // Should log { count: 0 }
  
  // SCENARIO 2: Incrementing the Counter
  console.log('\nSCENARIO 2:');
  dispatch({ type: ActionTypes.ADD }); // Increment count
  dispatch({ type: ActionTypes.ADD }); // Increment count again
  
  // SCENARIO 3: Decrementing the Counter
  console.log('\nSCENARIO 3:');
  dispatch({ type: ActionTypes.SUBTRACT }); // Decrement count
  
  // SCENARIO 4: Resetting the Counter
  console.log('\nSCENARIO 4:');
  dispatch({ type: ActionTypes.RESET }); // Reset count
  