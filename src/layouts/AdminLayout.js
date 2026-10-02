import React from 'react';

const AdminLayout = ({ children, menuItems, isTitle, handleNavigation, mockAdmin, currentMenuLabel }) => {
    return (
        <div className="w-full h-screen border bg-white overflow-hidden">
            <div className="flex h-full">

                {/* --- SIDEBAR CHUYỂN VÀO ĐÂY --- */}
                <div className="w-[300px] h-full py-5 bg-gray-100 border-r flex-shrink-0">
                    <div className="w-full px-5">
                        <div className="w-full h-[50px] flex items-center border-b-2">
                            <h1 className="font-bold text-xl text-gray-800">Admin</h1>
                        </div>
                    </div>

                    <div className="w-full px-2">
                        <div className="w-full h-[calc(100vh-120px)] px-3 my-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            <ul className="grid grid-cols-1 gap-2 pb-5">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id, item.path)}
                                        className={`w-full h-[50px] cursor-pointer px-5 py-2 font-medium shadow-sm border border-gray-200 flex items-center rounded transition-all 
                                            ${isTitle === item.id
                                                ? 'text-yellow-500 bg-red-50 border-l-4 border-l-yellow-500'
                                                : 'hover:text-yellow-500 bg-white text-gray-600 '
                                            }`}
                                    >
                                        <span className="mr-4">{item.icon}</span>
                                        <span className="text-sm">{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- PHẦN NỘI DUNG CHÍNH --- */}
                <main className="flex-1 h-full px-5 py-5 bg-white overflow-auto">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default AdminLayout;