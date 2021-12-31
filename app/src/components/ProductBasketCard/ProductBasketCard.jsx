import './ProductBasketCard.scss'
import { Card } from "antd";
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import actionTypes from '../../redux/actionTypes';

const { Meta } = Card;

function ProductBasketCard({ item }) {

  const dispatch = useDispatch()

  return (
    <div className="root">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.image} with='100' height='200' />}
        actions={[
          <Button type="primary" onClick={() => dispatch({type: actionTypes.REMOVE_FROM_BASKET, payload: item})}>Remove from Cart</Button>,
        ]}
      >
        <Meta title={item.title} description={item.price} />
      </Card>
    </div>
  );
}

export default ProductBasketCard;
