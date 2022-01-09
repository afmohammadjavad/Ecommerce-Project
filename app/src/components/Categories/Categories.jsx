import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
// import {SassColor, SassFunction} from 'sass'
import categoriesActions from "../../redux/categories/categoriesActions";
// import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import styled from "styled-components";

function Categories({Link}) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!data.length) dispatch(categoriesActions.getCategories());
  }, []);

  const Temp = styled(Link)`
    &:hover {
      font-size: 20px
    }
  `;

  const styles = {
    // fontSize: 16,
    fontWeight: "bold",
    textShadow: "0px 6px 5px black",
  };

  //=========================================================

  if (loading || !data.length) return <LoadingOutlined />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div >
        <Row>
        {data.map((item, index) => (
          <Col key={index} flex='auto' >
              <span>
                <Temp to={`category/${item}`} style={styles}>
                  {item}
                </Temp>
              </span>
          </Col>
        ))}
        </Row>
      </div>
    );
  }
}
export default Categories;
