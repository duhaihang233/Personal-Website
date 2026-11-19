/* =========================================================
   作品详情页内容 —— 点击手账本上的便签后展示
   按作品的 slug 对应（slug 写在 main.js 的 PROJECTS 里）
   每个作品：
     tools      使用的软件（可留空数组）
     sections   若干段落，每段可以有：
       title    { zh, en }   小标题
       body     { zh, en }   正文（可省略）
       points   [{ zh, en }] 要点列表（可省略）
       images   [{ src, zh, en }] 图片和图注（可省略）
   图片放在 assets/projects/<slug>/ 下
   ========================================================= */
const DETAILS = {
  fitseat: {
    tools: ["Spline"],
    sections: [
      {
        title: { zh: "背景与概念", en: "Background & Concept" },
        points: [
          { zh: "问题：长时间久坐会带来腰背疼痛，甚至长期损伤。", en: "Problem: prolonged sitting leads to back pain and long-term damage." },
          { zh: "现有坐垫的局限：形状固定、支撑不足、容易变形，也不智能。", en: "Limits of current cushions: fixed, under-supportive, deforming, non-smart." },
          { zh: "概念：四分区自适应智能坐垫，模块化、传感器驱动、可折叠。", en: "Concept: a four-zone adaptive smart cushion that is modular, sensor-driven and foldable." },
        ],
        images: [
          { src: "assets/projects/fitseat/sketch.jpg", zh: "草图：靠背模块、座面模块、可旋转扶手和调节按钮", en: "Sketch: back module, seat module, rotating armrest and adjust button" },
        ],
      },
      {
        title: { zh: "建模过程", en: "Modeling Process" },
        body: {
          zh: "按分区建模，由模块化气囊组成：从脊柱支撑开始，延伸出座面并嵌入传感器；边缘做圆角提升舒适度；扶手可旋转收纳；表面用高弹膜加白色外壳，易清洁、防污。",
          en: "Zoned modeling with modular air cells: start from spine support, extend the seat, embed sensors; round edges for comfort; rotating armrests for storage; a high-elastic membrane and white shell for an easy-clean, stain-resistant finish.",
        },
        images: [
          { src: "assets/projects/fitseat/model-1.jpg", zh: "01 脊柱模块", en: "01 Spine module" },
          { src: "assets/projects/fitseat/model-2.jpg", zh: "02 座面底座", en: "02 Seat base" },
          { src: "assets/projects/fitseat/model-3.jpg", zh: "03 气囊分区", en: "03 Air-cell bays" },
          { src: "assets/projects/fitseat/model-4.jpg", zh: "04 舒适圆角", en: "04 Comfort fillets" },
          { src: "assets/projects/fitseat/model-5.jpg", zh: "05 旋转扶手", en: "05 Rotating armrest" },
          { src: "assets/projects/fitseat/model-6.jpg", zh: "06 材质与表面", en: "06 Materials & finish" },
        ],
      },
      {
        title: { zh: "功能", en: "Functions" },
        points: [
          { zh: "01 一键开机", en: "01 Instant power" },
          { zh: "02 便携折叠", en: "02 Portable collapse" },
          { zh: "03 自适应坐姿", en: "03 Adaptive posture" },
          { zh: "04 带按摩功能的 AI App", en: "04 AI app with massage" },
        ],
        images: [
          { src: "assets/projects/fitseat/fn-power.jpg", zh: "一键电源按钮启动", en: "Activated by a one-press power button" },
          { src: "assets/projects/fitseat/fn-fold2.jpg", zh: "扶手可以收起", en: "Retractable armrests" },
          { src: "assets/projects/fitseat/fn-fold.jpg", zh: "座面旋转折叠，小巧便携", en: "Seat rotates to fold: compact, grab-and-go" },
          { src: "assets/projects/fitseat/fn-posture.jpg", zh: "自动矫正坐姿", en: "Auto-corrects sitting posture" },
          { src: "assets/projects/fitseat/fn-aircell.jpg", zh: "可充气的气囊", en: "Inflatable air cells" },
          { src: "assets/projects/fitseat/fn-app.jpg", zh: "AI 手势辅助；按摩强度和区域可调", en: "AI gesture assist; adjustable massage intensity and zones" },
        ],
      },
    ],
  },

  "rhythm-arcade": {
    tools: [],
    sections: [
      {
        title: { zh: "设计目标", en: "Design Intent" },
        points: [
          { zh: "家用尺寸：在家也能有街机的手感。", en: "Home-scale: arcade feel at home." },
          { zh: "易于获得：成本低，适合 DIY。", en: "Accessible: lower cost, DIY-friendly." },
          { zh: "人体工学：高度和倾角可调，适应不同身高。", en: "Ergonomic: height and tilt for varied statures." },
        ],
        body: {
          zh: "原型测试：面板上的传感器识别点击、触摸和滑动，控制器通过 USB 把输入发送到电脑，带来与节拍同步的画面和声音反馈。",
          en: "Prototype testing: panel sensors read taps, touches and slides. The controller sends USB input to a PC for beat-synced visual and audio feedback.",
        },
        images: [
          { src: "assets/projects/rhythm-arcade/early.jpg", zh: "早期面板的接线测试", en: "Early panel wiring test" },
          { src: "assets/projects/rhythm-arcade/testing.jpg", zh: "原型测试", en: "Prototype testing" },
        ],
      },
      {
        title: { zh: "过程", en: "Process" },
        body: {
          zh: "项目从一块基础面板，逐步发展成完整的家用音游装置：大屏幕，加上可调节的人体工学控制器。",
          en: "The project evolved from a basic panel into a complete home rhythm-game setup: a big screen plus an ergonomic, adjustable controller.",
        },
        points: [
          { zh: "控制面板原型，连接笔记本电脑", en: "Control panel prototype connected to a laptop" },
          { zh: "更大的画面：加上电视或显示器", en: "Larger display: add a TV or monitor" },
          { zh: "人体工学设计：增加可调高度的支架和倾斜面板", en: "Ergonomic design: add a height-adjustable stand and a tilted surface" },
        ],
        images: [
          { src: "assets/projects/rhythm-arcade/process-photo.jpg", zh: "组装中的完整装置", en: "The full setup during assembly" },
          { src: "assets/projects/rhythm-arcade/evolution.jpg", zh: "演进过程", en: "How it evolved" },
        ],
      },
      {
        title: { zh: "使用体验", en: "UX Moments" },
        images: [
          { src: "assets/projects/rhythm-arcade/ux-1.jpg", zh: "完成！", en: "Done!" },
          { src: "assets/projects/rhythm-arcade/ux-2.jpg", zh: "站着玩的完整装置", en: "The full setup, played standing" },
          { src: "assets/projects/rhythm-arcade/ux-3.jpg", zh: "打出 Perfect", en: "Hitting a Perfect" },
          { src: "assets/projects/rhythm-arcade/ux-4.jpg", zh: "调整支架", en: "Adjusting the stand" },
        ],
      },
    ],
  },

  "pipe-robot": {
    tools: ["Onshape", "Illustrator", "Bambu Lab"],
    sections: [
      {
        title: { zh: "概念与灵感", en: "Concept & Inspiration" },
        body: {
          zh: "家里的下水道常被头发和油污堵住，硬质工具又容易卡在 U 型弯。我想找一个快速的 DIY 办法，灵感来自蚯蚓贴着弯道前进的蠕动方式。",
          en: "Home drains clog with hair and grease, and rigid tools jam at U-bends, so I explored a fast DIY fix inspired by the earthworm's bend-following peristalsis.",
        },
        points: [
          { zh: "收缩：直径变大、摩擦力变大，节段锚定在管壁上。", en: "Shortening: diameter and friction go up, and the segment anchors." },
          { zh: "伸长：直径变小、摩擦力变小，向前伸出。", en: "Elongation: diameter and friction go down, and it extends forward." },
          { zh: "两者交替，就能顺着弯道前进。", en: "Alternating the two lets it follow the bend." },
        ],
        images: [
          { src: "assets/projects/pipe-robot/drain.jpg", zh: "被头发和油污堵住的下水道", en: "A drain clogged with hair and grease" },
          { src: "assets/projects/pipe-robot/peristalsis.jpg", zh: "蚯蚓式蠕动：收缩 + 伸长 → 弯曲前进", en: "Earthworm-inspired peristalsis: shortening + elongation → bending" },
        ],
      },
      {
        title: { zh: "设计", en: "Design" },
        body: {
          zh: "仿生蠕动驱动模块化节段：伸长、抓壁、收缩，始终贴着管壁通过弯道，同时打散沉积物。",
          en: "Bio-inspired peristalsis propels modular segments (extend, grip, contract), keeping wall contact to traverse curves and break up deposits.",
        },
        images: [
          { src: "assets/projects/pipe-robot/module.jpg", zh: "一个节段模块", en: "One segment module" },
          { src: "assets/projects/pipe-robot/motion.jpg", zh: "动力源：90° 齿轮对改变扭矩方向；兼容乐高轴", en: "Motion source: a 90° gear pair redirects torque; LEGO-compatible axle" },
          { src: "assets/projects/pipe-robot/rod.jpg", zh: "连杆：曲柄连杆产生行程，沿导轨运动", en: "Connecting rod: crank-rod stroke, rail-guided" },
          { src: "assets/projects/pipe-robot/guide.jpg", zh: "直线导轨：限定运动方向，降低摩擦", en: "Linear guide: constrained axis, lower friction" },
          { src: "assets/projects/pipe-robot/membrane.jpg", zh: "外膜：波纹套管，抓住管壁、防滑", en: "Outer membrane: a corrugated sleeve for wall grip, anti-slip" },
        ],
      },
      {
        title: { zh: "原型与实现", en: "Prototype & Realization" },
        body: {
          zh: "用 3D 打印组装了模块化原型，验证蠕动运动和节段之间的连接。",
          en: "A 3D-printed modular prototype was assembled to validate the peristaltic motion and segment coupling.",
        },
        images: [
          { src: "assets/projects/pipe-robot/print.jpg", zh: "打印前的切片", en: "Parts laid out for printing" },
          { src: "assets/projects/pipe-robot/proto-1.jpg", zh: "组装好的节段", en: "Assembled segment" },
          { src: "assets/projects/pipe-robot/proto-2.jpg", zh: "端面和传动轴", en: "End view with the drive axle" },
          { src: "assets/projects/pipe-robot/proto-3.jpg", zh: "节段连接电机", en: "Segment coupled to the motor" },
        ],
      },
    ],
  },

  "connect-hub": {
    tools: [],
    sections: [
      {
        title: { zh: "背景", en: "Background" },
        body: {
          zh: "在 Stanford Mall 实地调研后，发现两个问题：公共区域利用率低；餐饮布局分散，缺少一个中心。",
          en: "On-site research at Stanford Mall identified two issues: underused public zones, and a dispersed dining layout with no central hub.",
        },
        images: [
          { src: "assets/projects/connect-hub/site-1.jpg", zh: "实地照片：商场有些区域没被充分利用", en: "On-site photo: parts of the mall are underused" },
          { src: "assets/projects/connect-hub/early-model.jpg", zh: "早期模型", en: "Early model" },
          { src: "assets/projects/connect-hub/site-2.jpg", zh: "实地照片", en: "On-site photo" },
        ],
      },
      {
        title: { zh: "设计概念", en: "Design Concept" },
        points: [
          { zh: "Grow：垂直连接的可持续农场", en: "Grow: a vertically linked, sustainable farm" },
          { zh: "Gather：共享座位和快闪活动", en: "Gather: shared seating and pop-up activities" },
          { zh: "Guide：一站式 App", en: "Guide: a one-stop app" },
        ],
        images: [
          { src: "assets/projects/connect-hub/model.jpg", zh: "完整模型", en: "The full model" },
          { src: "assets/projects/connect-hub/farm-l2.jpg", zh: "屋顶农场（二层）", en: "Rooftop farm (L2)" },
          { src: "assets/projects/connect-hub/store-l1.jpg", zh: "农场直供店（一层）", en: "Farm-direct store (L1)" },
          { src: "assets/projects/connect-hub/app.jpg", zh: "一站式 App：参与农场 → 获得餐饮优惠 → 强化可持续的选择", en: "One-stop app: join the farm → get dining coupons → reinforce sustainable choices" },
        ],
      },
    ],
  },

  "diy-guitar": {
    tools: [],
    sections: [
      {
        title: { zh: "过程", en: "Process" },
        body: {
          zh: "本来想买一把新吉他，但找不到满意的颜色，于是决定自己做：白、金和克莱因蓝。经过喷漆、焊接、组装和调校几个步骤完成。",
          en: "I wanted to buy a new guitar but couldn't find a color I liked, so I built my own in white, gold and Klein blue. It went through painting, soldering, assembling and adjusting.",
        },
        images: [
          { src: "assets/projects/diy-guitar/body.jpg", zh: "CNC 加工的桤木琴身", en: "Alder body made on a CNC machine" },
          { src: "assets/projects/diy-guitar/sparkle.jpg", zh: "加闪粉", en: "Adding sparkle powder" },
          { src: "assets/projects/diy-guitar/lacquer.jpg", zh: "硝基漆", en: "Nitrocellulose lacquer" },
          { src: "assets/projects/diy-guitar/clear.jpg", zh: "透明面漆", en: "Transparent top coat" },
        ],
      },
      {
        title: { zh: "细节", en: "Details" },
        body: {
          zh: "用现代琴桥代替传统琴桥：颜色更搭、音准更精确、调节更方便。",
          en: "A modern bridge replaced the traditional one: a better color match, more precise pitch and easier adjustment.",
        },
        images: [
          { src: "assets/projects/diy-guitar/bridge.jpg", zh: "传统琴桥（左）换成现代琴桥（右）", en: "Traditional bridge (left) replaced by a modern one (right)" },
          { src: "assets/projects/diy-guitar/paint.jpg", zh: "喷涂材料：清漆、克莱因蓝、闪粉", en: "Painting ingredients: clear lacquer, Klein blue, glitter" },
          { src: "assets/projects/diy-guitar/parts.jpg", zh: "所有零件", en: "All the parts" },
          { src: "assets/projects/diy-guitar/pickups.jpg", zh: "安装拾音器", en: "Assembling the pickups" },
          { src: "assets/projects/diy-guitar/assembled.jpg", zh: "组装完成", en: "All parts together" },
        ],
      },
    ],
  },

  "wood-bookmark": {
    tools: ["Onshape"],
    sections: [
      {
        title: { zh: "过程", en: "Process" },
        points: [
          { zh: "拿到主题和要求：表现“职业”和“灵感”。", en: "Got the theme and requirements: represent career and inspiration." },
          { zh: "在 Onshape 中设计，参考我自己书签的尺寸。", en: "Designed in Onshape, referencing the size of my own bookmarks." },
          { zh: "加上 23 位嘉宾的名字，为每个人做专属版本。", en: "Added the names of 23 guests and made a version for each." },
          { zh: "激光切割出成品。", en: "Laser cut the final product." },
        ],
        images: [
          { src: "assets/projects/wood-bookmark/cad.jpg", zh: "Onshape 中的原始设计", en: "Original design in Onshape" },
          { src: "assets/projects/wood-bookmark/designs.jpg", zh: "三款图案：书本、地球仪、灯泡", en: "Three motifs: books, globe, light bulb" },
          { src: "assets/projects/wood-bookmark/preview.jpg", zh: "激光切割预览", en: "Laser cut preview" },
          { src: "assets/projects/wood-bookmark/cutting.jpg", zh: "激光切割中", en: "Laser cutting" },
          { src: "assets/projects/wood-bookmark/prototypes.jpg", zh: "几个失败的原型", en: "Some failed prototypes" },
        ],
      },
    ],
  },

  "ballot-grove": {
    tools: ["Figma", "Replit"],
    mascot: "assets/projects/ballot-grove/eagle-cheer.png",
    sections: [
      {
        title: { zh: "问题：参与率的落差", en: "The Problem: A Participation Gap" },
        body: {
          zh: "四个年轻人里有三个没有去投票。人们常说“年轻人就是不在乎”，但我们的访谈讲了一个不同的故事：不是不在乎，而是投票前要做的功课太多。",
          en: "Three out of four young adults didn't vote. The common assumption is that young people just don't care, but our conversations told a different story: the problem is how much homework voting takes.",
        },
        stats: [
          { value: "27%", zh: "18–29 岁年轻人的投票率", en: "Young adults, ages 18–29", hl: true },
          { value: "49%", zh: "全国整体投票率", en: "National turnout" },
        ],
        note: { zh: "数据来自课堂演讲稿，具体年份和来源待确认。", en: "Figures from the presentation script; election year and source to be confirmed." },
        points: [
          { zh: "01 信息来源有偏见", en: "01 Biased sources" },
          { zh: "02 信息过载", en: "02 Information overload" },
          { zh: "03 司法相关的选项很复杂", en: "03 A complex judicial system" },
          { zh: "04 语言太专业、难读懂", en: "04 Complicated language" },
        ],
        images: [
          { src: "assets/projects/ballot-grove/deck-02.jpg", zh: "参与率落差", en: "The participation gap" },
          { src: "assets/projects/ballot-grove/deck-03.jpg", zh: "我们听到的 vs. 实际情况", en: "What we heard vs. what we found" },
          { src: "assets/projects/ballot-grove/deck-05.jpg", zh: "理解选票的四个障碍", en: "Four barriers to understanding" },
        ],
      },
      {
        title: { zh: "用户故事：Michelle 的投票之旅", en: "User Story: Michelle's Voting Journey" },
        points: [
          { zh: "01 信件：选票、样票，再加一本 40 页的说明手册", en: "01 The mail: ballot, sample ballot and a 40-page pamphlet" },
          { zh: "02 研究：花大量时间才弄清楚每一项在说什么", en: "02 The research: hours spent figuring things out" },
          { zh: "03 投票站：排长队，最后一刻还在临时查资料", en: "03 The polls: a long line and last-minute research" },
        ],
        images: [{ src: "assets/projects/ballot-grove/deck-04.jpg", zh: "Michelle 的投票之旅", en: "Michelle's voting journey" }],
      },
      {
        title: { zh: "用户旅程与信息架构", en: "User Journey & Information Architecture" },
        body: {
          zh: "从欢迎页、选择语言、填写所在地区，到一个小问卷了解用户关心的议题，然后分成两种使用方式：探索模式按主题把选票拆成不同的岛；选票模式按纸质选票的顺序逐项完成。每个候选人和提案都按固定的信息顺序展示：这个职位做什么、谁在竞选、有什么不同、做过什么、去哪里了解更多。",
          en: "From welcome, language and location to a short quiz about the topics you care about, the flow splits into two modes: Explore mode breaks the ballot into themed islands, and Ballot mode follows the printed ballot in order. Every candidate and measure follows the same information order: what the office does, who's running, how they differ, what they've done, and where to learn more.",
        },
        points: [
          { zh: "进度条：探索越多，解锁越多角色皮肤", en: "A progress bar that unlocks character skins as you explore" },
          { zh: "边探索边做笔记，标记想投的选项", en: "Annotate and mark your picks as you explore" },
          { zh: "最后生成样票，变成可以带去投票站的二维码", en: "Finish with a sample ballot that becomes a QR code for the polls" },
          { zh: "多语言：点一下就能看到原文，确保填写正确", en: "Multilingual, with a tap to see the original wording" },
        ],
        images: [
          { src: "assets/projects/ballot-grove/journey.jpg", zh: "用户旅程图", en: "User journey map" },
        ],
      },
      {
        title: { zh: "早期线框图", en: "Early Wireframes" },
        images: [
          { src: "assets/projects/ballot-grove/wire-mac1.jpg", zh: "首页", en: "Landing" },
          { src: "assets/projects/ballot-grove/wire-explore.jpg", zh: "选择一座岛去探索", en: "Pick an island to explore" },
          { src: "assets/projects/ballot-grove/wire-props.jpg", zh: "提案按议题分成不同建筑", en: "Measures as buildings by topic" },
          { src: "assets/projects/ballot-grove/wire-cand.jpg", zh: "候选人介绍", en: "Meet the candidates" },
          { src: "assets/projects/ballot-grove/wire-compare.jpg", zh: "对比候选人", en: "Compare candidates" },
        ],
      },
      {
        title: { zh: "最终设计：像素世界", en: "Final Design: A Pixel World" },
        body: {
          zh: "最终版本换成了暖色像素美术：每一类选项是一座漂浮的小岛，老鹰向导陪你一路学习。每一页都把“问题是什么、现在怎样、会改变什么、支持和反对的意思”拆成短句，并标出信息来源；看完后可以选择、记笔记，最后得到一份按纸质选票顺序排好的选票计划。",
          en: "The final version moved to warm pixel art: each part of the ballot is a floating island, and an eagle guide learns alongside you. Each page breaks a measure into short answers (what's the question, what happens now, what would change, what YES and NO mean) with sources. You choose, take notes, and end with a ballot plan in printed-ballot order.",
        },
        images: [
          { src: "assets/projects/ballot-grove/ui-home.jpg", zh: "首页", en: "Home" },
          { src: "assets/projects/ballot-grove/ui-goal.jpg", zh: "设置：选择今天想做什么", en: "Setup: choose your goal" },
          { src: "assets/projects/ballot-grove/ui-explore.jpg", zh: "选择一座岛", en: "Pick an island" },
          { src: "assets/projects/ballot-grove/ui-props.jpg", zh: "提案教室：读懂、选择、记笔记", en: "Measure classroom: read, choose, take notes" },
          { src: "assets/projects/ballot-grove/ui-cand.jpg", zh: "候选人档案", en: "Candidate profile" },
          { src: "assets/projects/ballot-grove/ui-compare.jpg", zh: "并排对比候选人", en: "Compare side by side" },
          { src: "assets/projects/ballot-grove/ui-receipt.jpg", zh: "你的选票计划 + 二维码", en: "Your ballot plan + QR code" },
          { src: "assets/projects/ballot-grove/ui-phone.jpg", zh: "手机版选票计划", en: "Ballot plan on phone" },
        ],
      },
      {
        title: { zh: "像素素材", en: "Pixel Assets" },
        body: {
          zh: "老鹰向导的待机、挥手、欢呼、思考、读书、走路等动画帧，候选人角色，以及五座会漂浮的议题小岛。",
          en: "Animation frames for the eagle guide (idle, wave, cheer, think, read, walk), candidate characters and five floating topic islands.",
        },
        images: [{ src: "assets/projects/ballot-grove/pixel-assets.jpg", zh: "像素素材表", en: "Pixel asset sheet" }],
      },
      {
        title: { zh: "你的一票，你的信心", en: "Your Vote. Your Confidence." },
        body: {
          zh: "Ballot Grove 的目标很简单：让每个人都能对选票上的每一项做出有把握的决定。",
          en: "Ballot Grove's goal is simple: help everyone make a confident decision on every choice on their ballot.",
        },
        images: [
          { src: "assets/projects/ballot-grove/deck-01.jpg", zh: "欢迎来到 Ballot Grove", en: "Welcome to Ballot Grove" },
          { src: "assets/projects/ballot-grove/deck-06.jpg", zh: "现场演示", en: "Live demo" },
          { src: "assets/projects/ballot-grove/deck-09.jpg", zh: "谢谢！", en: "Thank you!" },
        ],
      },
    ],
  },
};
