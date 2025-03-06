// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./CardProduct";
export * from "./CatalogView";
export * from "./Form";
export * from "./Layout";
export * from "./ui";
// @endindex
