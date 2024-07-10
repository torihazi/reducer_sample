export const useManageTodo = () => {
  const initialState = [];

  const manageTodoReducer = (state, action) => {
    switch (action.type) {
      case "AddTodo":
        return [
          ...state,
          {
            id: Date.now(),
            isComplete: false,
            text: action.payload,
          },
        ];
      case "ToggleTodo":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        );
      case "DeleteTodo":
        return state.filter((todo) => todo.id !== action.payload);
      case "DeleteAll":
        return initialState;
      default:
        return state;
    }
  };

  return { initialState, manageTodoReducer };
};
