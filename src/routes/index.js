import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/home';

import StaplesPage from '../pages/staples';
import GroceriesPage from '../pages/groceries';
import RankingsPage from '../pages/rankings';

import ProductDetailPage from '../pages/productDetail';
import CartPage from '../pages/cart';

import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import AccountProfilePage from '../pages/account/Profile';
import AccountRewardsPage from '../pages/account/Rewards';
import AccountOrdersPage from '../pages/account/Orders';
import AccountAddressPage from '../pages/account/Address';
import AccountFavoritesPage from '../pages/account/Favorites';
import AccountSettingsPage from '../pages/account/Settings';

import AdminPage from '../pages/admin'
import AdminBannersPage from '../pages/admin/banners';
import AdminCategoriesPage from '../pages/admin/categories';
import AdminCustomersPage from '../pages/admin/customers';
import AdminOrdersPage from '../pages/admin/orders';
import AdminProductsPage from '../pages/admin/products';
import AdminSettingsPage from '../pages/admin/settings';
import AdminLoginPage from '../pages/admin/auth/Login';
import AdminDashboardPage from '../pages/admin/dashboard';
import AdminAboutPage from '../pages/admin/about';
import AdminContactPage from '../pages/admin/contact';
import AdminAdvertisePage from '../pages/admin/advertise';
import AdminPrivacyPage from '../pages/admin/privacy';
import AdminTermsPage from '../pages/admin/terms';

import NotFoundPage from '../pages/notFound';

const AppRoutes = () => {

    return (
        <Routes>
            {/* Home - page */}
            <Route path="/" element={<HomePage />} />

            {/* Auth - page */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Danh mục - page */}
            <Route path="/luong-thuc" element={<StaplesPage />} />
            <Route path="/thuc-pham" element={<GroceriesPage />} />
            <Route path="/bang-xep-hang" element={<RankingsPage />} />

            {/* Giỏ hàng - page */}
            <Route path="/cart" element={<CartPage />} />

            {/* Chi tiết sản phẩm - page */}
            <Route path="/:category/:id" element={<ProductDetailPage />} />

            {/* Danh mục Account - page */}
            <Route path="/account/profile" element={<AccountProfilePage />} />
            <Route path="/account/rewards" element={<AccountRewardsPage />} />
            <Route path="/account/orders" element={<AccountOrdersPage />} />
            <Route path="/account/address" element={<AccountAddressPage />} />
            <Route path="/account/favorites" element={<AccountFavoritesPage />} />
            <Route path="/account/settings" element={<AccountSettingsPage />} />

            {/* Admin - page */}
            <Route path="/admin" element={<AdminPage />}>
                {/* Định tuyến mặc định cho /admin */}
                <Route index element={<Navigate to="dashboard" replace />} />

                <Route path="dashboard" element={<AdminDashboardPage />} />
                <Route path="banners" element={<AdminBannersPage />} />
                <Route path="categories" element={<AdminCategoriesPage />} />
                <Route path="customers" element={<AdminCustomersPage />} />
                <Route path="orders" element={<AdminOrdersPage />} />
                <Route path="products" element={<AdminProductsPage />} />
                <Route path="about" element={<AdminAboutPage />} />
                <Route path="Contact" element={<AdminContactPage />} />
                <Route path="advertise" element={<AdminAdvertisePage />} />
                <Route path="privacy" element={<AdminPrivacyPage />} />
                <Route path="terms" element={<AdminTermsPage />} />
                <Route path="settings" element={<AdminSettingsPage />} />
            </Route>

            {/* Đăng nhập Admin */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/*Không tìm thấy trang 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    );
};

export default AppRoutes;