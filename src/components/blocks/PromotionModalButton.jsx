import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, Grid, Button, Box } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useDispatch, useSelector } from 'react-redux';
import { setPromotionFormData } from '../../actions/formActions';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const PromotionModalButton = () => {
  const promotionEventData = useSelector(state => state.formData.promotion);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSave = () => {
    setOpen(false);
  };

  const handleChange = (name, value) => {
    dispatch(setPromotionFormData(name, value));
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        component="span"
        color="primary"
        onClick={() => setOpen(true)}
      >
        Muuta aikaa
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -30%)'
          }}
          className={classes.paper}
        >
          <h2>Muuta aika</h2>
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
                      id="start_date"
                      label="Start date"
                      value={promotionEventData.start_date}
                      name={'start_date'}
                      onChange={date => {
                        handleChange('start_date', date);
                      }}
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
                      value={promotionEventData.end_date}
                      onChange={date => {
                        handleChange('end_date', date);
                      }}
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
                      value={promotionEventData.start_time}
                      name={'start_time'}
                      onChange={date => {
                        handleChange('start_time', date);
                      }}
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
                      value={promotionEventData.end_time}
                      name={'end_time'}
                      onChange={date => {
                        handleChange('end_time', date);
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Box mt={5}>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={handleSave}
                    >
                      Sulje
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

export default PromotionModalButton;
