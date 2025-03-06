// @index('./**/index.ts', f => `export * from  '${f.path.split('/').slice(0, -1).join('/')}';`)
export * from "./AppContext";
export * from "./TrpcContext";
// @endindex
