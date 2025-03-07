// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./CatalogPage/CatalogPage";
export * from "./CatalogPage/NewCategoryPage";
export * from "./MainPage";
export * from "./OtherPage/NotFoundPage";
export * from "./ProductPage/NewProductPage";
export * from "./ProductPage/ProductInfoPage";
export * from "./ProductPage/ProductListPage";
export * from "./ProductPage/UpdateProductPage";
export * from "./SingPage/SingInPage";
export * from "./SingPage/SingOutPage";
export * from "./SingPage/SingUpPage";
// @endindex
