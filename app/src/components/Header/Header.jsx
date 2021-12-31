import { Link } from "react-router-dom";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Popover } from "antd";
import { useSelector } from "react-redux";

function Header() {
  const { selectedProducts, selectedProductsAmount } = useSelector((state) => state.ProductBasket);
  const content = (
    <div>
      {selectedProducts.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 4,
            marginBottom: 8,
            borderBottom: "1px solid #ccc",
          }}
        >
          <span>
            <img src={item.image} with={40} height={60} alt="" />
          </span>
          <span>{item.title} x {selectedProductsAmount[item.id]}</span>
        </div>
      ))}
      <Link to="cart">
        <Button type="primary">Buy</Button>
      </Link>
    </div>
  );

  let allCount=0;
  for (let key in selectedProductsAmount) {
    allCount += selectedProductsAmount[key]
  }

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Popover title="selected products" content={content} trigger="click">
        <Badge count={allCount}>
          <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
        </Badge>
      </Popover>
    </div>
  );
}

export default Header;
