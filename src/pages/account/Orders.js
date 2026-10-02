import { useState, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import ClearIcon from '@mui/icons-material/Clear';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const tabs = [
    "Tất cả đơn",
    "Đang xử lý",
    "Đang vận chuyển",
    "Đã giao",
    "Đã hủy",
];

const AccountOrdersPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // danh sách đơn hàng
    const [active, setActive] = useState(0);

    // Tìm đơn hàng
    const [valueSearch, setValueSearch] = useState("");

    // chống bị nhảy ô nhập khi clear
    const inputRef = useRef(null);

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

            <div className="w-full bg-soft px-[160px] pt-[100px] pb-[50px]">
                <div className="w-full py-[25px] flex items-center gap-1">
                    <h1 className="text-[22px] text-black font-semibold uppercase">
                        Đơn Hàng Của Tôi
                    </h1>
                </div>

                <div className="w-full min-h-[555px] flex flex-col gap-3">
                    <div className="w-full h-[45px] flex items-center rounded-t-md border bg-white">
                        <ul className="w-full h-full grid grid-cols-5 items-center justify-center">
                            {tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={`w-full h-full border-b-2 ${active === index ? "border-blue-500 text-blue-700" : "border-transparent text-gray-500 hover:text-blue-700"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(index)}
                                        className="w-full h-full"
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full relative">
                        <div className="relative w-full h-[38px]">
                            <input
                                ref={inputRef}   // 👈 thiếu dòng này
                                type="text"
                                value={valueSearch}
                                onChange={(e) => setValueSearch(e.target.value)}
                                placeholder="Tìm đơn hàng theo Mã đơn hàng, Tên sản phẩm"
                                className="w-full h-full border rounded-md px-2.5 pr-[160px] outline-none focus:ring-1 focus:ring-blue-400"
                            />

                            {valueSearch && (
                                <button
                                    type="button"
                                    onMouseDown={(e) => {
                                        e.preventDefault(); // 🔥 ngăn mất focus
                                        setValueSearch("");
                                        inputRef.current?.focus(); // giữ focus
                                    }}
                                    className="absolute pr-[125px] right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <ClearIcon />
                                </button>
                            )}
                        </div>

                        <button
                            className="absolute w-[125px] h-full right-0 top-0 font-medium border hover:border-r rounded-r-md hover:bg-blue-50 text-blue-500 hover:text-blue-600"
                        >
                            Tìm đơn hàng
                        </button>
                    </div>

                    <div className="w-full grid grid-cols-1 gap-3">
                        {/* Đơn hàng */}
                        <div className="w-full h-[260px] flex flex-col px-4 pt-3 pb-4 rounded-md border bg-white">
                            <div className="w-full mb-3 text-gray-500 flex items-center gap-1">
                                <LocalShippingIcon />
                                <span className="text-gray-500 font-medium">
                                    Giao hàng thành công
                                </span>
                            </div>

                            <div className="w-full h-[120px] flex items-center border-t border-b">

                                {/* Sản phẩm */}
                                <div className="w-full grid grid-cols-[8fr_2fr] gap-2">

                                    <div className="w-full flex items-center gap-3">
                                        <div className="w-[100px] h-[100px] bg-gray-300 rounded overflow-hidden">
                                            <img
                                                src="https://product.hstatic.net/1000141988/product/sua_tuoi_tiet_trung_co_duong_vinamilk_viet_nam__1l__2f553e41e7f54abba37116456aa94db3_grande.png"
                                                alt="Sữa tươi Vinamilk 1L"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="w-full h-full mb-auto flex items-center">
                                            <div className="flex flex-col">
                                                <div className="flex w-full h-[50px] text-md text-black font-medium gap-1">
                                                    <h3 className="flex-1 line-clamp-2 leading-snug">
                                                        Sữa Tiệt Trùng - Không Đường
                                                    </h3>

                                                    <span className="text-blue-700 whitespace-nowrap">
                                                        (4 hộp * 180 ml)
                                                    </span>
                                                </div>

                                                <span className=" w-full text-sm font-medium text-blue-700">
                                                    HSD: 12 tháng
                                                </span>

                                                <div className="w-full">
                                                    <span className="text-sm font-medium text-blue-700 pr-2 border-r border-gray-300">
                                                        Vinamilk
                                                    </span>
                                                    <span className="text-sm font-medium text-blue-700 pl-2 border-l border-gray-300">
                                                        Việt Nam
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto flex items-center justify-center text-lg font-medium text-black">
                                        0
                                        <span className="text-sm ml-0.5 underline underline-offset-2 relative -top-1.5">
                                            đ
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex mt-2">
                                <div className="ml-auto flex flex-col gap-2">
                                    <div className="w-full flex items-center gap-2">
                                        <h1 className="text-md text-black font-medium">
                                            Tổng tiền thanh toán:
                                        </h1>
                                        <div className="ml-auto text-lg flex items-center justify-center font-medium text-red-500">
                                            0
                                            <span className="ml-0.5 text-sm underline underline-offset-2 relative -top-1.5">
                                                đ
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center gap-2">

                                        <button className="h-[35px] px-4 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600">
                                            Đánh giá
                                        </button>

                                        <button className="h-[35px] px-4 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600">
                                            Xem chi tiết
                                        </button>

                                        {/* <button className="h-[35px] px-4 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600">
                                            Mua lại
                                        </button>

                                        <button className="h-[35px] px-4 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600">
                                            Hủy đơn
                                        </button>

                                        <button className="h-[35px] px-4 rounded border-2 border-blue-400 text-sm font-medium text-blue-500 hover:text-blue-600">
                                            Đã nhận
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AccountOrdersPage;