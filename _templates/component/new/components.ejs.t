---
inject: true
append: true
to: src/components/index.ts
sh: yarn eslint --fix src/components/index.ts
---
export * from './<%=Name%>'