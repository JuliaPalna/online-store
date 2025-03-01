// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./CardProduct";
export * from "./Layout";
export * from "./ui";
// @endindex
