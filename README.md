# HardingHang.github.io

Hang Haitian 的个人主页与技术博客，使用 Astro 构建并通过 GitHub Pages 发布。

## 本地开发

```bash
npm install
npm run dev
```

常用检查：

```bash
npm run check
npm run build
npm run preview
```

## 内容维护

### 新增博客

复制 `src/content/blog/_template.md`，使用英文文件名作为 URL，例如：

```text
src/content/blog/evaluating-open-source-catalogs.md
```

完成后把 frontmatter 中的 `draft` 改为 `false`。正式文章会自动进入：

- `/blog/` 列表；
- 首页最近文章；
- `/rss.xml`；
- Sitemap。

允许的分类定义在 `src/content.config.ts`：

- `Systems`
- `AI Systems`
- `Research`
- `Engineering`

### 新增项目

在 `src/content/projects/` 新建 Markdown。项目元数据经过 schema 校验，
内容使用普通 Markdown 编写。

### 修改个人信息

- 站点标题、GitHub 地址：`src/data/site.ts`
- 首页介绍与关注方向：`src/pages/index.astro`
- About：`src/pages/about.astro`
- 全局配色与排版：`src/styles/global.css`

## GitHub Pages 发布

1. 仓库使用 `main` 或现有的 `master` 作为默认分支；
2. 在 GitHub 打开 `Settings → Pages`；
3. 将 Source 设置为 **GitHub Actions**；
4. 推送到 `main` 或 `master` 后，`.github/workflows/deploy.yml` 会自动构建和发布。

GitHub Free 用户需要将 Pages 源仓库设为 public。
