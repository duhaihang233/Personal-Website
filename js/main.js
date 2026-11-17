/* =========================================================
   作品数据 —— 新增/修改作品只需编辑这个数组
   image 放在 assets/projects/ 目录下；链接留空则不显示
   ========================================================= */
const PROJECTS = [
  {
    title: "项目一",
    description: "一两句话描述这个项目解决了什么问题、你负责了什么。",
    tags: ["React", "TypeScript"],
    image: "assets/projects/project-1.jpg",
    demo: "#",
    source: "#",
  },
  {
    title: "项目二",
    description: "一两句话描述这个项目解决了什么问题、你负责了什么。",
    tags: ["Figma", "UI 设计"],
    image: "assets/projects/project-2.jpg",
    demo: "#",
    source: "",
  },
  {
    title: "项目三",
    description: "一两句话描述这个项目解决了什么问题、你负责了什么。",
    tags: ["Node.js", "API"],
    image: "assets/projects/project-3.jpg",
    demo: "",
    source: "#",
  },
];

/* ---------- 渲染作品卡片 ---------- */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const links = [
      p.demo && `<a href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">在线预览 →</a>`,
      p.source && `<a href="${escapeHTML(p.source)}" target="_blank" rel="noopener">源代码</a>`,
    ].filter(Boolean).join("");

    return `
      <article class="project-card">
        <img class="project-thumb" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} 截图"
             loading="lazy" onerror="this.style.visibility='hidden'" />
        <div class="project-body">
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.description)}</p>
          <ul class="tag-list">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
          ${links ? `<div class="project-links">${links}</div>` : ""}
        </div>
      </article>`;
  }).join("");
}

/* ---------- 移动端菜单 ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  };

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
}

/* ---------- 深色/浅色切换（记住用户选择） ---------- */
function initTheme() {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

/* ---------- 滚动时高亮当前导航项 ---------- */
function initActiveLink() {
  const links = document.querySelectorAll(".nav-menu a[href^='#']");
  const sections = [...links]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------- 启动 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initTheme();
  initActiveLink();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
