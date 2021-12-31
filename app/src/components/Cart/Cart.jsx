import { useSelector } from "react-redux";
import { Button, Col, Row, Skeleton } from "antd";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";

function Cart() {

  const dispatch = useDispatch()

  const { selectedProducts, selectedProductsAmount } = useSelector((state) => state.ProductBasket);

  if (!selectedProducts.length) return <Skeleton />;

  let totalPrice = 0;
  for (let item of selectedProducts) {
    totalPrice += item.price * selectedProductsAmount[item.id];
  }

  const increase = (item) => {
    dispatch({type: actionTypes.ADD_TO_BASKET, payload: item})
  }
  
  const decrease = (item) => {
    dispatch({type: actionTypes.ADD_TO_BASKET, payload: item})
  }

  const listToShow = () => {
    return selectedProducts.map((item) => (
      <Row key={item.id} style={{marginBottom: 20, borderBottom: '1px solid #ccc', padding: 10}}>
        <Col xs={24} md={8}>
          <img src={item.image} with={250} height={250} />
        </Col>
        <Col
          xs={24}
          md={16}
          style={{textAlign: 'left', paddingLeft: 50}}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div>
            <span> Amount: {selectedProductsAmount[item.id]}</span>
            <span style={{marginLeft: 10}}><Button onClick={() => increase(item)} type="primary" size="small" shape="circle">+</Button></span>
            <span style={{marginLeft: 10}}><Button onClick={() => decrease(item)} type="primary" size="small" shape="circle">-</Button></span>
          </div>
          <p> Price: <b>$</b>{item.price}</p>
        </Col>
      </Row>
    ));
  }

  return (
    <>
      {listToShow()}
      <h2 style={{paddingBottom: 20}}>Total Price: ${totalPrice.toFixed(2)}</h2>
    </>
  )
}
export default Cart;
