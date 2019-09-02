import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import ActionCreators from '../../actions';

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  },
  appBar: {
    marginBottom: '50px'
  }
});

const TopBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(ActionCreators.fetchToken());
  }, [dispatch]);

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Harrastuspassi
        </Typography>
        {authState.user ? (
          <Typography variant="body1">
            {authState.user.firstName} {authState.user.lastName}
          </Typography>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
