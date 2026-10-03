import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const ProductMainInfo = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full flex items-center mt-[5px] mb-[8px]">
        <Link to="/">
          <span className="text-blue-800 text-sm">Trang chủ</span>
        </Link>
        <NavigateNextIcon className="relative top-[2px]" fontSize="small" />
        <Link to="/luong-thuc">
          <span className="text-blue-800 text-sm">Lương thực</span>
        </Link>
        <NavigateNextIcon className="relative top-[2px]" fontSize="small" />
        <span className="text-black text-sm">Chi tiết</span>
      </div>

      {/* Main Content */}
      <div className="w-full h-[600px] px-[25px] py-[25px] border rounded-md bg-white grid grid-cols-5 gap-5">
        {/* Cột trái: Hình ảnh */}
        <div className="col-span-2 bg-white">
          <div className="w-full h-full grid grid-cols-1 gap-3">
            <div className="w-full h-[450px] bg-gray-200 rounded"></div>
            <div className="w-full h-full grid grid-cols-5 gap-3">
              <div className="w-full h-[85px] bg-gray-200 rounded"></div>
              <div className="w-full h-[85px] bg-gray-200 rounded"></div>
              <div className="w-full h-[85px] bg-gray-200 rounded"></div>
              <div className="w-full h-[85px] bg-gray-200 rounded"></div>
              <div className="w-full h-[85px] bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Cột phải: Thông tin đặt hàng */}
        <div className="col-span-3 bg-white">
          <div className="w-full h-[65px]">
            <h1 className="w-full h-full text-[21px] line-clamp-2">
              [SỈ] 10KG Gạo Lứt Huyết Rồng Loại 1- Gạo lức trong thực dưỡng _ Gạo lứt cho người ăn kiêng, tiểu đường, xương khớp.
            </h1>
          </div>

          <div className="w-full h-[65px] flex items-center">
            <div className="h-[30px] text-md pr-5 border-r-2 text-black flex items-center gap-1">
              <span>4.9</span>
              <div className="text-yellow-400 flex">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
            </div>
            <div className="h-[30px] text-md px-5 border-r-2 text-gray-500 flex items-center gap-2">
              <span className="text-black">3,1k</span>
              <span>Đánh Giá</span>
            </div>
            <div className="h-full text-md pl-5 text-gray-500 flex items-center gap-1">
              <span>Đã Bán</span>
              <span className="text-black">100k</span>
            </div>
            <div className="h-full ml-auto text-md text-gray-500 flex items-center gap-1">
              <FavoriteBorderIcon />
              <span className="text-black"> Đã thích (41)</span>
            </div>
          </div>

          <div className="w-full h-[65px] bg-gray-100 rounded">
            <h1 className="w-full h-full flex items-center justify-center text-red-500 font-medium">
              <span className="text-[32px] tracking-tight mb-1">0</span>
              <span className="text-[20px] ml-1 underline underline-offset-2 relative -top-[10px]">
                đ
              </span>
            </h1>
          </div>

          <div className="w-full px-5">
            {/* Vận chuyển */}
            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
              <div className="w-full h-full">
                <span className="w-full h-full text-md text-gray-500 flex items-center">
                  Vận chuyển
                </span>
              </div>
              <div className="h-full text-md text-black flex items-center gap-2">
                <LocalShippingOutlinedIcon />
                <span className="font-medium text-blue-700">Miễn phí vận chuyển.</span>
              </div>
            </div>

            {/* Lượt mua */}
            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
              <div className="w-full h-full flex flex-col items-start justify-center">
                <span className="text-md text-gray-500">Lượt mua</span>
                <span className="text-md text-gray-500">Thẻ cấp 1</span>
              </div>

              <div className="h-full text-md text-black flex items-center gap-2">
                <ShoppingBagOutlinedIcon />
                <div
                  title="Thẻ cấp 1 (Hệ Thổ)"
                  className="w-[70px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-yellow-300 via-yellow-200 to-yellow-400 shadow border border-white items-center justify-center rounded-md"
                >
                  <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                  <span className="text-black flex items-center justify-center border-l border-white">1</span>
                </div>
              </div>
            </div>

            {/* Thẻ của tôi */}
            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
              <div className="w-full h-full flex flex-col items-start justify-center">
                <span className="text-md text-gray-500">Thẻ của tôi</span>
                <span className="text-md text-gray-500">Đang có</span>
              </div>
              
              <div className="h-full text-md text-black flex items-center gap-2">
                <LoyaltyOutlinedIcon />
                <div className="w-full h-full flex items-center gap-3">
                  <div title="Thẻ cấp 1 (Hệ Thổ)" className="w-[70px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-yellow-300 via-yellow-200 to-yellow-400 shadow border border-white items-center justify-center rounded-md">
                    <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                    <span className="text-black flex items-center justify-center border-l border-white">3</span>
                  </div>
                  <div title="Thẻ cấp 2 (Hệ Hỏa)" className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-red-300 via-red-200 to-red-400 shadow border border-white items-center justify-center rounded-md">
                    <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                    <span className="text-black flex items-center justify-center border-l border-white">0</span>
                  </div>
                  <div title="Thẻ cấp 3 (Hệ Thủy)" className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-400 shadow border border-white items-center justify-center rounded-md">
                    <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                    <span className="text-black flex items-center justify-center border-l border-white">0</span>
                  </div>
                  <div title="Thẻ cấp 4 (Hệ Mộc)" className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-green-300 via-green-200 to-green-400 shadow border border-white items-center justify-center rounded-md">
                    <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                    <span className="text-black flex items-center justify-center border-l border-white">0</span>
                  </div>
                  <div title="Thẻ cấp 5 (Hệ Kim)" className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-400 shadow border border-white items-center justify-center rounded-md">
                    <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">1</span>
                    <span className="text-black flex items-center justify-center border-l border-white">0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Số lượng */}
            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
              <span className="h-full text-md text-gray-500 flex items-center">Số lượng</span>
              <div className="w-full flex items-center text-gray-500">
                <div className="flex border-2 border-gray-300 rounded overflow-hidden">
                  <div className="w-10 h-[28px] flex items-center justify-center font-medium border-r border-gray-300 cursor-pointer">
                    <RemoveOutlinedIcon />
                  </div>
                  <div className="w-10 h-[28px] text-lg font-medium flex items-center justify-center border-l border-r border-gray-300">
                    1
                  </div>
                  <div className="w-10 h-[28px] flex items-center justify-center font-medium border-l border-gray-300 cursor-pointer">
                    <AddOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nút thao tác */}
          <div className="w-full h-[65px] flex items-center justify-center">
            <div className="h-[50px] grid grid-cols-2 gap-3">
              <div className="w-[225px] h-[50px] flex items-center justify-center text-black text-md rounded bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border font-medium">
                {Number(10).toLocaleString("vi-VN")}
              </div>
              <button className="w-[225px] h-[50px] text-white text-md rounded font-medium shadow bg-gradient-to-t from-red-400 via-red-500 to-red-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-red-500">
                Hết hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMainInfo;