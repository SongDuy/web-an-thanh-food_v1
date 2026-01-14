import { useState } from "react";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Search from '../../components/Search';
import Notification from "../../components/Notification";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

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

            <div className="w-full h-full bg-soft px-[160px] border pt-[100px] pb-[50px]">
                {/* Hình ảnh sản phẩm và đặt hàng */}
                <div className="w-full flex items-center mt-[5px] mb-[8px]">
                    <Link to="/">
                        <span className="text-blue-800 text-sm">
                            Trang chủ
                        </span>
                    </Link>

                    <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                    <Link to="/Lương-Thực">
                        <span className="text-blue-800 text-sm">
                            Lương thực
                        </span>
                    </Link>

                    <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                    <span className="text-black text-sm">
                        Chi tiết
                    </span>
                </div>

                <div className="w-full h-[600px] px-[25px] py-[25px] border rounded-md bg-white grid grid-cols-5 gap-5">
                    {/* 1/3 */}
                    <div className="col-span-2 bg-white">
                        <div className="w-full h-full grid grid-cols-1 gap-3">
                            <div className="w-full h-[450px] bg-gray-200 rounded">

                            </div>
                            <div className="w-full h-full grid grid-cols-5 gap-3">
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                                <div className="w-full h-[85px] bg-gray-200 rounded">

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 2/3 */}
                    <div className="col-span-3 bg-white">
                        <div className="w-full h-[65px]">
                            <h1 className="w-full h-full text-[21px] line-clamp-2">
                                [SỈ] 10KG Gạo Lứt Huyết Rồng Loại 1- Gạo lức trong thực dưỡng _ Gạo lứt cho người ăn kiêng, tiểu đường, xương khớp.
                            </h1>
                        </div>

                        <div className="w-full h-[65px] flex items-center">
                            <div className="h-[30px] text-md pr-5 border-r-2 text-black flex items-center gap-1">
                                <span>
                                    4.9
                                </span>
                                <div className="text-yellow-400">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
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
                            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
                                <div className="w-full h-full">
                                    <span className="w-full h-full text-md text-gray-500 flex items-center">
                                        Vận chuyển
                                    </span>
                                </div>

                                <div className="h-full text-md text-black flex items-center gap-2">
                                    <LocalShippingOutlinedIcon />
                                    <span className="font-medium text-blue-700">
                                        Miễn phí vận chuyển.
                                    </span>
                                </div>
                            </div>
                            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
                                <div className="w-full h-full flex flex-col items-start justify-center">
                                    <span className="text-md text-gray-500">
                                        Lượt mua
                                    </span>
                                    <span className="text-md text-gray-500">
                                        Thẻ cấp 1
                                    </span>
                                </div>

                                <div className="h-full text-md text-black flex items-center gap-2">
                                    <ShoppingBagOutlinedIcon />
                                    <div
                                        title="Thẻ cấp 1 (Hệ Thổ)"
                                        className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-yellow-300 via-yellow-200 to-yellow-400 shadow border border-white items-center justify-center rounded-md"
                                    >
                                        <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                            1
                                        </span>
                                        <span className="text-black flex items-center justify-center border-l border-white">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
                                <div className="w-full h-full flex flex-col items-start justify-center">
                                    <span className="text-md text-gray-500">
                                        Thẻ mua
                                    </span>
                                    <span className="text-md text-gray-500">
                                        Đang có
                                    </span>
                                </div>

                                <div className="h-full text-md text-black flex items-center gap-2">
                                    <LoyaltyOutlinedIcon />
                                    <div className="h-full flex items-center gap-3">
                                        <div
                                            title="Thẻ cấp 1 (Hệ Thổ)"
                                            className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-yellow-300 via-yellow-200 to-yellow-400 shadow border border-white items-center justify-center rounded-md"
                                        >
                                            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                1
                                            </span>
                                            <span className="text-black flex items-center justify-center border-l border-white">
                                                3
                                            </span>
                                        </div>

                                        <div
                                            title="Thẻ cấp 2 (Hệ Hỏa)"
                                            className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-red-300 via-red-200 to-red-400 shadow border border-white items-center justify-center rounded-md"
                                        >
                                            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                2
                                            </span>
                                            <span className="text-black flex items-center justify-center border-l border-white">
                                                0
                                            </span>
                                        </div>

                                        <div
                                            title="Thẻ cấp 3 (Hệ Thủy)"
                                            className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-400 shadow border border-white items-center justify-center rounded-md"
                                        >
                                            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                3
                                            </span>
                                            <span className="text-black flex items-center justify-center border-l border-white">
                                                0
                                            </span>
                                        </div>

                                        <div
                                            title="Thẻ cấp 4 (Hệ Mộc)"
                                            className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-green-300 via-green-200 to-green-400 shadow border border-white items-center justify-center rounded-md"
                                        >
                                            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                4
                                            </span>
                                            <span className="text-black flex items-center justify-center border-l border-white">
                                                0
                                            </span>
                                        </div>

                                        <div
                                            title="Thẻ cấp 5 (Hệ Kim)"
                                            className="w-[65px] h-[35px] cursor-default grid grid-cols-[35%_65%] bg-gradient-to-tr from-gray-300 via-gray-200 to-gray-400 shadow border border-white items-center justify-center rounded-md"
                                        >
                                            <span className="text-white text-shadow-black font-medium flex items-center justify-center border-r border-white">
                                                5
                                            </span>
                                            <span className="text-black flex items-center justify-center border-l border-white">
                                                0
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[65px] grid grid-cols-[20%_80%] gap-3">
                                <span className="h-full text-md text-gray-500 flex items-center">
                                    Số lượng
                                </span>

                                <div className="w-full flex items-center text-gray-500">
                                    <div className="flex border-2 border-gray-300 rounded overflow-hidden">
                                        <div className="w-10 h-[28px] flex items-center justify-center font-medium border-r border-gray-300">
                                            <RemoveOutlinedIcon />
                                        </div>
                                        <div className="w-10 h-[28px] text-lg font-medium flex items-center justify-center border-l border-r border-gray-300">
                                            1
                                        </div>
                                        <div className="w-10 h-[28px] flex items-center justify-center font-medium border-l border-gray-300">
                                            <AddOutlinedIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full h-[65px] flex items-center justify-center">
                            <div className="h-[50px] grid grid-cols-2 gap-3">
                                <div className="w-[220px] h-[50px] flex items-center justify-center text-black text-md rounded bg-gradient-to-tr from-gray-100 via-red-50 to-red-100 shadow border  transition-colors font-medium ">
                                    {Number(10).toLocaleString("vi-VN")}
                                </div>
                                {/* <button className="w-[200px] h-[50px] text-white text-md rounded font-medium shadow bg-gradient-to-t from-green-400 via-green-500 to-green-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-green-500">
                                    Mua ngay
                                </button> */}
                                <button className="w-[220px] h-[50px] text-white text-md rounded font-medium shadow bg-gradient-to-t from-red-400 via-red-500 to-red-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-red-500">
                                    Hết hàng
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full h-full mt-[15px] rounded-md border bg-white">
                    {/* Thông tin mô tả của sản phẩm */}
                    <div className="w-full h-[370px] px-[25px] py-[25px]">
                        {/* Header */}
                        <div className="w-full h-[50px] px-3 bg-red-50 rounded mb-4">
                            <h1 className="w-full h-full flex items-center text-[21px] uppercase">
                                Chi tiết sản phẩm
                            </h1>
                        </div>

                        {/* Bảng chi tiết */}
                        <div className="w-full rounded text-[15px]">
                            {/* Danh mục */}
                            <div className="grid grid-cols-5 px-4 pt-3 pb-4">
                                <span className="text-gray-500">Danh mục</span>

                                <div className="col-span-4">
                                    <div className="w-full flex items-center">
                                        <Link to="/">
                                            <span className="text-blue-800 text-sm"> Trang chủ </span>
                                        </Link>

                                        <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                                        <Link to="/Lương-Thực">
                                            <span className="text-blue-800 text-sm"> Lương thực </span>
                                        </Link>

                                        <NavigateNextIcon className="relative top-[2px]" fontSize="small" />

                                        <span className="text-black text-sm"> Chi tiết </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hạn sử dụng */}
                            <div className="grid grid-cols-5 px-4 py-4">
                                <span className="text-gray-500">Đóng gói</span>
                                <span className="col-span-4">1 túi * 1kg</span>
                            </div>

                            {/* Hạn sử dụng */}
                            <div className="grid grid-cols-5 px-4 py-4">
                                <span className="text-gray-500">Hạn sử dụng</span>
                                <span className="col-span-4">12 tháng</span>
                            </div>

                            {/* Thương hiệu */}
                            <div className="grid grid-cols-5 px-4 py-4">
                                <span className="text-gray-500">Thương hiệu</span>
                                <span className="col-span-4">Nature Made</span>
                            </div>

                            {/* Xuất xứ */}
                            <div className="grid grid-cols-5 px-4 py-4">
                                <span className="text-gray-500">Xuất xứ</span>
                                <span className="col-span-4">Hoa Kỳ</span>
                            </div>
                        </div>
                    </div>

                    {/* Phần mô tả */}
                    <div className="w-full h-[525px] px-[25px] py-[25px]">
                        {/* Header */}
                        <div className="w-full h-[50px] px-3 bg-red-50 rounded mb-[25px]">
                            <h1 className="w-full h-full flex items-center text-[21px] uppercase">
                                Mô tả sản phẩm
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="text-[15px] leading-7 text-gray-700 space-y-4 px-4">
                            <p>
                                <span className="font-medium">
                                    Sữa tươi có đường
                                </span>{" "}
                                được sản xuất từ nguồn sữa bò tươi nguyên chất, chọn lọc kỹ lưỡng và xử lý theo
                                quy trình hiện đại nhằm giữ trọn hương vị tự nhiên cùng giá trị dinh dưỡng thiết yếu.
                                Với vị ngọt dịu hài hòa, sữa dễ uống, phù hợp với nhiều đối tượng từ trẻ em đến người lớn.
                            </p>

                            <p>
                                Sản phẩm giàu <span className="font-medium">canxi, protein</span> cùng các vitamin
                                <span className="font-medium"> A, D, B2</span> giúp hỗ trợ phát triển xương và răng,
                                tăng cường thể lực và cung cấp năng lượng cho các hoạt động hằng ngày. Kết cấu sữa mịn,
                                thơm béo tự nhiên, mang lại cảm giác ngon miệng và sảng khoái mỗi khi sử dụng.
                            </p>

                            <p>
                                Sữa tươi có đường thích hợp dùng trực tiếp, dùng kèm bữa sáng, bữa phụ hoặc làm nguyên
                                liệu cho các món ăn, thức uống như <span className="font-medium">
                                    sinh tố, cà phê sữa, bánh ngọt</span>. Sản phẩm được đóng gói tiện lợi,
                                đảm bảo an toàn vệ sinh thực phẩm, dễ bảo quản và sử dụng.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="w-full h-[650px] mt-[15px] rounded-md border bg-white">
                    <div className=" w-full h-[310px] px-[25px] py-[25px]">
                        <div className="w-full h-[50px] px-3 bg-white rounded">
                            <h1 className="w-full h-full flex items-center text-[21px] line-clamp-1 uppercase  border-b-2">
                                ĐÁNH GIÁ SẢN PHẨM
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetailPage;