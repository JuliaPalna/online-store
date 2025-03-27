// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./getProductInfoRoute";
export * from "./getProductListByCategoryRoute";
export * from "./getUpdateProductRoute";
// @endindex

export * from "./constants";
