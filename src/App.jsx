import { Box, Button, Checkbox, Container, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });
  };


  return (
    <Container maxWidth='xs'>
      <Typography variant="h5" align='center'>Sign In</Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2} >
        <TextField
          margin="normal"
          fullWidth
          required
          id="email"
          label="Email Address"
          onChange={(event) => setEmail(event.target.value)}

        >
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          required
          id="password"
          label="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        >
        </TextField>
        <FormControlLabel
          label="Remember me"
          control={<Checkbox />}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >Sign In</Button>
        <Box display="flex" flex="row" justifyContent="space-between">
          <Link href="#"
            variant="body1"
          >
            Forgot password?
          </Link>
          <Link href="#"
            variant="body1"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default App
