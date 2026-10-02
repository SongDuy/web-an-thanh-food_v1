import { useState, useEffect, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Notification from "../../components/Notification";

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AccountAddressPage = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    // FORM
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    // VERIFY
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [countdown, setCountdown] = useState(0);
    const [phoneVerified, setPhoneVerified] = useState(false);

    // Viết hoa chữ cái đầu ở ô nhập họ và tên
    const capitalizeName = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .filter(Boolean)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const normalizeName = (value) => {
        value = value.replace(/[^a-zA-ZÀ-ỹ\s]/g, "");
        value = value.replace(/\s+/g, " ");
        value = value.trim();
        return capitalizeName(value);
    };

    const nameHasError =
        fullName.length > 0 && /[^a-zA-ZÀ-ỹ\s]/.test(fullName);

    const canSave =
        !nameHasError &&
        normalizeName(fullName).length > 0 &&
        phone.trim().length > 0 &&
        address.trim().length > 0 &&
        phoneVerified;

    /* ===== OTP ===== */
    useEffect(() => {
        if (countdown === 0) return;
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    const sendOtp = () => {
        const rawPhone = phone.replace(/\s/g, ""); // bỏ khoảng trắng
        console.log("Send OTP to:", rawPhone);

        setOtp("");
        setOtpSent(true);
        setCountdown(90);
    };

    const verifyOtp = () => {
        if (otp === "123456") {
            setPhoneVerified(true);
        }
    };

    const formatTime = (s) =>
        `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

    // chống bị nhảy ô nhập khi nhấn clear
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const otpRef = useRef(null);

    const handleSave = () => {
        const safeName = normalizeName(fullName);
        if (!safeName) return;

        // DÙNG safeName để gửi API
        console.log("Save name:", safeName);

        setFullName(safeName);
    };

    // Tạo khoảng cách cho số điện thoại
    const formatPhone = (input) => {
        // 🔥 Chỉ giữ lại các chữ số 0-9, loại bỏ tất cả ký tự khác kể cả dấu +
        let raw = input.replace(/[^0-9]/g, "");

        // Nếu số điện thoại bắt đầu bằng 0 (định dạng Việt Nam phổ biến)
        if (raw.startsWith("0")) {
            let nums = raw.slice(1); // Lấy phần số sau số 0
            if (nums.length <= 2) return "0" + nums;
            // Định dạng thành: 093 8595...
            return "0" + nums.slice(0, 2) + " " + nums.slice(2);
        }

        return raw;
    };

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
                        Địa chỉ nhận hàng
                    </h1>
                </div>

                <div className="w-full h-[555px] grid grid-cols-11 bg-white rounded-md border">
                    <div className="col-span-7 pl-4 pr-3 pt-4 border-r">
                        <div className="w-full ">
                            <h2 className="text-lg text-gray-500">
                                Địa chỉ đã lưu
                            </h2>
                        </div>

                        {/* Nội dung địa chỉ đã lưu */}
                        <div className="w-full h-[463px] pr-3 my-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            <div className="w-full flex flex-col gap-3 pb-5">
                                <div className="w-full h-[145px] px-4 pt-3 pb-4 flex flex-col border shadow rounded-lg">
                                    <div className="w-full flex items-center gap-3">
                                        <HomeWorkIcon className="text-blue-500" />

                                        <div className="flex items-center gap-2">
                                            <span className="text-black font-medium">Nguyễn Văn A</span>
                                            <span className="text-gray-400 border-l-2 border-gray-300 pl-2">090 1234567</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-[42px] mt-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <p className="w-full text-sm text-gray-600">
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                        </p>
                                    </div>

                                    {/* Buttons dưới cùng */}
                                    <div className="mt-auto flex gap-3">
                                        <button className="h-[35px] flex items-center gap-1 pl-2.5 pr-3 text-sm font-medium rounded border-2 border-blue-400 text-blue-500 hover:text-blue-600 transition">
                                            <EditIcon fontSize="small" />
                                            <span>Chỉnh sửa</span>
                                        </button>

                                        <button className="h-[35px] flex items-center px-4 text-sm font-medium rounded shadow border-2 border-purple-100 text-purple-700 bg-purple-50 hover:bg-gray-100 transition">
                                            Mặc định
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full h-[145px] px-4 pt-3 pb-4 flex flex-col border shadow rounded-lg ">
                                    <div className="w-full flex items-center gap-3">
                                        <HomeWorkIcon className="text-blue-500" />

                                        <div className="flex items-center gap-2">
                                            <span className="text-black font-medium">Nguyễn Văn A</span>
                                            <span className="text-gray-400 border-l-2 border-gray-300 pl-2">090 1234567</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-[42px] mt-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <p className="w-full text-sm text-gray-600">
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                        </p>
                                    </div>

                                    {/* Buttons dưới cùng */}
                                    <div className="mt-auto flex gap-3">
                                        <button className="h-[35px] flex items-center gap-1 pl-2.5 pr-3 text-sm font-medium rounded border-2 border-blue-400 text-blue-500 hover:text-blue-600 transition">
                                            <EditIcon fontSize="small" />
                                            <span>Chỉnh sửa</span>
                                        </button>

                                        <button className="h-[35px] flex items-center gap-1 pl-2 pr-3 text-sm font-medium rounded border-2 border-red-400 text-red-500 hover:text-red-600 transition">
                                            <DeleteForeverIcon fontSize="small" />
                                            <span>Xóa</span>
                                        </button>

                                        <button className="h-[35px] flex items-center px-4 text-sm font-medium rounded shadow bg-purple-50 text-purple-700 border-2 border-purple-100 hover:bg-gray-100 transition">
                                            Đặt làm mặc định
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full h-[145px] px-4 pt-3 pb-4 flex flex-col border shadow rounded-lg ">
                                    <div className="w-full flex items-center gap-3">
                                        <HomeWorkIcon className="text-blue-500" />

                                        <div className="flex items-center gap-2">
                                            <span className="text-black font-medium">Nguyễn Văn A</span>
                                            <span className="text-gray-400 border-l-2 border-gray-300 pl-2">090 1234567</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-[42px] mt-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <p className="w-full text-sm text-gray-600">
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                            123 Nguyễn Trãi, Quận 1, TP.HCM
                                        </p>
                                    </div>

                                    {/* Buttons dưới cùng */}
                                    <div className="mt-auto flex gap-3">
                                        <button className="h-[35px] flex items-center gap-1 pl-2.5 pr-3 text-sm font-medium rounded border-2 border-blue-400 text-blue-500 hover:text-blue-600 transition">
                                            <EditIcon fontSize="small" />
                                            <span>Chỉnh sửa</span>
                                        </button>

                                        <button className="h-[35px] flex items-center gap-1 pl-2 pr-3 text-sm font-medium rounded border-2 border-red-400 text-red-500 hover:text-red-600 transition">
                                            <DeleteForeverIcon fontSize="small" />
                                            <span>Xóa</span>
                                        </button>

                                        <button className="h-[35px] flex items-center px-4 text-sm font-medium rounded shadow bg-purple-50 text-purple-700 border-2 border-purple-100 hover:bg-gray-100 transition">
                                            Đặt làm mặc định
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 px-4 pt-4 border-l">
                        {/* RIGHT */}
                        <div className="w-full">
                            <h2 className="text-lg text-gray-500">
                                Thêm địa chỉ mới
                            </h2>
                        </div>

                        <div className="w-full flex flex-col py-4 gap-4 box-border">
                            {/* NAME */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <PersonIcon />
                                        <h3 className="text-black">Họ và tên</h3>
                                    </div>
                                </div>

                                <div className="relative w-full h-[38px] mt-4">
                                    <input
                                        ref={fullNameRef}
                                        type="text"
                                        value={fullName}
                                        autoComplete="off"
                                        name="no-autofill-name"
                                        onChange={(e) => {
                                            // Cho IME gõ tự do
                                            setFullName(e.target.value);
                                        }}
                                        onBlur={() => {
                                            setFullName(normalizeName(fullName));
                                        }}
                                        onPaste={(e) => {
                                            const text = e.clipboardData.getData("text");
                                            if (/[^a-zA-ZÀ-ỹ\s]/.test(text)) {
                                                e.preventDefault();
                                            }
                                        }}
                                        placeholder="Ví dụ: Nguyễn Văn A"
                                        className={`w-full h-[38px] rounded-md pl-2.5 pr-[35px] outline-none focus:ring-1
                                                ${nameHasError
                                                ? "border border-red-500 focus:ring-red-400"
                                                : "border border-gray-300 focus:ring-blue-400"
                                            }`}
                                    />

                                    {fullName && (
                                        <button
                                            type="button"
                                            onMouseDown={(e) => {
                                                e.preventDefault(); // 🔥 ngăn mất focus
                                                setFullName("");
                                                fullNameRef.current?.focus(); // giữ focus
                                            }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <ClearIcon />
                                        </button>
                                    )}
                                </div>

                                {/* ĐẶT CẢNH BÁO Ở ĐÂY */}
                                {fullName.length > 0 && /[^a-zA-ZÀ-ỹ\s]/.test(fullName) && (
                                    <p className="text-xs text-red-500 mt-1">
                                        Tên không được chứa số hoặc ký tự đặc biệt
                                    </p>
                                )}
                            </div>


                            {/* PHONE */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <PhoneIcon />
                                        <h3 className="text-black">Số điện thoại</h3>
                                    </div>
                                </div>

                                <div className="w-full">

                                    <div className="w-full relative">
                                        <div className="relative w-full h-[38px] mt-4">
                                            <input
                                                ref={phoneRef}
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => {
                                                    const formatted = formatPhone(e.target.value);
                                                    setPhone(formatted);
                                                    setPhoneVerified(false);
                                                    setOtpSent(false);
                                                }}
                                                placeholder="Ví dụ: 090 1234567"
                                                inputMode="tel"
                                                autoComplete="tel"
                                                maxLength={11}
                                                pattern="(\+84|0)[0-9]{9}"
                                                className="w-full h-[38px] pl-3 pr-[130px] border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                            />

                                            {phone && (
                                                <button
                                                    type="button"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault(); // 🔥 ngăn mất focus
                                                        setPhone("");
                                                        phoneRef.current?.focus(); // giữ focus
                                                    }}
                                                    className="absolute pr-[95px] right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    <ClearIcon />
                                                </button>
                                            )}
                                        </div>

                                        {!phoneVerified && (
                                            <button
                                                onClick={sendOtp}
                                                disabled={countdown > 0}
                                                className={`absolute w-[95px] h-full right-0 top-0 text-sm border hover:border-r rounded-r-md font-medium
                                                    ${countdown
                                                        ? "text-gray-400 cursor-not-allowed bg-gray-100"
                                                        : "text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                                    }`}
                                            >
                                                {countdown ? formatTime(countdown) : "Gửi OTP"}
                                            </button>
                                        )}
                                    </div>

                                    {phoneVerified && (
                                        <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
                                            <VerifiedOutlinedIcon fontSize="small" />
                                            Đã xác minh
                                        </div>
                                    )}

                                    {/* OTP */}
                                    {otpSent && !phoneVerified && (
                                        <div className="w-full relative mt-3">
                                            <div className="relative w-full h-[38px] mt-4">
                                                <input
                                                    ref={otpRef}
                                                    type="text"
                                                    value={otp}
                                                    onChange={(e) => {
                                                        // Chỉ cho nhập số
                                                        const value = e.target.value.replace(/\D/g, "");
                                                        setOtp(value);
                                                    }}
                                                    placeholder="Nhập mã OTP"
                                                    inputMode="numeric"
                                                    autoComplete="one-time-code"
                                                    maxLength={6}
                                                    pattern="[0-9]{6}"
                                                    className="w-full h-[38px] pl-3 pr-[130px] border rounded-md outline-none focus:ring-1 focus:ring-blue-400"
                                                />

                                                {otp && (
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault(); // 🔥 ngăn mất focus
                                                            setOtp("");
                                                            otpRef.current?.focus(); // giữ focus
                                                        }}
                                                        className="absolute pr-[95px] right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        <ClearIcon />
                                                    </button>
                                                )}
                                            </div>

                                            <button
                                                onClick={verifyOtp}
                                                className="absolute w-[95px] h-full right-0 top-0 text-sm border hover:border-r rounded-r-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
                                            >
                                                Xác minh
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ADDRESS */}
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <HomeWorkIcon />
                                        <h3 className="text-black">Địa chỉ</h3>
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <textarea
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows={3}
                                        placeholder="Ví dụ: 25 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM"
                                        autoComplete="shipping street-address"
                                        minLength={10}
                                        maxLength={300}
                                        className="w-full h-[90px] border rounded-md pl-2.5 pr-1.5 py-2 resize-none overflow-y-auto outline-none focus:ring-1 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            {/* DEFAULT */}
                            <div className="w-full">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={isDefault}
                                        onChange={(e) =>
                                            setIsDefault(e.target.checked)
                                        }
                                        className="accent-blue-500 scale-125"
                                    />
                                    <span className="h-full flex items-center pb-1">
                                        Đặt làm địa chỉ mặc định
                                    </span>
                                </label>
                            </div>

                            {/* SAVE */}
                            <div className="w-full mt-1 flex items-center justify-center">
                                <button
                                    onClick={handleSave}
                                    disabled={!canSave}
                                    className={`w-[200px] h-full px-3 py-2 text-md  font-medium shadow rounded
                                         ${canSave
                                            ? "text-white bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 hover:brightness-110 active:brightness-95 transition border-b-2 border-blue-500 "
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    Lưu địa chỉ
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AccountAddressPage;
