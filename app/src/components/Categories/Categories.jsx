import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
// import {SassColor, SassFunction} from 'sass'
import categoriesActions from "../../redux/categories/categoriesActions";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

function Categories() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!data.length) dispatch(categoriesActions.getCategories());
  }, []);

  //* Event handlers=====================================================
  const colors = {
    primary: "white",
    hover: "#2cdcff",
    press: "#03aacc",
  };
  const onMouseHover = (e) => {
    if (e.type === "mouseenter") e.target.style.color = colors.hover;
    else if (e.type === "mouseleave") e.target.style.color = colors.primary;
  };

  const onMousePress = (e) => {
    if (e.type === "mousedown") e.target.style.color = colors.press;
    else e.target.style.color = colors.hover;
  };

  const MouseEvents = {
    onMouseEnter: onMouseHover,
    onMouseLeave: onMouseHover,
    onMouseUp: onMousePress,
    onMouseDown: onMousePress,
  };
  //! Event handlers=====================================================

  const styles = {
    color: colors.primary,
    fontWeight: "bold",
    // marginLeft: 20,
    textShadow: "0px 6px 5px black",
  };

  //=========================================================

  if (loading || !data.length) return <LoadingOutlined />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div>
        <Row justify="center" gutter={[10, 10]}>
        {data.map((item, index) => (
          <Col xs={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center'}}>
            <span key={index}>
              <Link to={`category/${item}`} style={styles} {...MouseEvents}>
                {item}
              </Link>
            </span>
          </Col>
        ))}
        </Row>
      </div>
    );
  }
}
export default Categories;
