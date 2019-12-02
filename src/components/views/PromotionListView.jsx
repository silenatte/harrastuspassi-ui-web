import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List } from '@material-ui/core';
import { fetchPromotions } from '../../actions/promotionActions';
import PromotionListItem from '../blocks/PromotionListItem';

const PromotionListView = () => {
  const promotions = useSelector(state => state.promotions.promotions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromotions());
  }, []);

  const PromotionList = () => {
    return promotions.map(promotion => {
      return (
        <PromotionListItem
          key={promotion.id}
          promotion={promotion}
          deleteHandler={() => console.log('delete')}
          showControls={true}
        />
      );
    });
  };
  return (
    <Container maxWidth="sm">
      <List>
        <PromotionList />
      </List>
    </Container>
  );
};

export default PromotionListView;
