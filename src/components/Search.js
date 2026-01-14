import { useState, useRef } from "react";

import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import InventoryIcon from "@mui/icons-material/Inventory";
import ClearIcon from '@mui/icons-material/Clear';

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

const toSlug = (str) =>
    str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9 ]/g, "")
        .trim()
        .replace(/\s+/g, "-");

const Search = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [keyword, setKeyword] = useState("");
    const hasKeyword = keyword.trim().length > 0;

    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        // Khớp với thời gian CSS (0.4s = 400ms)
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    // Tìm sản phẩm theo tên
    const filteredProducts = products
        .filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        )
        .sort((a, b) => {
            // 1. Kiểm tra trạng thái còn hàng (Sản phẩm còn hàng luôn đứng trên hết)
            if ((a.stock > 0) !== (b.stock > 0)) {
                return a.stock > 0 ? -1 : 1;
            }
            // 2. Nếu cả hai đều còn hàng hoặc đều hết hàng, ưu tiên Rating cao
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }
            // 3. Nếu rating bằng nhau, ưu tiên số lượng kho nhiều hơn
            return b.stock - a.stock;
        })
        .slice(0, 6)

    // chống bị nhảy ô nhập khi clear
    const inputRef = useRef(null);

    // Tạo màu theo cấp lương thực thực phẩm
    const levelColors = {
        1: "text-yellow-500",
        2: "text-red-500",
        3: "text-blue-500",
        4: "text-green-500",
        5: "text-gray-500",
    };

    return (
        <div
            onClick={handleClose}   // 👈 click nền mờ sẽ tắt
            className={`fixed inset-0 z-50 flex ${isClosing ? "overlay-out pointer-events-none" : "overlay-in"}`}
        >
            {/* Sidebar */}
            <div
                onClick={(e) => e.stopPropagation()} // 👈 chặn click lan
                // className="w-[380px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col"
                className={`sidebar w-[420px] h-full ml-auto bg-white shadow-xl px-5 py-4 flex flex-col ${isClosing ? "slide-out" : "slide-in"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-black">
                        Tìm kiếm
                    </h2>
                    <button
                        onClick={handleClose}
                        className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
                    >
                        <CloseIcon sx={{ fontSize: 25 }} />
                    </button>
                </div>

                {/* Search input */}
                <div className="relative w-full h-[38px] mt-5">
                    <input
                        ref={inputRef}   // 👈 thiếu dòng này
                        autoFocus
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        spellCheck={false}
                        className="w-full h-full border rounded-md px-2.5 outline-none focus:ring-1 focus:ring-blue-400"
                        placeholder="Tìm sản phẩm..."
                    />

                    {keyword && (
                        <button
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault(); // 🔥 ngăn mất focus
                                setKeyword("");
                                inputRef.current?.focus(); // giữ focus
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <ClearIcon />
                        </button>
                    )}
                </div>

                {/* Result list */}
                <div className="w-full grid grid-cols-1 gap-2 mt-[25px] pb-2">

                    {!hasKeyword && (
                        <p className="text-sm text-gray-400 text-center mt-10">
                            Nhập tên sản phẩm để tìm kiếm
                        </p>
                    )}

                    {hasKeyword && filteredProducts.length === 0 && (
                        <p className="text-sm text-gray-400 text-center mt-5">
                            Không tìm thấy sản phẩm
                        </p>
                    )}

                    {hasKeyword && filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/${toSlug(product.category)}/${toSlug(product.name)}?id=${product.id}`}
                            onClick={handleClose}
                        >
                            <div
                                className="flex items-center gap-3 p-2 rounded border shadow hover:bg-red-50 cursor-pointer transition"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-[70px] h-[70px] overflow-hidden rounded flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded transition-transform duration-500"
                                    />

                                    <div className="absolute flex items-center top-0 right-0 bg-gradient-to-t from-red-50 via-red-100 to-red-200 shadow text-white text-shadow-black font-bold px-1 py-1 rounded-bl-[5px] z-10 leading-none">
                                        <span className="text-[9px] leading-none">
                                            {product.price}
                                        </span>
                                        <span className="text-[7px] ml-0.5 underline underline-offset-1 leading-none relative -top-[1.5px]">
                                            đ
                                        </span>
                                    </div>

                                </div>

                                {/* Info */}
                                <div className="w-full flex flex-col gap-1">
                                    <div className="w-full mb-1.5">
                                        <h3 className="w-full text-sm font-medium text-black line-clamp-1">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <div className="flex text-xs">
                                        <span className="pr-2 border-r text-purple-700 font-medium">
                                            {product.category}
                                        </span>

                                        <span className={`pl-2 border-l font-medium ${levelColors[product.level] || 'text-gray-400'}`}>
                                            {product.unit} * {product.weight}
                                        </span>
                                    </div>

                                    <div className="flex gap-3 text-xs font-medium">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <StarIcon fontSize="inherit" />
                                            {product.rating}
                                        </div>

                                        <div
                                            className={`flex items-center gap-1 ${product.stock === 0
                                                ? "text-red-600"
                                                : "text-green-600"
                                                }`}
                                        >
                                            <InventoryIcon fontSize="inherit" />
                                            {product.stock === 0 ? "Hết hàng" : "Mua ngay"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Search;
