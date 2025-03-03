// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./MainPage";
export * from "./NewProductPage";
export * from "./ProductInfoPage";
export * from "./ProductsListPage";
export * from "./SingInPage";
export * from "./SingUpPage";
// @endindex
