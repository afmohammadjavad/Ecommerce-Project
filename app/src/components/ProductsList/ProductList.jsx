import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Skeleton } from "antd";
import productsActions from "../../redux/products/productsActions";
import ProductCard from "../../redux/products/ProductCard/ProductCard";

function ProductList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsActions.getProducts());
  }, []);

  if (loading || !data.length) return <Skeleton />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <Row justify="center" gutter={[32, 16]}>
        {data.map((item) => (
          <Col xs={24} md={12} lg={6} key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    );
  }
}
export default ProductList;
