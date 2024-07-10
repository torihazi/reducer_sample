export const useManageCount = () => {
  const initialState = {
    count: 0,
    isIncrement: false,
  };
  const manageCountReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
          isIncrement: true,
        };
      case "decrement":
        return {
          count: state.count - 1,
          isIncrement: false,
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  return { initialState, manageCountReducer };
};
