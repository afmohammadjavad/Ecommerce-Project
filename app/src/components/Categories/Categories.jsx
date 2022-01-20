import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import categoriesActions from "../../redux/categories/categoriesActions";
import { Col, Row } from "antd";
import { ProjectName } from 'baseUrl';

function Categories({ Link }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!data.length) dispatch(categoriesActions.getCategories());
  }, []);

  //=========================================================

  if (loading || !data.length) return <LoadingOutlined />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div>
        <Row>
          {data.map((item, index) => (
            <Col key={index} flex="auto">
              <span>
                <Link to={`/${ProjectName}/category/${item}`}>{item}</Link>
              </span>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default Categories;
