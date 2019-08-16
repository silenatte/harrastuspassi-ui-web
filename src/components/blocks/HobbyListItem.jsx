import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@material-ui/core';

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
  const { imageUrl, name, secondaryText } = props;
  const classes = useStyles();
  return (
    <div>
      <ListItem disableGutters={true}>
        <ListItemIcon>
          <img className={classes.hobbyListImage} alt={name} src={imageUrl} />
        </ListItemIcon>
        <ListItemText primary={name} secondary={secondaryText} />
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
