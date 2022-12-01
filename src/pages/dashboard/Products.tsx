import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackdropLoader from "../../components/loader";
import ProductCard from "../../components/ProductCard";
import { getProductsListStart } from "../../redux/getProductsList";

export default function Products() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProductsListStart({}));
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <BackdropLoader open={loading} />
      <div className="row" style={{ marginTop: "25px", padding: "15px" }}>
        <div>
          <h3>Products</h3>
        </div>
        {products?.map((product: any, i: number) => (
          <div key={i} className="col-sm-4" style={{ padding: "30px" }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
