import React from "react";
import Button from "../Button";
import "../../App.css";
import "./Products.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Products() {
  const gotoCardButton = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <div className="productsContainer">
      <div className="products">
        <div className="productsHeader">
          <h1>Leonhoccode Shop</h1>
        </div>

        <div className="productsContent">
          <p className="font-24 productsSlogan">
            Tối giản - phù hợp - thoải mái
          </p>
          <p className="font-16"> - - Code không lo tối cổ - - </p>
        </div>

        <div className="productsBtn">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn-large"
          >
            <Link
              className="btnShopLink"
              to={{ pathname: "https://shopee.vn/shop/483742201/" }}
              target="_blank"
            >
              GO TO SHOP <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </Button>

          <Button
            className="btns"
            buttonStyle="btn--outline"
            onClick={gotoCardButton}
            buttonSize="btn-large"
          >
            TÌM HIỂU CHÚT NÈ <i className="fa-solid fa-face-grin-squint"></i>
          </Button>
        </div>
      </div>

      <div className="lineBreak"></div>

      <div className="contentContainer">
        <div className="contentItem">
          <h3 className="itemHeader">
            thời điểm nào là thích hợp để cải thiện phong cách lên đồ của bản
            thân?
          </h3>

          <p className="mt-24 itemBody">
            Bản thân mình từng nghĩ rất nhiều về việc này...
          </p>
          <p className="mt-24 itemBody">
            Lúc trước, trong tủ chỉ có vỏn vẹn vài bộ quần áo, ngoảng qua ngoảng
            lại thì mình chỉ có mỗi một phong cách lên đồ. Lúc đó mình nghĩ
            rằng, “mua đồ nhiều thì chỉ phí tiền thôi và thời điểm sinh viên này
            chưa đáng”
          </p>
        </div>

        <div className="lineBreak"></div>

        <div className="contentItem">
          <h3 className="itemHeader">
            Nhưng... Liệu suy nghĩ của mình đúng không?
          </h3>

          <p className="mt-24 itemBody">
            Mình đã có một thời gian trăn trở...
          </p>
          <p className="mt-24 itemBody">
            Và rồi mình nhận ra được rằng: đôi lúc chăm chuốt một xíu, biết
            cách ăn mặc một xíu nó không phải là “điệu” hay tiêu tiền tốn kém,
            mà đó là thể hiện được mình biết cách chăm sóc và yêu thương bản
            thân mình.
          </p>
        </div>

        <div className="lineBreak"></div>

        <div className="contentItem">
          <h3 className="itemHeader">có một câu nói rất hay</h3>
          <p className="mt-24 itemBody quote">
            "Khi mình biết cách chăm sóc và yêu thương bản thân mình rồi thì
            mình mới có đủ sự tự tin và khả năng để chăm sóc và yêu thương người
            khác."
          </p>
        </div>

        <div className="lineBreak"></div>

        <div className="contentItem">
          <h3 className="itemHeader">​Và thế là​</h3>

          <p className="mt-24 itemBody">
            Mình bắt đầu tìm hiểu về thời trang. Tìm hiểu về phong cách phối đồ
            và cũng chi tiền vô mua đồ nữa.
          </p>
          <p className="mt-24 itemBody">
            Cộng với việc mình là lập trình viên và muốn mở rộng thêm cho trang
            leonhoccode. Một thương hiệu cá nhân mà mình đang xây dựng​.
          </p>
          <p className="mt-24 itemBody">
            Và rồi, leonhoccode shop ra đời với mục tiêu lan tỏa sự tích cực
            trong việc chăm sóc và yêu thương bản thân.
          </p>
        </div>

        <div className="lineBreak"></div>

        <div className="contentItem mtb-32">
          <p className="mt-24 itemBody quote">
            Lan tỏa sự tích cực trong lối ăn mặc tối giản mang lại sự thoải mái
            - mỗi chiếc áo là một câu chuyện
          </p>

          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn-large"
          >
            <Link
              className="btnShopLink contentBtn"
              to={{ pathname: "https://shopee.vn/shop/483742201/" }}
              target="_blank"
            >
              GO TO SHOP <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </Button>

        </div>


      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
