import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./detailsPage.scss";
import DetailsPageSwiper from "../../features/swipers/detailsPageSwiper/DetailsPageSwiper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ProductList from "../../features/products/productList/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  getOtherProductsByProductId,
  getProductById,
  getProductPhotosById,
  postProductToOrder,
} from "../../api/product/product";
import { UserContext } from "../../contexts/category/user.context";
import ModalOverLay from "../../layouts/modlaOverLay/ModalOverLay";
import ModalProduct from "../../features/products/modalProduct/ModalProduct";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setproduct] = useState<any>();
  const [photos, setphotos] = useState<any>();
  const { userToken } = useContext(UserContext);
  const [products, setproducts] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!location.state || !location.state.product_id) {
      navigate("/");
      return;
    }
    async function fetchPorductById() {
      const data = await getProductById(location.state.product_id);
      const dataPhotos = await getProductPhotosById(location.state.product_id);
      setphotos(dataPhotos.product_photo);
      setproduct(data.product);
    }
    fetchPorductById();
  }, []);
  useEffect(() => {
    async function fetchOtherPorductsbyProductuId() {
      try {
        const data = await getOtherProductsByProductId(
          location.state.product_id,
          userToken
        );
        setproducts(data.other_product);
      } catch (error: any) {
        alert(error.message);
      }
    }
    if (userToken) fetchOtherPorductsbyProductuId();
  }, [userToken]);
  async function addProductToCart(product: any, count: number) {
    try {
      const data = await postProductToOrder(
        product.product_id,
        count,
        product.product_price_dollar,
        product.product_coin,
        userToken
      );
      handleClose();
    } catch (error: any) {
      alert(error.message);
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    product && (
      <div className="detailsPage-container">
        <ModalOverLay open={open} handleClose={handleClose}>
          {product && (
            <ModalProduct
              product={product}
              handleClose={handleClose}
              onAccept={addProductToCart}
            />
          )}
        </ModalOverLay>
        <div className="container-title">
          <div className="title">
            <ArrowLeftRoundedIcon className="icon" />
            <h3> {product.product_name}</h3>
          </div>
          <div className="price">
            <span>{product.product_price_dollar} $</span>
          </div>
        </div>
        <DetailsPageSwiper photos={photos} />
        <div className="btn-container">
          <div className="location">
            <span>{product.city_name}</span>
            <LocationOnRoundedIcon className="icon" />
          </div>
          <button onClick={handleOpen}>
            <span>إضافة إلى السلة</span>
            <AddShoppingCartIcon className="icon" />
          </button>
        </div>
        <div className="description">
          <div className="title">
            <ArrowDropDownRoundedIcon className="icon" />
            <h3>:التفاصيل</h3>
          </div>
          <p>{product.product_details}</p>
        </div>
        <div className="more">
          <div className="title">
            <ArrowDropDownRoundedIcon className="icon" />
            <h3>:أجهزة أخرى</h3>
          </div>
          <ProductList products={products} showAllProduts={false} />
        </div>
      </div>
    )
  );
};

export default DetailsPage;
