import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./ShowAllProductsPage.scss";

const ShowAllProductsPage = () => {
  return (
    <div className="ShowAllProductsPage-container">
      <div className="container-title">
        <div className="title">
          <ArrowLeftRoundedIcon className="icon" />
          <h3>
            عدد العناصر <span>10</span>
          </h3>
        </div>
      </div>
      <div className="all-ProductList">
        {/* _______show product list HERE_______ */}
      </div>
    </div>
  );
};

export default ShowAllProductsPage;
