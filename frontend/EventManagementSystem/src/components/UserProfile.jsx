import React, { useState } from 'react';
import { Box, Avatar, Typography, Grid, Divider, IconButton, TextField, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const UserProfile = () => {
  const [editable, setEditable] = useState({
    username: false,
    email: false,
    address: false,
    nickname: false,
    dob: false,
  });

  const [values, setValues] = useState({
    username: 'Jenny Wilson',
    email: 'jenny@gmail.com',
    address: 'New York, USA',
    nickname: 'Sky Angel',
    dob: 'April 28, 1981',
  });

  const handleEditClick = (field) => {
    setEditable({ ...editable, [field]: !editable[field] });
  };

  const handleChange = (field, event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: '#fff',
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Avatar
            alt="Jessica Alba"
            src="https://www.shutterstock.com/image-illustration/bright-portrait-cute-smiling-kawaii-260nw-2387969365.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <Typography variant="h5">
          Jessica Alba
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
          @jennywilson
          <IconButton size="small" onClick={() => handleEditClick('username')}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2} justifyContent="center">
          {['username', 'email', 'address', 'nickname', 'dob'].map((field) => (
            <Grid item xs={12} key={field}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
                  {field}
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  value={values[field]}
                  onChange={(event) => handleChange(field, event)}
                  disabled={!editable[field]}
                  sx={{ flexGrow: 2, mx: 1 }}
                />
                <IconButton size="small" onClick={() => handleEditClick(field)}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserProfile;
