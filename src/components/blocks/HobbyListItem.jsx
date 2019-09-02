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
  const { deleteHandler, imageUrl, name, secondaryText, showControls } = props;
  const classes = useStyles();
  return (
    <div>
      <ListItem disableGutters={true}>
        <ListItemIcon>
          <img className={classes.hobbyListImage} alt={name} src={imageUrl} />
        </ListItemIcon>
        <ListItemText primary={name} secondary={secondaryText} />
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
