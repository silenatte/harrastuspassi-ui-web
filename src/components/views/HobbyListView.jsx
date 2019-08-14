import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ActionCreators from '../../actions';

const useStyles = makeStyles({
  hobbyListImage: {
    maxWidth: '50px',
    maxHeight: '50px'
  }
});

const HobbyListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const hobbies = useSelector(state => state.hobbies);
  console.log(hobbies);

  useEffect(() => {
    // initial data fetch
    console.log('get hobbies');
    dispatch(ActionCreators.fetchHobbies());
  }, []);

  return (
    <Container maxWidth="sm">
      <h1>Hobbies</h1>
      <List>
        <ListItem>
          <ListItemIcon>
            <img
              className={classes.hobbyListImage}
              alt="placeholder"
              src="http://placekitten.com/200/200"
            />
          </ListItemIcon>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Container>
  );
};

export default HobbyListView;
