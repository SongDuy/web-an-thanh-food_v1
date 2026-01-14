import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

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

function formatLikes(num) {
  if (num < 1_000) return num.toString();

  if (num < 1_000_000) {
    const k = Math.floor(num / 100) / 10;
    return k % 1 === 0 ? `${Math.floor(k)}K` : `${k}K`;
  }

  if (num < 1_000_000_000) {
    const m = Math.floor(num / 100_000) / 10;
    return m % 1 === 0 ? `${Math.floor(m)}M` : `${m}M`;
  }

  const b = Math.floor(num / 100_000_000) / 10;
  return b % 1 === 0 ? `${Math.floor(b)}B` : `${b}B`;
}

const RankingCard = ({ product, index, total, sortOrder }) => {
  if (!product) return null; // QUAN TRỌNG

  // Hiện Xếp hạng
  const rank =
    total && sortOrder === "asc"
      ? total - index            // cao → thấp
      : index + 1;              // thấp → cao

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

        <div className="w-full h-[145px] rounded shadow bg-white border hover:bg-red-50 p-4">
          <div className="w-full h-full flex gap-3">
            <div className="flex items-center justify-center gap-3">

              <div className="min-w-[50px] h-[50px] bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border border-gray-200 text-black font-serifBook rounded-full text-[35px] leading-none flex items-center justify-center">
                {rank}
              </div>

              <div className="relative w-[100px] h-[100px] overflow-hidden rounded flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded transition-transform duration-500"
                />

                <div className="absolute top-0 right-0 bg-gradient-to-t from-red-50 via-red-100 to-red-200 shadow text-white font-bold text-shadow-black px-1.5 rounded-bl-md z-10">
                  <span className="text-md">
                    {product.price}
                  </span>
                  <span className="text-[12px] align-top ml-0.5 underline underline-offset-2">
                    đ
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">

              <div className="w-full">
                <h3 className="w-full h-[48px] text-md font-medium text-black line-clamp-2">
                  {product.name}
                </h3>
              </div>

              <div className="w-full line-clamp-1">
                <span className="text-sm font-medium text-purple-700 pr-2 border-r">
                  {product.category}
                </span>
                <span className={`text-sm font-medium pl-2 border-l ${levelColors[product.level] || 'text-gray-400'}`}>
                  {product.unit} * {product.weight}
                </span>
              </div>

              {/* Buttons sát đáy */}
              <div className="w-full mt-auto grid grid-cols-2 gap-3">
                <div className="w-full border shadow rounded text-yellow-400 font-normal flex items-center justify-center gap-0.5 py-0.5">
                  <StarOutlinedIcon fontSize="small" />
                  <span className="text-black">
                    {Number(product.rating).toFixed(1)}
                  </span>
                </div>

                <div className="w-full border shadow rounded text-red-400  font-normal flex items-center justify-center gap-0.5 py-0.5">

                  <FavoriteOutlinedIcon fontSize="small" />
                  <span className="text-black">
                    {/* {product.likes} */}
                    {formatLikes(Number(product.likes))}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Link >
    </>
  );
};

export default RankingCard;