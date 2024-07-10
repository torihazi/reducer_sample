//core
import React, { useReducer, useState } from "react";

//hooks
import { useManageTodo } from "../../hooks/useManageTodo";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Todo = () => {
  const { initialState, manageTodoReducer } = useManageTodo();
  const [todos, dispatch] = useReducer(manageTodoReducer, initialState);
  const [todoText, setTodoText] = useState("");
  const MAX_LENGTH = 15;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch({ type: "AddTodo", payload: todoText });
      setTodoText("");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 64px)"
    >
      <Stack direction="column" spacing={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Input Todo ..."
            value={todoText}
            variant="standard"
            autoFocus
            autoComplete="off"
            inputProps={{ maxLength: MAX_LENGTH }}
            onChange={(e) => setTodoText(e.target.value)}
            helperText={`${todoText.length}/${MAX_LENGTH} 文字`}
          />
          <ButtonGroup>
            <Button variant="contained" type="submit">
              追加
            </Button>
            <Button
              disabled={todos.length === 0}
              variant="contained"
              sx={{
                background: "grey",
                color: "white",
                ":hover": { background: "darkgrey" },
              }}
              onClick={() => dispatch({ type: "DeleteAll" })}
            >
              全削除
            </Button>
          </ButtonGroup>
        </form>
        <List>
          {todos.length === 0 ? (
            <Typography>Todoはありません</Typography>
          ) : (
            todos.map((todo) => (
              <ListItem
                key={todo.id}
                disablePadding
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Checkbox
                    checked={todo.isComplete}
                    onChange={() =>
                      dispatch({ type: "ToggleTodo", payload: todo.id })
                    }
                  />
                  <Typography
                    sx={{
                      textDecoration: todo.isComplete ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </Typography>
                </Box>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() =>
                    dispatch({ type: "DeleteTodo", payload: todo.id })
                  }
                >
                  削除
                </Button>
              </ListItem>
            ))
          )}
        </List>
      </Stack>
    </Box>
  );
};

export default Todo;
