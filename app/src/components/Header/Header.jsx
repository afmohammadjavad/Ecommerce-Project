import { Link } from "react-router-dom";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Popover } from "antd";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";

function Header() {
  const { selectedProducts, selectedProductsAmount } = useSelector(
    (state) => state.ProductBasket
  );
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

  const colors = {
    primary: "white",
    hover: "#2cdcff",
    press: "#03aacc",
  };

  const styles = {
    color: colors.primary,
    fontWeight: "bold",
    // marginLeft: 20,
    textShadow: "0px 6px 5px black",
  };

  return (
    <div className="header">
      
      <Link to="/" style={styles}>
        Home
      </Link>
      <Categories />
      <Link to="/dashboard" style={styles}>
        Dashboard
      </Link>
      <Popover
        placement="bottomLeft"
        title="selected products"
        content={content}
        trigger="click"
      >
        <Badge count={allCount} style={{ ...styles, cursor: "pointer", marginLeft: 100 }}>
          <ShoppingCartOutlined
            style={{...styles, fontSize: 24, cursor: "pointer"}}
          />
        </Badge>
      </Popover>
    </div>
  );
}

export default Header;
