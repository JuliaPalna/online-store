// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./authorizationRoute";
export * from "./categoryRoute";
export * from "./main";
export * from "./productRoute";
export * from "./userRote";
// @endindex
