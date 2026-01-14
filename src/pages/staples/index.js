import { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';
import Notification from "../../components/Notification";

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const products = [
  {
    id: 1,
    name: "Sữa Tươi Tiệt Trùng - Có Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-06-30",
    rating: 4.5,
    likes: 125,
    stock: 3
  },
  {
    id: 2,
    name: "Sữa Tươi Tiệt Trùng - Ít Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-06-30",
    rating: 4.5,
    likes: 125,
    stock: 0
  },
  {
    id: 3,
    name: "Sữa Tươi Tiệt Trùng - Không Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-07-15",
    rating: 4.5,
    likes: 125,
    stock: 2
  },
  {
    id: 4,
    name: "Sữa Tươi Tiệt Trùng - Vị Dâu",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-08-01",
    rating: 4.5,
    likes: 125,
    stock: 12
  },
  {
    id: 5,
    name: "Sữa Tươi Tiệt Trùng - Vị Socola",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-08-01",
    rating: 4.5,
    likes: 125,
    stock: 23
  },
  {
    id: 6,
    name: "Mì - Tôm Chua Cay",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 5,
    price: 0,
    category: "Lương thực",
    unit: "1 gói",
    weight: "1 kg",
    brand: "Hảo Hảo",
    origin: "Việt Nam",
    expiryDate: "2025-12-31",
    rating: 4.5,
    likes: 125,
    stock: 8
  },
  {
    id: 7,
    name: "Sữa Đậu Nành - Có Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 5,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.5,
    likes: 125,
    stock: 0
  },
  {
    id: 8,
    name: "Sữa Đậu Nành - Ít Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.5,
    likes: 125,
    stock: 4
  },
  {
    id: 9,
    name: "Sữa Đậu Nành - Không Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.5,
    likes: 125,
    stock: 6
  },
  {
    id: 10,
    name: "Gạo Lứt - Huyết Rồng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-01-15",
    rating: 4.6,
    likes: 58,
    stock: 0
  },
  {
    id: 11,
    name: "Gạo Lứt - Tím Than",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-01-15",
    rating: 4.1,
    likes: 138,
    stock: 53
  },
  {
    id: 12,
    name: "Gạo - ST25",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-02-01",
    rating: 4.3,
    likes: 112,
    stock: 0
  },
  {
    id: 13,
    name: "Gạo - ST21",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 5,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-02-01",
    rating: 4.9,
    likes: 125,
    stock: 47
  },
  {
    id: 14,
    name: "Thịt Hộp - Hàn Quốc",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Lương thực",
    unit: "1 hộp",
    weight: "1 kg",
    brand: "CJ",
    origin: "Hàn Quốc",
    expiryDate: "2026-12-31",
    rating: 4.5,
    likes: 35,
    stock: 32
  },
  {
    id: 15,
    name: "Cá Hộp - Sốt Cà",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 hộp",
    weight: "1 kg",
    brand: "Hạ Long",
    origin: "Việt Nam",
    expiryDate: "2026-11-30",
    rating: 4.5,
    likes: 25,
    stock: 0
  },
  {
    id: 16,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.5,
    likes: 15,
    stock: 32
  }
];

const StaplesPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [sortType, setSortType] = useState("stock");
  // stock | rating | likes

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortType) {
      case "rating":
        return b.rating - a.rating;
      case "likes":
        return b.likes - a.likes;
      case "stock":
      default:
        return b.stock - a.stock;
    }
  });

  return (
    <>
      <Header
        onOpenSearch={() => {
          setOpenNotification(false)
          setOpenSearch(true)
        }}
        onOpenNotify={() => {
          setOpenSearch(false)
          setOpenNotification(true)
        }}
      />

      {openSearch && (
        <Search onClose={() => setOpenSearch(false)} />
      )}

      {openNotification && (
        <Notification onClose={() => setOpenNotification(false)} />
      )}

      <div className="px-[160px] pt-[100px] pb-[50px] bg-soft">
        <div className="w-full h-[60px] border-b border-gray-300 flex items-center">
          <div>
            <span className="text-black font-bold mr-1">{products.length}</span>
            <span className="text-gray-500">sản phẩm</span>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => setSortType("stock")}
              className={`pr-3 border-r items-center gap-1 border-gray-300 ${sortType === "stock" ? "text-black" : "text-gray-500 hover:text-black"} `}
            >
              <LocalMallOutlinedIcon fontSize="small" /> Phổ Biến
            </button>
            <button
              onClick={() => setSortType("rating")}
              className={`px-3 border-l border-r items-center gap-1 border-gray-300 ${sortType === "rating" ? "text-black" : "text-gray-500 hover:text-black"} `}
            >
              <StarBorderOutlinedIcon fontSize="small" /> Đánh Giá
            </button>
            <button
              onClick={() => setSortType("likes")}
              className={`pl-3 border-l items-center gap-1 border-gray-300 ${sortType === "likes" ? "text-black" : "text-gray-500 hover:text-black"} `}
            >
              <FavoriteBorderOutlinedIcon fontSize="small" /> Yêu Thích
            </button>
          </div>
        </div>
        <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 mt-[25px]">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaplesPage;