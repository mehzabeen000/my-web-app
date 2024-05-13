import { Paper, Typography } from '@mui/material';

const WelcomeMessage = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5">Welcome to ABC Store!</Typography>
    </Paper>
  );
};

export default WelcomeMessage;
