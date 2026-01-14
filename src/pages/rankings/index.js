import { useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import RankingCard from '../../components/RankingCard';
import Notification from "../../components/Notification";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const products = [
  {
    id: 1,
    name: "Sữa Tươi Tiệt Trùng - Có Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "3 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-06-30",
    rating: 4.8,
    likes: 129,
    stock: 32
  },
  {
    id: 2,
    name: "Sữa Tươi Tiệt Trùng - Ít Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-06-30",
    rating: 4.1,
    likes: 12,
    stock: 0
  },
  {
    id: 3,
    name: "Sữa Tươi Tiệt Trùng - Không Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-07-15",
    rating: 3.9,
    likes: 75,
    stock: 32
  },
  {
    id: 4,
    name: "Sữa Tươi Tiệt Trùng - Vị Dâu",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-08-01",
    rating: 4.7,
    likes: 15,
    stock: 32
  },
  {
    id: 5,
    name: "Sữa Tươi Tiệt Trùng - Vị Socola",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Vinamilk",
    origin: "Việt Nam",
    expiryDate: "2026-08-01",
    rating: 4.9,
    likes: 17,
    stock: 32
  },
  {
    id: 6,
    name: "Mì - Tôm Chua Cay",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Thực phẩm",
    unit: "1 gói",
    weight: "1 kg",
    brand: "Hảo Hảo",
    origin: "Việt Nam",
    expiryDate: "2025-12-31",
    rating: 4.6,
    likes: 35,
    stock: 32
  },
  {
    id: 7,
    name: "Sữa Đậu Nành - Có Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.3,
    likes: 12,
    stock: 0
  },
  {
    id: 8,
    name: "Sữa Đậu Nành - Ít Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.0,
    likes: 51,
    stock: 32
  },
  {
    id: 9,
    name: "Sữa Đậu Nành - Không Đường",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Thực phẩm",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Fami",
    origin: "Việt Nam",
    expiryDate: "2026-05-20",
    rating: 4.8,
    likes: 125,
    stock: 32
  },
  {
    id: 10,
    name: "Gạo Lứt - Huyết Rồng",
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
    likes: 125,
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
    rating: 4.4,
    likes: 125,
    stock: 32
  },
  {
    id: 12,
    name: "Gạo - ST25",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 5,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-02-01",
    rating: 4.0,
    likes: 125,
    stock: 0
  },
  {
    id: 13,
    name: "Gạo - ST21",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "ST",
    origin: "Sóc Trăng, Việt Nam",
    expiryDate: "2027-02-01",
    rating: 4.3,
    likes: 125,
    stock: 32
  },
  {
    id: 14,
    name: "Thịt Hộp - Hàn Quốc",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Thực phẩm",
    unit: "1 hộp",
    weight: "1 kg",
    brand: "CJ",
    origin: "Hàn Quốc",
    expiryDate: "2026-12-31",
    rating: 4.2,
    likes: 125,
    stock: 32
  },
  {
    id: 15,
    name: "Cá Hộp - Sốt Cà",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 1,
    price: 0,
    category: "Thực phẩm",
    unit: "1 hộp",
    weight: "1 kg",
    brand: "Hạ Long",
    origin: "Việt Nam",
    expiryDate: "2026-11-30",
    rating: 4.1,
    likes: 125,
    stock: 0
  },
  {
    id: 16,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.9,
    likes: 125,
    stock: 32
  },
  {
    id: 17,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 4,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.7,
    likes: 135,
    stock: 32
  }, {
    id: 18,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 2,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.6,
    likes: 125,
    stock: 32
  }, {
    id: 19,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 3,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.8,
    likes: 125,
    stock: 32
  }, {
    id: 20,
    name: "Đậu Đen Xanh Lòng",
    image: "https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png",
    level: 5,
    price: 0,
    category: "Lương thực",
    unit: "1 túi",
    weight: "1 kg",
    brand: "Nông sản Việt",
    origin: "Việt Nam",
    expiryDate: "2027-03-10",
    rating: 4.2,
    likes: 125,
    stock: 32
  }, {
    id: 21,
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
    likes: 125,
    stock: 32
  },
];

const RankingsPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [sortOrder, setSortOrder] = useState("desc"); // desc | asc

  const handleToggleSort = () => {
    setSortOrder(prev => (prev === "desc" ? "asc" : "desc"));
  };

  const sortedProducts = [...products].sort((a, b) => {
    let result = 0;

    // ưu tiên rating
    if (b.rating !== a.rating) {
      result = b.rating - a.rating;
    } else {
      result = b.likes - a.likes;
    }

    return sortOrder === "desc" ? result : -result;
  });

  const SortIcon = () =>
    sortOrder === "desc" ? (
      <ArrowDownwardIcon fontSize="small" />
    ) : (
      <ArrowUpwardIcon fontSize="small" />
    );

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

          <button
            className="ml-auto select-none"
            onClick={handleToggleSort}
          >
            <SortIcon />
            <span className="text-black ml-1">Xếp Hạng</span>
          </button>

        </div>
        <div className="w-full min-h-[650px] grid grid-cols-3 gap-3 mt-[25px]">
          {sortedProducts.map((product, index) => (
            <RankingCard
              key={product.id}
              product={product}
              index={index}
              total={sortedProducts.length}
              sortOrder={sortOrder}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RankingsPage;