// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./adminRoute";
export * from "./authorizationRoute";
export * from "./main";
export * from "./productRoute";
// @endindex
