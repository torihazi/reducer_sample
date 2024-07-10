import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const words = "HELLO_TORIHAZI";

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 64px)"
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        {words.split("").map((key, value) => (
          <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: value * 0.1,
              repeat: Infinity,
            }}
          >
            {key}
          </motion.span>
        ))}
      </Typography>
    </Box>
  );
};

export default Home;
