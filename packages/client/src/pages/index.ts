// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./CartPage/CartItem";
export * from "./CartPage";
export * from "./CatalogPage/CatalogPage";
export * from "./CatalogPage/NewCategoryPage";
export * from "./MainPage";
export * from "./OrderPage/OrderListPage";
export * from "./OrderPage/OrderPage";
export * from "./OtherPage/NotFoundPage";
export * from "./ProductPage/LikeProductPage";
export * from "./ProductPage/NewProductPage";
export * from "./ProductPage/ProductInfoPage";
export * from "./ProductPage/ProductListPage";
export * from "./ProductPage/SearchProductListPage";
export * from "./ProductPage/UpdateProductPage";
export * from "./SingPage/SingInPage";
export * from "./SingPage/SingOutPage";
export * from "./SingPage/SingUpPage";
export * from "./UserPage/UpdateProfilePage";
export * from "./UserPage/UpdateProfilePage/UpdateGeneralUserForm";
export * from "./UserPage/UpdateProfilePage/UpdatePasswordUserForm";
// @endindex
