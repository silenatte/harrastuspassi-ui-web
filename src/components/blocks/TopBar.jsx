import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ActionCreators from '../../actions';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    marginRight: '70px'
  },
  appBar: {
    marginBottom: '50px'
  },
  userName: {
    marginLeft: 'auto'
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
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <Typography className={classes.title} variant="h5">
            Harrastuspassi
          </Typography>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginLeft: '30px'
          }}
        >
          <Typography>
            Harrastukset
          </Typography>
        </Link>
        <Link
          to="/promotions"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginLeft: '30px'
          }}
        >
          <Typography>
            Etuudet
          </Typography>
        </Link>
        {authState.user ? (
          <Typography variant="body1" className={classes.userName}>
            {authState.user.firstName} {authState.user.lastName}
          </Typography>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
