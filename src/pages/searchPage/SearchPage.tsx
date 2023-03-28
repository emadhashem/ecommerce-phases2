import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./searchPage.scss"

const SearchPage = () => {
  return (
    <div className="SearchPage-container">
        <div className="container-title">
          <div className="title">
            <ArrowLeftRoundedIcon className="icon" />
            <h3>
            عدد النتاج هو:<span>10</span>
            </h3>
          </div>
        </div>
        <div className="all-ProductList">
          {/* _______show product list HERE_______ */}
        </div>
      </div>
  )
}

export default SearchPage
