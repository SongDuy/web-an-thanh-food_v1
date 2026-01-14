import { Link } from "react-router-dom";

const toSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const ProductCard = ({ product, index }) => {
  if (!product) return null; // QUAN TRỌNG

  // Tạo màu theo cấp lương thực thực phẩm
  const levelColors = {
    1: "text-yellow-500",
    2: "text-red-500",
    3: "text-blue-500",
    4: "text-green-500",
    5: "text-gray-500",
  };

  return (
    <>
      <Link to={`/${toSlug(product.category)}/${toSlug(product.name)}?id=${product.id}`}>
        <div className="max-w-[230px] h-[320px] flex flex-col border p-4 rounded shadow hover:bg-red-50 transition-all duration-300 bg-white">

          {/* Khu vực ảnh: Giữ nguyên h-40 (~160px) */}
          <div className="relative w-full h-[160px] overflow-hidden rounded flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute top-0 right-0 bg-gradient-to-t from-red-50 via-red-100 to-red-200 shadow text-white font-bold text-shadow-black px-2 py-0.5 rounded-bl-lg z-10">
              <span className="text-xl">
                {product.price}
              </span>
              <span className="text-sm align-top ml-0.5 underline underline-offset-2">
                đ
              </span>
            </div>
          </div>

          {/* Nội dung text: flex-grow giúp vùng này chiếm không gian còn lại */}
          <div className="flex-grow pt-2">
            <h3 className="w-full h-[50px] text-md font-medium text-black line-clamp-2">
              {product.name}
            </h3>

            <div className="w-full line-clamp-1">
              <span className="text-sm font-medium text-purple-700 pr-2 border-r">
                {product.category}
              </span>
              <span className={`text-sm font-medium pl-2 border-l ${levelColors[product.level] || 'text-gray-400'}`}>
                {product.unit} * {product.weight}
              </span>
            </div>
            {/* <span className="text-sm font-medium text-blue-700">
              {product.unit} * {product.weight}
            </span> */}
          </div>

          {/* Nút bấm: Sẽ luôn nằm ở đáy nhờ cấu trúc flex-col */}

          <div className="mt-auto grid grid-cols-2 gap-3 w-full">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border text-black text-md px-1 py-1 rounded transition-colors font-medium">
              {Number(product.stock).toLocaleString("en-US")}
            </div>

            <button className={`w-full h-full shadow text-white text-md px-1 py-1 rounded transition-colors font-medium ${product.stock === 0
              ? "bg-gradient-to-t from-red-400 via-red-500 to-red-600 hover:bg-red-700 border-b-2 border-red-500"
              : "bg-gradient-to-t from-green-400 via-green-500 to-green-600 hover:bg-green-700 border-b-2 border-green-500"
              }`}
            >
              {product.stock === 0 ? "Hết hàng" : "Mua ngay"}
            </button>

          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;