import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  return (
    <div className="w-full h-full mt-[15px] rounded-md border bg-white">
      {/* Thông tin chi tiết */}
      <div className="w-full h-[370px] px-[25px] py-[25px]">
        <div className="w-full h-[50px] px-3 bg-red-50 rounded mb-4">
          <h1 className="w-full h-full flex items-center text-[21px] uppercase">
            Chi tiết sản phẩm
          </h1>
        </div>

        <div className="w-full rounded text-[15px]">
          <div className="grid grid-cols-5 px-4 pt-3 pb-4">
            <span className="text-gray-500">Danh mục</span>
            <div className="col-span-4 flex items-center">
              <Link to="/"><span className="text-blue-800 text-sm">Trang chủ</span></Link>
              <NavigateNextIcon className="relative top-[2px]" fontSize="small" />
              <Link to="/Lương-Thực"><span className="text-blue-800 text-sm">Lương thực</span></Link>
              <NavigateNextIcon className="relative top-[2px]" fontSize="small" />
              <span className="text-black text-sm">Chi tiết</span>
            </div>
          </div>

          <div className="grid grid-cols-5 px-4 py-4">
            <span className="text-gray-500">Đóng gói</span>
            <span className="col-span-4">1 túi * 1kg</span>
          </div>

          <div className="grid grid-cols-5 px-4 py-4">
            <span className="text-gray-500">Hạn sử dụng</span>
            <span className="col-span-4">12 tháng</span>
          </div>

          <div className="grid grid-cols-5 px-4 py-4">
            <span className="text-gray-500">Thương hiệu</span>
            <span className="col-span-4">Nature Made</span>
          </div>

          <div className="grid grid-cols-5 px-4 py-4">
            <span className="text-gray-500">Xuất xứ</span>
            <span className="col-span-4">Hoa Kỳ</span>
          </div>
        </div>
      </div>

      {/* Phần mô tả */}
      <div className="w-full h-[525px] px-[25px] py-[25px]">
        <div className="w-full h-[50px] px-3 bg-red-50 rounded mb-[25px]">
          <h1 className="w-full h-full flex items-center text-[21px] uppercase">
            Mô tả sản phẩm
          </h1>
        </div>

        <div className="text-[15px] leading-7 text-gray-700 space-y-4 px-4">
          <p>
            <span className="font-medium">Sữa tươi có đường</span> được sản xuất từ nguồn sữa bò tươi nguyên chất, chọn lọc kỹ lưỡng và xử lý theo quy trình hiện đại nhằm giữ trọn hương vị tự nhiên cùng giá trị dinh dưỡng thiết yếu. Với vị ngọt dịu hài hòa, sữa dễ uống, phù hợp với nhiều đối tượng từ trẻ em đến người lớn.
          </p>
          <p>
            Sản phẩm giàu <span className="font-medium">canxi, protein</span> cùng các vitamin <span className="font-medium">A, D, B2</span> giúp hỗ trợ phát triển xương và răng, tăng cường thể lực và cung cấp năng lượng cho các hoạt động hằng ngày. Kết cấu sữa mịn, thơm béo tự nhiên, mang lại cảm giác ngon miệng và sảng khoái mỗi khi sử dụng.
          </p>
          <p>
            Sữa tươi có đường thích hợp dùng trực tiếp, dùng kèm bữa sáng, bữa phụ hoặc làm nguyên liệu cho các món ăn, thức uống như <span className="font-medium">sinh tố, cà phê sữa, bánh ngọt</span>. Sản phẩm được đóng gói tiện lợi, đảm bảo an toàn vệ sinh thực phẩm, dễ bảo quản và sử dụng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;