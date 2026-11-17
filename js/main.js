/* =========================================================
   作品数据 —— 新增/修改作品只需编辑这个数组（按数组顺序显示）
   title     项目名            subtitle  一句话副标题
   label     卡片左侧竖排标签   color     卡片底色：cyan | ink | pink | lime | cream
   year / duration / team      显示在标题下的信息行（可留空）
   field     涉及的领域         description  简介
   image     封面图（assets/projects/ 下）
   tags      工具或关键词       links     [{ text, url }]，没有可留空数组
   ========================================================= */
const PROJECTS = [
  {
    title: "FitSeat",
    subtitle: "可交互的智能坐垫",
    label: "Health",
    color: "cyan",
    year: "2025",
    duration: "2 个月",
    field: "设计 + 机械工程、生物医学工程与健康",
    description:
      "久坐会带来腰背疼痛，而现有坐垫固定、支撑不足、容易变形。FitSeat 是一款四分区自适应智能坐垫：模块化气囊、传感器驱动的坐姿矫正、可折叠收纳，并配套支持 AI 手势和按摩调节的 App。",
    image: "assets/projects/fitseat.jpg",
    tags: ["Spline", "3D 建模", "产品设计"],
    links: [],
  },
  {
    title: "Home-Scale Rhythm Arcade",
    subtitle: "家用尺寸的音游街机控制器",
    label: "Interaction",
    color: "ink",
    year: "2024–2025",
    duration: "3 个月",
    field: "设计 + 电子工程、媒体与交互",
    description:
      "把街机音游的手感搬回家。面板传感器识别点击、触摸和滑动，通过 USB 输入电脑，带来与节拍同步的画面和声音反馈；支架高度和面板倾角可调，适应不同身高，成本低、可 DIY。",
    image: "assets/projects/rhythm-arcade.jpg",
    tags: ["传感器", "电子焊接", "人体工学"],
    links: [{ text: "观看 10 秒演示", url: "https://youtu.be/nccHetU1E48" }],
  },
  {
    title: "Bio-Inspired Pipe-Cleaning Robot",
    subtitle: "仿生管道清洁机器人",
    label: "Robotics",
    color: "pink",
    year: "2025",
    duration: "1 个月",
    field: "设计 + 机械工程与机器人",
    description:
      "家里的下水道常被头发和油污堵住，硬质工具又会卡在 U 型弯。受蚯蚓蠕动启发，模块化节段交替伸长、抓壁、收缩，始终贴着管壁通过弯道；用 3D 打印原型验证了蠕动运动和节段连接。",
    image: "assets/projects/pipe-robot.jpg",
    tags: ["Onshape", "Illustrator", "Bambu Lab"],
    links: [],
  },
  {
    title: "Connect Hub",
    subtitle: "Grow, Gather, Guide",
    label: "Space",
    color: "lime",
    year: "2025",
    duration: "3 周",
    team: "与 Emma 合作",
    field: "设计 + 建筑、可持续与室内设计",
    description:
      "在 Stanford Mall 实地调研后，发现公共区域利用率低、餐饮布局分散、缺少中心。方案将屋顶农场与一层农场直供店垂直连接（Grow），设置共享座位和快闪活动（Gather），并用一站式 App 让参与种植换取餐饮优惠（Guide）。",
    image: "assets/projects/connect-hub.jpg",
    tags: ["实体模型", "实地调研", "App 设计"],
    links: [],
  },
  {
    title: "DIY Guitar",
    subtitle: "自己设计的 Telecaster",
    label: "Music",
    color: "cream",
    year: "2025",
    duration: "3 周",
    field: "设计 + 艺术、音乐科技与电子",
    description:
      "买不到满意颜色的吉他，就自己做一把：白、金和克莱因蓝。CNC 加工的桤木琴身，经过喷漆加闪粉、硝基漆、焊接拾音器、组装和调校，并换用现代琴桥，颜色更搭、音准更好。",
    image: "assets/projects/diy-guitar.jpg",
    tags: ["喷涂", "焊接", "组装调校"],
    links: [],
  },
  {
    title: "Wood Bookmark",
    subtitle: "学校职业日文创书签",
    label: "Graphics",
    color: "cyan",
    year: "2025",
    duration: "1 周",
    field: "设计 + 艺术、图形与文化",
    description:
      "为学校职业日设计的木质书签，用图形表达“职业”与“灵感”。在 Onshape 中建模，为 23 位嘉宾分别刻上名字，最后激光切割完成。",
    image: "assets/projects/wood-bookmark.jpg",
    tags: ["Onshape", "激光切割"],
    links: [],
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

  const palette = ["cyan", "ink", "pink", "lime", "cream"];

  grid.innerHTML = PROJECTS.map((p, i) => {
    const color = palette.includes(p.color) ? p.color : palette[i % palette.length];
    const num = String(i + 1).padStart(2, "0");
    const meta = [p.year, p.duration, p.team].filter(Boolean).map(escapeHTML).join(" · ");
    const links = (p.links || [])
      .map((l) => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.text)}</a>`)
      .join("");

    return `
      <article class="project-card card-${color}">
        <span class="card-label">${num}${p.label ? ` — ${escapeHTML(p.label)}` : ""}</span>
        <h3>${escapeHTML(p.title)}</h3>
        ${p.subtitle ? `<p class="card-sub">${escapeHTML(p.subtitle)}</p>` : ""}
        ${meta ? `<p class="card-meta">${meta}</p>` : ""}
        <img class="project-thumb" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}"
             loading="lazy" onerror="this.onerror=null;this.src='assets/images/placeholder.svg'" />
        <p class="card-desc">${escapeHTML(p.description)}</p>
        ${p.field ? `<p class="card-meta">${escapeHTML(p.field)}</p>` : ""}
        ${p.tags && p.tags.length ? `<ul class="tag-list">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>` : ""}
        ${links ? `<div class="project-links">${links}</div>` : ""}
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
