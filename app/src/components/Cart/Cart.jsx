import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Skeleton } from "antd";
import ProductBasketCard from "../ProductBasketCard/ProductBasketCard";

function Cart() {
  const { selectedProducts, selectedProductsAmount } = useSelector((state) => state.ProductBasket);

  if (!selectedProducts.length) return <Skeleton />;

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
        <p> Amount: {selectedProductsAmount[item.id]}</p>
        <p> Price: <b>$</b>{item.price}</p>
      </Col>
    </Row>
  ));
}
export default Cart;
