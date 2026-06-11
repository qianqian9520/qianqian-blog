---
title: 用 Hexo + Butterfly 搭建个人博客
date: 2026-06-10 14:30:00
categories:
  - tech
tags:
  - Hexo
  - Butterfly
  - GitHub Pages
---

## 为什么选择 Hexo + Butterfly

Hexo 是轻量、快速的静态博客框架；Butterfly 主题则提供了美观的首页大图、侧边栏卡片和本地搜索，非常适合个人博客。

## 部署到 GitHub Pages

1. 安装 `hexo-deployer-git`
2. 在 `_config.yml` 中配置 `deploy` 指向 `gh-pages` 分支
3. 在 `source/CNAME` 写入自定义域名
4. 执行 `hexo deploy` 即可发布

## 自定义域名

在 DNS 控制台添加记录：

- **CNAME**：`www` → `qianqian9520-pixel.github.io`
- **A 记录**（根域名）：指向 GitHub Pages 的 IP 地址

就像 Cooper 穿越虫洞一样，一次配置，全宇宙可访问。
