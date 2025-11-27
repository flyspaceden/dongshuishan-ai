import React, { useState, useEffect } from 'react';
import { 
  Brain, Sprout, Globe, Home, Activity, Cpu, Users, ArrowRight, 
  Leaf, Mountain, Droplets, Play, Database, Phone, Mail, MapPin, 
  Clock, CheckCircle, HeartPulse, GraduationCap, ShieldCheck, Award, Building2, 
  Microscope, ChevronRight, Stethoscope, Sun, Coffee, BookOpen, Wifi,
  ArrowLeft, ChevronDown, Monitor, UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. 全局数据源 ---

// 轮播图
const CAROUSEL_DATA = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    subtitle: "国家森林公园 · 95平方公里天然氧吧",
    title: "东水山 · 生态之源",
    desc: "坐拥鹅凰远眺、清溪碧潭，7000亩富硒土地，构建AI康养的天然基石。",
    link: "ecology"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563911892437-1feda9d5e54a?q=80&w=2070&auto=format&fit=crop",
    subtitle: "AI + 合成生物 + 区块链溯源",
    title: "智慧农业 · 科技赋能",
    desc: "合成生物氨基酸水肥精准灌溉，每一片东水山茶都有专属的区块链数字身份证。",
    link: "technology"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop",
    subtitle: "图灵奖团队技术支持 · VR沉浸式干预",
    title: "AI 心理疗愈 · 智愈身心",
    desc: "多场景VR情绪疏导系统，为压力人群提供个性化、沉浸式的心理健康解决方案。",
    link: "services"
  }
];

// 专家数据
const EXPERTS_GROUPS = [
  {
    title: "首席顾问与院士",
    members: [
      { name: "邓小铁 院士", title: "首席科学顾问", org: "欧洲科学院外籍院士", desc: "国际知名算法博弈论专家，为东水山项目提供顶层AI架构设计与国际化视野指导。", tags: ["顶层设计", "算法博弈论"] },
      { name: "赵伟 院士", title: "首席技术顾问", org: "国际欧亚科学院院士", desc: "在分布式计算与物联网领域拥有卓越成就，指导项目从“数字基建”到“智慧服务”的全面落地。", tags: ["物联网", "分布式计算"] }
    ]
  },
  {
    title: "AI 技术专家委员会",
    members: [
      { name: "李欢 教授", title: "技术委员会主任", org: "图灵奖团队成员 / 哈工大（深圳）", desc: "哈尔滨工业大学（深圳）国际人工智能研究院创始人，国家科技援疆专家。主导研发了基于多模态情感计算的AI心理疗愈系统。", tags: ["AI算法", "情感计算", "自闭症干预"] },
      { name: "丁勇 教授", title: "区块链技术专家", org: "知名高校网络空间安全学院院长", desc: "负责构建东水山茶叶区块链溯源体系与数据隐私计算平台，确保数据资产的安全与价值化。", tags: ["区块链", "隐私计算"] }
    ]
  },
  {
    title: "心理与医学专家委员会",
    members: [
      { name: "江光荣 教授", title: "名誉心理顾问", org: "华中师范大学 / 中国心理学会", desc: "中国心理学会临床与咨询心理学专业委员会主任，国内学校心理学泰斗，构建了项目心理干预的学术标准。", tags: ["心理咨询", "行业标准制定"] },
      { name: "任志洪 教授", title: "首席心理科学家", org: "华中师范大学 / 威斯康星大学博士后", desc: "教育部心理援助热线平台咨询业务负责人，专注于利用大数据与AI技术提升心理援助效率。", tags: ["大数据心理", "注册督导师"] },
      { name: "徐忠信 教授", title: "首席医学顾问", org: "中日联谊医院 / 神经内科", desc: "神经内科主任，博士生导师。将临床神经科学引入康养体系，针对认知障碍与老年病提供专业指导。", tags: ["神经内科", "脑科学"] }
    ]
  },
  {
    title: "产业与农业专家",
    members: [
      { name: "朱文奇 教授", title: "现代农业专家", org: "上海交通大学", desc: "合成生物学与现代农业专家，指导东水山富硒茶产业的合成生物水肥应用与品质升级。", tags: ["合成生物", "智慧农业"] }
    ]
  }
];

// --- 2. 通用UI组件 ---

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer select-none";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95",
    outline: "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent active:scale-95",
    white: "bg-white text-slate-900 hover:bg-slate-100 shadow-md active:scale-95",
    ghost: "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-bold tracking-widest text-sm uppercase mb-3 block ${light ? 'text-emerald-300' : 'text-emerald-600'}`}
    >
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
    ></motion.div>
  </div>
);

const FeatureCard = ({ icon, title, desc, onClick }) => (
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
      深入了解 <ArrowRight size={16} />
    </div>
  </motion.div>
);

const BackButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 font-medium group"
  >
    <div className="p-2 rounded-full bg-slate-100 group-hover:bg-emerald-100 transition-colors">
      <ArrowLeft size={20} />
    </div>
    返回业务总览
  </button>
);

// --- 3. 核心业务详情页 (Rich Content) ---

// [详情页 1] VR心理疗愈
const VRHealingPage = ({ navigate }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6">
      <BackButton onClick={() => navigate('services')} />
      <SectionHeader title="AI+VR 深度心理疗愈中心" subtitle="SMART HEALING" align="left" />
      
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden h-[450px] mb-16 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop" alt="VR Healing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex items-center p-12">
          <div className="max-w-xl text-white">
            <div className="mb-4 flex gap-2">
              <span className="px-3 py-1 bg-cyan-500/30 border border-cyan-400 rounded-full text-xs text-cyan-200">图灵奖团队技术支持</span>
              <span className="px-3 py-1 bg-emerald-500/30 border border-emerald-400 rounded-full text-xs text-emerald-200">非药物干预</span>
            </div>
            <h3 className="text-4xl font-bold mb-6 leading-tight">从“治疗疾病”到“促进繁荣”<br/>AI定义心理健康新范式</h3>
            <p className="text-lg text-slate-300 mb-8">结合东水山95平方公里自然场景与多模态情感计算，为焦虑、抑郁、失眠人群提供沉浸式数字疗法。</p>
            <Button variant="primary">预约AI心理体检</Button>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">核心软硬件产品矩阵</h3>
          <div className="space-y-8">
            <div className="flex gap-5 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Monitor size={28}/></div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">智慧心理测评CT系统 (V3.0)</h4>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  类似身体CT的心理“透视”技术。通过采集面部微表情、语音语调及眼动数据，结合AI算法，5分钟内生成多维度心理健康报告，准确率达92%。
                </p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Activity size={28}/></div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">智能身心反馈太空舱</h4>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  集成生物传感监测（皮电、心率变异性），实时感知用户压力水平。AI自动调节舱内全息光影、3D音乐频率与香氛浓度，实现闭环减压。
                </p>
              </div>
            </div>
            <div className="flex gap-5 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors"><Mountain size={28}/></div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">VR 沉浸式脱敏训练系统</h4>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  1:1还原东水山茶园、竹林、瀑布等自然场景。针对恐高、社交恐惧等症状，提供循序渐进的虚拟暴露疗法。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><UserCheck className="text-emerald-500"/> 专业服务套餐</h3>
            <div className="space-y-4">
              {[
                { name: "21天茶园冥想疗程", desc: "每日20分钟VR正念引导，改善睡眠质量", price: "¥ 1,280/期" },
                { name: "青少年情绪疏导", desc: "针对厌学、网瘾的Gamification（游戏化）干预", price: "¥ 2,680/期" },
                { name: "企业EAP员工关怀", desc: "高压职场减压舱体验 + 心理体检", price: "企业团购" },
                { name: "自闭症辅助康复", desc: "基于图灵奖团队技术的AI互动训练", price: "公益资助" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer">
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm">{item.name}</h5>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-white px-3 py-1 rounded-full shadow-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Case Study Mini Card */}
          <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">成功案例</div>
              <h4 className="font-bold text-lg mb-2">中日联谊医院合作项目</h4>
              <p className="text-slate-400 text-sm">应用“智慧心理测评CT系统”，已服务超过1.6万人次，心理体检效率提升300%。</p>
            </div>
            <div className="absolute top-0 right-0 p-6 opacity-10"><Building2 size={100}/></div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// [详情页 2] 国际研学详情页
const GlobalStudyPage = ({ navigate }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6">
      <BackButton onClick={() => navigate('services')} />
      <SectionHeader title="东水山国际研学与文化交流基地" subtitle="GLOBAL EDUCATION" align="left" />
      
      <div className="grid lg:grid-cols-3 gap-10 mb-16">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Facilities */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Building2 className="text-orange-500"/> 五星级硬件配套</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              项目总投入11.4亿元，其中4亿元用于打造粤西最高规格的“五星级国际文化交流中心”。拥有承接国际峰会、高端论坛及大型研学团的完整能力。
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-3xl text-slate-900 mb-1">2000<span className="text-sm font-normal text-slate-500 ml-1">人</span></div>
                <div className="font-bold text-slate-800 mb-2">国际会议主会场</div>
                <div className="text-sm text-slate-500 leading-relaxed">配备同声传译系统、超高清LED矩阵，可举办跨国学术交流会议。</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-3xl text-slate-900 mb-1">8000<span className="text-sm font-normal text-slate-500 ml-1">㎡</span></div>
                <div className="font-bold text-slate-800 mb-2">专业会展中心</div>
                <div className="text-sm text-slate-500 leading-relaxed">适合举办科技成果展、非遗文化节及各类大型室内活动。</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-3xl text-slate-900 mb-1">350<span className="text-sm font-normal text-slate-500 ml-1">间</span></div>
                <div className="font-bold text-slate-800 mb-2">五星级标准客房</div>
                <div className="text-sm text-slate-500 leading-relaxed">按国际五星标准装修，确保研学导师与参会嘉宾的高品质住宿体验。</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-3xl text-slate-900 mb-1">5<span className="text-sm font-normal text-slate-500 ml-1">个</span></div>
                <div className="font-bold text-slate-800 mb-2">前沿科技实验室</div>
                <div className="text-sm text-slate-500 leading-relaxed">包含AI心理实验室、合成生物工作坊、区块链溯源演示中心。</div>
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><BookOpen className="text-orange-500"/> 分级研学课程体系</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold flex-shrink-0">K12</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">中小学：自然与人文的启蒙</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> <strong>非遗造纸课：</strong> 亲手体验300年历史的古法造纸技艺，亲手制作一张“东水纸”。</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> <strong>茶文化溯源：</strong> 采茶、制茶，学习中国传统茶礼与东水山茶史。</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> <strong>生态观察：</strong> 森林负氧离子监测与植物多样性考察。</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-6 items-start p-6 bg-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">高校</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">高等教育：前沿科技实践</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> <strong>合成生物学：</strong> 氨基酸水溶肥对茶叶品质影响的对照实验。</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> <strong>AI 智慧农业：</strong> 学习部署物联网传感器与训练作物生长模型。</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> <strong>区块链应用：</strong> 农产品溯源系统的数据上链实操。</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h4 className="font-bold text-lg mb-6">最新活动招募</h4>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <div className="text-xs font-bold text-white bg-orange-500 px-2 py-0.5 rounded w-fit mb-2">寒暑假限定</div>
                <h5 className="font-bold text-slate-800 text-lg">“未来科学家”AI农业冬令营</h5>
                <p className="text-sm text-slate-500 mt-2">7天6晚 · 深度接触图灵奖团队技术 · 颁发官方结业证书</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                  <Clock size={14}/> 2025.01.15 开营
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white bg-emerald-500 px-2 py-0.5 rounded w-fit mb-2">东隐文化节</div>
                <h5 className="font-bold text-slate-800 text-lg">粤港澳大湾区非遗文创展</h5>
                <p className="text-sm text-slate-500 mt-2">汇聚大湾区非遗大师，展示“竹茶”衍生品，体验跨界文化碰撞。</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                  <Clock size={14}/> 2025.05.01 开幕
                </div>
              </div>
            </div>
            <Button className="w-full mt-8 justify-center">下载详细行程单</Button>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="font-bold text-lg mb-2">合作院校</h4>
               <p className="text-slate-400 text-sm mb-6">已与大湾区50+所中小学及高校建立研学基地合作关系。</p>
               <div className="flex flex-wrap gap-2">
                 <span className="px-2 py-1 bg-white/10 rounded text-xs">华南农业大学</span>
                 <span className="px-2 py-1 bg-white/10 rounded text-xs">广东工业大学</span>
                 <span className="px-2 py-1 bg-white/10 rounded text-xs">深圳中学</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// [详情页 3] 康养旅居详情页
const WellnessLivingPage = ({ navigate }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6">
      <BackButton onClick={() => navigate('services')} />
      <SectionHeader title="竹里 · 高定康养旅居" subtitle="WELLNESS LIVING" align="left" />
      
      {/* Hero Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] mb-16">
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main House" />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-slate-800 font-bold">竹里精品民宿</div>
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative group">
           <img src="https://images.unsplash.com/photo-1540544660406-6a69dacb2804?q=80&w=2150&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Tea Food" />
           <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-white text-xs">富硒药膳</div>
        </div>
        <div className="rounded-2xl overflow-hidden relative group">
           <img src="https://images.unsplash.com/photo-1544367563-12123d895951?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Yoga" />
           <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-white text-xs">森林瑜伽</div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-slate-200 flex items-center justify-center text-slate-400 text-sm font-bold cursor-pointer hover:bg-slate-300 transition-colors flex-col gap-2">
           <Home size={32}/>
           <span>查看更多房型</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">不止于居住，更是全生命周期管理</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              东水山康养民居集群打破了传统养老地产模式，将“生态宜居”与“数字医疗”深度融合。这里不仅有从窗外延伸进来的竹林绿意，更有看不见的AI健康守护者。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0"><Wifi size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-800">全屋智能监测</h4>
                  <p className="text-xs text-slate-500 mt-1">毫米波雷达监测跌倒、呼吸心率，无感守护长者安全。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0"><Coffee size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-800">富硒药膳定制</h4>
                  <p className="text-xs text-slate-500 mt-1">AI营养师根据体检数据，利用东水山富硒食材定制一日三餐。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0"><Stethoscope size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-800">绿色就医通道</h4>
                  <p className="text-xs text-slate-500 mt-1">直通镇卫生院住院大楼（项目配套），专家定期巡诊。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0"><Sun size={20}/></div>
                <div>
                  <h4 className="font-bold text-slate-800">社群文化生活</h4>
                  <p className="text-xs text-slate-500 mt-1">定期举办茶艺课、书法交流、森林瑜伽，让晚年生活丰盈多彩。</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Pricing Card */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Home size={120} /></div>
          <h4 className="font-bold text-xl mb-2">竹里旅居 · 会员权益</h4>
          <p className="text-slate-400 text-sm mb-8">成为“东水山居民”，享受专属健康服务。</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>短住体验 (7天)</span>
              <span className="font-bold text-emerald-400">¥ 2,880 起</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>康养月卡 (30天)</span>
              <span className="font-bold text-emerald-400">¥ 8,800 起</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span>候鸟年卡</span>
              <span className="font-bold text-emerald-400">咨询客服</span>
            </div>
          </div>
          
          <Button variant="primary" className="w-full justify-center">预约看房</Button>
        </div>
      </div>
    </div>
  </motion.div>
);

// 核心业务总览页 (Services Overview - Updated to link to subpages)
const ServicesOverviewPage = ({ navigate }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 min-h-screen">
    <div className="container mx-auto px-6">
      <SectionHeader title="核心业务板块" subtitle="CORE SERVICES" />
      
      {/* 1. VR Healing */}
      <div id="vr" className="mb-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop" alt="VR" className="rounded-3xl shadow-xl w-full" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Brain />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">大健康 VR 心理疗愈</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              针对焦虑、失眠、抑郁倾向人群，提供非药物干预方案。结合身心反馈太空舱与便携式VR设备，让人在虚拟的东水山美景中重获内心平静。
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg">
                <HeartPulse className="text-red-500" /> 
                <span><strong>身心反馈太空舱：</strong> 实时监测生理指标，自动调节音乐与光线。</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg">
                <Clock className="text-blue-500" /> 
                <span><strong>21天茶园冥想：</strong> 系统化疗程，每日20分钟深度放松。</span>
              </li>
            </ul>
            <Button variant="primary" onClick={() => navigate('vr-healing')}>了解详细方案 <ArrowRight size={16}/></Button>
          </div>
        </div>
      </div>

      {/* 2. Global Study */}
      <div id="study" className="mb-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Study" className="rounded-3xl shadow-xl w-full" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
              <GraduationCap />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">国际研学与文化交流</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              依托五星级国际文化交流中心（含2000人主会场），搭建中外学术交流与实践平台。课程覆盖全龄段，融合农业科技与非遗文化。
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-slate-200 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-1">中小学研学</h4>
                <p className="text-xs text-slate-500">茶叶科普 · 非遗造纸 · 自然观察</p>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-1">高校科研</h4>
                <p className="text-xs text-slate-500">合成生物 · AI农业 · 乡村振兴调研</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('global-study')}>查看研学课程 <ArrowRight size={16}/></Button>
          </div>
        </div>
      </div>

      {/* 3. Wellness Living */}
      <div id="living" className="scroll-mt-28">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop" alt="Living" className="rounded-3xl shadow-xl w-full" />
          </div>
          <div className="md:w-1/2">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <Home />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">康养民居与慢病管理</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              “竹里旅居”高端民宿集群，配备智能健康监测设备。提供针对糖尿病、高血脂人群的“茶疗康养套餐”，实现“检测-分析-干预”闭环。
            </p>
            <Button variant="outline" onClick={() => navigate('wellness-living')}>查看房型与环境 <ArrowRight size={16}/></Button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ... (HomePage, AboutPage, EcologyPage, TechPage, ContactPage, Navbar, Footer 保持不变, 但为了完整性我将它们整合在一起)

// 首页 (Home) - Updated link for VR card
const HomePage = ({ navigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Carousel */}
      <section className="relative h-[92vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          {CAROUSEL_DATA.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-70 transform scale-105" />
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
                {CAROUSEL_DATA[currentSlide].subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                {CAROUSEL_DATA[currentSlide].title}
              </h1>
              <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl">
                {CAROUSEL_DATA[currentSlide].desc}
              </p>
              <div className="flex gap-4">
                <Button variant="primary" onClick={() => navigate(CAROUSEL_DATA[currentSlide].link)}>
                  探索详情 <ArrowRight size={18} />
                </Button>
                <Button variant="white" onClick={() => navigate('contact')}>
                  <Play size={18} /> 预约参观
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-6 flex gap-3">
            {CAROUSEL_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-emerald-400 w-12' : 'bg-white/30 w-4 hover:bg-white/60'}`}
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
              { icon: <Mountain className="text-emerald-500" />, value: "95km²", label: "国家森林公园", sub: "100% 生态红线保护" },
              { icon: <Activity className="text-blue-500" />, value: "11.4亿", label: "项目总投入", sub: "分三期滚动开发" },
              { icon: <Users className="text-orange-500" />, value: "15万+", label: "年服务人次", sub: "大湾区首选目的地" },
              { icon: <Database className="text-purple-500" />, value: "5000亩", label: "智慧富硒茶园", sub: "区块链全流程溯源" },
            ].map((stat, i) => (
              <div key={i} className="pl-8 first:pl-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Data</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-700">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 container mx-auto px-6 text-center">
        <SectionHeader title="科技赋能康养 · 生态滋养身心" subtitle="OUR MISSION" />
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          广东东水山AI康养生态谷有限公司，响应“健康中国”战略，依托东水山1500年茶乡底蕴与图灵奖团队前沿技术，
          打破传统边界，构建集 <span className="font-bold text-emerald-600">大健康VR心理疗愈、国际研学、康养民居、国际文化交易</span> 于一体的全链条康养生态体系。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain size={32} />} 
            title="AI+VR 心理疗愈" 
            desc="结合图灵奖团队AI算法与VR沉浸技术，打造多场景情绪疏导系统，提供21天茶园冥想等专业方案。" 
            onClick={() => navigate('vr-healing')}
          />
          <FeatureCard 
            icon={<Sprout size={32} />} 
            title="智慧生态农业" 
            desc="应用合成生物水肥技术与区块链溯源，打造高端富硒茶品牌，实现从种植到杯中的全程透明。" 
            onClick={() => navigate('technology')}
          />
          <FeatureCard 
            icon={<Globe size={32} />} 
            title="国际研学交流" 
            desc="依托五星级国际文化交流中心，开展康养技术、非遗造纸、生态保护等高端研学与学术交流。" 
            onClick={() => navigate('global-study')}
          />
        </div>
      </section>
    </motion.div>
  );
};

const AboutPage = ({ navigate }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6">
      <SectionHeader title="关于东水山生态谷" subtitle="ABOUT GROUP" />
      <div className="bg-white rounded-3xl p-12 shadow-sm mb-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">四维驱动 · 定义未来康养</h3>
          <p className="text-slate-600 mb-6 leading-loose text-justify">
            广东东水山AI康养生态谷有限公司是聚焦“AI+大健康+生态融合”的创新型企业。我们立足东水山优质生态禀赋，联动医疗、教育、文旅、商贸等领域资源，打通“技术研发-服务落地-产业赋能”全链路，致力于成为兼具生态价值、科技实力与国际影响力的康养产业标杆。
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['健康中国战略响应者', '百千万工程典型村', '广东省十大名茶产地', 'AI农文旅标杆项目'].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle size={16} className="text-emerald-500" /> {tag}
              </div>
            ))}
          </div>
          <Button variant="primary" className="mt-8" onClick={() => navigate('experts')}>
            查看专家智库 <ArrowRight size={16} />
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team Meeting" className="rounded-2xl shadow-xl relative z-10" />
        </div>
      </div>
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-center mb-12">三年战略规划</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { time: "第一阶段 (0-12月)", title: "基础建设期", desc: "文化交流中心主体动工，AI算力中台搭建，合成生物水肥应用，研学实验室改造。", icon: <Building2 /> },
            { time: "第二阶段 (13-24月)", title: "运营启动期", desc: "VR体验中心建成，AI农业保险确权上线，东水茶权通证发行，首届东隐国际文化节举办。", icon: <Play /> },
            { time: "第三阶段 (25-36月)", title: "标杆成型期", desc: "年服务超15万人次，文化交流营收破1.5亿，成为广东省AI+农文旅示范标杆。", icon: <Award /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-slate-100 transform translate-x-1/4 -translate-y-1/4">
                {item.icon}
              </div>
              <span className="text-emerald-600 font-bold text-sm block mb-2">{item.time}</span>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ExpertsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6">
      <SectionHeader title="汇聚全球智慧 · 共筑康养高地" subtitle="EXPERT THINK TANK" />
      <div className="max-w-4xl mx-auto text-center text-slate-600 mb-20 text-lg">
        <p>东水山AI康养生态谷组建了由 <span className="font-bold text-slate-900">图灵奖团队成员、欧洲科学院院士、心理学泰斗</span> 领衔的顶级专家智库，</p>
        <p>构建了“产学研医”深度融合的技术创新体系，为项目的高质量发展提供坚实保障。</p>
      </div>
      <div className="space-y-20">
        {EXPERTS_GROUPS.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-1.5 bg-emerald-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-slate-800">{group.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.members.map((expert, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md group-hover:border-emerald-200 transition-colors">
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                        <Users size={40} />
                      </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {expert.title}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{expert.name}</h4>
                  <p className="text-sm text-emerald-600 font-medium mb-4">{expert.org}</p>
                  <div className="h-px w-full bg-slate-100 mb-4"></div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px]">{expert.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 pt-16 border-t border-slate-200 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">战略合作与学术支持机构</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2"><Building2 size={40}/><span className="text-xs font-bold">哈尔滨工业大学(深圳)</span></div>
          <div className="flex flex-col items-center gap-2"><Building2 size={40}/><span className="text-xs font-bold">华中师范大学</span></div>
          <div className="flex flex-col items-center gap-2"><Building2 size={40}/><span className="text-xs font-bold">中日联谊医院</span></div>
          <div className="flex flex-col items-center gap-2"><Building2 size={40}/><span className="text-xs font-bold">上海交通大学</span></div>
          <div className="flex flex-col items-center gap-2"><Building2 size={40}/><span className="text-xs font-bold">深圳麻省计算机系统</span></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const EcologyPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 min-h-screen">
    <div className="container mx-auto px-6">
      <SectionHeader title="东水山国家森林公园" subtitle="ECOLOGICAL BASE" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] mb-16">
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1596326268056-b04095493721?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tea" />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <h3 className="text-2xl font-bold text-white">5000亩高山富硒茶园</h3>
            <p className="text-emerald-300">广东十大名茶产地 · 天然含硒量0.3-0.5mg/kg</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Water" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg">射水潭瀑布</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-emerald-900">
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h4 className="text-white font-bold text-xl mb-2">古法造纸非遗</h4>
                <p className="text-emerald-200 text-sm">300年历史传承 · 阳江市非物质文化遗产</p>
                <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-emerald-900">观看纪录片</Button>
             </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">山水人文 · 千年传承</h3>
          <p className="text-slate-600 leading-loose mb-6">
            东水山位于阳西县新墟镇，总面积95平方公里。这里不仅有“鹅凰远眺”、“东水滴翠”等阳西十景，更拥有深厚的人文底蕴。
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">1</div>
              <div>
                <h4 className="font-bold text-slate-900">自然景观</h4>
                <p className="text-sm text-slate-500">山顶茶园“铜钟石”高约五米，造型独特；射水潭瀑布落差20余米，气势壮观。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
              <div>
                <h4 className="font-bold text-slate-900">人文传说</h4>
                <p className="text-sm text-slate-500">村后盘古宫见证历史，望夫山流传着感人的等待传说。</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">3</div>
              <div>
                <h4 className="font-bold text-slate-900">红色基因</h4>
                <p className="text-sm text-slate-500">作为革命老区，东水山曾是游击队的重要活动区域，传承着不朽的红色精神。</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 p-8 rounded-3xl">
          <h4 className="font-bold text-slate-900 mb-6">环境监测数据</h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2"><span className="text-slate-600">负氧离子浓度</span><span className="font-bold text-emerald-600">12,000 个/cm³</span></div>
              <div className="h-2 bg-slate-200 rounded-full"><div className="h-full w-[95%] bg-emerald-500 rounded-full"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2"><span className="text-slate-600">土壤硒含量</span><span className="font-bold text-emerald-600">0.45 mg/kg</span></div>
              <div className="h-2 bg-slate-200 rounded-full"><div className="h-full w-[88%] bg-emerald-500 rounded-full"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2"><span className="text-slate-600">水质等级</span><span className="font-bold text-blue-600">I 类 (直饮)</span></div>
              <div className="h-2 bg-slate-200 rounded-full"><div className="h-full w-[100%] bg-blue-500 rounded-full"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TechPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
    <div className="container mx-auto px-6">
      <SectionHeader title="AI 核心技术引擎" subtitle="TECHNOLOGY CORE" light={true} />
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Cpu className="text-cyan-400" size={32} />
              <h3 className="text-xl font-bold">人-机-物 三元架构</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              部署边缘计算节点、5G/6G微基站与物联网网关，构建200P智算算力中心，实时处理环境数据与生理指标，为AI模型提供算力支撑。
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="text-purple-400" size={32} />
              <h3 className="text-xl font-bold">AI 情绪识别算法</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              基于面部微表情、语音语调及心率变异性(HRV)的多模态情感计算模型，实时评估用户压力水平，精准推荐个性化疗愈方案。
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="AI Brain" className="relative z-10 rounded-2xl border border-white/20 shadow-2xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900 p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Database size={120} /></div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-emerald-400"/> 区块链溯源 & 隐私计算</h3>
          <p className="text-slate-300 mb-6">
            利用联盟链技术，为每一批茶叶生成唯一“数字身份证”，记录种植、加工、检测全流程。结合隐私计算，实现数据可用不可见，保障农户数据权益。
          </p>
          <div className="bg-black/30 p-4 rounded-lg font-mono text-xs text-emerald-400 border border-emerald-500/20">
            <div>Hash: 0x7f...3a2b</div>
            <div>Block Height: 1402391</div>
            <div>Status: Verified (SGS)</div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-900/50 to-slate-900 p-10 rounded-3xl border border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Sprout size={120} /></div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Microscope className="text-blue-400"/> 合成生物水肥技术</h3>
          <p className="text-slate-300 mb-6">
            采用合成生物发酵技术生产氨基酸水溶肥，减少化肥用量30%，显著提升茶叶中茶多酚与氨基酸含量，打造“富硒+高活性成分”的高端康养茶品。
          </p>
          <ul className="grid grid-cols-2 gap-4 text-sm text-blue-200">
            <li>• 化肥减量 20-30%</li>
            <li>• 亩产增收 10-15%</li>
            <li>• 茶多酚提升 8-12%</li>
            <li>• 病虫害预警 92%</li>
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
    <SectionHeader title="联系与合作" subtitle="GET IN TOUCH" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-slate-900 text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10"><MapPin size={200} /></div>
        <h3 className="text-2xl font-bold mb-8">广东东水山AI康养生态谷有限公司</h3>
        <div className="space-y-8 relative z-10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-lg text-emerald-400"><MapPin /></div>
            <div>
              <p className="text-slate-400 text-sm mb-1">公司地址</p>
              <p className="font-medium">广东省阳江市阳西县新墟镇东水村委会</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
             <div className="p-3 bg-white/10 rounded-lg text-blue-400"><Phone /></div>
            <div>
              <p className="text-slate-400 text-sm mb-1">咨询热线</p>
              <p className="font-medium">0662-8888888</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
             <div className="p-3 bg-white/10 rounded-lg text-orange-400"><Mail /></div>
            <div>
              <p className="text-slate-400 text-sm mb-1">商务合作</p>
              <p className="font-medium">business@dongshuishan.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-slate-400 mb-4">关注我们</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">微信</div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">抖音</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
        <h3 className="text-xl font-bold mb-6 text-slate-900">在线留言 / 预约</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50" placeholder="您的姓名" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">电话</label>
              <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50" placeholder="您的电话" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">咨询意向</label>
            <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50">
              <option>预约 VR 心理疗愈体验</option>
              <option>学校/机构 研学合作</option>
              <option>高端茶叶/农产品采购</option>
              <option>康养民宿预订</option>
              <option>其他商务合作</option>
            </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-2">详细需求</label>
             <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50" placeholder="请描述您的具体需求，我们会尽快联系您..."></textarea>
          </div>
          <Button variant="primary" className="w-full justify-center font-bold text-lg">提交信息</Button>
        </form>
      </div>
    </div>
  </motion.div>
);

// Navbar (Fixed Top, Horizontal with Dropdown for Core Services)
const Navbar = ({ currentPage, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于集团' },
    { id: 'ecology', label: '生态基地' },
    { id: 'technology', label: '科技核心' },
    { 
      id: 'services', 
      label: '核心业务', 
      hasDropdown: true,
      subItems: [
        { id: 'vr-healing', label: 'VR 心理疗愈' },
        { id: 'global-study', label: '国际研学' },
        { id: 'wellness-living', label: '康养旅居' }
      ]
    },
    { id: 'experts', label: '专家智库' },
    { id: 'contact', label: '联系我们' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || (currentPage !== 'home' && currentPage !== 'technology') ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0 mr-8" 
          onClick={() => navigate('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <Brain size={20} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none tracking-wide ${isScrolled || (currentPage !== 'home' && currentPage !== 'technology') ? 'text-slate-900' : 'text-white'}`}>东水山</span>
            <span className={`text-[10px] uppercase tracking-widest mt-1 ${isScrolled || (currentPage !== 'home' && currentPage !== 'technology') ? 'text-slate-500' : 'text-emerald-200'}`}>AI Wellness Valley</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 px-4 hidden md:flex">
          <div className="flex gap-6">
            {navItems.map(item => (
              <div key={item.id} className="relative group" 
                   onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                   onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
              >
                <button
                  onClick={() => !item.hasDropdown && navigate(item.id)}
                  className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-emerald-500 relative py-2 flex items-center gap-1 ${
                    currentPage === item.id || (item.hasDropdown && ['vr-healing', 'global-study', 'wellness-living'].includes(currentPage))
                      ? 'text-emerald-500' 
                      : (isScrolled || (currentPage !== 'home' && currentPage !== 'technology') ? 'text-slate-600' : 'text-slate-200')
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />}
                  <span className={`absolute -bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 transition-all duration-300 ${currentPage === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                </button>

                {item.hasDropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-emerald-100/50 overflow-hidden p-2">
                      {item.subItems.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => { navigate(sub.id); setServicesOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors ${currentPage === sub.id ? 'text-emerald-600 bg-emerald-50 font-medium' : 'text-slate-600'}`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-x-auto no-scrollbar gap-4 px-4 md:hidden">
           {navItems.map(item => {
             if(item.hasDropdown) {
               return item.subItems.map(sub => (
                 <button
                  key={sub.id}
                  onClick={() => navigate(sub.id)}
                  className={`text-sm font-medium whitespace-nowrap py-2 ${currentPage === sub.id ? 'text-emerald-500' : 'text-slate-500'}`}
                 >
                   {sub.label}
                 </button>
               ));
             }
             return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm font-medium whitespace-nowrap py-2 ${
                  currentPage === item.id ? 'text-emerald-500' : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
             )
           })}
        </div>

        <Button 
          variant="primary" 
          className="px-5 py-2 text-sm shadow-emerald-200/50 flex-shrink-0 hidden lg:flex ml-4" 
          onClick={() => navigate('contact')}
        >
          合作咨询
        </Button>
      </div>
    </nav>
  );
};

const Footer = ({ navigate }) => (
  <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-sm">AI</div>
            <span className="text-xl font-bold">东水山AI康养生态谷</span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-sm">
            致力于成为兼具生态价值、科技实力与国际影响力的康养产业标杆。
            <br/>科技赋能康养，生态滋养身心。
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">业务导航</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><button onClick={() => navigate('vr-healing')} className="hover:text-emerald-400 transition-colors">VR 心理疗愈</button></li>
            <li><button onClick={() => navigate('global-study')} className="hover:text-emerald-400 transition-colors">国际研学报名</button></li>
            <li><button onClick={() => navigate('technology')} className="hover:text-emerald-400 transition-colors">茶权通证交易</button></li>
            <li><button onClick={() => navigate('wellness-living')} className="hover:text-emerald-400 transition-colors">康养民宿预订</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">联系方式</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>地址：广东省阳江市阳西县新墟镇东水村</li>
            <li>电话：0662-8888888</li>
            <li>邮箱：contact@dongshuishan.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
        <p>© 2025 广东东水山AI康养生态谷有限公司 版权所有</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">隐私政策</a>
          <a href="#" className="hover:text-white">服务条款</a>
          <a href="#" className="hover:text-white">粤ICP备XXXXXX号</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'experts': return <ExpertsPage />;
      case 'ecology': return <EcologyPage />;
      case 'technology': return <TechPage />;
      case 'services': return <ServicesOverviewPage navigate={navigate} />;
      case 'vr-healing': return <VRHealingPage navigate={navigate} />;
      case 'global-study': return <GlobalStudyPage navigate={navigate} />;
      case 'wellness-living': return <WellnessLivingPage navigate={navigate} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />
      
      {/* AI Assistant Floating Button */}
      <div className="fixed bottom-8 right-8 z-40 group">
        <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-200 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative z-10">
          <Brain size={24} />
        </button>
        <div className="absolute bottom-2 right-16 bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 text-xs font-bold text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity origin-right duration-300">
          AI 心理助手在线
        </div>
        <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-30 animate-ping z-0"></div>
      </div>
    </div>
  );
};

export default App;