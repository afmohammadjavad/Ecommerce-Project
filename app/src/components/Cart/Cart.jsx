import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Skeleton } from "antd";
import ProductBasketCard from "../ProductBasketCard/ProductBasketCard";

function Cart() {
  const { selectedProducts } = useSelector(
    (state) => state.ProductBasket
  );

  if (!selectedProducts.length) return <Skeleton />;

  return (
    <div>
      <div>Cart Page.</div>
      <Link to="/">Go Home</Link>
      <div style={{ padding: "20px 80px" }}>
        <Row justify="center" gutter={[160, 16]}>
          {selectedProducts.map((item) => (
            <Col
              xs={24}
              md={12}
              lg={6}
              key={item.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProductBasketCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Cart;
