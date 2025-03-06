// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./MainPage";
export * from "./NewCategoryPage";
export * from "./NewProductPage";
export * from "./ProductInfoPage";
export * from "./ProductsListPage";
export * from "./SingInPage";
export * from "./SingOutPage";
export * from "./SingUpPage";
// @endindex
