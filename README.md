# Thomas Du · 个人作品集

网站地址：https://thomasdu.me
（由 GitHub Pages 托管；仓库根目录的 `CNAME` 文件指定了这个域名，不要删除）

用纯 HTML、CSS 和 JavaScript 写成，不需要构建工具和依赖。

## 目录结构

```
portfolio/
├── index.html          # 主页面（首屏 / 关于 / 作品 / 技能 / 联系）
├── 404.html            # 404 页面
├── css/style.css       # 全部样式；顶部 :root 里的变量用来统一调整配色和字体（暖白 + 墨色 + 红色强调）
├── js/main.js          # 作品数据（PROJECTS）+ 菜单、主题切换等交互
├── assets/
│   ├── images/         # 头像 avatar.jpg、favicon.svg、分享封面 og-cover.png
│   ├── projects/       # 作品封面图（fitseat.jpg、rhythm-arcade.jpg …）
│   └── resume.pdf      # （可选）简历
├── robots.txt
└── .gitignore
```

## 本地预览

```bash
cd portfolio
```

```bash
python3 -m http.server 8000
```

然后打开 http://localhost:8000 ；也可以直接双击 `index.html`。

## 修改内容

1. **个人信息**：在 `index.html` 中搜索 `you@example.com`、`your-username` 并替换。
2. **作品**：编辑 `js/main.js` 顶部的 `PROJECTS` 数组，封面图放进 `assets/projects/`。作品以手账本形式展示：每个对开页两个作品，向下滚动翻页；顺序就是数组顺序。
3. **配色**：修改 `css/style.css` 顶部的 `--red`、`--cyan`、`--ink` 等变量；作品卡片颜色在 `PROJECTS` 的 `color` 字段里选。
4. **中英文**：页面文字在 `js/main.js` 的 `I18N` 里（`zh` / `en` 两套），HTML 里用 `data-i18n="key"` 标记；作品的英文写在每个作品的 `en` 字段里。
5. **头像 / 简历**：把文件放到 `assets/images/avatar.jpg` 和 `assets/resume.pdf`。

## 部署

- **GitHub Pages**：推送到仓库，然后在 Settings → Pages 里选择分支。
- **Netlify / Vercel**：导入仓库即可，构建命令留空，发布目录选择项目根目录。
