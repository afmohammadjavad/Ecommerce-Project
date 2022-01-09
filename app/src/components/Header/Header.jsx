import { Link } from "react-router-dom";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Row, Col, Popover } from "antd";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import styled from "styled-components";

function Header() {
  const { selectedProducts, selectedProductsAmount } = useSelector(
    (state) => state.ProductBasket
  );

  //*=========================
  const colors = {
    primary: "white",
    hover: "#2cdcff",
    press: "#03aacc",
  };
  //*=========================
  const baseStyle = {
    transition: '500ms',
    color: colors.primary,
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold',
    '&:hover': {
      transition: '500ms',
      color: colors.hover,
      fontSize: 20,
    },
    '&:active': {
      color: colors.press,
    }
  }
  //? Style Components with Styled-Components===================
    const MyShoppingCartOutlined = styled(ShoppingCartOutlined)({...baseStyle, fontSize: 24, '&:hover': { ...baseStyle['&:hover'], fontSize: 30}})
  //? ==========================================================
 
  //? Style Components with Styled-Components===================
  const MyLink = styled(Link)(baseStyle)
  //?============================================================

  const content = (
    <div>
      {selectedProducts.map((item) => (
        <div
          key={item.id}
          style={{
            textAlign: "left",
            paddingBottom: 4,
            marginBottom: 8,
            borderBottom: "1px solid #ccc",
          }}
        >
          <span>
            <img src={item.image} width={60} height={60} alt="" />
          </span>
          <span style={{ marginLeft: 20 }}>
            {item.title} <b>x {selectedProductsAmount[item.id]}</b>
          </span>
        </div>
      ))}
      <Link to="cart">
        <Button type="primary">Buy</Button>
      </Link>
    </div>
  );

  let allCount = 0;
  for (let key in selectedProductsAmount) {
    allCount += selectedProductsAmount[key];
  }

  //* Event handlers=====================================================
  // const colors = {
  //   primary: "white",
  //   hover: "#2cdcff",
  //   press: "#03aacc",
  // };

  const styles = {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    // marginLeft: 20,
    textShadow: "0px 6px 5px black",
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

  return (
    <div className="header">
      <Row gutter={[{xs: 5, md: 10, lg: 20}, 10]}>
        <Col xs={{span:8, order:1}} lg={{span:3, order:1}}>
          <span>
            <MyLink to="/" className="color" style={styles} {...MouseEvents}>
              Home
            </MyLink>
          </span>
        </Col>
        <Col xs={{span:24, order:4}} lg={{span:13, order:2}}>
          <Categories Link={MyLink} />
        </Col>
        <Col xs={{span:8, order:2}} lg={{span:3, order:2}}>
          <span>
            <MyLink to="/dashboard" style={styles} {...MouseEvents}>
              Dashboard
            </MyLink>
          </span>
        </Col>
        <Col xs={{span:8, order:3}} lg={{span:5, order:3}}>
          <Popover
            placement="bottomLeft"
            title="selected products"
            content={content}
            trigger="click"
          >
            <Badge count={allCount} style={{ cursor: "pointer" }}>
              <span>
                <MyShoppingCartOutlined
                />
              </span>
            </Badge>
          </Popover>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
