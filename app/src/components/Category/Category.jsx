import { Col, Row, Skeleton } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import categoryActions from "../../redux/category/categoryActions";
import ProductCard from "../../redux/products/ProductCard/ProductCard";

function Category() {
  const { categoryName } = useParams()
  const dispatch = useDispatch();
  const {loading, data, error} = useSelector(state => state.category)
  
  useEffect(() => {
    dispatch(categoryActions.getCategory(categoryName))
  },[categoryName])

  if (loading || !data.length) return <Skeleton />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div style={{padding: '20px 80px'}}>
        <Row justify="center" gutter={[160, 16]}>
          {data.map((item) => (
            <Col xs={24} md={12} lg={6} key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Category;