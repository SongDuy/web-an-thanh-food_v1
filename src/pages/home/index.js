import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';
import RankingCard from '../../components/RankingCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

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

const sortedProducts = [...products].sort((a, b) => {
  // So sánh rating trước
  if (b.rating !== a.rating) {
    return b.rating - a.rating;
  }
  // Nếu rating bằng nhau thì so sánh likes
  return b.likes - a.likes;
});
const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <div className="w-full h-full">
          <div className="flex items-center py-[35px]">
            <h1 className="text-[22px] font-semibold uppercase "> Danh mục lương thực </h1>
            <Link
              to="/luong-thuc"
              className="ml-auto text-gray-500 hover:text-black flex items-center justify-center"
            >
              View all
              <NavigateNextIcon />
            </Link>
          </div>
          <div className="w-full min-h-[650px] grid grid-cols-5 gap-3">
            {products.sort((a, b) => b.stock - a.stock).slice(0, 10).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex items-center py-[35px]">
            <h1 className="text-[22px] font-semibold uppercase">Danh mục thực phẩm </h1>
            <Link
              to="/thuc-pham"
              className="ml-auto text-gray-500 hover:text-black flex items-center justify-center"
            >
              View all
              <NavigateNextIcon />
            </Link>
          </div>

          <div className="w-full min-h-[650px] grid grid-cols-5 gap-3 ">
            {products.sort((a, b) => b.stock - a.stock).slice(0, 10).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex items-center py-[35px]">
            <h1 className="text-[22px] font-semibold uppercase">Bảng Xếp Hạng </h1>
            <Link
              to="/bang-xep-hang"
              className="ml-auto text-gray-500 hover:text-black flex items-center justify-center"
            >
              View all
              <NavigateNextIcon />
            </Link>
          </div>

          <div className="w-full min-h-[650px] grid grid-cols-3 gap-3">
            {sortedProducts.slice(0, 15).map((product, index) => (
              <RankingCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

    </MainLayout>
  );
}

export default HomePage;
