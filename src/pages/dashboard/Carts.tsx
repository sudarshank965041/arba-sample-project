import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

export default function Carts() {
  const { products } = useSelector((state: any) => state.products);
  const { carts } = useSelector((state: any) => state.cartItems);

  const [cartItems, setCartItems] = React.useState([]);

  useEffect(() => {
    const cartProductIds: any = Object.keys(carts) || [];
    if (cartProductIds.length) {
      const finteredItem = products.filter((item: any) =>
        cartProductIds.includes(`${item.id}`)
      );
      setCartItems(finteredItem);
    }
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div>
          <h3>My Carts</h3>
        </div>
        {cartItems?.map((product: any, i: number) => (
          <div key={i} className="col-sm-4" style={{ padding: "30px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "right" }}>
        <Button size="large" variant="contained" style={{ margin: "20px" }}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
