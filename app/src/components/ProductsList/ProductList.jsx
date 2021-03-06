import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Skeleton } from "antd";
import productsActions from "../../redux/products/productsActions";
import ProductCard from "../../redux/products/ProductCard/ProductCard";
import Swiper from "../Swiper/Swiper";

function ProductList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!data.length)
      dispatch(productsActions.getProducts());
  }, []);

  if (loading || !data.length) return <Skeleton />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div style={{padding: '35px 80px'}}>
        <Swiper data={data} />
        <Row justify="center" gutter={[160, 16]}>
          {data.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default ProductList;
