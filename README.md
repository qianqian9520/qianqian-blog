# 千千的星际日志

基于 [Hexo](https://hexo.io/) + [Butterfly](https://butterfly.js.org/) 的个人博客。

- 线上地址：https://qianqian9520.top
- 源码部署：GitHub Pages (`gh-pages` 分支)

## 本地开发

```bash
npm install
npx hexo server
```

## 发布

```bash
npx hexo clean && npx hexo generate && npx hexo deploy
```

## DNS 配置

| 类型 | 主机记录 | 记录值 |
| --- | --- | --- |
| CNAME | www | qianqian9520.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
