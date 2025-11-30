import teaGardenImage from "../assets/images/生态基地/生态基地1.jpg";
import teaProductImage from "../assets/images/核心业务/东水茶/东水茶1.jpg";
import teaProductImage2 from "../assets/images/核心业务/东水茶/东水茶2.jpg";
import teaProcessVideo from "../assets/images/核心业务/东水茶/绿茶制作工艺视频生成.mp4";
import aiPptFile from "../assets/images/首页/人工智能：从历史看未来-2020-北京怀柔.pptx";
import aiPptThumb from "../assets/images/首页/ai-ppt-thumb.jpeg";
import yogaImage from "../assets/images/核心业务/康养旅居/瑜伽.jpg";
import expertDengImage from "../assets/images/专家智库/邓小铁.jpg";
import expertLiImage from "../assets/images/专家智库/李欢.png";
import umassTuringImage from "../assets/images/专家智库/umass图灵.jpg";

export const DATA = {
  zh: {
    nav: {
      home: "首页",
      about: "关于集团",
      aboutSub: "关于我们",
      alliance: "联盟会员",
      ecology: "生态基地",
      technology: "科技核心",
      services: "核心业务",
      servicesSub: "核心业务",
      experts: "专家智库",
      expertsSub: "专家智库",
      contact: "联系我们",
      cooperation: "合作咨询",
      sub: {
        festival: "国际时尚音乐节",
        vr: "VR 心理疗愈",
        study: "国际研学",
        living: "康养旅居",
        tea: "东水茶",
      },
    },
    carousel: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        subtitle: "国家森林公园 · 95平方公里天然氧吧",
        title: "东水山 · 生态之源",
        desc: "坐拥鹅凰远眺、清溪碧潭，7000亩富硒土地，构建AI康养的天然基石。",
        link: "ecology",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1563911892437-1feda9d5e54a?q=80&w=2070&auto=format&fit=crop",
        subtitle: "AI + 合成生物 + 区块链溯源",
        title: "智慧农业 · 科技赋能",
        desc: "合成生物氨基酸水肥精准灌溉，每一片东水山茶都有专属的区块链数字身份证。",
        link: "technology",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop",
        subtitle: "图灵奖团队技术支持 · VR沉浸式干预",
        title: "AI 心理疗愈 · 智愈身心",
        desc: "多场景VR情绪疏导系统，为压力人群提供个性化、沉浸式的心理健康解决方案。",
        link: "services",
      },
    ],
    experts: [
      {
        title: "首席顾问与院士",
        featured: true,
        members: [
          {
            name: "邓小铁 院士",
            title: "首席科学顾问",
            org: "欧洲科学院外籍院士 / 北京大学人工智能研究院 / 前沿计算研究中心",
            desc: "ACM Fellow，IEEE Fellow，北京大学人工智能研究院多智能体中心主任，北京大学前沿计算研究中心讲席教授，CSIAM 区块链专委会主任，ACM 计算经济学的“时间检验奖”（Test of Time Award）。",
            tags: ["顶层设计", "算法博弈论"],
            image: expertDengImage,
          },
        ],
      },
      {
        title: "AI 技术专家委员会",
        members: [
          {
            name: "李欢 博士",
            title: "技术委员会主任",
            org: "图灵奖团队成员 / 美国麻省大学博士",
            desc: "美国麻省大学计算机系博士,2024年图灵奖「群智机器人」核心项目成员，主导研发了基于多模态情感计算的AI心理疗愈系统。",
            tags: ["AI算法", "情感计算", "自闭症干预"],
            image: expertLiImage,
            honorImage: umassTuringImage,
            honorCaption: "UMass Amherst 图灵奖团队",
          },
          {
            name: "丁勇 教授",
            title: "区块链技术专家",
            org: "知名高校网络空间安全学院院长",
            desc: "负责构建东水山茶叶区块链溯源体系与数据隐私计算平台，确保数据资产的安全与价值化。",
            tags: ["区块链", "隐私计算"],
          },
        ],
      },
      {
        title: "心理与医学专家委员会",
        members: [
          {
            name: "江光荣 教授",
            title: "名誉心理顾问",
            org: "华中师范大学 / 中国心理学会",
            desc: "中国心理学会临床与咨询心理学专业委员会主任，国内学校心理学泰斗，构建了项目心理干预的学术标准。",
            tags: ["心理咨询", "行业标准制定"],
          },
          {
            name: "任志洪 教授",
            title: "首席心理科学家",
            org: "华中师范大学 / 威斯康星大学博士后",
            desc: "教育部心理援助热线平台咨询业务负责人，专注于利用大数据与AI技术提升心理援助效率。",
            tags: ["大数据心理", "注册督导师"],
          },
          {
            name: "徐忠信 教授",
            title: "首席医学顾问",
            org: "中日联谊医院 / 神经内科",
            desc: "神经内科主任，博士生导师。将临床神经科学引入康养体系，针对认知障碍与老年病提供专业指导。",
            tags: ["神经内科", "脑科学"],
          },
        ],
      },
      {
        title: "产业与农业专家",
        members: [
          {
            name: "朱文奇 教授",
            title: "现代农业专家",
            org: "上海交通大学",
            desc: "合成生物学与现代农业专家，指导东水山富硒茶产业的合成生物水肥应用与品质升级。",
            tags: ["合成生物", "智慧农业"],
          },
        ],
      },
    ],
    common: {
      btnDetail: "深入了解",
      btnBack: "返回业务总览",
      btnReserve: "预约参观",
      btnDownload: "下载详细行程单",
      btnBookRoom: "预约看房",
      btnSubmit: "提交信息",
      liveData: "实时数据",
      successCase: "成功案例",
      coopSchool: "合作院校",
      latestActivity: "最新活动招募",
      caseStudy: {
        title: "医院合作案例",
        desc: "已服务超过16,000名患者，提供AI心理CT检测。",
      },
      studyActivity: {
        tag: "冬令营",
        title: "AI农业研学营",
        duration: "7天 · 图灵奖团队技术支持",
      },
      schools: ["华南农业大学", "广东工业大学", "深圳中学"],
      aiAssistant: "AI 智能助手",
      contact: {
        address: "广东省阳江市阳西县新墟镇东水村委会",
        phone: "13923710623",
        email: "zengweifeng13@163.com",
        formName: "姓名",
        formPhone: "电话",
        formType: "咨询意向",
        formDesc: "详细需求",
        sub: "联系我们",
        types: [
          "预约 VR 心理疗愈体验",
          "学校/机构 研学合作",
          "高端茶叶/农产品采购",
          "康养民宿预订",
          "其他商务合作",
        ],
      },
      footer: {
        companyName: "东水山AI康养生态谷",
        slogan: "科技赋能康养，生态滋养身心。",
        support: "技术支持：深圳麻省计算机系统有限公司",
        copyright: "© 2025 广东东水山AI康养生态谷有限公司",
        privacy: "隐私政策",
        terms: "服务条款",
        addrLabel: "地址",
        telLabel: "电话",
        emailLabel: "邮箱",
      },
    },
    // Page Specific Content
    pages: {
      home: {
        missionTitle: "科技赋能康养 · 生态滋养身心",
        missionSub: "OUR MISSION",
        missionDesc:
          "广东东水山AI康养生态谷有限公司，响应“健康中国”战略，依托东水山1500年茶乡底蕴与图灵奖团队前沿技术，打破传统边界，构建集 大健康VR心理疗愈、国际研学、康养民居、国际文化交易、东水茶产业 于一体的全链条康养生态体系。",
        aiColumn: {
          title: "人工智能科普专栏",
          sub: "AI POPULAR SCIENCE",
          desc: "借助 2020 年北京怀柔的专题分享，回顾人工智能的历史脉络，理解前沿趋势与应用场景。",
          pptTitle: "《人工智能：从历史看未来》（2020 · 北京怀柔）",
          viewOnline: "在线预览",
          viewHint: "如在线预览未加载，请刷新或稍后再试；仅支持在线预览，不提供下载。",
          viewHintLocal: "本地/内网可能无法加载在线预览，请刷新或稍后再试；仅支持在线预览，不提供下载。",
        },
        chairman: {
          title: "董事长致辞",
          subTitle: "致各界朋友：\n共赴科技赋能乡村的生态之约",
          msg1: "亲爱的访客朋友们：",
          msg2: "欢迎走进广东东水山 AI 康养生态谷！当富硒茶山邂逅前沿科技，当非遗文脉交融国际视野，我们正以 “技术融合、业态创新、区域赋能” 为初心，勾勒乡村振兴的新图景。",
          msg3: "依托东水山 5000 亩优质茶园与政策红利，我们构建 “AI + 合成生物 + 区块链 + VR” 全链条体系：智慧种植让茶叶品质提质增效，溯源技术守护消费信任，VR 疗愈传递生态康养温度，国际研学搭建文化交流桥梁。每一项技术落地，都旨在实现 “产业兴、百姓富、生态美” 的共赢 —— 带动农户年均增收，创造就业岗位，打造零碳发展标杆。",
          msg4: "初心如磐，笃行致远。我们期待以 “竹韵茶香・东隐共生” 为纽带，与合作伙伴携手深耕，让东水山成为湾区文旅名片、乡村振兴典范。诚邀您共赴这场科技与生态的约会，共绘产业繁荣、民生幸福的美好蓝图！",
          name: "谢志忠",
          role: "广东东水山 AI 康养生态谷有限公司董事长",
          date: "二〇二五年十一月二十日",
        },
        stats: [
          { value: "95km²", label: "国家森林公园", sub: "100% 生态红线保护" },
          { value: "11.4亿", label: "项目总投入", sub: "分三期滚动开发" },
          { value: "15万+", label: "年服务人次", sub: "大湾区首选目的地" },
          { value: "5000亩", label: "智慧富硒茶园", sub: "区块链全流程溯源" },
        ],
      },
      festival: {
        title: "东水山国际时尚音乐节",
        sub: "FASHION X MUSIC FESTIVAL",
        heroTitle: "山水间的时尚与音乐狂欢",
        heroDesc:
          "当绿美东水山的青山绿水邂逅国际潮流，一场融合听觉盛宴与视觉奢享的文化盛典即将启幕，以“自然与艺术共生，传统与潮流碰撞”为核心，邀你共赴山水间的时尚音乐之约。",
        heroNote: "自然与艺术共生 · 传统与潮流碰撞",
        date: "2025 · 阳西东水山核心景区",
        location: "东水山国际生态谷 · 3大舞台",
        highlights: [
          {
            label: "时尚领衔",
            value: "Laurence Xu 东方高定",
            desc: "首位登陆巴黎高定周的中国设计师，携非遗技艺打造沉浸式山水秀场。",
          },
          {
            label: "音乐阵容",
            value: "伯克利校友群星",
            desc: "横跨流行、摇滚、爵士、New Age，多元韵律全天候点燃山谷。",
          },
          {
            label: "沉浸场景",
            value: "主舞台+互动+草坪",
            desc: "山势巨幕、非遗体验区、草坪松弛感，让视觉与听觉无缝衔接。",
          },
        ],
        fashionTitle: "时尚领衔：Laurence Xu 的东方美学演绎",
        fashionDesc:
          "特邀国际时尚大师劳伦斯·许坐镇，他曾以南京云锦、敦煌壁画惊艳巴黎秀场，以艾德莱斯绸、苗绣等非遗工艺诠释民族美学。此次，他将让高级定制走进山水，打造沉浸式时尚秀演，让非遗与现代潮流在东水山碰撞。",
        musicTitle: "音乐盛宴：伯克利校友的多元韵律狂欢",
        musicDesc:
          "多位伯克利音乐学院校友齐聚舞台，跨越流行、摇滚、爵士、New Age 等风格。旋律诗人级唱作人零修音开唱，跨界制作人融合古典与南美民族音乐，新生代原创乐队带来活力新声——专业功底与创作才华为你呈现高品质听觉狂欢。",
        sceneTitle: "山水共生：沉浸式时尚音乐体验",
        sceneDesc:
          "三大特色舞台错落分布于青山绿水间：主舞台结合自然山势打造超宽视觉画幅；互动舞台设置非遗体验区，观众可近距离感受大师作品中的传统工艺；草坪舞台聚焦新生代音乐人，营造轻松惬意的聆听氛围。现场还设有时尚市集与潮流打卡点，让音乐、时尚与山水观光深度融合。",
        closing:
          "这场集国际时尚、顶级音乐、自然生态于一体的盛会，既是潮流文化的集中展示，也是传统文化的创新表达。东水山国际时尚音乐节，邀你在青山绿水间，邂逅时尚与音乐的极致碰撞。",
        stages: [
          {
            name: "主舞台 · 山势巨幕",
            vibe: "视觉大片",
            detail: "顺应山体高差打造广角巨幕，配合高定视觉与光影秀，形成天然环绕感。",
          },
          {
            name: "互动舞台 · 非遗体验",
            vibe: "近距离共创",
            detail: "苗绣、云锦、艾德莱斯绸元素现场共创，观众可参与定制打卡。",
          },
          {
            name: "草坪舞台 · 新生代",
            vibe: "松弛氛围",
            detail: "伯克利新生代与独立音乐人轮番上场，铺陈野餐、露营式观演体验。",
          },
        ],
        experiences: [
          {
            tag: "全天候音乐",
            title: "伯克利校友群星",
            desc: "零修音舞台、跨界合作段落，保证高水准现场。",
          },
          {
            tag: "时尚市集",
            title: "潮流打卡 x 限定周边",
            desc: "高定灵感周边、自然系香氛、艺术衍生品一次收齐。",
          },
          {
            tag: "沉浸光影",
            title: "山水夜景 + AI 声光",
            desc: "利用山谷声学与雾气光束，营造梦幻夜场氛围。",
          },
        ],
        ctaTitle: "需要一份单日行程建议？",
        ctaDesc: "留下联系方式，我们会根据你的偏好发送音乐节日程与交通/住宿建议。",
        ctaBtnPrimary: "索取行程单",
        ctaBtnSecondary: "预约尊享席位",
      },
      vr: {
        title: "AI+VR 深度心理疗愈中心",
        sub: "SMART HEALING",
        heroTitle: "从“治疗疾病”到“促进繁荣”\nAI定义心理健康新范式",
        heroDesc:
          "结合东水山95平方公里自然场景与多模态情感计算，为焦虑、抑郁、失眠人群提供沉浸式数字疗法。",
        productsTitle: "核心软硬件产品矩阵",
        products: [
          {
            title: "智慧心理测评CT系统 (V3.0)",
            desc: "类似身体CT的心理“透视”技术。通过采集面部微表情、语音语调及眼动数据，结合AI算法，5分钟内生成多维度心理健康报告，准确率达92%。",
          },
          {
            title: "智能身心反馈太空舱",
            desc: "集成生物传感监测（皮电、心率变异性），实时感知用户压力水平。AI自动调节舱内全息光影、3D音乐频率与香氛浓度，实现闭环减压。",
          },
          {
            title: "VR 沉浸式脱敏训练系统",
            desc: "1:1还原东水山茶园、竹林、瀑布等自然场景。针对恐高、社交恐惧等症状，提供循序渐进的虚拟暴露疗法。",
          },
        ],
        serviceTitle: "专业服务套餐",
        services: [
          {
            name: "21天茶园冥想疗程",
            desc: "每日20分钟VR正念引导，改善睡眠质量",
            price: "¥ 1,280/期",
          },
          {
            name: "青少年情绪疏导",
            desc: "针对厌学、网瘾的Gamification（游戏化）干预",
            price: "¥ 2,680/期",
          },
          {
            name: "企业EAP员工关怀",
            desc: "高压职场减压舱体验 + 心理体检",
            price: "企业团购",
          },
          {
            name: "自闭症辅助康复",
            desc: "基于图灵奖团队技术的AI互动训练",
            price: "公益资助",
          },
        ],
      },
      study: {
        title: "东水山国际研学与文化交流基地",
        sub: "GLOBAL EDUCATION",
        facTitle: "五星级硬件配套",
        facDesc:
          "项目总投入11.4亿元，其中4亿元用于打造粤西最高规格的“五星级国际文化交流中心”。拥有承接国际峰会、高端论坛及大型研学团的完整能力。",
        facilities: [
          {
            val: "2000",
            unit: "人",
            name: "国际会议主会场",
            desc: "配备同声传译系统、超高清LED矩阵。",
          },
          {
            val: "8000",
            unit: "㎡",
            name: "专业会展中心",
            desc: "适合举办科技成果展、非遗文化节。",
          },
          {
            val: "350",
            unit: "间",
            name: "五星级标准客房",
            desc: "确保研学导师与参会嘉宾的高品质住宿体验。",
          },
          {
            val: "5",
            unit: "个",
            name: "前沿科技实验室",
            desc: "包含AI心理、合成生物、区块链演示中心。",
          },
        ],
        currTitle: "分级研学课程体系",
        k12Title: "K12 基础教育 (小学/初中)",
        k12List: [
          "自然生态课：东水山动植物考察，负氧离子监测。",
          "非遗文化课：体验300年历史古法造纸，制作“东水纸”。",
          "茶文化课：采茶制茶体验，学习传统茶礼。",
        ],
        highTitle: "高等教育与科研 (高中/高校)",
        highList: [
          "合成生物学工作坊：水溶肥对茶叶品质影响实验。",
          "智慧农业实践：AI物联网设备部署。",
          "区块链溯源技术：学习农产品数据上链。",
        ],
      },
      living: {
        title: "竹里 · 高定康养旅居",
        sub: "WELLNESS LIVING",
        introTitle: "不止于居住，更是全生命周期管理",
        introDesc:
          "东水山康养民居集群打破了传统养老地产模式，将“生态宜居”与“数字医疗”深度融合。这里不仅有从窗外延伸进来的竹林绿意，更有看不见的AI健康守护者。",
        features: [
          {
            title: "全屋智能监测",
            desc: "毫米波雷达监测跌倒、呼吸心率，无感守护长者安全。",
          },
          {
            title: "富硒药膳定制",
            desc: "AI营养师根据体检数据，利用东水山富硒食材定制一日三餐。",
          },
          {
            title: "绿色就医通道",
            desc: "直通镇卫生院住院大楼（项目配套），专家定期巡诊。",
          },
          {
            title: "社群文化生活",
            desc: "定期举办茶艺课、书法交流、森林瑜伽，让晚年生活丰盈多彩。",
          },
        ],
        pricingTitle: "竹里旅居 · 会员权益",
        pricingSub: "成为“东水山居民”，享受专属健康服务。",
        prices: [
          { name: "短住体验 (7天)", price: "¥ 2,880 起" },
          { name: "康养月卡 (30天)", price: "¥ 8,800 起" },
          { name: "候鸟年卡", price: "咨询客服" },
        ],
      },
      tea: {
        title: "东水茶 · 广东十大名茶",
        sub: "DONGSHUI TEA",
        intro:
          "东水山茶叶是广东省阳西县新墟镇东水山出产的特色茶叶，位列“广东十大名茶”与“阳江八宝”。",
        envTitle: "高山云雾出好茶",
        envDesc:
          "茶园位于海拔600米高山峡谷，常年云雾缭绕，漫射光充足。特有的岩石风化土富含矿物质与硒元素，造就了东水茶不可复制的“山韵”。",
        historyTitle: "千年传承 · 古树臻品",
        historyDesc:
          "1500年悠久种植历史，现存百年以上古茶树超30,000株，最老树龄达400余年，是活着的茶文化博物馆。",
        craftTitle: "品种与工艺",
        craftDesc:
          "以“黄金芽”为代表，涵盖红茶、绿茶、白茶三大品类。融合古法萎凋、揉捻与现代控温发酵技术，激发每一片叶子的潜能。",
        featTitle: "品质特征",
        featList: [
          { label: "双倍茶多酚", desc: "含量是普通茶叶的两倍，抗氧化能力强。" },
          { label: "富含硒元素", desc: "达到富硒茶标准，具有康养保健价值。" },
          { label: "高茶氨酸", desc: "滋味鲜爽醇和，回甘持久。" },
          { label: "黄金芽红茶", desc: "花香浓郁，汤色金黄明亮。" },
        ],
        honorTitle: "荣誉见证",
        honors: [
          "广东十大名茶",
          "广东省名特优新农产品",
          "广东省春季名优茶金奖(黄金芽)",
          "广东十大好春茶",
        ],
      },
      about: {
        title: "关于东水山生态谷",
        sub: "ABOUT GROUP",
        desc: "广东东水山AI康养生态谷有限公司是聚焦“AI+大健康+生态融合”的创新型企业。我们立足东水山优质生态禀赋，联动医疗、教育、文旅、商贸等领域资源，打通“技术研发-服务落地-产业赋能”全链路。",
        tags: [
          "健康中国战略响应者",
          "百千万工程典型村",
          "广东省十大名茶产地",
          "AI农文旅标杆项目",
        ],
        planTitle: "三年战略规划",
        plans: [
          {
            time: "第一阶段 (0-12月)",
            title: "基础建设期",
            desc: "文化交流中心主体动工，AI算力中台搭建，合成生物水肥应用。",
          },
          {
            time: "第二阶段 (13-24月)",
            title: "运营启动期",
            desc: "VR体验中心建成，AI农业保险确权上线，东水茶权通证发行。",
          },
          {
            time: "第三阶段 (25-36月)",
            title: "标杆成型期",
            desc: "年服务超15万人次，文化交流营收破1.5亿，成为广东省AI+农文旅示范标杆。",
          },
        ],
      },
      alliance: {
        title: "联盟会员",
        sub: "战略合作伙伴",
        desc: "东水山AI康养生态谷与多家优质企业建立战略合作关系，共同推动大健康产业发展，实现资源共享、优势互补、合作共赢。",
        joinTitle: "加入联盟",
        joinDesc: "诚邀各领域优质企业加入东水山战略联盟，共享发展机遇。",
        joinBtn: "申请加入",
        companies: [
          // 暂时隐藏
          // {
          //   name: "深圳市慈树健康科技有限公司",
          //   type: "AI健康科技",
          //   desc: "专注于AI心理健康技术研发，为东水山提供核心VR心理疗愈技术支持。",
          //   tags: ["AI技术", "心理健康", "VR疗愈"],
          // },
        ],
      },
      ecology: {
        title: "东水山国家森林公园",
        sub: "ECOLOGICAL BASE",
        desc: "东水山位于阳西县新墟镇，总面积95平方公里。这里不仅有「鹅凰远眺」、「东水滴翠」等阳西十景，更拥有深厚的人文底蕴。",
        teaGarden: {
          title: "5000亩高山富硒茶园",
          desc: "广东十大名茶产地 · 天然含硒量0.3-0.5mg/kg",
        },
        waterfall: "射水潭瀑布",
        papermaking: {
          title: "古法造纸非遗",
          desc: "300年历史传承 · 阳江市非物质文化遗产",
          btn: "观看纪录片",
        },
        heritage: "山水人文 · 千年传承",
        features: [
          {
            title: "自然景观",
            desc: "山顶茶园“铜钟石”高约五米，造型独特；射水潭瀑布落差20余米，气势壮观。",
          },
          {
            title: "人文传说",
            desc: "村后盘古宫见证历史，望夫山流传着感人的等待传说。",
          },
          {
            title: "红色基因",
            desc: "作为革命老区，东水山曾是游击队的重要活动区域，传承着不朽的红色精神。",
          },
        ],
        monitor: [
          { label: "负氧离子浓度", val: "12,000 个/cm³", pct: "95%" },
          { label: "土壤硒含量", val: "0.45 mg/kg", pct: "88%" },
          { label: "水质等级", val: "I 类 (直饮)", pct: "100%" },
        ],
      },
      tech: {
        title: "AI 核心技术引擎",
        sub: "TECHNOLOGY CORE",
        archTitle: "人-机-物 三元架构",
        archDesc:
          "部署边缘计算节点、5G/6G微基站与物联网网关，构建200P智算算力中心，实时处理环境数据与生理指标，为AI模型提供算力支撑。",
        algoTitle: "AI 情绪识别算法",
        algoDesc:
          "基于面部微表情、语音语调及心率变异性(HRV)的多模态情感计算模型，实时评估用户压力水平，精准推荐个性化疗愈方案。",
        chainTitle: "区块链溯源 & 隐私计算",
        chainDesc:
          "利用联盟链技术，为每一批茶叶生成唯一“数字身份证”，记录种植、加工、检测全流程。结合隐私计算，实现数据可用不可见，保障农户数据权益。",
        bioTitle: "合成生物水肥技术",
        bioDesc:
          "采用合成生物发酵技术生产氨基酸水溶肥，减少化肥用量30%，显著提升茶叶中茶多酚与氨基酸含量。",
        bioList: [
          "化肥减量 20-30%",
          "亩产增收 10-15%",
          "茶多酚提升 8-12%",
          "病虫害预警 92%",
        ],
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      aboutSub: "ABOUT US",
      alliance: "Alliance",
      ecology: "Ecology",
      technology: "Technology",
      services: "Services",
      servicesSub: "CORE SERVICES",
      experts: "Experts",
      expertsSub: "EXPERT THINK TANK",
      contact: "Contact",
      cooperation: "Partner With Us",
      sub: {
        festival: "Fashion Music Festival",
        vr: "VR Healing",
        study: "Global Study",
        living: "Wellness Living",
        tea: "Dongshui Tea",
      },
    },
    carousel: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        subtitle: "National Forest Park · 95km² Natural Oxygen Bar",
        title: "Dongshui Mountain · Ecological Source",
        desc: "With 7000 acres of selenium-rich land, building the natural foundation for AI wellness.",
        link: "ecology",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1563911892437-1feda9d5e54a?q=80&w=2070&auto=format&fit=crop",
        subtitle: "AI + Synthetic Biology + Blockchain Traceability",
        title: "Smart Agriculture · Tech Empowerment",
        desc: "Precise irrigation with synthetic bio-fertilizers, every tea leaf has a blockchain digital ID.",
        link: "technology",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop",
        subtitle: "Turing Award Team Support · VR Immersive Intervention",
        title: "AI Psychology · Smart Healing",
        desc: "Multi-scenario VR emotional guidance system providing personalized mental health solutions.",
        link: "services",
      },
    ],
    experts: [
      {
        title: "Chief Consultants & Academicians",
        featured: true,
        members: [
          {
            name: "Academician Deng Xiaotie",
            title: "Chief Scientific Advisor",
            org: "PKU AI Institute / Center for Frontier Computing Research",
            desc: "ACM Fellow, IEEE Fellow; Director of the Multi-Agent Systems Center at PKU AI Institute; Chair Professor at PKU Center for Frontier Computing Research; Chair of the CSIAM Blockchain Committee; recipient of the ACM Economics and Computation Test of Time Award.",
            tags: ["Top-level Design", "Game Theory"],
            image: expertDengImage,
          },
        ],
      },
      {
        title: "AI Technical Expert Committee",
        members: [
          {
            name: "Prof. Li Huan",
            title: "Director of Technical Committee",
            org: "Turing Award Team Member / HITSZ",
            desc: "Founder of Int'l AI Research Institute at HITSZ. Led the development of multimodal emotional computing AI healing systems.",
            tags: [
              "AI Algorithms",
              "Affective Computing",
              "Autism Intervention",
            ],
            image: expertLiImage,
            honorImage: umassTuringImage,
            honorCaption: "UMass Amherst Turing Award Team",
          },
          {
            name: "Prof. Ding Yong",
            title: "Blockchain Expert",
            org: "Dean of Cyber Security School",
            desc: "Responsible for building the Dongshui tea blockchain traceability system and data privacy computing platform.",
            tags: ["Blockchain", "Privacy Computing"],
          },
        ],
      },
      {
        title: "Psychology & Medical Expert Committee",
        members: [
          {
            name: "Prof. Jiang Guangrong",
            title: "Honorary Psychological Advisor",
            org: "CCNU / Chinese Psychological Society",
            desc: "Head of Clinical & Counseling Psychology Committee of CPS, establishing academic standards for project psychological interventions.",
            tags: ["Psychological Counseling", "Industry Standards"],
          },
          {
            name: "Prof. Ren Zhihong",
            title: "Chief Psychological Scientist",
            org: "CCNU / Postdoc at UW-Madison",
            desc: "Head of Ministry of Education's psychological aid hotline platform, focusing on AI and big data in psychological aid.",
            tags: ["Big Data Psychology", "Registered Supervisor"],
          },
          {
            name: "Prof. Xu Zhongxin",
            title: "Chief Medical Advisor",
            org: "China-Japan Union Hospital / Neurology",
            desc: "Director of Neurology, PhD supervisor. Introducing clinical neuroscience into the wellness system for cognitive disorders.",
            tags: ["Neurology", "Brain Science"],
          },
        ],
      },
      {
        title: "Industry & Agriculture Experts",
        members: [
          {
            name: "Prof. Zhu Wenqi",
            title: "Modern Agriculture Expert",
            org: "Shanghai Jiao Tong University",
            desc: "Expert in synthetic biology and modern agriculture, guiding the application of bio-fertilizers in selenium-rich tea industry.",
            tags: ["Synthetic Biology", "Smart Agriculture"],
          },
        ],
      },
    ],
    common: {
      btnDetail: "Learn More",
      btnBack: "Back to Overview",
      btnReserve: "Book a Visit",
      btnDownload: "Download Itinerary",
      btnBookRoom: "Book a Room",
      btnSubmit: "Submit Info",
      liveData: "Live Data",
      successCase: "Case Study",
      coopSchool: "Partner Schools",
      latestActivity: "Latest Activities",
      caseStudy: {
        title: "Hospital Partnership",
        desc: "Served 16,000+ patients with AI Psych CT.",
      },
      studyActivity: {
        tag: "Winter Camp",
        title: "AI Agriculture Camp",
        duration: "7 Days · Turing Team Tech",
      },
      schools: ["SCAU", "GDUT", "Shenzhen Middle School"],
      aiAssistant: "AI Assistant",
      contact: {
        address: "Dongshui Village, Xinxu Town, Yangxi County, Guangdong",
        phone: "+86 13923710623",
        email: "zengweifeng13@163.com",
        formName: "Name",
        formPhone: "Phone",
        formType: "Interest",
        formDesc: "Details",
        sub: "GET IN TOUCH",
        types: [
          "Book VR Healing",
          "School/Institution Study",
          "Premium Tea Sourcing",
          "Wellness Stay Booking",
          "Other Partnership",
        ],
      },
      footer: {
        companyName: "Dongshui Mountain AI Wellness Valley",
        slogan: "Technology Empowering Wellness, Ecology Nourishing Life.",
        support: "Technical Support: Shenzhen Mass Computer Systems Co., Ltd.",
        copyright: "© 2025 Dongshuishan AI Wellness Valley Co., Ltd.",
        privacy: "Privacy",
        terms: "Terms",
        addrLabel: "Addr",
        telLabel: "Tel",
        emailLabel: "Email",
      },
    },
    pages: {
      home: {
        missionTitle: "Tech-Empowered Wellness · Ecological Nourishment",
        missionSub: "OUR MISSION",
        missionDesc:
          'Dongshui Mountain AI Wellness Valley responds to the "Healthy China" strategy. Relying on 1500 years of tea heritage and Turing Award team technology, we build a comprehensive wellness ecosystem integrating VR Healing, Global Study, Wellness Living, Cultural Trade, and Dongshui Tea Industry.',
        aiColumn: {
          title: "AI Popular Science",
          sub: "AI INSIGHTS",
          desc: "A 2020 Huairou (Beijing) deck that walks through AI's history and where the field is heading next.",
          pptTitle:
            '“Artificial Intelligence: Looking to the Future” (2020 · Beijing Huairou)',
          viewOnline: "View Online",
          viewHint:
            "If the online preview doesn't load, refresh or try later; online view only, download disabled.",
          viewHintLocal:
            "Local/private networks may not load the online preview; refresh or try later; online view only, download disabled.",
        },
        chairman: {
          title: "Chairman's Message",
          subTitle:
            "To Friends & Partners:\nA Date with Technology and Ecology for Rural Vitalization",
          msg1: "Dear Friends,",
          msg2: "Welcome to Dongshui Mountain AI Wellness Valley! Where selenium-rich tea mountains meet cutting-edge technology, and intangible cultural heritage blends with international vision. We are sketching a new picture of rural revitalization with the mission of 'Technology Integration, Business Innovation, and Regional Empowerment'.",
          msg3: "Relying on 5,000 acres of high-quality tea gardens, we have built an 'AI + Synthetic Biology + Blockchain + VR' chain. Smart planting improves tea quality, traceability protects trust, VR healing delivers warmth, and international study builds bridges. Every technology implementation aims for a win-win situation of 'Industrial Prosperity, Wealthy People, and Ecological Beauty'.",
          msg4: "We look forward to working with partners to make Dongshui Mountain a cultural tourism card of the Greater Bay Area. We invite you to join us in drawing a blueprint for industrial prosperity and happiness!",
          name: "Xie Zhizhong",
          role: "Chairman, Dongshui Mountain AI Wellness Valley Co., Ltd.",
          date: "November 20, 2025",
        },
        stats: [
          {
            value: "95km²",
            label: "Nat'l Forest Park",
            sub: "100% Protected Area",
          },
          {
            value: "1.14B",
            label: "Total Investment",
            sub: "Rolling Development",
          },
          {
            value: "150k+",
            label: "Annual Visitors",
            sub: "Top GBA Destination",
          },
          {
            value: "5000mu",
            label: "Smart Tea Garden",
            sub: "Blockchain Traceable",
          },
        ],
      },
      festival: {
        title: "Dongshuishan Int'l Fashion Music Festival",
        sub: "FASHION X MUSIC FESTIVAL",
        heroTitle: "Fashion & Music Among Mountains and Waters",
        heroDesc:
          "When lush Dongshuishan meets global trends, a feast for the eyes and ears unfolds. Built on “Nature with Art, Tradition with Trend,” the festival invites you to a couture-level rendezvous in the valley.",
        heroNote: "Nature x Art · Tradition x Trend",
        date: "2025 · Dongshuishan Core Scenic Area",
        location: "Dongshuishan Eco Valley · 3 Stages",
        highlights: [
          {
            label: "Fashion Lead",
            value: "Laurence Xu Couture",
            desc: "First Chinese designer on Paris Haute Couture Week, bringing intangible craft into an immersive valley show.",
          },
          {
            label: "Music Lineup",
            value: "Berklee Alumni Stars",
            desc: "Pop, rock, jazz, and New Age collide for an all-day sonic celebration.",
          },
          {
            label: "Immersive Scene",
            value: "Main + Interactive + Lawn",
            desc: "Mountain-wide LED vista, heritage experience zone, and relaxing lawn vibes in one loop.",
          },
        ],
        fashionTitle: "Fashion Lead: Laurence Xu's Eastern Aesthetics",
        fashionDesc:
          "Haute couture director Laurence Xu will stage an immersive show in nature. Known for weaving Nanjing brocade, Dunhuang murals, Adras silk, and Miao embroidery into Paris runways, he merges intangible heritage with modern silhouettes to reimagine luxury in the valley.",
        musicTitle: "Music Feast: Berklee Alumni Lineup",
        musicDesc:
          "Berklee alumni artists span pop, rock, jazz, and New Age. Zero-autotune singer-songwriters, crossover producers blending classical and Latin folk, and energetic indie bands deliver a day-long, high-fidelity live experience.",
        sceneTitle: "Nature-Synced Immersion",
        sceneDesc:
          "Three stages nestle between peaks and water: the main stage uses the mountain slope as a panoramic canvas; the interactive stage hosts heritage craft pop-ups so guests can touch the couture DNA; the lawn stage spotlights emerging artists with breezy picnic vibes. Fashion market and photo spots connect music, couture, and sightseeing.",
        closing:
          "This festival fuses global fashion, top-tier music, and pristine ecology—a showcase of trends and an inventive tribute to tradition. Join us to witness the ultimate collision of style and sound at Dongshuishan.",
        stages: [
          {
            name: "Main Stage · Mountain Canvas",
            vibe: "Cinematic Visual",
            detail: "Wide-angle LED blended with the slope, paired with couture visuals and light shows for an enveloping field.",
          },
          {
            name: "Interactive Stage · Heritage Lab",
            vibe: "Up-Close Co-creation",
            detail: "Miao embroidery, brocade, and Adras silk elements for on-site co-creation and bespoke souvenirs.",
          },
          {
            name: "Lawn Stage · Emerging Voices",
            vibe: "Laid-back Energy",
            detail: "Berklee newcomers and indie musicians rotate sets with picnic-and-camp style seating.",
          },
        ],
        experiences: [
          {
            tag: "All-Day Music",
            title: "Berklee Alumni Stars",
            desc: "Zero-autotune vocals and crossover collabs keep the valley's acoustics pure.",
          },
          {
            tag: "Fashion Market",
            title: "Photo Ops & Limited Merch",
            desc: "Couture-inspired merch, nature-scent candles, and art drops in one stroll.",
          },
          {
            tag: "Immersive Light",
            title: "Nightscape x AI Sound",
            desc: "Valley acoustics with mist beams to craft a dreamy night set.",
          },
        ],
        ctaTitle: "Want a one-day itinerary?",
        ctaDesc:
          "Leave your contact—get a tailored schedule plus transport and stay suggestions.",
        ctaBtnPrimary: "Get Itinerary",
        ctaBtnSecondary: "Reserve Premium Seat",
      },
      vr: {
        title: "AI+VR Deep Psychology Healing Center",
        sub: "SMART HEALING",
        heroTitle:
          'From "Treating Disease" to "Promoting Flourishing"\nAI Defines New Mental Health Paradigm',
        heroDesc:
          "Combining 95km² of natural scenery with multimodal emotional computing to provide immersive digital therapies for anxiety and insomnia.",
        productsTitle: "Core Product Matrix",
        products: [
          {
            title: "Smart Psychological CT System (V3.0)",
            desc: 'Psychological "X-ray" technology. Generates a multi-dimensional mental health report in 5 minutes with 92% accuracy using AI analysis of micro-expressions and voice.',
          },
          {
            title: "Bio-Feedback Space Capsule",
            desc: "Integrated bio-sensing (GSR, HRV) to perceive stress levels. AI automatically adjusts holographic lighting, 3D music, and aromatherapy for closed-loop relaxation.",
          },
          {
            title: "VR Immersive Desensitization",
            desc: "1:1 restoration of Dongshui Mountain scenes. Provides gradual virtual exposure therapy for acrophobia and social anxiety.",
          },
        ],
        serviceTitle: "Professional Packages",
        services: [
          {
            name: "21-Day Tea Garden Meditation",
            desc: "Daily 20-min VR mindfulness guide",
            price: "¥ 1,280/Session",
          },
          {
            name: "Youth Emotional Guidance",
            desc: "Gamification intervention for school refusal",
            price: "¥ 2,680/Session",
          },
          {
            name: "Corporate EAP Care",
            desc: "Decompression capsule + Psychological CT",
            price: "Corporate Rate",
          },
          {
            name: "Autism Rehabilitation",
            desc: "AI interactive training supported by Turing team",
            price: "Charity Funded",
          },
        ],
      },
      study: {
        title: "Int'l Study & Cultural Exchange Base",
        sub: "GLOBAL EDUCATION",
        facTitle: "5-Star Facilities",
        facDesc:
          'Total investment of 1.14 billion RMB to build the highest specification "International Cultural Exchange Center" in Western Guangdong. Capable of hosting international summits.',
        facilities: [
          {
            val: "2000",
            unit: "Ppl",
            name: "Int'l Conference Hall",
            desc: "Equipped with simultaneous interpretation.",
          },
          {
            val: "8000",
            unit: "㎡",
            name: "Exhibition Center",
            desc: "For tech exhibitions and cultural festivals.",
          },
          {
            val: "350",
            unit: "Rms",
            name: "5-Star Guest Rooms",
            desc: "Ensuring high-quality accommodation.",
          },
          {
            val: "5",
            unit: "Labs",
            name: "Frontier Tech Labs",
            desc: "AI Psychology, Synthetic Bio, Blockchain.",
          },
        ],
        currTitle: "Graded Curriculum System",
        k12Title: "K12 Education (Primary/Middle)",
        k12List: [
          "Nature Ecology: Dongshui flora/fauna, negative ion monitoring.",
          "Intangible Heritage: Ancient papermaking experience.",
          "Tea Culture: Tea picking and traditional ceremonies.",
        ],
        highTitle: "Higher Education & Research",
        highList: [
          "Synthetic Biology Workshop: Bio-fertilizer experiments.",
          "Smart Agriculture: AI IoT deployment.",
          "Blockchain Traceability: On-chain data practices.",
        ],
      },
      living: {
        title: "Zhuli · Premium Wellness Living",
        sub: "WELLNESS LIVING",
        introTitle: "More Than Living, It's Lifecycle Management",
        introDesc:
          'Breaking traditional elderly care models by integrating "Eco-living" with "Digital Healthcare". Greenery from the window meets invisible AI health guardians.',
        features: [
          {
            title: "Whole-House Smart Monitoring",
            desc: "Millimeter-wave radar monitors falls and heart rate non-intrusively.",
          },
          {
            title: "Customized Selenium Diet",
            desc: "AI nutritionists customize meals using Dongshui selenium-rich ingredients.",
          },
          {
            title: "Green Medical Channel",
            desc: "Direct access to Town Hospital Inpatient Building with expert rounds.",
          },
          {
            title: "Community Cultural Life",
            desc: "Tea art classes, calligraphy, and forest yoga for a rich life.",
          },
        ],
        pricingTitle: "Member Benefits",
        pricingSub:
          'Become a "Dongshui Resident" and enjoy exclusive health services.',
        prices: [
          { name: "Short Stay (7 Days)", price: "From ¥ 2,880" },
          { name: "Wellness Month (30 Days)", price: "From ¥ 8,800" },
          { name: "Migratory Bird Annual Pass", price: "Contact Us" },
        ],
      },
      tea: {
        title: "Dongshui Tea · Top 10 Guangdong Tea",
        sub: "DONGSHUI TEA",
        intro:
          'Produced in Dongshui Mountain, Yangxi County, Dongshui Tea is one of the "Top 10 Famous Teas in Guangdong" and "Eight Treasures of Yangjiang".',
        envTitle: "High Mountain & Clouds Make Good Tea",
        envDesc:
          'Located at 600m altitude canyons, shrouded in mist with ample diffuse light. The weathered rocky soil is rich in minerals and selenium, creating the unique "Mountain Rhyme".',
        historyTitle: "Millennium Heritage · Ancient Trees",
        historyDesc:
          "1500 years of planting history. Over 30,000 ancient tea trees aged 100+ years, with the oldest being over 400 years old. A living tea museum.",
        craftTitle: "Varieties & Craft",
        craftDesc:
          'Represented by "Golden Bud", covering Red, Green, and White tea. Merging ancient withering and rolling with modern temperature-controlled fermentation.',
        featTitle: "Quality Features",
        featList: [
          {
            label: "Double Polyphenols",
            desc: "Twice the content of ordinary tea, strong antioxidant.",
          },
          {
            label: "Selenium Rich",
            desc: "Meets selenium-rich standards, high health value.",
          },
          {
            label: "High Theanine",
            desc: "Fresh, mellow taste with lasting aftertaste.",
          },
          {
            label: "Golden Bud Red Tea",
            desc: "Rich floral aroma, bright golden soup.",
          },
        ],
        honorTitle: "Honors & Awards",
        honors: [
          "Guangdong Top 10 Famous Tea",
          "Guangdong Famous Agricultural Product",
          "Provincial Spring Tea Gold Award",
          "Top 10 Good Spring Tea",
        ],
      },
      about: {
        title: "About Dongshui Mountain Group",
        sub: "ABOUT GROUP",
        desc: 'Focusing on "AI + Health + Ecological Integration". We leverage Dongshui Mountain\'s ecology to link medical, educational, and tourism resources, creating a benchmark for the wellness industry.',
        tags: [
          "Healthy China Strategy",
          "Model Village Project",
          "Top 10 Tea Origin",
          "AI Tourism Benchmark",
        ],
        planTitle: "3-Year Strategic Plan",
        plans: [
          {
            time: "Phase 1 (0-12M)",
            title: "Infrastructure",
            desc: "Cultural center construction, AI computing platform, synthetic bio-fertilizer application.",
          },
          {
            time: "Phase 2 (13-24M)",
            title: "Operation Start",
            desc: "VR center completion, AI agri-insurance, tea token issuance.",
          },
          {
            time: "Phase 3 (25-36M)",
            title: "Benchmark Era",
            desc: "Serving 150k+ visitors/year, becoming a provincial AI+Tourism demonstration.",
          },
        ],
      },
      alliance: {
        title: "Alliance Members",
        sub: "STRATEGIC PARTNERS",
        desc: "Dongshui Mountain AI Wellness Valley has established strategic partnerships with multiple quality enterprises to jointly promote the development of the health industry.",
        joinTitle: "Join Alliance",
        joinDesc:
          "We invite quality enterprises from all fields to join the Dongshui Mountain Strategic Alliance.",
        joinBtn: "Apply Now",
        companies: [
          // Hidden temporarily
          // {
          //   name: "Shenzhen Cishu Health Technology Co., Ltd.",
          //   type: "AI Health Tech",
          //   desc: "Focusing on AI mental health technology R&D, providing core VR psychological healing technology support for Dongshui Mountain.",
          //   tags: ["AI Tech", "Mental Health", "VR Healing"],
          // },
        ],
      },
      ecology: {
        title: "Dongshui Mountain Nat'l Forest Park",
        sub: "ECOLOGICAL BASE",
        desc: 'Located in Xinxu Town, covering 95km². Home to "Ten Views of Yangxi" and profound cultural heritage.',
        teaGarden: {
          title: "5000 Acres Selenium-Rich Tea Garden",
          desc: "Top 10 Guangdong Tea Origin · Natural Selenium 0.3-0.5mg/kg",
        },
        waterfall: "Sheshuitan Waterfall",
        papermaking: {
          title: "Ancient Papermaking Heritage",
          desc: "300 Years of History · Yangjiang Intangible Cultural Heritage",
          btn: "Watch Documentary",
        },
        heritage: "Landscape & Culture · Millennium Heritage",
        features: [
          {
            title: "Natural Landscape",
            desc: '"Bronze Bell Stone" in tea gardens and the majestic Sheshuitan Waterfall.',
          },
          {
            title: "Folklore",
            desc: "Historical Pangu Palace and the touching legend of Wangfu Mountain.",
          },
          {
            title: "Red Gene",
            desc: "As a revolutionary base, it carries the immortal red spirit.",
          },
        ],
        monitor: [
          { label: "Negative Ions", val: "12,000 /cm³", pct: "95%" },
          { label: "Soil Selenium", val: "0.45 mg/kg", pct: "88%" },
          { label: "Water Quality", val: "Class I (Drinkable)", pct: "100%" },
        ],
      },
      tech: {
        title: "AI Core Technology Engine",
        sub: "TECHNOLOGY CORE",
        archTitle: "Human-Machine-Object Architecture",
        archDesc:
          "Deploying edge nodes, 5G/6G micro-stations, and IoT gateways. Building a 200P computing center to support AI models.",
        algoTitle: "AI Emotion Recognition",
        algoDesc:
          "Multimodal affective computing based on micro-expressions, voice, and HRV to assess stress and recommend healing plans.",
        chainTitle: "Blockchain Traceability",
        chainDesc:
          'Generating unique "Digital IDs" for every batch of tea using consortium blockchain. Ensuring data privacy for farmers.',
        bioTitle: "Synthetic Biology Fertilizer",
        bioDesc:
          "Using fermentation to produce amino acid water-soluble fertilizers, reducing chemical fertilizer use by 30% while boosting quality.",
        bioList: [
          "Fertilizer Reduced 20-30%",
          "Yield Increased 10-15%",
          "Polyphenols Up 8-12%",
          "Pest Warning 92%",
        ],
      },
    },
  },
};


export default DATA;
