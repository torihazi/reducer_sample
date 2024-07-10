// core
import React, { useReducer } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

// hooks
import { useManageCount } from "../../hooks/useManageCount";

const CountUpDown = () => {
  const { initialState, manageCountReducer } = useManageCount();
  const [state, dispatch] = useReducer(manageCountReducer, initialState);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 64px)"
    >
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h2"
          textAlign="center"
          color={state.count % 3 === 0 && state.count > 0 && "red"}
        >
          {state.count}
        </Typography>
        <ButtonGroup size="large">
          <Button
            color="primary"
            variant="contained"
            onClick={() => dispatch({ type: "increment" })}
          >
            +1
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => dispatch({ type: "decrement" })}
            disabled={state.count === 0}
          >
            -1
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CountUpDown;
