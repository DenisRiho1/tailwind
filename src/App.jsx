import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Cpu, 
  Server, 
  Gamepad2, 
  Activity, 
  TrendingUp, 
  DollarSign, 
  BarChart2, 
  Calendar,
  Layers,
  Zap,
  Globe,
  Target,
  ShieldCheck,
  Rocket,
  Search,
  ChevronLeft,
  LayoutGrid,
  Cloud,
  Smartphone,
  Video,
  Car,
  Binary,
  Code,
  Database,
  Anchor,
  Box,
  Monitor,
  Wifi,
  Radio,
  Microchip,
  Truck,
  Wrench,
  BatteryCharging,
  Factory,
  MessageCircle,
  Users,
  Smile,
  Wind,
  FlaskConical,
  Gauge
} from 'lucide-react';

// --- Shared Components ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "green" }) => {
  const colors = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    crimson: "bg-rose-600/10 text-rose-400 border-rose-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    zinc: "bg-zinc-100/10 text-zinc-200 border-zinc-500/50",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${colors[color] || colors.green}`}>
      {children}
    </span>
  );
};

const StatCard = ({ title, value, subtext, trend, icon: Icon }) => (
  <Card className="hover:border-zinc-700 transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-zinc-800 rounded-lg">
        <Icon className="w-6 h-6 text-zinc-400" />
      </div>
      {trend && (
        <Badge color="green">
          <div className="flex items-center gap-1">
            <ArrowUpRight size={14} />
            {trend}
          </div>
        </Badge>
      )}
    </div>
    <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <p className="text-zinc-500 text-sm">{subtext}</p>
  </Card>
);

const ProgressBar = ({ label, value, max, color = "bg-emerald-500" }) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-2">
        <span className="text-zinc-300 font-medium">{label}</span>
        <span className="text-white font-bold">${value}{typeof value === 'number' ? 'B' : ''}</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const SegmentDetail = ({ title, revenue, growth, operatingIncome, highlights, icon: Icon, color }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition-all duration-300 group">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div>
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <span className={`text-sm ${growth && growth.startsWith('+') ? 'text-emerald-400' : 'text-zinc-400'}`}>
            {growth}
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-white">{revenue}</div>
        <div className="text-sm text-zinc-500">Key Metric</div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <h4 className="text-zinc-400 text-sm uppercase tracking-wider font-semibold">Performance Context</h4>
        <div className="flex justify-between items-center py-2 border-b border-zinc-800">
           <span className="text-zinc-300">Trend</span>
           <span className="text-white font-mono">{operatingIncome}</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mt-2">
           {title === "Pricing Strategy" ? "CEO Sanjiv Lamba emphasized consistency: 'We should be at or around globally weighted CPI.' This continues a 25-year trend of positive pricing." : 
            title === "Regional Performance" ? "Performance aligned with CPI expectations across Americas and APAC, excluding specific headwinds in helium and China." :
            "Adjusted capital employed for ROIC calculation reflects strategic balance sheet management."}
        </p>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-zinc-400 text-sm uppercase tracking-wider font-semibold">Management Commentary</h4>
        <ul className="space-y-2">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
              <div className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'bg-')} mt-1.5 shrink-0`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProductCard = ({ name, description, category }) => (
  <div className="bg-black/40 border border-zinc-800 p-4 rounded-lg hover:border-zinc-600 transition-colors">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-white">{name}</h4>
      <Badge color="gold">{category}</Badge>
    </div>
    <p className="text-sm text-zinc-400 leading-snug">{description}</p>
  </div>
);

const OutlookItem = ({ label, value, detail }) => (
  <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
    <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">{label}</span>
    <span className="text-white font-bold text-lg mb-1">{value}</span>
    {detail && <span className="text-zinc-500 text-xs">{detail}</span>}
  </div>
);

// --- VIEW COMPONENTS ---

const HomeView = ({ setView }) => (
  <div className="max-w-7xl mx-auto py-20 px-4">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Financial Reports Hub</h1>
      <p className="text-xl text-zinc-400">Select a company to view their latest quarterly earnings summary, strategic outlook, and performance metrics.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* AMD Card */}
      <button 
        onClick={() => setView('amd')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-emerald-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-colors">
          <Cpu className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">AMD</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 3, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Record annual revenue driven by Data Center AI momentum.
        </p>
      </button>

      {/* Google Card */}
      <button 
        onClick={() => setView('google')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-blue-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors">
          <Search className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Alphabet</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 4, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Annual revenue exceeds $400B. Significant acceleration in Cloud.
        </p>
      </button>

      {/* Palantir Card */}
      <button 
        onClick={() => setView('palantir')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-purple-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors">
          <Binary className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Palantir</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Explosive US Commercial growth (+137%) and AIP momentum.
        </p>
      </button>

      {/* ARM Card */}
      <button 
        onClick={() => setView('arm')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-teal-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-teal-500/50 transition-colors">
          <Cpu className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">ARM</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q3 FYE26</Badge>
          <span className="text-zinc-500 text-sm">Feb 4, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Record revenue ($951M) driven by v9 adoption (35% of royalty).
        </p>
      </button>

      {/* Qualcomm Card */}
      <button 
        onClick={() => setView('qualcomm')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-rose-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-rose-500/50 transition-colors">
          <Smartphone className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Qualcomm</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q1 FY26</Badge>
          <span className="text-zinc-500 text-sm">Feb 4, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Strong automotive growth and AI-native handset leadership.
        </p>
      </button>

      {/* Cummins Card */}
      <button 
        onClick={() => setView('cummins')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-red-500 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-red-500/50 transition-colors">
          <Truck className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Cummins</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 5, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Record revenues. Power Systems leading with 22% growth.
        </p>
      </button>

      {/* Reddit Card */}
      <button 
        onClick={() => setView('reddit')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-orange-500 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Reddit</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 5, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Revenue up 70% YoY. First full year of GAAP profitability.
        </p>
      </button>

      {/* Linde Card */}
      <button 
        onClick={() => setView('linde')}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-cyan-400 transition-colors">
          <ArrowUpRight size={24} />
        </div>
        <div className="w-16 h-16 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 transition-colors">
          <Factory className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Linde</h2>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="green">Q4 2025</Badge>
          <span className="text-zinc-500 text-sm">Feb 5, 2026</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Positive pricing momentum continued for 25th year. Strong ending capital position of $55.7B.
        </p>
      </button>
    </div>
  </div>
);

const LindeView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Factory size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Q4 2025 Earnings Report</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Productivity & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800">Pricing Resilience</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Linde reported fourth-quarter results highlighted by continued pricing strength. Management reinforced their ability to price at or around globally weighted CPI, maintaining a 25-year trend of positive pricing despite deflationary headwinds in China.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Pricing Strategy" 
          value="Positive" 
          subtext="25-Year Trend"
          trend="Consistent"
          icon={TrendingUp}
        />
        <StatCard 
          title="Adjusted Capital" 
          value="$29.6B" 
          subtext="Q4 2025"
          trend="Capital Base"
          icon={Activity}
        />
        <StatCard 
          title="Ending Capital" 
          value="$55.7B" 
          subtext="Strong Balance Sheet"
          trend="Solid"
          icon={DollarSign}
        />
        <StatCard 
          title="Market Headwinds" 
          value="China/Helium" 
          subtext="Specific Weakness"
          trend="Managed"
          icon={Wind}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Capital Structure</h2>
              <p className="text-zinc-500 text-sm">Q4 2025 Snapshot (Appendix Data)</p>
            </div>
            <Badge color="cyan">Q4 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="Ending Capital" value={55.7} max={60} color="bg-cyan-500" />
            <ProgressBar label="Adjusted Capital" value={29.6} max={60} color="bg-blue-500" />
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">Linde AG Goodwill</span>
                 <span className="text-white font-bold">$24.3B</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-zinc-500 rounded-full" style={{ width: '40%' }} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Invested Capital</span>
                <span className="text-2xl font-bold text-white">Stable</span>
                <span className="text-zinc-400 text-xs ml-2">Long-term Focus</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Pricing Trend</span>
                <span className="text-2xl font-bold text-white">Positive</span>
                <span className="text-zinc-400 text-xs ml-2">Vs. Global CPI</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Strategic Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-cyan-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Pricing Power</h4>
              <p className="text-zinc-400 text-sm mt-1">CEO Sanjiv Lamba highlighted the company's ability to price "at or around" globally weighted CPI, maintaining a 25-year streak of positive pricing.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-cyan-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Market Resilience</h4>
              <p className="text-zinc-400 text-sm mt-1">Despite specific headwinds from "helium and China deflation weakness," the broader business in Americas and APAC is performing to expectations.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-cyan-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Capital Discipline</h4>
              <p className="text-zinc-400 text-sm mt-1">Ending capital stood at $55.7 billion, reflecting a strong balance sheet positioned for strategic investment in decarbonization.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-cyan-500" />
          <h2 className="text-3xl font-bold text-white">Operational Focus</h2>
        </div>

        <SegmentDetail 
          title="Pricing Strategy"
          revenue="Positive"
          growth="Consistent"
          operatingIncome="Key Driver"
          icon={TrendingUp}
          color="bg-cyan-500"
          highlights={[
            "Pricing aligned with globally weighted CPI expectations",
            "Demonstrated ability to offset cost inflation",
            "Positive pricing trend maintained for 25 consecutive years",
            "Management remains confident in continued pricing power for the year"
          ]}
        />

        <SegmentDetail 
          title="Regional Performance"
          revenue="Mixed"
          growth="Variable"
          operatingIncome="Resilient"
          icon={Globe}
          color="bg-blue-500"
          highlights={[
            "Americas and APAC performing well excluding specific headwinds",
            "China market noted for 'deflation weakness'",
            "Helium market noted as a specific headwind in the quarter",
            "Long-term gas intensity expected to increase"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-cyan-500" />
        <h2 className="text-3xl font-bold text-white">Industrial Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="Industrial Gases" 
            category="Core"
            description="Essential gases (Oxygen, Nitrogen, Argon) supplying manufacturing, healthcare, and electronics industries globally."
          />
          <ProductCard 
            name="Clean Hydrogen" 
            category="Energy"
            description="Leading technologies for blue and green hydrogen production to support global decarbonization efforts."
          />
          <ProductCard 
            name="Carbon Capture" 
            category="Sustainability"
            description="Advanced solutions for capturing and utilizing CO2 emissions from industrial processes."
          />
          <ProductCard 
            name="Healthcare" 
            category="Medical"
            description="Medical gases and respiratory therapies supporting hospitals and homecare patients."
          />
          <ProductCard 
            name="Engineering" 
            category="Projects"
            description="World-class engineering division building turnkey gas plants and processing facilities."
          />
          <ProductCard 
            name="Electronics" 
            category="High Tech"
            description="Ultra-high purity gases serving the semiconductor manufacturing industry."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-cyan-400" />
            Global Footprint
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Americas</div>
              <p className="text-xs text-zinc-500">Core Market</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">APAC</div>
              <p className="text-xs text-zinc-500">Growth Engine</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">EMEA</div>
              <p className="text-xs text-zinc-500">Established Base</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Engineering</div>
              <p className="text-xs text-zinc-500">Project Execution</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-cyan-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* Guidance Block */}
      <div className="mb-12">
        <Card className="border-cyan-500/20 bg-cyan-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">Strategic Outlook</h3>
              <span className="text-cyan-400 text-sm font-medium">Forward Commentary</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlookItem 
              label="Pricing Outlook" 
              value="At/Around CPI" 
              detail="Globally Weighted" 
            />
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Capital Strategy</span>
               <span className="text-white font-bold text-lg mb-1">Discipline</span>
               <span className="text-zinc-500 text-xs">Adjusted Capital Focus</span>
             </div>
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">China Market</span>
               <span className="text-white font-bold text-lg mb-1">Monitoring</span>
               <span className="text-zinc-500 text-xs">Deflationary pressure</span>
             </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Target size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>CEO Quote:</strong> "The pricing expectations... remain consistent with the view that we've always given, which is globally weighted CPI, we should be at or around that. And I think consistently we have... That's a long-term trend."
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                      <Gauge size={18} />
                      Inflation Management
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Linde's business model is built to pass through inflationary costs (power, labor) via pricing mechanisms. The company's track record of 25 years of positive pricing demonstrates the resilience of this model.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                      <Wind size={18} />
                      Decarbonization
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Linde is a key enabler of the global energy transition, providing hydrogen and carbon capture technologies. This structural trend is expected to increase gas intensity across industrial sectors.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                      <FlaskConical size={18} />
                      New Fab Capacity
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      The buildup of new semiconductor fabrication plants globally contributes to an overall increase in gas intensity, supporting long-term volume growth in the Electronics segment.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Long-Term Value</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  Linde focuses on optimizing adjusted capital to drive returns and shareholder value.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Adjusted Capital: $29.6B</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-cyan-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Pricing Power: +25 Years</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-cyan-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Goodwill: $24.3B</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-cyan-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for Linde View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Linde plc. All rights reserved. <br/>
        Financial figures presented are Non-GAAP unless otherwise noted.
      </p>
    </footer>
  </div>
);

const AMDView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Cpu size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Feb 3, 2026 Earnings Call</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Record Year-End <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Performance</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          AMD delivered record annual revenue of $34.6 Billion in 2025. The company has successfully transformed its portfolio, with Data Center revenue now surpassing Client & Gaming segments combined, driven by an aggressive "AI Everywhere" strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Q4 Revenue" 
          value="$10.3B" 
          subtext="Record Quarterly High"
          trend="34% YoY"
          icon={DollarSign}
        />
        <StatCard 
          title="FY 2025 Revenue" 
          value="$34.6B" 
          subtext="Record Annual High"
          trend="34% YoY"
          icon={BarChart2}
        />
        <StatCard 
          title="Q4 Non-GAAP EPS" 
          value="$1.53" 
          subtext="Earnings Per Share"
          trend="40% YoY"
          icon={TrendingUp}
        />
        <StatCard 
          title="Free Cash Flow" 
          value="$2.1B" 
          subtext="Strong Liquidity"
          trend="Record"
          icon={Activity}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Revenue Mix Transformation</h2>
              <p className="text-zinc-500 text-sm">Q4 2025 Segment Contribution</p>
            </div>
            <Badge color="blue">Q4 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="Data Center" value={5.4} max={10.3} color="bg-blue-500" />
            <ProgressBar label="Client & Gaming" value={3.9} max={10.3} color="bg-amber-500" />
            <ProgressBar label="Embedded" value={0.95} max={10.3} color="bg-purple-500" />
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Gross Margin (Non-GAAP)</span>
                <span className="text-2xl font-bold text-white">57%</span>
                <span className="text-emerald-400 text-xs ml-2">+3 pts YoY</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Operating Income (Non-GAAP)</span>
                <span className="text-2xl font-bold text-white">$2.85B</span>
                <span className="text-emerald-400 text-xs ml-2">+41% YoY</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-amber-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Data Center Dominance</h4>
              <p className="text-zinc-400 text-sm mt-1">Revenue grew 39% YoY to $5.4B. The segment is now the primary growth engine, fueled by Instinct GPUs and EPYC CPUs.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-amber-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Client Resurgence</h4>
              <p className="text-zinc-400 text-sm mt-1">Client & Gaming combined revenue up 37%. Strong Ryzen processor sales indicate a recovery and growth in the PC market.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-amber-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Margin Expansion</h4>
              <p className="text-zinc-400 text-sm mt-1">Gross margins expanded to 57% (Non-GAAP) driven by a richer product mix in Data Center.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-amber-500" />
          <h2 className="text-3xl font-bold text-white">Segment Performance</h2>
        </div>

        <SegmentDetail 
          title="Data Center"
          revenue="5.4"
          growth="+39%"
          operatingIncome="1.8B"
          icon={Server}
          color="bg-blue-500"
          highlights={[
            "Unveiled AMD Instinct MI440X GPU for Enterprise AI",
            "Previewed AMD Helios rack-scale platform (Yotta-scale AI)",
            "Strong adoption of 5th Gen AMD EPYC CPUs by AWS",
            "HPE to deliver 'Herder' supercomputer with MI430X & EPYC 'Venice'",
            "Strategic partnership with Tata Consultancy Services (TCS)"
          ]}
        />

        <SegmentDetail 
          title="Client & Gaming"
          revenue="3.9"
          growth="+37%"
          operatingIncome="725M"
          icon={Gamepad2}
          color="bg-amber-500"
          highlights={[
            "Ryzen 7 9850X3D launch: Fastest gaming processor (Zen 5 + 3D V-Cache)",
            "Introduced Ryzen AI Halo Platform for local developers (200B params)",
            "FSR 'Redstone' AI-upscaling tech launched for Radeon",
            "Record sales of Ryzen processors drove Client revenue to $3.1B",
            "Ryzen AI 400 & PRO 400 Series platforms expanding market share"
          ]}
        />

        <SegmentDetail 
          title="Embedded"
          revenue="0.95"
          growth="+3%"
          operatingIncome="357M"
          icon={Cpu}
          color="bg-purple-500"
          highlights={[
            "Launched Ryzen AI Embedded P100 and X100 Series",
            "New Space-grade portfolio: Versal RF Series & AI Edge Gen 2",
            "EPYC Embedded 2005 Series for networking security",
            "Demand strengthening in industrial and automotive sectors"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-amber-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="AMD Helios" 
            category="Infrastructure"
            description="New rack-scale platform serving as the blueprint for Yotta-scale AI supercomputing clusters."
          />
          <ProductCard 
            name="Instinct MI440X" 
            category="AI Accelerator"
            description="Next-generation GPU designed specifically for enterprise AI workloads, unveiled at CES."
          />
          <ProductCard 
            name="Ryzen 7 9850X3D" 
            category="Consumer CPU"
            description="The world's fastest gaming processor, featuring Zen 5 architecture and 2nd Gen 3D V-Cache."
          />
          <ProductCard 
            name="Ryzen AI Halo" 
            category="Developer Platform"
            description="Compact developer kit capable of running AI models up to 200 billion parameters locally."
          />
          <ProductCard 
            name="FSR 'Redstone'" 
            category="Software"
            description="Advanced AI-powered upscaling technology for Radeon graphics, improving framerates and fidelity."
          />
          <ProductCard 
            name="Versal AI Edge Gen 2" 
            category="Adaptive SoC"
            description="Space-grade adaptive SoCs designed for extreme environments and edge AI processing."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-blue-400" />
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">HPE</div>
              <p className="text-xs text-zinc-500">Adopting Helios for 'Herder' Supercomputer</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Cisco + HUMAIN</div>
              <p className="text-xs text-zinc-500">Joint Venture: 1GW AI Infrastructure</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">AWS</div>
              <p className="text-xs text-zinc-500">New Instances with 5th Gen EPYC</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">TCS</div>
              <p className="text-xs text-zinc-500">Co-developing Enterprise AI Solutions</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-emerald-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* Q1 2026 Guidance Block */}
      <div className="mb-12">
        <Card className="border-emerald-500/20 bg-emerald-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">Q1 2026 Financial Outlook (Non-GAAP)</h3>
              <span className="text-emerald-400 text-sm font-medium">Period Ending March 2026</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <OutlookItem label="Projected Revenue" value="~$9.8B" detail="+/- $300 Million" />
            <OutlookItem label="Gross Margin" value="~55%" detail="Non-GAAP" />
            <OutlookItem label="Operating Expenses" value="~$3.05B" detail="Non-GAAP" />
            <OutlookItem label="Tax Rate" value="~13%" detail="of Pre-tax Income" />
            <OutlookItem label="Diluted Shares" value="1.65B" detail="Share Count" />
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Cpu size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Specific Inclusion:</strong> The Q1 2026 outlook specifically includes approximately <span className="text-white">$100 Million</span> of projected revenue from AMD Instinct MI308 sales to China. The company also forecasts Interest Expense/Other Income to be approximately $35 Million.
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers & Momentum</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
                      <Target size={18} />
                      Large & Compelling TAM
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Looking beyond the immediate quarter, AMD remains focused on capitalizing on its large and compelling Total Addressable Market (TAM). The company's 'AI Everywhere' strategy is not just a slogan but a capital allocation priority, driving leadership in Data Center AI accelerators and adaptive computing.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck size={18} />
                      Financial Strength & Execution
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      With a strong balance sheet and world-class execution, AMD aims to drive long-term shareholder returns. The company projects non-GAAP operating expenses to be around $3.05 billion in Q1, signaling a continued heavy investment in R&D to sustain technology leadership while maintaining operational discipline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Rocket size={18} />
                      Expanding Data Center Leadership
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      AMD is uniquely positioned to power the end-to-end AI infrastructure. From the cloud with Instinct GPUs and EPYC CPUs, to the edge with Versal SoCs, and to the end-user device with Ryzen AI, the company is executing on its roadmap to deliver Yotta-scale computing solutions.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Long-Term Growth Trajectory</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  AMD's roadmap focuses on sustained growth through three core strategic pillars.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Pervasive AI Leadership</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Cloud to Edge Computing</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Software Ecosystem Expansion</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for AMD View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Advanced Micro Devices, Inc. All rights reserved. <br/>
        Financial figures presented are Non-GAAP unless otherwise noted.
      </p>
    </footer>
  </div>
);

const GoogleView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Cloud size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Feb 4, 2026 Earnings Call</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Cloud Acceleration & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700">AI Momentum</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Alphabet delivered a tremendous quarter with Q4 revenues growing 18% to $113.8 billion. 
          Annual revenue exceeded $400 billion for the first time, driven by Gemini AI integration across Search and a 48% surge in Cloud revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Q4 Revenue" 
          value="$113.8B" 
          subtext="Strong broad-based growth"
          trend="18% YoY"
          icon={DollarSign}
        />
        <StatCard 
          title="FY 2025 Revenue" 
          value="$403B" 
          subtext="Historic Milestone"
          trend="15% YoY"
          icon={BarChart2}
        />
        <StatCard 
          title="Google Cloud Growth" 
          value="+48%" 
          subtext="Accelerating Momentum"
          trend="Record"
          icon={TrendingUp}
        />
        <StatCard 
          title="Q4 Diluted EPS" 
          value="$2.82" 
          subtext="Strong Profitability"
          trend="31% YoY"
          icon={Activity}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Revenue Mix by Segment</h2>
              <p className="text-zinc-500 text-sm">Q4 2025 Performance</p>
            </div>
            <Badge color="blue">Q4 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="Google Services (Search, YouTube, Devices)" value={95.5} max={113.8} color="bg-blue-500" />
            <ProgressBar label="Google Cloud" value={17.7} max={113.8} color="bg-red-500" />
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">Other Bets</span>
                 <span className="text-white font-bold">$0.37B</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-yellow-500 rounded-full" style={{ width: '1%' }} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Operating Margin</span>
                <span className="text-2xl font-bold text-white">31.6%</span>
                <span className="text-zinc-400 text-xs ml-2">Impacted by Waymo charge</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Free Cash Flow (Q4)</span>
                <span className="text-2xl font-bold text-white">$24.6B</span>
                <span className="text-zinc-400 text-xs ml-2">Record Op Cash Flow</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-blue-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Cloud Breakout</h4>
              <p className="text-zinc-400 text-sm mt-1">Cloud revenue accelerated to $17.7B (+48%), with operating margin expanding significantly to 30.1% (up from 17.5%).</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-blue-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Search Resilience</h4>
              <p className="text-zinc-400 text-sm mt-1">Search & Other grew 17% to $63.1B. "AI Mode" queries are seeing deeper engagement and double the usage in the US.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-blue-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Gemini Scale</h4>
              <p className="text-zinc-400 text-sm mt-1">Gemini App now has 750M+ MAUs. Over 8 million paid seats for Gemini Enterprise sold in just four months.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-blue-500" />
          <h2 className="text-3xl font-bold text-white">Segment Performance</h2>
        </div>

        <SegmentDetail 
          title="Google Cloud"
          revenue="17.7"
          growth="+48%"
          operatingIncome="5.3B"
          icon={Cloud}
          color="bg-red-500"
          highlights={[
            "Annual run rate now over $70 Billion",
            "Backlog grew 55% QoQ to $240 Billion",
            "Strong demand for AI infrastructure (TPU/GPU) & Vertex AI",
            "Collaborating with Apple to develop next-gen foundation models"
          ]}
        />

        <SegmentDetail 
          title="Google Services"
          revenue="95.5"
          growth="+14%"
          operatingIncome="40.1B"
          icon={Search}
          color="bg-blue-500"
          highlights={[
            "Search & Other revenue up 17% to $63.1B",
            "YouTube Ads up 9% to $11.4B; Annual Ads+Subs >$60B",
            "Subscriptions/Devices revenue up 17% to $13.6B",
            "Pixel 10 series launching soon; Pixel 9a confirmed"
          ]}
        />

        <SegmentDetail 
          title="Other Bets"
          revenue="0.37"
          growth="N/A"
          operatingIncome="(3.6B)"
          icon={Car}
          color="bg-purple-500"
          highlights={[
            "Waymo surpassed 20 million fully autonomous trips",
            "Providing >400,000 rides every week",
            "Waymo raised significant new investment round",
            "Operating loss includes $2.1B valuation charge"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-blue-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="Gemini 3" 
            category="AI Model"
            description="Major model update powering Search 'AI Overviews' and processing 3x more daily tokens than 2.5 Pro."
          />
          <ProductCard 
            name="Project Genie" 
            category="World Model"
            description="New general-purpose world model allowing users to create interactive worlds in real-time."
          />
          <ProductCard 
            name="Waymo One" 
            category="Autonomous Driving"
            description="Now serving 400k weekly rides. Expanded to Miami; coming to UK and Japan soon."
          />
          <ProductCard 
            name="TPU Ironwood" 
            category="Infrastructure"
            description="7th generation Tensor Processing Unit delivering leading power efficiency for AI training/inference."
          />
          <ProductCard 
            name="Circle to Search" 
            category="Search"
            description="Now available on over 580 million Android devices, driving new non-text search behaviors."
          />
          <ProductCard 
            name="Universal Commerce" 
            category="Protocol"
            description="New open standard for agentic commerce launched with retail partners to streamline AI shopping."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-blue-400" />
            Strategic Milestones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">750M+</div>
              <p className="text-xs text-zinc-500">Gemini App MAUs</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">10B+</div>
              <p className="text-xs text-zinc-500">Tokens Processed/Min</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">325M+</div>
              <p className="text-xs text-zinc-500">Paid Subscriptions</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">$240B</div>
              <p className="text-xs text-zinc-500">Cloud Backlog</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* 2026 Guidance Block */}
      <div className="mb-12">
        <Card className="border-blue-500/20 bg-blue-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">2026 Financial Outlook</h3>
              <span className="text-blue-400 text-sm font-medium">Fiscal Year 2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlookItem 
              label="2026 CapEx Guidance" 
              value="$175B - $185B" 
              detail="Investing heavily in AI Compute & Infrastructure" 
            />
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Depreciation</span>
               <span className="text-white font-bold text-lg mb-1">Accelerating</span>
               <span className="text-zinc-500 text-xs">Due to technical infra investment</span>
             </div>
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Operating Focus</span>
               <span className="text-white font-bold text-lg mb-1">Efficiency</span>
               <span className="text-zinc-500 text-xs">Using AI agents to lower costs</span>
             </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Target size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Strategic Investment:</strong> "Our 2026 CapEx investments are anticipated to be in the range of $175 billion to $185 billion... We are investing in AI compute capacity to support frontier model development by Google DeepMind."
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      <Zap size={18} />
                      Full Stack AI Leadership
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Alphabet is leveraging its unrivaled infrastructure (TPUs + GPUs) and world-class model portfolio (Gemini, Imagen, Veo). Gemini 3 is seeing the fastest adoption in history, and the company is lowering serving costs significantly (78% reduction).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck size={18} />
                      Cloud Momentum
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Google Cloud is winning more new customers faster, with double the velocity compared to Q1. The number of $1B+ deals surpassed the previous three years combined, cementing it as a critical profit driver.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      <Rocket size={18} />
                      Search Evolution
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      "AI Mode" and "AI Overviews" are driving an expansionary moment for Search. Users are asking longer, more complex questions, and engagement is deepening. Monetization is following with new ad formats like "Direct Offers."
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Investment Thesis</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  Alphabet is aggressively investing to capture the AI platform shift while delivering strong profit growth.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">CapEx for AI Infrastructure</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Cloud Margin Expansion</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Subscription Revenue Growth</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for Google View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Alphabet Inc. All rights reserved. <br/>
        Financial figures presented are Unaudited.
      </p>
    </footer>
  </div>
);

const PalantirView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Target size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Q4 2025 Earnings Report</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          AIP Revolution & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-500 to-purple-700">Commercial Surge</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Palantir delivered an exceptional quarter with US Commercial revenue growing 137% year-over-year. The company achieved a "Rule of 40" score of 127%, driven by the rapid adoption of its Artificial Intelligence Platform (AIP) across American enterprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Q4 Revenue" 
          value="$1.41B" 
          subtext="Total Revenue"
          trend="70% YoY"
          icon={DollarSign}
        />
        <StatCard 
          title="US Commercial Growth" 
          value="+137%" 
          subtext="AIP Momentum"
          trend="Record"
          icon={TrendingUp}
        />
        <StatCard 
          title="Rule of 40" 
          value="127%" 
          subtext="Growth + Margin"
          trend="Top Tier"
          icon={Activity}
        />
        <StatCard 
          title="Adj. Free Cash Flow" 
          value="$791M" 
          subtext="56% Margin"
          trend="Record"
          icon={BarChart2}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Revenue Mix by Segment</h2>
              <p className="text-zinc-500 text-sm">Q4 2025 Performance</p>
            </div>
            <Badge color="purple">Q4 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="US Government" value={0.57} max={1.41} color="bg-zinc-500" />
            <ProgressBar label="US Commercial" value={0.51} max={1.41} color="bg-purple-500" />
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">International (Commercial & Gov)</span>
                 <span className="text-white font-bold">$0.33B</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 rounded-full" style={{ width: '23%' }} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Adj. Operating Margin</span>
                <span className="text-2xl font-bold text-white">57%</span>
                <span className="text-zinc-400 text-xs ml-2">Operating Income: $798M</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">GAAP Net Income</span>
                <span className="text-2xl font-bold text-white">$609M</span>
                <span className="text-zinc-400 text-xs ml-2">Record Profitability</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-purple-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">US Commercial Explosion</h4>
              <p className="text-zinc-400 text-sm mt-1">Revenue grew 137% YoY to $507M. Customer count increased 49%, and total contract value (TCV) hit a record $1.34B (+67% YoY).</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-purple-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Government Acceleration</h4>
              <p className="text-zinc-400 text-sm mt-1">US Government revenue accelerated to +66% YoY ($570M), driven by major defense wins and the new "ShipOS" initiative with the Navy.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-purple-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Profitability at Scale</h4>
              <p className="text-zinc-400 text-sm mt-1">Achieved a staggering 57% Adjusted Operating Margin while simultaneously growing revenue 70%, resulting in a Rule of 40 score of 127%.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-purple-500" />
          <h2 className="text-3xl font-bold text-white">Segment Performance</h2>
        </div>

        <SegmentDetail 
          title="US Commercial"
          revenue="0.51"
          growth="+137%"
          operatingIncome="N/A"
          icon={Rocket}
          color="bg-purple-500"
          highlights={[
            "Remaining Deal Value (RDV) grew 145% YoY to $4.38 Billion",
            "Closed 180 deals >$1M and 61 deals >$10M in the quarter",
            "Customer count grew 49% YoY to 571 customers",
            "Strategic partnership with Accenture to scale AIP deployments"
          ]}
        />

        <SegmentDetail 
          title="US Government"
          revenue="0.57"
          growth="+66%"
          operatingIncome="N/A"
          icon={ShieldCheck}
          color="bg-zinc-500"
          highlights={[
            "Launched ShipOS with US Navy to rebuild maritime industrial base",
            "Revenue growth accelerated to 66% YoY (up from prior quarters)",
            "Strong demand for AI-enabled defense capabilities",
            "Project Maven and other classified programs driving adoption"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-purple-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="AIP" 
            category="AI Platform"
            description="The core engine driving growth. Allows enterprises to deploy LLMs safely on private data with full ontology integration."
          />
          <ProductCard 
            name="ShipOS" 
            category="Defense"
            description="New operating system launched with the US Navy to optimize supply chains and maritime delivery schedules."
          />
          <ProductCard 
            name="Chain Reaction" 
            category="Infrastructure"
            description="The 'OS for American AI Infrastructure' designed to coordinate energy producers, grid operators, and data centers."
          />
          <ProductCard 
            name="Foundry" 
            category="Data Ops"
            description="The foundational operating system for data integration and decision making, now supercharged by AIP."
          />
          <ProductCard 
            name="AI FDE" 
            category="Services"
            description="'Forward Deployed Engineers' powered by AI agents to accelerate customer implementations and value realization."
          />
          <ProductCard 
            name="Apollo" 
            category="DevOps"
            description="Continuous delivery platform ensuring software reliability and security across all environments."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-purple-400" />
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Accenture</div>
              <p className="text-xs text-zinc-500">Scaling AIP Enterprise-wide</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">HD Hyundai</div>
              <p className="text-xs text-zinc-500">Group-wide expansion</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">US Navy</div>
              <p className="text-xs text-zinc-500">ShipOS Deployment</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Lear</div>
              <p className="text-xs text-zinc-500">Manufacturing AI</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-purple-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* 2026 Guidance Block */}
      <div className="mb-12">
        <Card className="border-purple-500/20 bg-purple-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">2026 Financial Outlook</h3>
              <span className="text-purple-400 text-sm font-medium">Fiscal Year 2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlookItem 
              label="FY 2026 Revenue" 
              value="$7.18B - $7.20B" 
              detail="Total Revenue Guidance" 
            />
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">US Commercial Outlook</span>
               <span className="text-white font-bold text-lg mb-1">&gt; $3.14 Billion</span>
               <span className="text-zinc-500 text-xs">Growth rate of at least 115%</span>
             </div>
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Adj. Free Cash Flow</span>
               <span className="text-white font-bold text-lg mb-1">~$4 Billion</span>
               <span className="text-zinc-500 text-xs">$3.925B - $4.125B range</span>
             </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Target size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Strategic Note:</strong> "We expect GAAP operating income and net income in each quarter of this year." The company continues to project hyper-growth in the US Commercial sector, exceeding 115% growth in 2026.
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Zap size={18} />
                      The AIP Network Effect
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Adoption of AIP (Artificial Intelligence Platform) is accelerating, moving from "bootcamps" to production at unprecedented speed. Customers are using AIP to build agentic workflows that transform operations, driving net dollar retention to 139%.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Anchor size={18} />
                      Rebuilding American Industrial Base
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Through initiatives like ShipOS and Chain Reaction, Palantir is positioning itself as the operating system for critical American infrastructure—from naval shipyards to the energy grid powering AI data centers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Code size={18} />
                      AI For Builders
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      New tools like "Workflow Builder" and "AI FDE" allow customers to build complex, ontology-backed applications in hours instead of months. The platform is becoming the standard for "Agentic Enterprise" development.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth Efficiency</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  Palantir is demonstrating that hyper-growth does not require sacrificing profitability.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Rule of 40 Score: 127%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-purple-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Adj. Operating Margin: 57%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-purple-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Cash Reserves: $7.2 Billion</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-purple-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for Palantir View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Palantir Technologies Inc. All rights reserved. <br/>
        Financial figures presented are Unaudited.
      </p>
    </footer>
  </div>
);

const QualcommView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Zap size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Q1 FY26 Earnings Report</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          AI-Native Era & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-500 to-rose-700">Diversified Growth</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Qualcomm delivered strong results in the first quarter of fiscal 2026, driven by the launch of the Snapdragon 8 Elite and continued record-breaking performance in Automotive. The company is accelerating its diversification strategy into PC, XR, and industrial IoT.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Non-GAAP Revenue" 
          value="$10.7B" 
          subtext="Above Guidance Midpoint"
          trend="Strong"
          icon={DollarSign}
        />
        <StatCard 
          title="Non-GAAP EPS" 
          value="$3.25" 
          subtext="Strong Execution"
          trend="Beat"
          icon={Activity}
        />
        <StatCard 
          title="Automotive Revenue" 
          value="$850M" 
          subtext="Record Performance"
          trend="50% YoY"
          icon={Car}
        />
        <StatCard 
          title="Operating Cash Flow" 
          value="$3.1B" 
          subtext="Robust Liquidity"
          trend="Solid"
          icon={BarChart2}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Revenue Mix by Segment</h2>
              <p className="text-zinc-500 text-sm">Q1 FY26 Performance</p>
            </div>
            <Badge color="crimson">Q1 FY26</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="QCT (Chipsets)" value={9.3} max={10.7} color="bg-rose-500" />
            <ProgressBar label="QTL (Licensing)" value={1.4} max={10.7} color="bg-zinc-500" />
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">QCT EBT Margin</span>
                <span className="text-2xl font-bold text-white">34%</span>
                <span className="text-zinc-400 text-xs ml-2">Consistent Profitability</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Automotive Growth</span>
                <span className="text-2xl font-bold text-white">+50%</span>
                <span className="text-zinc-400 text-xs ml-2">Year-over-Year</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-rose-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Automotive Velocity</h4>
              <p className="text-zinc-400 text-sm mt-1">Automotive revenue surged 50% year-over-year to a record $850M, driven by the digital chassis platform and advanced ADAS wins.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-rose-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Premium Handsets</h4>
              <p className="text-zinc-400 text-sm mt-1">Handset revenues reached $6.6B, bolstered by the successful launch of Snapdragon 8 Elite in flagship Android devices.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-rose-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Strategic Stability</h4>
              <p className="text-zinc-400 text-sm mt-1">Extended license agreement with Apple and continued strong execution in IoT diversification initiatives.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-rose-500" />
          <h2 className="text-3xl font-bold text-white">Segment Performance</h2>
        </div>

        <SegmentDetail 
          title="QCT (Chips)"
          revenue="9.3"
          growth="Solid"
          operatingIncome="34% EBT"
          icon={Microchip}
          color="bg-rose-500"
          highlights={[
            "Handset revenue of $6.6 Billion driven by Android flagship launches",
            "Automotive revenue grew 50% YoY to record $850 Million",
            "IoT revenue of $1.8 Billion, reflecting industrial edge adoption",
            "Inventory levels remain normalized across channels"
          ]}
        />

        <SegmentDetail 
          title="QTL (Licensing)"
          revenue="1.4"
          growth="Stable"
          operatingIncome="73% EBT"
          icon={Wifi}
          color="bg-zinc-500"
          highlights={[
            "Revenue of $1.4 Billion aligns with expectations",
            "Extended global patent license agreement with Apple",
            "Continued strength in 5G licensing program",
            "Operating margin remains highly accretive at 73%"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-rose-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="Snapdragon 8 Elite" 
            category="Mobile"
            description="New flagship mobile platform featuring the custom Oryon CPU, driving AI-native experiences on Android."
          />
          <ProductCard 
            name="Digital Chassis" 
            category="Automotive"
            description="Comprehensive cloud-connected platform for telematics, digital cockpit, and ADAS/autonomous driving."
          />
          <ProductCard 
            name="Snapdragon X Elite" 
            category="PC"
            description="Compute platform for Copilot+ PCs, bringing NPU-driven AI performance to Windows laptops."
          />
          <ProductCard 
            name="AI Hub" 
            category="Developer Tool"
            description="Gateway for developers to optimize and deploy models on Snapdragon devices across mobile, PC, and auto."
          />
          <ProductCard 
            name="Oryon CPU" 
            category="Architecture"
            description="Custom CPU architecture now deployed across PC and Mobile, delivering leading performance-per-watt."
          />
          <ProductCard 
            name="5G Advanced" 
            category="Connectivity"
            description="Next-generation modem-RF systems enabling new industrial and consumer use cases."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-rose-400" />
            Strategic Milestones
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Apple</div>
              <p className="text-xs text-zinc-500">License Extended</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Samsung</div>
              <p className="text-xs text-zinc-500">Strategic Partnership</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Microsoft</div>
              <p className="text-xs text-zinc-500">Copilot+ PC Launch</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">GM / Cadillac</div>
              <p className="text-xs text-zinc-500">Auto Cockpit Wins</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-rose-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* 2026 Guidance Block */}
      <div className="mb-12">
        <Card className="border-rose-500/20 bg-rose-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">Q2 FY26 Financial Guidance</h3>
              <span className="text-rose-400 text-sm font-medium">Fiscal Year 2026</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlookItem 
              label="Q2 Revenue" 
              value="$10.3B - $11.1B" 
              detail="Guidance Range" 
            />
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Non-GAAP EPS</span>
               <span className="text-white font-bold text-lg mb-1">$3.10 - $3.30</span>
               <span className="text-zinc-500 text-xs">Guidance Range</span>
             </div>
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">QCT Revenue</span>
               <span className="text-white font-bold text-lg mb-1">$8.9B - $9.7B</span>
               <span className="text-zinc-500 text-xs">Projected Segment Rev</span>
             </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Target size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Strategic Note:</strong> "We are entering the era of AI-native devices. The convergence of mobile and PC, along with the digital transformation of the automobile, provides a massive diversification opportunity for Qualcomm."
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-rose-400 font-bold mb-2 flex items-center gap-2">
                      <Zap size={18} />
                      AI at the Edge
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Qualcomm is positioning the NPU (Neural Processing Unit) as a critical differentiator. By enabling on-device AI (GenAI) on phones and PCs, they reduce cloud costs and improve privacy/latency, driving a premium upgrade cycle.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-rose-400 font-bold mb-2 flex items-center gap-2">
                      <Car size={18} />
                      Automotive Diversification
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      The automotive pipeline is now converting to revenue at scale ($850M in Q1). Qualcomm's "Digital Chassis" serves as the central brain for modern vehicles, covering connectivity, cockpit, and autonomous driving.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-rose-400 font-bold mb-2 flex items-center gap-2">
                      <Monitor size={18} />
                      PC Market Entry
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      With Snapdragon X Elite, Qualcomm is aggressively targeting the Windows PC market. The shift to Arm-on-Windows, supported by Microsoft's Copilot+ initiative, opens a significant new TAM beyond smartphones.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-rose-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth & Efficiency</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  Qualcomm combines strong cash generation from mobile with high-growth diversification vectors.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Auto Rev Growth: +50%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-rose-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">QCT EBT Margin: 34%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-rose-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Op. Cash Flow: $3.1 Billion</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-rose-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for Qualcomm View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Qualcomm Incorporated. All rights reserved. <br/>
        Financial figures presented are Non-GAAP unless otherwise noted.
      </p>
    </footer>
  </div>
);

const CumminsView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Truck size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Q4 2025 Earnings Report</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Powering Growth & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-800">Energy Transition</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Cummins delivered strong fourth-quarter results with revenues of $8.5 Billion. Full-year 2025 revenue hit a record $33.7 Billion, driven by exceptional demand in Power Systems and robust operational execution across all segments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Q4 Revenue" 
          value="$8.5B" 
          subtext="Strong Quarter"
          trend="Flat YoY"
          icon={DollarSign}
        />
        <StatCard 
          title="FY 2025 Revenue" 
          value="$33.7B" 
          subtext="Record Full Year"
          trend="Record"
          icon={BarChart2}
        />
        <StatCard 
          title="Q4 EBITDA" 
          value="$1.15B" 
          subtext="13.5% of Sales"
          trend="Solid"
          icon={Activity}
        />
        <StatCard 
          title="Q4 Diluted EPS" 
          value="$4.27" 
          subtext="GAAP Earnings"
          trend="Solid"
          icon={TrendingUp}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Revenue Mix by Segment</h2>
              <p className="text-zinc-500 text-sm">Q4 2025 Performance</p>
            </div>
            <Badge color="red">Q4 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="Components" value={2.9} max={8.5} color="bg-orange-500" />
            <ProgressBar label="Distribution" value={2.7} max={8.5} color="bg-blue-500" />
            <ProgressBar label="Engine" value={2.2} max={8.5} color="bg-red-500" />
            <ProgressBar label="Power Systems" value={1.6} max={8.5} color="bg-zinc-500" />
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">Accelera</span>
                 <span className="text-white font-bold">$99M</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 rounded-full" style={{ width: '2%' }} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">FY 2025 EBITDA</span>
                <span className="text-2xl font-bold text-white">16.0%</span>
                <span className="text-zinc-400 text-xs ml-2">Record Margin</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">FY 2025 Net Income</span>
                <span className="text-2xl font-bold text-white">$2.8B</span>
                <span className="text-zinc-400 text-xs ml-2">GAAP</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-red-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Power Systems Surge</h4>
              <p className="text-zinc-400 text-sm mt-1">Power Systems sales grew 13% in Q4, driven by a massive 22% increase in power generation revenue, reflecting critical data center demand.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-red-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Distribution Strength</h4>
              <p className="text-zinc-400 text-sm mt-1">Distribution segment sales remained robust at $2.7B, with EBITDA margins expanding to 13.1%, driven by pricing and operational efficiencies.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-red-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Strategic Realignment</h4>
              <p className="text-zinc-400 text-sm mt-1">Recorded $218M in charges related to the strategic review of the Electrolyzer business within Accelera to optimize future profitability.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-red-500" />
          <h2 className="text-3xl font-bold text-white">Segment Performance</h2>
        </div>

        <SegmentDetail 
          title="Components"
          revenue="2.9"
          growth="-4%"
          operatingIncome="$392M (13.7%)"
          icon={Box}
          color="bg-orange-500"
          highlights={[
            "Revenue decrease primarily due to 8% lower heavy-duty truck build rates",
            "Sales in China dropped 12% due to weak market conditions",
            "North America sales decreased 1% YoY",
            "EBITDA margin remained solid at 13.7% despite volume headwinds"
          ]}
        />

        <SegmentDetail 
          title="Engine"
          revenue="2.2"
          growth="-2%"
          operatingIncome="$327M (14.9%)"
          icon={Truck}
          color="bg-red-500"
          highlights={[
            "On-highway revenues decreased 2% driven by softening light-duty market",
            "Off-highway revenues declined 2% due to weakness in construction",
            "North America sales remained flat; International sales fell 9%",
            "EBITDA margin expanded to 14.9%, up from 13.5% last year"
          ]}
        />

        <SegmentDetail 
          title="Distribution"
          revenue="2.7"
          growth="+1%"
          operatingIncome="$350M (13.1%)"
          icon={Globe}
          color="bg-blue-500"
          highlights={[
            "Record full-year segment revenue of $11.0 Billion",
            "Strong demand for power generation products led growth",
            "North America sales increased 5%; International declined 7%",
            "EBITDA increased to $350 million primarily due to pricing"
          ]}
        />

        <SegmentDetail 
          title="Power Systems"
          revenue="1.6"
          growth="+13%"
          operatingIncome="$287M (17.5%)"
          icon={Zap}
          color="bg-zinc-500"
          highlights={[
            "Power generation sales surged 22%, driven by data center demand",
            "Industrial revenue decreased 5% due to weaker mining markets",
            "EBITDA margin expanded significantly to 17.5% (vs 14.4% last year)",
            "Strong pricing and volume growth in high-demand sectors"
          ]}
        />

        <SegmentDetail 
          title="Accelera"
          revenue="99"
          growth="+15%"
          operatingIncome="($323M)"
          icon={BatteryCharging}
          color="bg-green-500"
          highlights={[
            "Revenue growth driven by electrolyzer installations",
            "EBITDA loss includes $218M of charges related to electrolyzer review",
            "Focusing investment on scaling zero-emissions technologies",
            "Strategic review aims to improve long-term financial viability"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-red-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="AMD Helios" 
            category="Infrastructure"
            description="New rack-scale platform serving as the blueprint for Yotta-scale AI supercomputing clusters."
          />
          <ProductCard 
            name="Instinct MI440X" 
            category="AI Accelerator"
            description="Next-generation GPU designed specifically for enterprise AI workloads, unveiled at CES."
          />
          <ProductCard 
            name="Ryzen 7 9850X3D" 
            category="Consumer CPU"
            description="The world's fastest gaming processor, featuring Zen 5 architecture and 2nd Gen 3D V-Cache."
          />
          <ProductCard 
            name="Ryzen AI Halo" 
            category="Developer Platform"
            description="Compact developer kit capable of running AI models up to 200 billion parameters locally."
          />
          <ProductCard 
            name="FSR 'Redstone'" 
            category="Software"
            description="Advanced AI-powered upscaling technology for Radeon graphics, improving framerates and fidelity."
          />
          <ProductCard 
            name="Versal AI Edge Gen 2" 
            category="Adaptive SoC"
            description="Space-grade adaptive SoCs designed for extreme environments and edge AI processing."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-blue-400" />
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">HPE</div>
              <p className="text-xs text-zinc-500">Adopting Helios for 'Herder' Supercomputer</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Cisco + HUMAIN</div>
              <p className="text-xs text-zinc-500">Joint Venture: 1GW AI Infrastructure</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">AWS</div>
              <p className="text-xs text-zinc-500">New Instances with 5th Gen EPYC</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">TCS</div>
              <p className="text-xs text-zinc-500">Co-developing Enterprise AI Solutions</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-emerald-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* Q1 2026 Guidance Block */}
      <div className="mb-12">
        <Card className="border-emerald-500/20 bg-emerald-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">Q1 2026 Financial Outlook (Non-GAAP)</h3>
              <span className="text-emerald-400 text-sm font-medium">Period Ending March 2026</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <OutlookItem label="Projected Revenue" value="~$9.8B" detail="+/- $300 Million" />
            <OutlookItem label="Gross Margin" value="~55%" detail="Non-GAAP" />
            <OutlookItem label="Operating Expenses" value="~$3.05B" detail="Non-GAAP" />
            <OutlookItem label="Tax Rate" value="~13%" detail="of Pre-tax Income" />
            <OutlookItem label="Diluted Shares" value="1.65B" detail="Share Count" />
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Cpu size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Specific Inclusion:</strong> The Q1 2026 outlook specifically includes approximately <span className="text-white">$100 Million</span> of projected revenue from AMD Instinct MI308 sales to China. The company also forecasts Interest Expense/Other Income to be approximately $35 Million.
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers & Momentum</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2">
                      <Target size={18} />
                      Large & Compelling TAM
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Looking beyond the immediate quarter, AMD remains focused on capitalizing on its large and compelling Total Addressable Market (TAM). The company's 'AI Everywhere' strategy is not just a slogan but a capital allocation priority, driving leadership in Data Center AI accelerators and adaptive computing.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck size={18} />
                      Financial Strength & Execution
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      With a strong balance sheet and world-class execution, AMD aims to drive long-term shareholder returns. The company projects non-GAAP operating expenses to be around $3.05 billion in Q1, signaling a continued heavy investment in R&D to sustain technology leadership while maintaining operational discipline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Rocket size={18} />
                      Expanding Data Center Leadership
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      AMD is uniquely positioned to power the end-to-end AI infrastructure. From the cloud with Instinct GPUs and EPYC CPUs, to the edge with Versal SoCs, and to the end-user device with Ryzen AI, the company is executing on its roadmap to deliver Yotta-scale computing solutions.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Long-Term Growth Trajectory</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  AMD's roadmap focuses on sustained growth through three core strategic pillars.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Pervasive AI Leadership</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Cloud to Edge Computing</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Software Ecosystem Expansion</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-emerald-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for AMD View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Advanced Micro Devices, Inc. All rights reserved. <br/>
        Financial figures presented are Non-GAAP unless otherwise noted.
      </p>
    </footer>
  </div>
);

const RedditView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    {/* HERO SECTION */}
    <section id="summary" className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <MessageCircle size={400} strokeWidth={0.5} />
      </div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
          <Calendar size={14} />
          <span>Q4 2025 Earnings Report</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Community & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800">Everyday Utility</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Reddit delivered a milestone quarter, with Q4 revenue growing 70% to $726 million. The company achieved its first full year of GAAP profitability, driven by 19% growth in daily active unique users and accelerating data licensing revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCard 
          title="Q4 Revenue" 
          value="$726M" 
          subtext="Record Growth"
          trend="70% YoY"
          icon={DollarSign}
        />
        <StatCard 
          title="Adj. EBITDA" 
          value="$327M" 
          subtext="45% Margin"
          trend="Record"
          icon={Activity}
        />
        <StatCard 
          title="Daily Active Uniques" 
          value="121.4M" 
          subtext="Global Community"
          trend="19% YoY"
          icon={Users}
        />
        <StatCard 
          title="Q4 Net Income" 
          value="$252M" 
          subtext="35% Net Margin"
          trend="GAAP"
          icon={TrendingUp}
        />
      </div>
    </section>

    {/* FINANCIAL DEEP DIVE SECTION */}
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Profitability Profile</h2>
              <p className="text-zinc-500 text-sm">FY 2025 Performance</p>
            </div>
            <Badge color="orange">FY 2025</Badge>
          </div>
          <div className="space-y-8">
            <ProgressBar label="FY 2025 Revenue" value={2.2} max={2.2} color="bg-orange-500" />
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">Adj. EBITDA</span>
                 <span className="text-white font-bold">$845M</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 rounded-full" style={{ width: '38%' }} />
               </div>
            </div>
            <div className="mb-4">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-zinc-300 font-medium">Net Income (GAAP)</span>
                 <span className="text-white font-bold">$530M</span>
               </div>
               <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-500 rounded-full" style={{ width: '24%' }} />
               </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Gross Margin</span>
                <span className="text-2xl font-bold text-white">91.9%</span>
                <span className="text-zinc-400 text-xs ml-2">Consistent High Margin</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs uppercase tracking-wider">Free Cash Flow (Q4)</span>
                <span className="text-2xl font-bold text-white">$264M</span>
                <span className="text-zinc-400 text-xs ml-2">+174M Improvement</span>
              </div>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-orange-500 flex items-center justify-center text-[10px] font-bold">1</div>
              <h4 className="text-white font-medium">Hyper Growth</h4>
              <p className="text-zinc-400 text-sm mt-1">Revenue accelerated to 70% growth in Q4, significantly outpacing peers. This was driven by strength in both advertising and emerging data licensing streams.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-orange-500 flex items-center justify-center text-[10px] font-bold">2</div>
              <h4 className="text-white font-medium">Profitability Pivot</h4>
              <p className="text-zinc-400 text-sm mt-1">Reddit posted its first full year of GAAP net income ($530M), proving the operating leverage in its high-margin business model.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-orange-500 flex items-center justify-center text-[10px] font-bold">3</div>
              <h4 className="text-white font-medium">Capital Return</h4>
              <p className="text-zinc-400 text-sm mt-1">Board authorized a $1 Billion share repurchase program, signaling confidence in cash flow generation and long-term value.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>

    {/* SEGMENTS DETAIL SECTION */}
    <section id="segments" className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Layers className="text-orange-500" />
          <h2 className="text-3xl font-bold text-white">Growth Engines</h2>
        </div>

        <SegmentDetail 
          title="Advertising"
          revenue="0.65"
          growth="+High"
          operatingIncome="Core Driver"
          icon={MessageCircle}
          color="bg-orange-500"
          highlights={[
            "Ad revenue grew 70% year-over-year in Q4",
            "Driven by 'Conversation Ads' and new performance formats",
            "Full funnel attribution improving advertiser ROI",
            "International expansion unlocking new ad inventory"
          ]}
        />

        <SegmentDetail 
          title="Data & Other"
          revenue="0.07"
          growth="+Rapid"
          operatingIncome="High Margin"
          icon={Database}
          color="bg-purple-500"
          highlights={[
            "Data licensing revenue becoming a material contributor",
            "Partnerships with major AI labs (Google, OpenAI) for model training",
            "Leveraging 'authenticity' of human conversation as a premium asset",
            "User Economy (developer platform) showing early promise"
          ]}
        />
    </section>

    {/* PRODUCTS & TECH SECTION */}
    <section id="products">
      <div className="flex items-center gap-3 mb-8">
        <Zap className="text-orange-500" />
        <h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            name="Conversation Ads" 
            category="Advertising"
            description="Ad formats placed directly within comment threads, targeting users at the moment of highest engagement."
          />
          <ProductCard 
            name="Reddit Pro" 
            category="Business Tool"
            description="Free suite of tools for businesses to establish organic presence and engage with communities authentically."
          />
          <ProductCard 
            name="Developer Platform" 
            category="Ecosystem"
            description="Tools allowing third-party developers to build apps and extensions directly into the Reddit interface."
          />
          <ProductCard 
            name="Data API" 
            category="AI/Data"
            description="Enterprise-grade access to Reddit's corpus of human conversation for sentiment analysis and LLM training."
          />
          <ProductCard 
            name="Machine Translation" 
            category="Global"
            description="AI-powered translation allowing content to cross language barriers, driving international DAUq."
          />
          <ProductCard 
            name="Shreddit" 
            category="Core Tech"
            description="Modernized web architecture improving site speed, SEO ranking, and user retention."
          />
      </div>

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-orange-400" />
            Strategic Initiatives
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Global</div>
              <p className="text-xs text-zinc-500">Expanding Localization</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Search</div>
              <p className="text-xs text-zinc-500">Enhanced Discovery</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Video</div>
              <p className="text-xs text-zinc-500">Video Feed Adoption</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-lg mb-1">Shopping</div>
              <p className="text-xs text-zinc-500">Commerce Integration</p>
            </div>
          </div>
      </div>
    </section>

    {/* OUTLOOK SECTION */}
    <section id="outlook" className="pb-20">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-orange-400" />
        <h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2>
      </div>

      {/* Strategy Block */}
      <div className="mb-12">
        <Card className="border-orange-500/20 bg-orange-900/5">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-white">Strategic Focus</h3>
              <span className="text-orange-400 text-sm font-medium">The Next Era of Reddit</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutlookItem 
              label="Share Repurchase" 
              value="$1 Billion" 
              detail="Class A Common Stock" 
            />
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">FY 2025 Revenue</span>
               <span className="text-white font-bold text-lg mb-1">$2.2 Billion</span>
               <span className="text-zinc-500 text-xs">+69% Year-over-Year</span>
             </div>
             <div className="flex flex-col p-4 bg-zinc-800/50 rounded-lg border border-zinc-800">
               <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Cash Balance</span>
               <span className="text-white font-bold text-lg mb-1">$2.48 Billion</span>
               <span className="text-zinc-500 text-xs">Strong Liquidity</span>
             </div>
          </div>
          
          <div className="mt-4 p-4 bg-black/20 rounded-lg flex items-start gap-3">
              <div className="p-1 bg-zinc-800 rounded">
                <Target size={16} className="text-zinc-400" />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>CEO Commentary:</strong> "We're entering the next era of Reddit—defined by sharper execution, global expansion, and product innovation that puts real people and conversations at the center. Our focus is on turning Reddit's authenticity into even more everyday utility."
              </p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategic Text Column */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Strategic Drivers</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                      <Smile size={18} />
                      Everyday Utility
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Reddit is evolving from a place for entertainment to a utility for everyday queries—recommendations, advice, and troubleshooting. This shift is driving higher frequency usage and unlocking search-based ad budgets.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                      <Globe size={18} />
                      International Expansion
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      With AI translation now live, Reddit is aggressively expanding into non-English markets. This opens up a massive new user base and ad inventory in regions like Europe, Latin America, and Asia.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                      <Database size={18} />
                      The Data Advantage
                    </h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      As the internet becomes crowded with AI-generated content, Reddit's corpus of human, authentic conversation becomes increasingly valuable. Data licensing to AI firms is transforming from an experiment to a durable revenue pillar.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Visual/Pillars Column */}
          <div className="space-y-6">
            <Card className="h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="p-4 rounded-full bg-zinc-800 mb-6">
                  <TrendingUp size={32} className="text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth Efficiency</h3>
                <p className="text-zinc-500 mb-8 max-w-sm">
                  Reddit is scaling revenue rapidly while maintaining a disciplined cost structure, leading to high margins.
                </p>
                
                <div className="grid grid-cols-1 w-full gap-4">
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Q4 Net Margin: 35%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-orange-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">Adj. EBITDA Margin: 45%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-orange-400" />
                  </div>
                  <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left flex items-center justify-between group">
                    <span className="font-bold text-zinc-300 group-hover:text-white">DAUq Growth: +19%</span>
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-orange-400" />
                  </div>
                </div>
            </Card>
          </div>
      </div>
    </section>

    {/* Footer for Reddit View */}
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center">
      <p className="text-zinc-600 text-sm">
        © 2026 Reddit, Inc. All rights reserved. <br/>
        Financial figures presented are GAAP unless otherwise noted.
      </p>
    </footer>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function EarningsSummariesApp() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'amd', 'google', 'palantir', 'arm', 'qualcomm', 'cummins', 'reddit', 'linde'

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-amber-500/30">
      {/* Universal Navigation */}
      <nav className="border-b border-zinc-800 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => setCurrentView('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-zinc-200 to-zinc-400 flex items-center justify-center rounded-lg shadow-lg">
                <LayoutGrid size={20} className="text-black" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Earnings Summaries</span>
            </div>
            
            {/* Show 'Back to Home' if not on home screen */}
            {currentView !== 'home' && (
              <button 
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-900"
              >
                <ChevronLeft size={16} />
                Back to Home
              </button>
            )}
          </div>
        </div>
      </nav>

      <main>
        {currentView === 'home' && <HomeView setView={setCurrentView} />}
        {currentView === 'amd' && <AMDView />}
        {currentView === 'google' && <GoogleView />}
        {currentView === 'palantir' && <PalantirView />}
        {currentView === 'arm' && <ArmView />}
        {currentView === 'qualcomm' && <QualcommView />}
        {currentView === 'cummins' && <CumminsView />}
        {currentView === 'reddit' && <RedditView />}
        {currentView === 'linde' && <LindeView />}
      </main>
    </div>
  );
}