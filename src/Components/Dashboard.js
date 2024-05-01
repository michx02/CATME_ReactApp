import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="h5" gutterBottom>
            Sub-Dashboard
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ribbion 
          </Typography>

        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
