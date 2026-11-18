/* =========================================================
   作品数据 —— 新增/修改作品只需编辑这个数组（按数组顺序显示）
   slug      网址里用的英文名（详情页地址是 #work-<slug>，详情内容在 js/details.js）
   title     项目名            subtitle  一句话副标题
   label     卡片左侧竖排标签   color     卡片底色：cyan | ink | pink | lime | cream
   year / duration / team      显示在标题下的信息行（可留空）
   field     涉及的领域         description  简介
   image     封面图（assets/projects/ 下）
   tags      工具或关键词       links     [{ text, url }]，没有可留空数组
   en        英文版内容：subtitle / duration / team / field / description / tags / links
             （没写的字段会沿用中文版，例如 title、year、label）
   ========================================================= */
const PROJECTS = [
  {
    slug: "fitseat",
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
    en: {
      subtitle: "An interactive smart seat cushion",
      duration: "2 months",
      field: "Design + Mechanical Engineering, Biomedical Engineering & Health",
      description:
        "Prolonged sitting causes back pain, and today's cushions are fixed, under-supportive and quick to deform. FitSeat is a four-zone adaptive smart cushion: modular air cells, sensor-driven posture correction, a foldable frame, and an app with AI gesture control and adjustable massage.",
      tags: ["Spline", "3D modeling", "Product design"],
    },
  },
  {
    slug: "rhythm-arcade",
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
    en: {
      subtitle: "A home-scale rhythm arcade game controller",
      duration: "3 months",
      field: "Design + Electrical Engineering, Media & Interaction",
      description:
        "Arcade feel, at home. Panel sensors read taps, touches and slides and send USB input to a PC for beat-synced visual and audio feedback. The stand's height and tilt adjust for different statures, and the build is low-cost and DIY-friendly.",
      tags: ["Sensors", "Soldering", "Ergonomics"],
      links: [{ text: "Watch the 10s demo", url: "https://youtu.be/nccHetU1E48" }],
    },
  },
  {
    slug: "pipe-robot",
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
    en: {
      subtitle: "A bio-inspired pipe-cleaning robot",
      duration: "1 month",
      field: "Design + Mechanical Engineering & Robotics",
      description:
        "Home drains clog with hair and grease, and rigid tools jam at U-bends. Inspired by earthworm peristalsis, modular segments extend, grip and contract while keeping wall contact through curves. A 3D-printed prototype validated the motion and segment coupling.",
    },
  },
  {
    slug: "connect-hub",
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
    en: {
      duration: "3 weeks",
      team: "with Emma",
      field: "Design + Architecture, Sustainability & Interior Design",
      description:
        "On-site research at Stanford Mall found underused public zones and a scattered dining layout with no central hub. The design links a rooftop farm to a farm-direct store below (Grow), adds shared seating and pop-up activities (Gather), and a one-stop app that trades farm volunteering for dining rewards (Guide).",
      tags: ["Physical model", "Field research", "App design"],
    },
  },
  {
    slug: "diy-guitar",
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
    en: {
      subtitle: "A self-designed Telecaster",
      duration: "3 weeks",
      field: "Design + Art, Music Technology & Electronics",
      description:
        "I couldn't find a guitar in a color I liked, so I built one in white, gold and Klein blue. A CNC-cut alder body went through sparkle-flake paint, nitro lacquer, pickup soldering, assembly and setup, with a modern bridge for a better color match and intonation.",
      tags: ["Spray finishing", "Soldering", "Setup"],
    },
  },
  {
    slug: "wood-bookmark",
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
    en: {
      subtitle: "Wood bookmarks for the school Career Fair",
      duration: "1 week",
      field: "Design + Art, Graphics & Culture",
      description:
        "Wooden bookmarks for the school Career Fair, with graphics for career and inspiration. Modeled in Onshape, personalized with the names of 23 guests, then laser cut.",
      tags: ["Onshape", "Laser cutting"],
    },
  },
];

/* =========================================================
   中英文案 —— data-i18n="key" 的元素会被替换为对应文字（可含 <em>），
   data-i18n-aria="key" 会替换 aria-label
   ========================================================= */
const I18N = {
  zh: {
    pageTitle: "Thomas Du · 个人作品集",
    pageDesc: "Thomas Du 的个人作品集：项目展示、技能与联系方式。",
    skip: "跳到主要内容",
    home: "Thomas Du 首页",
    navMain: "主导航",
    navFooter: "页脚导航",
    navWork: "作品",
    navAbout: "关于",
    navSkills: "技能",
    navContact: "联系",
    langBtn: "EN",
    langAria: "Switch to English",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    heroHello: "你好，我是",
    heroSub: "做<em>有用</em>又<em>有趣</em>的东西。",
    heroLead: "一句话介绍自己，例如：前端开发者 / 设计师，专注于打造简洁、好用的数字产品。",
    heroContact: "联系我",
    toWork: "向下查看作品",
    photo: "Thomas Du 的照片",
    workTitle: "作品",
    pager: "翻页",
    pagerHint: "向下滚动翻页 ↓",
    spread: (k) => `第 ${k} 个对开页`,
    tbc: "未完待续…",
    halftone: "Thomas Du 的网点肖像",
    aboutBody:
      "我是一个热爱工业设计的高中生，喜欢把想法变成真正能用的东西。从自适应的人体工学坐垫，到受生物启发的小装置，我把 3D 打印、焊接和一点代码结合起来，再不断迭代，直到它简单、可靠又好玩。",
    resume: "下载简历（PDF）",
    skillsTitle: "技能",
    contactTitle: "一起<em>聊聊</em>？",
    contactLead: "欢迎合作或交流，通过以下方式找到我。",
    email: "发邮件",
    openNote: (title) => `打开 ${title} 详情`,
    noteMore: "展开看看 ↗",
    close: "关闭",
    metaYear: "年份",
    metaDuration: "时长",
    metaTeam: "合作",
    metaField: "领域",
    metaTools: "工具",
    prev: "上一个",
    next: "下一个",
  },
  en: {
    pageTitle: "Thomas Du · Portfolio",
    pageDesc: "Portfolio of Thomas Du: design and engineering projects, skills and contact.",
    skip: "Skip to main content",
    home: "Thomas Du home",
    navMain: "Main navigation",
    navFooter: "Footer navigation",
    navWork: "Work",
    navAbout: "About",
    navSkills: "Skills",
    navContact: "Contact",
    langBtn: "中",
    langAria: "切换到中文",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroHello: "Hello, I'm",
    heroSub: "Making things that are <em>useful</em> and <em>fun</em>.",
    heroLead: "One-line intro, e.g. a designer and maker who builds simple, useful things.",
    heroContact: "Get in touch",
    toWork: "Scroll to projects",
    photo: "Photo of Thomas Du",
    workTitle: "Projects",
    pager: "Page navigation",
    pagerHint: "Scroll to turn the page ↓",
    spread: (k) => `Spread ${k}`,
    tbc: "To be continued…",
    halftone: "Halftone portrait of Thomas Du",
    aboutBody:
      "I'm a high-school industrial-design nerd who turns ideas into working things. From an adaptive ergonomic seat to bio-inspired gizmos, I blend 3D printing, soldering and a little code, then iterate until it's simple, reliable and fun.",
    resume: "Download résumé (PDF)",
    skillsTitle: "Skills",
    contactTitle: "Drop me a <em>line</em>.",
    contactLead: "Open to collaborations and conversations. Here's where to find me.",
    email: "Email me",
    openNote: (title) => `Open ${title} details`,
    noteMore: "Open it up ↗",
    close: "Close",
    metaYear: "Year",
    metaDuration: "Duration",
    metaTeam: "Team",
    metaField: "Field",
    metaTools: "Tools",
    prev: "Previous",
    next: "Next",
  },
};

function detectLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "zh" || saved === "en") return saved;
  } catch (e) {}
  return /^zh/i.test(navigator.language || "") ? "zh" : "en";
}
let LANG = detectLang();
const t = (key) => I18N[LANG][key];

// 作品字段：英文模式下优先取 p.en 里的值
const field = (p, key) => (LANG === "en" && p.en && p.en[key] !== undefined ? p.en[key] : p[key]);

function applyI18n() {
  const root = document.documentElement;
  root.lang = LANG === "zh" ? "zh-CN" : "en";
  root.setAttribute("data-lang", LANG);
  document.title = t("pageTitle");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("pageDesc"));
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = t(el.dataset.i18nAria);
    if (typeof v === "string") el.setAttribute("aria-label", v);
  });
}

/* ---------- 工具 ---------- */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* ---------- 手账本：每个对开页放两个作品 ---------- */
const NOTE_COLORS = ["cyan", "ink", "pink", "lime", "cream"];
const NOTE_TILT = [-1.6, 1.3, -0.9, 1.8, -1.3, 0.8];
const TAPES = ["", "tape-cyan", "tape-lime"];

function noteHTML(p, i) {
  if (!p) {
    return `<div class="note note-cream note-empty" style="--r:1deg"><span class="tape"></span><p>${t("tbc")}</p></div>`;
  }
  const color = NOTE_COLORS.includes(p.color) ? p.color : NOTE_COLORS[i % NOTE_COLORS.length];
  const num = String(i + 1).padStart(2, "0");
  const meta = [p.year, field(p, "duration"), field(p, "team")].filter(Boolean).map(escapeHTML).join(" · ");
  const subtitle = field(p, "subtitle");
  const tags = field(p, "tags") || [];
  const links = (field(p, "links") || [])
    .map((l) => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.text)}</a>`)
    .join("");
  return `
    <article class="note note-${color}" data-index="${i}" style="--r:${NOTE_TILT[i % NOTE_TILT.length]}deg;--pr:${i % 2 ? -1.5 : 1.2}deg">
      <span class="tape ${TAPES[i % TAPES.length]}" style="--tr:${i % 2 ? 4 : -3}deg"></span>
      <button type="button" class="note-open" aria-label="${escapeHTML(t("openNote")(p.title))}"><span>${t("noteMore")}</span></button>
      <div class="note-top"><span>No.${num}${p.label ? ` · ${escapeHTML(p.label)}` : ""}</span>${meta ? `<span>${meta}</span>` : ""}</div>
      <figure class="note-photo"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}" loading="lazy"
        onerror="this.onerror=null;this.src='assets/images/placeholder.svg'" /></figure>
      <div class="note-head">
        <h3>${escapeHTML(p.title)}</h3>
        ${subtitle ? `<p class="note-sub">${escapeHTML(subtitle)}</p>` : ""}
      </div>
      <p class="note-desc">${escapeHTML(field(p, "description"))}</p>
      ${tags.length ? `<ul class="tag-list">${tags.map((x) => `<li>${escapeHTML(x)}</li>`).join("")}</ul>` : ""}
      ${links ? `<div class="note-links">${links}</div>` : ""}
    </article>`;
}

// 第 n 页（从 0 开始）：偶数页在 A 侧（左/上），奇数页在 B 侧（右/下）
function pageHTML(n, extraClass = "") {
  const side = n % 2 === 0 ? "side-a" : "side-b";
  return `<div class="page ${side} ${extraClass}" data-page="${n}">
      ${noteHTML(PROJECTS[n], n)}
      <span class="page-no">— ${String(n + 1).padStart(2, "0")} —</span>
    </div>`;
}

function renderJournal() {
  const book = document.getElementById("book");
  if (!book) return null;
  const spreads = Math.max(1, Math.ceil(PROJECTS.length / 2));
  const lastPage = spreads * 2 - 1;

  // 底页：第一页（A 侧）和最后一页（B 侧）；中间每张翻页纸：正面是 B 侧，背面是下一个对开的 A 侧
  let html = pageHTML(0, "page-a base") + pageHTML(lastPage, "page-b base");
  for (let i = 0; i < spreads - 1; i++) {
    html += `<div class="leaf" data-leaf="${i}">${pageHTML(2 * i + 1)}${pageHTML(2 * i + 2)}</div>`;
  }
  html += `<span class="spine" aria-hidden="true"></span><span class="ribbon" aria-hidden="true"></span>`;
  book.innerHTML = html;
  return spreads;
}

let refreshJournal = () => {};

function initJournal() {
  const track = document.getElementById("journal-track");
  const sticky = track && track.querySelector(".journal-sticky");
  const nav = document.getElementById("journal-nav");
  if (!track || !sticky || !document.getElementById("book")) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let spreads = 1, flips = 0, leaves = [], baseA = null, baseB = null;
  let count = null, dots = [], hint = null, seg = 0, current = -1;

  // 渲染书页和翻页导航（切换语言时会再次调用，结构不变，滚动位置保持）
  function build() {
    spreads = renderJournal();
    flips = spreads - 1;
    leaves = [...document.querySelectorAll(".leaf")];
    baseA = document.querySelector(".page-a.base");
    baseB = document.querySelector(".page-b.base");
    nav.innerHTML = `
      <span class="journal-count" aria-live="polite"></span>
      <span class="journal-dots">${Array.from({ length: spreads }, (_, k) =>
        `<button type="button" aria-label="${escapeHTML(t("spread")(k + 1))}"></button>`).join("")}</span>
      ${flips ? `<span class="journal-hint">${t("pagerHint")}</span>` : ""}`;
    count = nav.querySelector(".journal-count");
    dots = [...nav.querySelectorAll(".journal-dots button")];
    hint = nav.querySelector(".journal-hint");
    dots.forEach((d, k) =>
      d.addEventListener("click", () => {
        const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
        const top = track.getBoundingClientRect().top + window.scrollY - stickyTop + k * seg + 1;
        window.scrollTo({ top, behavior: reduceMotion.matches ? "auto" : "smooth" });
      })
    );
    current = -1;
  }

  function layout() {
    seg = window.innerHeight * 0.85; // 每翻一页需要滚动的距离
    const endHold = window.innerHeight * 0.3;
    track.style.height = `${sticky.offsetHeight + flips * seg + endHold}px`;
    update();
  }

  function setInert(el, hidden) {
    if (!el) return;
    if (hidden) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }

  function update() {
    const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
    const scrolled = stickyTop - track.getBoundingClientRect().top;
    const raw = Math.min(flips, Math.max(0, scrolled / seg));

    leaves.forEach((leaf, i) => {
      const u = raw - i;
      let f = easeInOut(clamp01((u - 0.15) / 0.7));
      if (reduceMotion.matches) f = u >= 0.5 ? 1 : 0;
      leaf.style.setProperty("--flip", f.toFixed(4));
      leaf.style.setProperty("--shade", (Math.sin(Math.PI * f) * 0.28).toFixed(3));
      leaf.style.zIndex = f < 0.5 ? 100 - i : 100 + i;
      // 看不到的那一面不能被键盘聚焦
      setInert(leaf.children[0], f >= 0.5);
      setInert(leaf.children[1], f < 0.5);
    });
    setInert(baseA, leaves.length && parseFloat(leaves[0].style.getPropertyValue("--flip")) >= 0.5);
    setInert(baseB, leaves.length && parseFloat(leaves[leaves.length - 1].style.getPropertyValue("--flip")) < 0.5);

    const k = Math.round(raw);
    if (k !== current) {
      current = k;
      count.textContent = `${String(k + 1).padStart(2, "0")} / ${String(spreads).padStart(2, "0")}`;
      dots.forEach((d, j) => d.setAttribute("aria-current", j === k ? "true" : "false"));
    }
    if (hint) hint.style.opacity = raw >= flips - 0.05 ? "0" : "1";
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", layout);

  build();
  layout();
  refreshJournal = () => { build(); update(); };
}

/* =========================================================
   作品详情页：点击便签 → 便签“揭下并展开”成整页 → 显示详情
   地址：#work-<slug>（可分享、可用浏览器返回键关闭）
   ========================================================= */
const L = (o) => (o ? (LANG === "en" && o.en !== undefined ? o.en : o.zh) : "");
let refreshDetail = () => {};

function detailHTML(i) {
  const p = PROJECTS[i];
  const d = (typeof DETAILS !== "undefined" && DETAILS[p.slug]) || { tools: [], sections: [] };
  const color = NOTE_COLORS.includes(p.color) ? p.color : NOTE_COLORS[i % NOTE_COLORS.length];
  const num = String(i + 1).padStart(2, "0");
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const meta = [
    [t("metaYear"), p.year],
    [t("metaDuration"), field(p, "duration")],
    [t("metaTeam"), field(p, "team")],
    [t("metaField"), field(p, "field")],
    [t("metaTools"), (d.tools || []).join(", ")],
  ].filter(([, v]) => v);
  const links = (field(p, "links") || [])
    .map((l) => `<a class="btn btn-solid" href="${escapeHTML(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.text)} ↗</a>`)
    .join("");
  const fig = (img, k) => `
    <figure class="detail-fig" style="--fr:${[-1.2, 0.9, -0.6, 1.4, -1, 0.7][k % 6]}deg">
      <img src="${escapeHTML(img.src)}" alt="${escapeHTML(L(img))}" loading="lazy" />
      <figcaption>${escapeHTML(L(img))}</figcaption>
    </figure>`;
  const sections = (d.sections || []).map((sec) => `
    <section class="detail-section">
      <h3 class="detail-h rough">${escapeHTML(L(sec.title))}</h3>
      ${sec.body ? `<p class="detail-body">${escapeHTML(L(sec.body))}</p>` : ""}
      ${sec.points ? `<ul class="detail-points">${sec.points.map((x) => `<li>${escapeHTML(L(x))}</li>`).join("")}</ul>` : ""}
      ${sec.images ? `<div class="detail-figs${sec.images.length === 1 ? " single" : ""}">${sec.images.map(fig).join("")}</div>` : ""}
    </section>`).join("");

  return `
    <header class="detail-head note-${color}">
      <div class="detail-inner">
        <p class="detail-no">No.${num}${p.label ? ` · ${escapeHTML(p.label)}` : ""}</p>
        <h2 class="detail-title" id="detail-title">${escapeHTML(p.title)}</h2>
        ${field(p, "subtitle") ? `<p class="detail-sub">${escapeHTML(field(p, "subtitle"))}</p>` : ""}
        <dl class="detail-meta">${meta.map(([k, v]) => `<div><dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd></div>`).join("")}</dl>
      </div>
    </header>
    <div class="detail-inner detail-content">
      <figure class="detail-hero"><img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}" /></figure>
      <p class="detail-lead">${escapeHTML(field(p, "description"))}</p>
      ${links ? `<p class="detail-links">${links}</p>` : ""}
      ${sections}
      <nav class="detail-pager" aria-label="${escapeHTML(t("pager"))}">
        <a href="#work-${prev.slug}" data-go="${PROJECTS.indexOf(prev)}"><span>← ${t("prev")}</span><b>${escapeHTML(prev.title)}</b></a>
        <a href="#work-${next.slug}" data-go="${PROJECTS.indexOf(next)}"><span>${t("next")} →</span><b>${escapeHTML(next.title)}</b></a>
      </nav>
    </div>`;
}

function initDetail() {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const outside = [document.querySelector(".site-header"), document.getElementById("main"), document.querySelector(".site-footer")];

  // 详情层：一张会动画的“便签纸” + 可滚动的内容
  const root = document.createElement("div");
  root.className = "detail";
  root.hidden = true;
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "detail-title");
  root.innerHTML = `
    <div class="detail-sheet" aria-hidden="true"><span class="tape"></span></div>
    <div class="detail-scroll">
      <button type="button" class="detail-close"><span aria-hidden="true">×</span></button>
      <div class="detail-page"></div>
    </div>`;
  document.body.appendChild(root);
  const sheet = root.querySelector(".detail-sheet");
  const scroller = root.querySelector(".detail-scroll");
  const page = root.querySelector(".detail-page");
  const closeBtn = root.querySelector(".detail-close");

  let current = -1;      // 当前打开的作品
  let sourceNote = null; // 被“揭下”的那张便签
  let pushed = false;    // 是否由点击便签打开（关闭时用返回键回到原地址）
  let busy = false;

  const noteFor = (i) => document.querySelector(`.page:not([inert]) .note[data-index="${i}"]`);
  const visible = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  };

  function fill(i) {
    current = i;
    const p = PROJECTS[i];
    const color = NOTE_COLORS.includes(p.color) ? p.color : NOTE_COLORS[i % NOTE_COLORS.length];
    sheet.className = `detail-sheet note-${color}`;
    page.innerHTML = detailHTML(i);
    closeBtn.setAttribute("aria-label", t("close"));
    page.querySelectorAll("[data-go]").forEach((a) =>
      a.addEventListener("click", (e) => {
        e.preventDefault();
        go(+a.dataset.go);
      })
    );
  }

  // 便签在屏幕上的位置 → 让整页纸从这里展开（或收回这里）
  function fromNoteKeyframes(note) {
    const r = note.getBoundingClientRect();
    const tilt = parseFloat(note.style.getPropertyValue("--r")) || 0;
    const W = innerWidth, H = innerHeight;
    const sx = r.width / W, sy = r.height / H;
    const dx = r.left + r.width / 2 - W / 2, dy = r.top + r.height / 2 - H / 2;
    return [
      { transform: `translate(${dx}px, ${dy}px) rotate(${tilt}deg) scale(${sx}, ${sy})`, offset: 0 },
      // 揭下：抬起、摆正、微微放大
      { transform: `translate(${dx}px, ${dy - 24}px) rotate(0deg) scale(${sx * 1.08}, ${sy * 1.08})`, offset: 0.28 },
      // 展开：先横向打开……
      { transform: `translate(0px, ${dy * 0.35}px) rotate(0deg) scale(1, ${Math.max(sy * 1.15, 0.3)})`, offset: 0.62 },
      // ……再纵向铺满
      { transform: "none", offset: 1 },
    ];
  }

  function lockPage(lock) {
    document.documentElement.classList.toggle("detail-open", lock);
    outside.forEach((el) => el && (lock ? el.setAttribute("inert", "") : el.removeAttribute("inert")));
  }

  async function open(i, note) {
    if (busy) return;
    busy = true;
    fill(i);
    root.hidden = false;
    lockPage(true);
    scroller.scrollTop = 0;
    sourceNote = note && visible(note) ? note : null;
    root.classList.remove("is-ready");

    if (sourceNote && !reduceMotion.matches) {
      sourceNote.classList.add("is-lifted");
      sheet.classList.add("is-unfolding");
      await sheet.animate(fromNoteKeyframes(sourceNote), {
        duration: 900, easing: "cubic-bezier(0.65, 0, 0.25, 1)",
      }).finished.catch(() => {});
      sheet.classList.remove("is-unfolding");
    } else {
      await sheet.animate([{ opacity: 0 }, { opacity: 1 }], { duration: reduceMotion.matches ? 1 : 250 }).finished.catch(() => {});
    }
    root.classList.add("is-ready");
    closeBtn.focus({ preventScroll: true });
    busy = false;
  }

  async function close() {
    if (root.hidden || busy) return;
    busy = true;
    const note =
      sourceNote && sourceNote.isConnected && current === +sourceNote.dataset.index ? sourceNote : noteFor(current);
    root.classList.remove("is-ready");
    await new Promise((r) => setTimeout(r, reduceMotion.matches ? 0 : 180));
    if (note && visible(note) && !reduceMotion.matches) {
      sheet.classList.add("is-unfolding");
      await sheet.animate(fromNoteKeyframes(note).reverse().map((k, n, a) => ({ ...k, offset: n / (a.length - 1) })), {
        duration: 700, easing: "cubic-bezier(0.65, 0, 0.25, 1)",
      }).finished.catch(() => {});
      sheet.classList.remove("is-unfolding");
    } else {
      await sheet.animate([{ opacity: 1 }, { opacity: 0 }], { duration: reduceMotion.matches ? 1 : 220 }).finished.catch(() => {});
    }
    root.hidden = true;
    lockPage(false);
    document.querySelectorAll(".note.is-lifted").forEach((n) => n.classList.remove("is-lifted"));
    const focusTarget = note && note.querySelector(".note-open");
    if (focusTarget) focusTarget.focus({ preventScroll: true });
    sourceNote = null;
    current = -1;
    busy = false;
  }

  // 在详情页里切换到上一个/下一个作品
  function go(i) {
    history.replaceState(null, "", `#work-${PROJECTS[i].slug}`);
    document.querySelectorAll(".note.is-lifted").forEach((n) => n.classList.remove("is-lifted"));
    sourceNote = null;
    page.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150 }).finished.then(() => {
      fill(i);
      scroller.scrollTop = 0;
      page.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], { duration: 300, easing: "ease-out" });
    });
  }

  const indexFromHash = () => {
    const m = location.hash.match(/^#work-([a-z0-9-]+)$/);
    return m ? PROJECTS.findIndex((p) => p.slug === m[1]) : -1;
  };

  // 点击便签
  document.getElementById("book").addEventListener("click", (e) => {
    const btn = e.target.closest(".note-open");
    if (!btn) return;
    const note = btn.closest(".note");
    const i = +note.dataset.index;
    pushed = true;
    history.pushState(null, "", `#work-${PROJECTS[i].slug}`);
    open(i, note);
  });

  closeBtn.addEventListener("click", () => {
    if (pushed) history.back();
    else {
      history.replaceState(null, "", location.pathname + location.search);
      close();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !root.hidden) closeBtn.click();
  });
  // 浏览器前进/后退
  addEventListener("popstate", () => {
    const i = indexFromHash();
    if (i < 0) {
      pushed = false;
      close();
    } else if (root.hidden) open(i, noteFor(i));
    else if (i !== current) go(i);
  });

  // 切换语言：重写详情内容；手账本重新渲染后，把对应便签重新标记为“已揭下”
  refreshDetail = () => {
    if (root.hidden || current < 0) return;
    fill(current);
    const n = noteFor(current);
    if (sourceNote && n) {
      sourceNote = n;
      n.classList.add("is-lifted");
    }
  };

  // 直接打开带 #work-xxx 的链接
  const start = indexFromHash();
  if (start >= 0) open(start, null);
}

/* ---------- 中英切换（记住用户选择） ---------- */
function initLang() {
  const btn = document.querySelector(".lang-toggle");
  applyI18n();
  if (!btn) return;
  btn.addEventListener("click", () => {
    LANG = LANG === "zh" ? "en" : "zh";
    try {
      localStorage.setItem("lang", LANG);
    } catch (e) {}
    // 如果正在看作品（手账本区域内），切换后保持在同一页
    const track = document.getElementById("journal-track");
    const top0 = track ? track.getBoundingClientRect().top : 0;
    const inBook = track && top0 <= 0 && -top0 < track.offsetHeight;
    applyI18n();
    refreshJournal();
    refreshDetail();
    syncMenuLabel();
    if (inBook) window.scrollBy(0, track.getBoundingClientRect().top - top0);
  });
}

/* ---------- 移动端菜单 ---------- */
let syncMenuLabel = () => {};

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  syncMenuLabel = () =>
    toggle.setAttribute("aria-label", menu.classList.contains("open") ? t("menuClose") : t("menuOpen"));
  const setOpen = (open) => {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    syncMenuLabel();
  };

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
  syncMenuLabel();
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
  initLang();
  initJournal();
  initDetail();
  initNav();
  initActiveLink();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
