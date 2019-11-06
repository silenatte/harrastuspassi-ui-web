import React from 'react';
import { Grid, TextField, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const HobbyEventItem = ({ data, handleRemoveEvent }) => {
  return (
    <Box mt={4}>
      <Grid container direction="row" spacing={3} style={{ flexWrap: 'nowrap' }}>
        <Grid item>
          <TextField
            value={data.startDate.format("DD.MM.YYYY")}
            variant="outlined"
            label="Start date"
            InputProps={{
              readOnly: true,
            }}
          />
          <Box mt={3}>
            <TextField
              value={data.startTime.format("HH:mm")}
              variant="outlined"
              label="Start time"
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <TextField
            value={data.endDate.format("DD.MM.YYYY")}
            variant="outlined"
            label="End date"
            InputProps={{
              readOnly: true,
            }}
          />
          <Box mt={3}>
            <TextField
              value={data.endTime.format("HH:mm")}
              variant="outlined"
              label="End time"
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <IconButton size='small' onClick={() => handleRemoveEvent(data.id)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HobbyEventItem;
