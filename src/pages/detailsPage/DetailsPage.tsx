import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./detailsPage.scss";
import DetailsPageSwiper from "../../features/swipers/detailsPageSwiper/DetailsPageSwiper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ProductList from "../../features/products/productList/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, getProductPhotosById } from "../../api/product/product";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setproduct] = useState<any>();
  const [photos, setphotos] = useState<any>();
  useEffect(() => {
    if (!location.state || !location.state.product_id) {
      navigate("/");
      return;
    }
    async function fetchPorductById() {
      const data = await getProductById(location.state.product_id)
      const dataPhotos = await getProductPhotosById(location.state.product_id)
      setphotos(dataPhotos.product_photo)
      setproduct(data.product)
    }
    fetchPorductById();
  }, []);

  return product && (
    <div className="detailsPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3> {product.product_name}</h3>
        </div>
        <div className="price">
          <span>{product.product_price_dollar} $</span>
        </div>
      </div>
      <DetailsPageSwiper photos = {photos} />
      <div className="btn-container">
        <div className="location">
          <span>قامشلي</span>
          <LocationOnRoundedIcon className="icon" />
        </div>
        <button>
          <span>إضافة إلى السلة</span>
          <AddShoppingCartIcon className="icon" />
        </button>
      </div>
      <div className="description">
        <div className="title">
          <ArrowDropDownRoundedIcon className="icon" />
          <h3>:التفاصيل</h3>
        </div>
        <p>
          {product.product_details}
        </p>
      </div>
      <div className="more">
        <div className="title">
          <ArrowDropDownRoundedIcon className="icon" />
          <h3>:أجهزة أخرى</h3>
        </div>
        <ProductList products={[]} showAllProduts = {false} />
      </div>
    </div>
  );
};

export default DetailsPage;
