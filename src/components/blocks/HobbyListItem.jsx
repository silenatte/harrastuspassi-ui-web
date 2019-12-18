import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  hobbyListImage: {
    maxWidth: '50px',
    maxHeight: '50px'
  },
  insetDivider: {
    marginLeft: '56px'
  }
});

const HobbyListItem = props => {
  const {
    deleteHandler,
    imageUrl,
    name,
    secondaryText,
    showControls,
    id
  } = props;
  const classes = useStyles();
  return (
    <div>
      <ListItem disableGutters={true}>
        <Link key={id} to={`/hobbies/edit/${id}`}>
          <ListItemIcon>
            <img className={classes.hobbyListImage} alt={name} src={imageUrl} />
          </ListItemIcon>
          <ListItemText primary={name} secondary={secondaryText} />
        </Link>
        {showControls ? (
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={deleteHandler}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        ) : (
          ''
        )}
      </ListItem>
      <Divider
        className={classes.insetDivider}
        variant="inset"
        component="li"
      />
    </div>
  );
};

export default HobbyListItem;
