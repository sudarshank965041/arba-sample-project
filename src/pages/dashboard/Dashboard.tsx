import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "../../components/CustomCarousel";
import BackdropLoader from "../../components/loader";
import ProductCard from "../../components/ProductCard";
import TermAndConditions from "../../components/TermAndConditions";
import { getProductsListStart } from "../../redux/getProductsList";

export default function Dashboard() {
  const [openTerms, setOpenTerms] = React.useState(false);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state: any) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    const terms = localStorage.getItem("terms");
    if (terms && terms === "accepted") {
      setOpenTerms(false);
    } else {
      setOpenTerms(true);
    }
    dispatch(getProductsListStart({ limit: 6 }));
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem("terms", "accepted");
    setOpenTerms(false)
  };
  const handleCancelTerms = () => {
    localStorage.setItem("terms", "rejected");
    setOpenTerms(false)
  };

  return (
    <div style={{ marginTop: "60px" }}>
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
        <div style={{ textAlign: "right" }}>
          <Button size="large" onClick={() => navigate("/products")}>
            {"All Products >>"}
          </Button>
        </div>
      </div>
      <TermAndConditions
        open={openTerms}
        handleAcceptTerms={handleAcceptTerms}
        handleCancelTerms={handleCancelTerms}
      />
    </div>
  );
}
