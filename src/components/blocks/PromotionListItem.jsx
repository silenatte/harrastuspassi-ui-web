import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  promotionListImage: {
    maxWidth: '50px',
    maxHeight: '50px'
  },
  insetDivider: {
    marginLeft: '56px'
  }
});

const PromotionListItem = props => {
  const { deleteHandler, promotion, showControls, imageUrl } = props;
  const classes = useStyles();
  return (
    <div>
      <ListItem disableGutters={true}>
        <Link to={`/promotions/edit/${promotion.id}`}>
          <ListItemIcon>
            <img
              className={classes.promotionListImage}
              alt={promotion.name}
              src={imageUrl}
            />
          </ListItemIcon>
        </Link>
        <Link to={`/promotions/edit/${promotion.id}`}>
          <ListItemText primary={promotion.name} secondary={null} />
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

export default PromotionListItem;
