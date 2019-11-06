import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Grid, Button, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ActionCreators from '../../actions';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OrganizerModalButton = () => {
  const [organizerData, setOrganizerData] = React.useState({
    name: ''
  });

  const dispatch = useDispatch();
  const organizerSubmitHandler = event => {
    const organizerFormData = {
      name: organizerData.name
    }
    dispatch(ActionCreators.createOrganizer(organizerFormData));
    setOpen(false);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton size='small' onClick={handleOpen}>
        <AddIcon />
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={{ top: '30%', left: '50%', transform: 'translate(-50%, -30%)' }} className={classes.paper}>
          <h2>Add new organizer</h2>
          <form>
            <FormControl fullWidth>
              <TextField
                required
                label="Name"
                margin="dense"
                variant="outlined"
                onChange={(event) => setOrganizerData({ name: event.target.value })}
              />
            </FormControl>

            <Box mt={5}>
              <Grid container justify="flex-end" >
                <Grid item>
                  <Button onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary" type="button" onClick={organizerSubmitHandler}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default OrganizerModalButton;
