import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, Grid, Button, Box } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const HobbyEventModalButton = ({ handleNewEvent }) => {
  const initialState = {
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  const [hobbyEventData, setHobbyEventData] = React.useState(initialState);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleSave = () => {
    handleNewEvent(hobbyEventData);
    setHobbyEventData(initialState);
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button variant="contained" component="span" color="primary" onClick={() => setOpen(true)}>New event</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ top: '30%', left: '50%', transform: 'translate(-50%, -30%)' }} className={classes.paper}>
          <h2>Add new event</h2>
          <form>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <FormControl>
                    <KeyboardDatePicker
                      disableToolbar
                      autoOk={true}
                      variant="inline"
                      format="DD.MM.YYYY"
                      margin="normal"
                      id="startDate"
                      label="Start date"
                      value={hobbyEventData.startDate}
                      onChange={(date) => setHobbyEventData({ ...hobbyEventData, startDate: date })}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <KeyboardDatePicker
                      disableToolbar
                      autoOk={true}
                      variant="inline"
                      format="DD.MM.YYYY"
                      margin="normal"
                      id="date-picker-inline"
                      label="End date"
                      value={hobbyEventData.endDate}
                      onChange={(date) => setHobbyEventData({ ...hobbyEventData, endDate: date })}
                    />
                  </FormControl>

                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <FormControl>
                    <KeyboardTimePicker
                      autoOk={true}
                      disableToolbar
                      ampm={false}
                      variant="inline"
                      margin="normal"
                      label="Start time"
                      value={hobbyEventData.startTime}
                      onChange={(time) => setHobbyEventData({ ...hobbyEventData, startTime: time })}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <KeyboardTimePicker
                      autoOk={true}
                      disableToolbar
                      ampm={false}
                      variant="inline"
                      margin="normal"
                      label="End time"
                      value={hobbyEventData.endTime}
                      onChange={(time) => setHobbyEventData({ ...hobbyEventData, endTime: time })}
                    />
                  </FormControl>

                </Grid>
              </Grid>

              <Box mt={5}>
                <Grid container justify="flex-end" >
                  <Grid item>
                    <Button onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="button" onClick={handleSave}>
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </MuiPickersUtilsProvider>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default HobbyEventModalButton;
