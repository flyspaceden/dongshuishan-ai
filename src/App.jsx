import React, { useState, useEffect } from "react";
import teaGardenImage from "./assets/images/生态基地/生态基地1.jpg";
import teaProductImage from "./assets/images/核心业务/东水茶/东水茶1.jpg";
import teaProductImage2 from "./assets/images/核心业务/东水茶/东水茶2.jpg";
import teaProcessVideo from "./assets/images/核心业务/东水茶/绿茶制作工艺视频生成.mp4";
import aiPptFile from "./assets/images/首页/人工智能：从历史看未来-2020-北京怀柔.pptx";
import aiPptThumb from "./assets/images/首页/ai-ppt-thumb.jpeg";
import yogaImage from "./assets/images/核心业务/康养旅居/瑜伽.jpg";
import expertDengImage from "./assets/images/专家智库/邓小铁.jpg";
import expertLiImage from "./assets/images/专家智库/李欢.png";
import umassTuringImage from "./assets/images/专家智库/umass图灵.jpg";
import {
  Brain,
  Sprout,
  Globe,
  Home,
  Activity,
  Cpu,
  Users,
  ArrowRight,
  Leaf,
  Mountain,
  Droplets,
  Play,
  Database,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  HeartPulse,
  GraduationCap,
  ShieldCheck,
  Award,
  Building2,
  Microscope,
  ChevronRight,
  Stethoscope,
  Sun,
  Coffee,
  BookOpen,
  Wifi,
  ArrowLeft,
  ChevronDown,
  Monitor,
  FileDown,
  UserCheck,
  Quote,
  Trophy,
  CloudFog,
  ZoomIn,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. 多语言数据源 (Data Source) ---

const DATA = {
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
          download: "下载 PPT",
          viewHint: "如在线预览未加载，请点击在线预览（新标签页）或直接下载查看。",
          viewHintLocal: "本地/内网可能无法加载在线预览，请点击在线预览（新标签页）或直接下载查看。",
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
          download: "Download PPT",
          viewHint:
            "If the online preview doesn't load, open in a new tab or download to view.",
          viewHintLocal:
            "Local/private networks may not load the online preview; open in a new tab or download to view.",
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

// --- 2. 通用UI组件 (UI Components) ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer select-none";
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95",
    outline:
      "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent active:scale-95",
    white:
      "bg-white text-slate-900 hover:bg-slate-100 shadow-md active:scale-95",
    ghost: "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  light = false,
}) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-bold tracking-widest text-sm uppercase mb-3 block ${
        light ? "text-emerald-300" : "text-emerald-600"
      }`}
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full ${
        align === "center" ? "mx-auto" : ""
      }`}
    ></motion.div>
  </div>
);

const FeatureCard = ({ icon, title, desc, onClick, btnText }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 cursor-pointer group"
    onClick={onClick}
  >
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed text-sm h-20 line-clamp-3">
      {desc}
    </p>
    <div className="text-emerald-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
      {btnText} <ArrowRight size={16} />
    </div>
  </motion.div>
);

const BackButton = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 font-medium group"
  >
    <div className="p-2 rounded-full bg-slate-100 group-hover:bg-emerald-100 transition-colors">
      <ArrowLeft size={20} />
    </div>
    {text}
  </button>
);

// --- 3. 页面组件 (Pages) ---

// [NEW] Dongshui Tea Page
const DongshuiTeaPage = ({ navigate, t }) => {
  const content = t.pages.tea;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-stone-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden h-[450px] mb-16 shadow-2xl group">
          <img
            src={teaProductImage}
            alt="Tea Garden"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent flex flex-col justify-end p-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              {content.envTitle}
            </h3>
            <p className="text-stone-200 text-lg max-w-2xl">
              {content.envDesc}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-stone-200 mb-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              {content.intro}
            </h3>
            <div className="h-1 w-20 bg-emerald-500 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.featList.map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{feat.label}</h4>
                    <p className="text-sm text-stone-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={teaProductImage2}
              className="rounded-2xl shadow-lg w-full"
              alt="Tea Cup"
            />
          </div>
        </div>

        {/* History & Craft */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-stone-100 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-amber-600" size={32} />
                <h3 className="text-2xl font-bold text-stone-800">
                  {content.historyTitle}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {content.historyDesc}
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-emerald-600" size={32} />
                <h3 className="text-2xl font-bold text-stone-800">
                  {content.craftTitle}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {content.craftDesc}
              </p>
            </div>
          </div>
          <div className="h-full min-h-[300px] rounded-3xl overflow-hidden relative">
            <video
              src={teaProcessVideo}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              title="Tea Processing Video"
            />
            <div className="absolute top-4 right-4 bg-amber-50/95 border border-amber-200 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-amber-800 shadow-xl pointer-events-none flex items-center gap-2">
              <Trophy className="text-amber-500" size={14} />
              <span>{content.honorTitle}</span>
            </div>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-stone-400 uppercase tracking-widest mb-8">
            {content.honorTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.honors.map((honor, i) => (
              <div
                key={i}
                className="border border-stone-200 p-6 rounded-xl hover:border-amber-400 hover:bg-amber-50 transition-all cursor-default"
              >
                <Award className="mx-auto text-amber-500 mb-3" size={32} />
                <div className="font-bold text-stone-700 text-sm">{honor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VRHealingPage = ({ navigate, t }) => {
  const content = t.pages.vr;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        <div className="relative rounded-3xl overflow-hidden h-[450px] mb-16 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop"
            alt="VR Healing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex items-center p-12">
            <div className="max-w-xl text-white">
              <h3 className="text-4xl font-bold mb-6 leading-tight whitespace-pre-line">
                {content.heroTitle}
              </h3>
              <p className="text-lg text-slate-300 mb-8">{content.heroDesc}</p>
              <Button variant="primary">{t.common.btnSubmit}</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              {content.productsTitle}
            </h3>
            <div className="space-y-8">
              {[
                {
                  icon: <Monitor size={28} />,
                  color: "blue",
                  ...content.products[0],
                },
                {
                  icon: <Activity size={28} />,
                  color: "purple",
                  ...content.products[1],
                },
                {
                  icon: <Mountain size={28} />,
                  color: "emerald",
                  ...content.products[2],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center text-${item.color}-600 flex-shrink-0 group-hover:bg-${item.color}-600 group-hover:text-white transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <UserCheck className="text-emerald-500" />{" "}
                {content.serviceTitle}
              </h3>
              <div className="space-y-4">
                {content.services.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer"
                  >
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">
                        {item.name}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-white px-3 py-1 rounded-full shadow-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  {t.common.successCase}
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {t.common.caseStudy.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t.common.caseStudy.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Building2 size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GlobalStudyPage = ({ navigate, t }) => {
  const content = t.pages.study;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="text-orange-500" /> {content.facTitle}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {content.facDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {content.facilities.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="font-bold text-3xl text-slate-900 mb-1">
                      {item.val}
                      <span className="text-sm font-normal text-slate-500 ml-1">
                        {item.unit}
                      </span>
                    </div>
                    <div className="font-bold text-slate-800 mb-2">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-orange-500" /> {content.currTitle}
              </h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-lg text-orange-800 mb-2">
                    {content.k12Title}
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                    {content.k12List.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-lg text-blue-800 mb-2">
                    {content.highTitle}
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                    {content.highList.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h4 className="font-bold text-lg mb-6">
                {t.common.latestActivity}
              </h4>
              <div className="space-y-6">
                <div className="pb-6 border-b border-slate-100">
                  <div className="text-xs font-bold text-white bg-orange-500 px-2 py-0.5 rounded w-fit mb-2">
                    {t.common.studyActivity.tag}
                  </div>
                  <h5 className="font-bold text-slate-800 text-lg">
                    {t.common.studyActivity.title}
                  </h5>
                  <p className="text-sm text-slate-500 mt-2">
                    {t.common.studyActivity.duration}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                    <Clock size={14} /> 2025.01.15
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 justify-center">
                {t.common.btnDownload}
              </Button>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">
                  {t.common.coopSchool}
                </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.common.schools.map((school, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded text-xs"
                    >
                      {school}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WellnessLivingPage = ({ navigate, t }) => {
  const content = t.pages.living;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] mb-16">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Main House"
            />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1540544660406-6a69dacb2804?q=80&w=2150&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Tea Food"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              src={yogaImage}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Yoga"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-200 flex items-center justify-center text-slate-400 text-sm font-bold cursor-pointer hover:bg-slate-300 transition-colors flex-col gap-2">
            <Home size={32} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {content.introTitle}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.introDesc}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Wifi size={20} />, ...content.features[0] },
                  { icon: <Coffee size={20} />, ...content.features[1] },
                  { icon: <Stethoscope size={20} />, ...content.features[2] },
                  { icon: <Sun size={20} />, ...content.features[3] },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Home size={120} />
            </div>
            <h4 className="font-bold text-xl mb-2">{content.pricingTitle}</h4>
            <p className="text-slate-400 text-sm mb-8">{content.pricingSub}</p>

            <div className="space-y-4 mb-8">
              {content.prices.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span>{item.name}</span>
                  <span className="font-bold text-emerald-400">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full justify-center">
              {t.common.btnBookRoom}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesOverviewPage = ({ navigate, t }) => {
  const content = t.pages;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={t.nav.services} subtitle={t.nav.servicesSub} />

        {/* 1. VR Healing */}
        <div id="vr" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop"
                alt="VR"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Brain />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.vr.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.vr.heroDesc}
              </p>
              <Button variant="primary" onClick={() => navigate("vr-healing")}>
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Global Study */}
        <div id="study" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Study"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <GraduationCap />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.study.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.study.facDesc}
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("global-study")}
              >
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 3. Wellness Living */}
        <div id="living" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
                alt="Living"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Home />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.living.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.living.introDesc}
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("wellness-living")}
              >
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 4. Dongshui Tea [NEW] */}
        <div id="tea" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1586335960010-449e7b26499a?q=80&w=2070&auto=format&fit=crop"
                alt="Tea"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 mb-6">
                <Leaf />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.tea.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.tea.intro} {content.tea.historyDesc}
              </p>
              <Button variant="outline" onClick={() => navigate("tea")}>
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = ({ navigate, t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pptUrl, setPptUrl] = useState(aiPptFile);
  const [isLocalHost, setIsLocalHost] = useState(true);
  const [embedFailed, setEmbedFailed] = useState(false);
  const carouselData = t.carousel;
  const aiColumn = t.pages.home.aiColumn;

  useEffect(() => {
    if (typeof window !== "undefined" && aiPptFile) {
      const absoluteUrl = aiPptFile.startsWith("http")
        ? aiPptFile
        : `${window.location.origin}${aiPptFile.startsWith("/") ? "" : "/"}${aiPptFile}`;
      setPptUrl(absoluteUrl || aiPptFile);
      const host = window.location.hostname;
      const isPrivateNetwork =
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "::1" ||
        host.startsWith("192.168.") ||
        host.startsWith("10.") ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
      setIsLocalHost(isPrivateNetwork);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselData.length]);

  const pptEmbedUrl =
    !isLocalHost && pptUrl
      ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
          pptUrl
        )}`
      : null;
  const pptPreviewLink =
    pptUrl && !isLocalHost
      ? `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
          pptUrl
        )}`
      : pptUrl || "#";

  useEffect(() => {
    setEmbedFailed(false);
  }, [pptEmbedUrl]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Carousel */}
      <section className="relative h-[92vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          {carouselData.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-70 transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="max-w-4xl mt-20">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-sm font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {carouselData[currentSlide].subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                {carouselData[currentSlide].title}
              </h1>
              <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl">
                {carouselData[currentSlide].desc}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => navigate(carouselData[currentSlide].link)}
                >
                  {t.common.btnDetail} <ArrowRight size={18} />
                </Button>
                <Button variant="white" onClick={() => navigate("contact")}>
                  <Play size={18} /> {t.common.btnReserve}
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-6 flex gap-3">
            {carouselData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "bg-emerald-400 w-12"
                    : "bg-white/30 w-4 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="relative z-20 -mt-24 container mx-auto px-6 mb-24">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              {
                icon: <Mountain className="text-emerald-500" />,
                ...t.pages.home.stats[0],
              },
              {
                icon: <Activity className="text-blue-500" />,
                ...t.pages.home.stats[1],
              },
              {
                icon: <Users className="text-orange-500" />,
                ...t.pages.home.stats[2],
              },
              {
                icon: <Database className="text-purple-500" />,
                ...t.pages.home.stats[3],
              },
            ].map((stat, i) => (
              <div key={i} className="pl-8 first:pl-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.common.liveData}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-700">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 container mx-auto px-6 text-center">
        <SectionHeader
          title={t.pages.home.missionTitle}
          subtitle={t.pages.home.missionSub}
        />
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          {t.pages.home.missionDesc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={32} />}
            title={t.nav.sub.vr}
            desc={t.carousel[2].desc}
            onClick={() => navigate("vr-healing")}
            btnText={t.common.btnDetail}
          />
          <FeatureCard
            icon={<Sprout size={32} />}
            title={t.nav.technology}
            desc={t.carousel[1].desc}
            onClick={() => navigate("technology")}
            btnText={t.common.btnDetail}
          />
          <FeatureCard
            icon={<Globe size={32} />}
            title={t.nav.sub.study}
            desc={t.pages.study.facDesc}
            onClick={() => navigate("global-study")}
            btnText={t.common.btnDetail}
          />
        </div>
      </section>

      {/* AI Popular Science */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader title={aiColumn.title} subtitle={aiColumn.sub} />
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="space-y-5">
              <h4 className="text-2xl font-bold text-slate-900 leading-tight">
                {aiColumn.pptTitle}
              </h4>
              <p className="text-slate-600 leading-relaxed">{aiColumn.desc}</p>
              <p className="text-xs text-slate-400">
                {isLocalHost ? aiColumn.viewHintLocal : aiColumn.viewHint}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={pptPreviewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200"
                >
                  <BookOpen size={18} />
                  {aiColumn.viewOnline}
                </a>
                <a
                  href={aiPptFile}
                  download
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                >
                  <FileDown size={18} />
                  {aiColumn.download}
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
                <div className="relative aspect-video bg-slate-100">
                  {pptEmbedUrl && !embedFailed ? (
                    <iframe
                      title={aiColumn.pptTitle}
                      src={pptEmbedUrl}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      onError={() => setEmbedFailed(true)}
                    />
                  ) : pptUrl ? (
                    <object
                      data={pptUrl}
                      type="application/vnd.openxmlformats-officedocument.presentationml.presentation"
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={aiPptThumb}
                        alt={aiColumn.pptTitle}
                        className="w-full h-full object-contain bg-white"
                      />
                    </object>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm">
                      加载中...
                    </div>
                  )}
                  {isLocalHost && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-amber-700 border border-amber-200 shadow-sm max-w-[75%] text-right">
                      {aiColumn.viewHintLocal}
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 text-sm text-slate-600 flex items-center justify-between gap-4">
                  <span className="font-medium text-slate-800">
                    {aiColumn.pptTitle}
                  </span>
                  <span className="text-slate-400">{aiColumn.viewHint}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ChairmanMessageSection = ({ t }) => {
  const content = t.pages.home.chairman;
  return (
    <div className="mb-20">
      <div className="relative bg-emerald-900 rounded-3xl p-8 md:p-12 overflow-hidden text-white shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <div className="w-16 h-1 bg-emerald-400 mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {content.title}
            </h3>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 whitespace-pre-line">
              {content.subTitle}
            </h3>
            <div className="mt-8">
              <Quote className="text-emerald-500/30 w-20 h-20" />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 text-emerald-50 leading-relaxed font-light text-justify">
            <p>{content.msg1}</p>
            <p>{content.msg2}</p>
            <p>{content.msg3}</p>
            <p>{content.msg4}</p>

            <div className="pt-8 flex flex-col items-end">
              <div className="text-xl font-bold text-white mb-1">
                {content.name}
              </div>
              <div className="text-sm text-emerald-300 mb-2">
                {content.role}
              </div>
              <div className="text-xs text-emerald-400/60 font-mono">
                {content.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = ({ navigate, t }) => {
  const content = t.pages.about;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {content.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-loose text-justify">
              {content.desc}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {content.tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle size={16} className="text-emerald-500" /> {tag}
                </div>
              ))}
            </div>
            <Button
              variant="primary"
              className="mt-8"
              onClick={() => navigate("experts")}
            >
              {t.nav.experts} <ArrowRight size={16} />
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </div>
        </div>

        <ChairmanMessageSection t={t} />

        {/* Alliance Members Entry */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Users size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t.nav.alliance}
              </h3>
              <p className="text-slate-300 max-w-xl">{t.pages.alliance.desc}</p>
            </div>
            <Button
              variant="primary"
              onClick={() => navigate("alliance")}
              className="flex-shrink-0 relative z-10"
            >
              {t.common.btnDetail} <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-12">
            {content.planTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.plans.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-slate-100 transform translate-x-1/4 -translate-y-1/4">
                  {
                    [
                      <Building2 key="1" />,
                      <Play key="2" />,
                      <Award key="3" />,
                    ][i]
                  }
                </div>
                <span className="text-emerald-600 font-bold text-sm block mb-2">
                  {item.time}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Alliance Members Page
const AlliancePage = ({ navigate, t }) => {
  const content = t.pages.alliance;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-16 text-center max-w-4xl mx-auto">
          <p className="text-slate-600 text-lg leading-relaxed">
            {content.desc}
          </p>
        </div>

        {/* Alliance Companies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            {content.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.companies.map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center border border-emerald-100 group-hover:from-emerald-100 group-hover:to-cyan-100 transition-colors">
                    <Building2 className="text-emerald-600" size={28} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {company.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {company.name}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {company.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {company.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Alliance CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Users size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{content.joinTitle}</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              {content.joinDesc}
            </p>
            <Button variant="white" onClick={() => navigate("contact")}>
              {content.joinBtn} <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExpertsPage = ({ t }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 bg-slate-50 min-h-screen"
      >
        <div className="container mx-auto px-6">
          <SectionHeader title={t.nav.experts} subtitle={t.nav.expertsSub} />
          <div className="space-y-20">
            {t.experts.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {group.title}
                  </h3>
                </div>

                {/* 仅首席顾问与院士用特殊展示，其余都用标准卡片 */}
                {group.featured ? (
                  <div className="flex justify-center">
                    {group.members.map((expert, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-300 group max-w-xl w-full relative overflow-hidden"
                      >
                        {/* 装饰背景 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

                        {/* 院士徽章 */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                          <Award size={14} />
                          <span className="text-xs font-bold">院士</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                          {/* 大头像 */}
                          <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-4 border-amber-200 shadow-xl mb-4 group-hover:border-amber-300 transition-colors">
                            {expert.image ? (
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                <Users size={44} />
                              </div>
                            )}
                          </div>

                          <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                            {expert.title}
                          </div>

                          <h4 className="text-xl font-bold text-slate-900 mb-1">
                            {expert.name}
                          </h4>
                          <p className="text-emerald-600 text-sm font-medium mb-4">
                            {expert.org}
                          </p>

                          <div className="h-px w-20 bg-amber-200 mb-4"></div>

                          <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-md">
                            {expert.desc}
                          </p>

                          <div className="flex flex-wrap justify-center gap-2">
                            {expert.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white text-slate-600 text-xs rounded-full border border-amber-200 shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* 多人普通展示 */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.members.map((expert, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md group-hover:border-emerald-200 transition-colors">
                            {expert.image ? (
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                <Users size={40} />
                              </div>
                            )}
                          </div>
                          <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-right max-w-[50%]">
                            {expert.title}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">
                          {expert.name}
                        </h4>
                        <p className="text-sm text-emerald-600 font-medium mb-4">
                          {expert.org}
                        </p>
                        <div className="h-px w-full bg-slate-100 mb-4"></div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                          {expert.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {expert.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {expert.honorImage && (
                          <div className="mt-6 pt-6 border-t border-slate-100">
                            <div
                              className="relative rounded-xl overflow-hidden cursor-pointer group/honor"
                              onClick={() =>
                                setLightboxImage({
                                  src: expert.honorImage,
                                  caption: expert.honorCaption,
                                })
                              }
                            >
                              <img
                                src={expert.honorImage}
                                alt={expert.honorCaption}
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover/honor:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                                <p className="text-white text-xs font-medium drop-shadow-lg">
                                  {expert.honorCaption}
                                </p>
                                <span className="text-white/80 text-xs flex items-center gap-1">
                                  <ZoomIn size={14} /> 点击放大
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium">
                  {lightboxImage.caption}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const EcologyPage = ({ t }) => {
  const content = t.pages.ecology;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] mb-16">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={teaGardenImage}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Tea"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 className="text-2xl font-bold text-white">
                {content.teaGarden.title}
              </h3>
              <p className="text-emerald-300">{content.teaGarden.desc}</p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Water"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">
                  {content.waterfall}
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-emerald-900">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h4 className="text-white font-bold text-xl mb-2">
                  {content.papermaking.title}
                </h4>
                <p className="text-emerald-200 text-sm">
                  {content.papermaking.desc}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-white text-white hover:bg-white hover:text-emerald-900"
                >
                  {content.papermaking.btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {content.heritage}
            </h3>
            <p className="text-slate-600 leading-loose mb-6">{content.desc}</p>
            <ul className="space-y-4">
              {content.features.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-3xl">
            <h4 className="font-bold text-slate-900 mb-6">
              {t.common.liveData}
            </h4>
            <div className="space-y-6">
              {content.monitor.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-bold text-emerald-600">
                      {item.val}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: item.pct }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechPage = ({ t }) => {
  const content = t.pages.tech;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          light={true}
        />
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Cpu className="text-cyan-400" size={32} />
                <h3 className="text-xl font-bold">{content.archTitle}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {content.archDesc}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="text-purple-400" size={32} />
                <h3 className="text-xl font-bold">{content.algoTitle}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {content.algoDesc}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
              alt="AI Brain"
              className="relative z-10 rounded-2xl border border-white/20 shadow-2xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900 p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Database size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" /> {content.chainTitle}
            </h3>
            <p className="text-slate-300 mb-6">{content.chainDesc}</p>
            <div className="bg-black/30 p-4 rounded-lg font-mono text-xs text-emerald-400 border border-emerald-500/20">
              <div>Hash: 0x7f...3a2b</div>
              <div>Block Height: 1402391</div>
              <div>Status: Verified (SGS)</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-slate-900 p-10 rounded-3xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sprout size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Microscope className="text-blue-400" /> {content.bioTitle}
            </h3>
            <p className="text-slate-300 mb-6">{content.bioDesc}</p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-blue-200">
              {content.bioList.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = ({ t }) => {
  const content = t.common.contact;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <SectionHeader title={t.nav.contact} subtitle={content.sub} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-900 text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <MapPin size={200} />
          </div>
          <h3 className="text-2xl font-bold mb-8">
            {t.common.footer.companyName}
          </h3>
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-emerald-400">
                <MapPin />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">{t.nav.contact}</p>
                <p className="font-medium">{content.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-blue-400">
                <Phone />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">
                  {t.common.footer.telLabel}
                </p>
                <p className="font-medium">{content.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-orange-400">
                <Mail />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">
                  {t.common.footer.emailLabel}
                </p>
                <p className="font-medium">{content.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-slate-900">
            {t.common.btnSubmit}
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.formName}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.formPhone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {content.formType}
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50">
                {content.types.map((type, i) => (
                  <option key={i}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {content.formDesc}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
              ></textarea>
            </div>
            <Button
              variant="primary"
              className="w-full justify-center font-bold text-lg"
            >
              {t.common.btnSubmit}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

// Navbar
const Navbar = ({ currentPage, navigate, lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [currentPage]);

  const navItems = [
    { id: "home", label: t.nav.home },
    {
      id: "about",
      label: t.nav.about,
      hasDropdown: true,
      dropdownType: "about",
      subItems: [
        { id: "about", label: t.nav.aboutSub },
        { id: "alliance", label: t.nav.alliance },
      ],
    },
    { id: "ecology", label: t.nav.ecology },
    { id: "technology", label: t.nav.technology },
    {
      id: "services",
      label: t.nav.services,
      hasDropdown: true,
      dropdownType: "services",
      subItems: [
        { id: "vr-healing", label: t.nav.sub.vr },
        { id: "global-study", label: t.nav.sub.study },
        { id: "wellness-living", label: t.nav.sub.living },
        { id: "tea", label: t.nav.sub.tea },
      ],
    },
    { id: "experts", label: t.nav.experts },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || (currentPage !== "home" && currentPage !== "technology")
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => navigate("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Brain size={20} />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-none tracking-wide ${
                  isScrolled ||
                  (currentPage !== "home" && currentPage !== "technology")
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                东水山
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest mt-1 ${
                  isScrolled ||
                  (currentPage !== "home" && currentPage !== "technology")
                    ? "text-slate-500"
                    : "text-emerald-200"
                }`}
              >
                AI Wellness Valley
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2 px-4 hidden lg:flex">
            <div className="flex gap-6">
              {navItems.map((item) => {
                const isOpen =
                  item.dropdownType === "about"
                    ? aboutOpen
                    : item.dropdownType === "services"
                    ? servicesOpen
                    : false;
                const setOpen =
                  item.dropdownType === "about"
                    ? setAboutOpen
                    : item.dropdownType === "services"
                    ? setServicesOpen
                    : () => {};
                const activeSubPages =
                  item.dropdownType === "services"
                    ? ["vr-healing", "global-study", "wellness-living", "tea"]
                    : item.dropdownType === "about"
                    ? ["about", "alliance"]
                    : [];

                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setOpen(false)}
                  >
                    <button
                      onClick={() => !item.hasDropdown && navigate(item.id)}
                      className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-emerald-500 relative py-2 flex items-center gap-1 ${
                        currentPage === item.id ||
                        (item.hasDropdown &&
                          activeSubPages.includes(currentPage))
                          ? "text-emerald-500"
                          : isScrolled ||
                            (currentPage !== "home" &&
                              currentPage !== "technology")
                          ? "text-slate-600"
                          : "text-slate-200"
                      }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span
                        className={`absolute -bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 transition-all duration-300 ${
                          currentPage === item.id ||
                          (item.hasDropdown &&
                            activeSubPages.includes(currentPage))
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      ></span>
                    </button>

                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 transition-all duration-200 ${
                          isOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-emerald-100/50 overflow-hidden p-2">
                          {item.subItems.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                navigate(sub.id);
                                setOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors ${
                                currentPage === sub.id
                                  ? "text-emerald-600 bg-emerald-50 font-medium"
                                  : "text-slate-600"
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang((l) => (l === "zh" ? "en" : "zh"))}
              className={`px-3 py-1 rounded border text-xs font-bold transition-all ${
                isScrolled ||
                (currentPage !== "home" && currentPage !== "technology")
                  ? "border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-500"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>

            <Button
              variant="primary"
              className="px-5 py-2 text-sm shadow-emerald-200/50 flex-shrink-0 hidden xl:flex"
              onClick={() => navigate("contact")}
            >
              {t.nav.cooperation}
            </Button>

            <button
              className={`lg:hidden p-2 rounded-lg border transition-all ${
                isScrolled ||
                (currentPage !== "home" && currentPage !== "technology")
                  ? "border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="lg:hidden mt-4">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileMenuOpen
                ? "max-h-[80vh] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md border border-emerald-50 rounded-2xl shadow-xl p-4 space-y-1">
              {navItems.map((item) => {
                const isExpanded = mobileDropdown === item.id;
                const isActive = currentPage === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-slate-100 last:border-none"
                  >
                    <button
                      onClick={() => {
                        if (item.hasDropdown) {
                          setMobileDropdown((prev) =>
                            prev === item.id ? null : item.id
                          );
                        } else {
                          navigate(item.id);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between py-3 text-left px-2 rounded-lg font-semibold transition-colors ${
                        isActive
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-800 hover:bg-emerald-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isExpanded ? "rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      )}
                    </button>

                    {item.hasDropdown && isExpanded && (
                      <div className="flex flex-col gap-2 pb-3 pl-3">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              navigate(sub.id);
                              setMobileMenuOpen(false);
                            }}
                            className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                              currentPage === sub.id
                                ? "bg-emerald-50 text-emerald-600 font-medium"
                                : "text-slate-700 hover:bg-emerald-50"
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2 flex flex-col gap-2">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    navigate("contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  {t.nav.cooperation}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ navigate, t }) => (
  <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
              AI
            </div>
            <span className="text-xl font-bold">
              {t.common.footer.companyName}
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-sm">
            {t.common.footer.slogan}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">
            {t.nav.services}
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <button
                onClick={() => navigate("vr-healing")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.vr}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("global-study")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.study}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("tea")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.tea}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("wellness-living")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.living}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">{t.nav.contact}</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              {t.common.footer.addrLabel}: {t.common.contact.address}
            </li>
            <li>
              {t.common.footer.telLabel}: {t.common.contact.phone}
            </li>
            <li>
              {t.common.footer.emailLabel}: {t.common.contact.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-slate-600 text-xs">
        <div className="space-y-1">
          <p>{t.common.footer.copyright}</p>
          <p>{t.common.footer.support}</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            {t.common.footer.privacy}
          </a>
          <a href="#" className="hover:text-white">
            {t.common.footer.terms}
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("zh"); // 'zh' or 'en'
  const t = DATA[lang];

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} t={t} />;
      case "about":
        return <AboutPage navigate={navigate} t={t} />;
      case "alliance":
        return <AlliancePage navigate={navigate} t={t} />;
      case "experts":
        return <ExpertsPage t={t} />;
      case "ecology":
        return <EcologyPage t={t} />;
      case "technology":
        return <TechPage t={t} />;
      case "services":
        return <ServicesOverviewPage navigate={navigate} t={t} />;
      case "vr-healing":
        return <VRHealingPage navigate={navigate} t={t} />;
      case "global-study":
        return <GlobalStudyPage navigate={navigate} t={t} />;
      case "wellness-living":
        return <WellnessLivingPage navigate={navigate} t={t} />;
      case "tea":
        return <DongshuiTeaPage navigate={navigate} t={t} />; // New Page
      case "contact":
        return <ContactPage t={t} />;
      default:
        return <HomePage navigate={navigate} t={t} />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <main>
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>
      <Footer navigate={navigate} t={t} />

      {/* AI Assistant Floating Button */}
      <div className="fixed bottom-8 right-8 z-40 group">
        <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-200 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative z-10">
          <Brain size={24} />
        </button>
        <div className="absolute bottom-2 right-16 bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 text-xs font-bold text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity origin-right duration-300">
          {t.common.aiAssistant}
        </div>
        <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-30 animate-ping z-0"></div>
      </div>
    </div>
  );
};

export default App;
