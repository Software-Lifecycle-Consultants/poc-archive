"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
} from "@mui/material";
// import component
import UppyComponent from "../component/uppy";

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("@uppy/react");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        React File Uploads
      </Typography>
        <Box mt={2}>
          <UppyComponent />
        </Box>
    </Container>
  );
};

export default Home;
