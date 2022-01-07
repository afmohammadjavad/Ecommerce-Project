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

  return (
    <div className="header">
      <Link to="/" style={{ color: "#fff", fontWeight: "bold" }}>
        Home
      </Link>
      <Categories />
      <Link to="/dashboard" style={{ color: "#fff", fontWeight: "bold" }}>
        Dashboard
      </Link>
      <Popover
        placement="bottomLeft"
        title="selected products"
        content={content}
        trigger="click"
      >
        <Badge count={allCount} style={{ cursor: "pointer" }}>
          <ShoppingCartOutlined
            style={{ fontSize: 24, cursor: "pointer", color: "#fff" }}
          />
        </Badge>
      </Popover>
    </div>
  );
}

export default Header;
