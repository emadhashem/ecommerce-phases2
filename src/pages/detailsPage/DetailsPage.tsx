import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./detailsPage.scss";
import DetailsPageSwiper from "../../features/swipers/detailsPageSwiper/DetailsPageSwiper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ProductList from "../../features/products/productList/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/product/product";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setproduct] = useState<any>();
  useEffect(() => {
    if (!location.state || !location.state.product_id) {
      navigate("/");
      return;
    }
    async function fetchPorductById() {
      const data = await getProductById(location.state.product_id)
    }
    fetchPorductById();
  }, []);

  return (
    <div className="detailsPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>جهاز لوحي</h3>
        </div>
        <div className="price">
          <span>99,99 $</span>
        </div>
      </div>
      <DetailsPageSwiper />
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
          حول هذا العنصر شاشة Liquid Retina XDR الرائعة مقاس 11 بوصة مع شريحة
          ProMotion و True Tone و P3 عريضة الألوان M2 مع وحدة معالجة مركزية
          ثمانية النواة و 10 أنوية GPU وكاميرا عريضة 12 ميجابكسل وكاميرا خلفية
          فائقة الاتساع 10 ميجابكسل وماسح ضوئي LiDAR لـ AR 12MP غامرة كاميرا
          أمامية فائقة الاتساع مع Center Stage ابق على اتصال مع موصل Wi-Fi 6E
          USB-C فائق السرعة مع دعم Thunderbolt
        </p>
      </div>
      <div className="more">
        <div className="title">
          <ArrowDropDownRoundedIcon className="icon" />
          <h3>:أجهزة أخرى</h3>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default DetailsPage;
