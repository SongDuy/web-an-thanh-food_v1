import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from "../../components/Notification";

// Import 3 components vừa tách
import ProductMainInfo from "../../components/ProductMainInfo";
import ProductDescription from "../../components/ProductDescription";
import ProductReviews from "../../components/ProductReviews";

const ProductDetailPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <>
      <Header
        onOpenSearch={() => {
          setOpenNotification(false);
          setOpenSearch(true);
        }}
        onOpenNotify={() => {
          setOpenSearch(false);
          setOpenNotification(true);
        }}
      />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      {openNotification && (
        <Notification onClose={() => setOpenNotification(false)} />
      )}

      <div className="w-full h-full bg-soft px-[160px] border pt-[100px] pb-[50px]">
        {/* Khối 1: Thông tin sản phẩm chính */}
        <ProductMainInfo />

        {/* Khối 2: Chi tiết & Mô tả */}
        <ProductDescription />

        {/* Khối 3: Đánh giá */}
        <ProductReviews />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailPage;