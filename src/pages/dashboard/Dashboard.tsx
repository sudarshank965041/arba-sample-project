import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCarousel from "../../components/CustomCarousel";
import BackdropLoader from "../../components/loader";
import ProductCard from "../../components/ProductCard";
import { getProductsListStart } from "../../redux/getProductsList";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(getProductsListStart({ limit: 6 }));
  }, []);
  return (
    <div>
      <BackdropLoader open={loading} />
      <div className="row">
        <CustomCarousel
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          centerMode={true}
        >
          <div style={{ padding: "10px" }}>
            <div
              style={{
                height: "400px",
                backgroundColor: "#438e74",
              }}
            ></div>
          </div>
          <div style={{ padding: "10px" }}>
            <div
              style={{
                height: "400px",
                backgroundColor: "#438e74",
              }}
            ></div>
          </div>
          <div style={{ padding: "10px" }}>
            <div
              style={{
                height: "400px",
                backgroundColor: "#438e74",
              }}
            ></div>
          </div>
        </CustomCarousel>
      </div>
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
