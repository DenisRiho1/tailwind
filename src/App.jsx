import React, { useState } from 'react';
import { 
  ArrowUpRight, Cpu, Server, Gamepad2, Activity, TrendingUp, DollarSign, BarChart2, BarChart3,
  Calendar, Layers, Zap, Globe, Target, ShieldCheck, Rocket, Search, ChevronLeft, LayoutGrid,
  Cloud, Smartphone, Car, Binary, Code, Database, Anchor, Box, Monitor, Wifi, Microchip,
  Truck, BatteryCharging, Factory, MessageCircle, Users, Smile, Wind, FlaskConical, Gauge,
  PieChart, Droplet, Coffee, Utensils
} from 'lucide-react';

// ===== SHARED COMPONENTS =====

const Card = ({ children, className = "" }) => (
  <div className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl ${className}`}>{children}</div>
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
    lime: "bg-lime-500/10 text-lime-400 border-lime-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  };
  return <span className={`px-2 py-1 rounded-md text-xs font-medium border ${colors[color] || colors.green}`}>{children}</span>;
};

const StatCardV1 = ({ title, value, subtext, trend, icon: Icon }) => (
  <Card className="hover:border-zinc-700 transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-zinc-800 rounded-lg"><Icon className="w-6 h-6 text-zinc-400" /></div>
      {trend && <Badge color="green"><div className="flex items-center gap-1"><ArrowUpRight size={14} />{trend}</div></Badge>}
    </div>
    <h3 className="text-zinc-400 text-sm font-medium mb-1">{title}</h3>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <p className="text-zinc-500 text-sm">{subtext}</p>
  </Card>
);

const ProgressBar = ({ label, value, max, color = "bg-emerald-500" }) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-2">
        <span className="text-zinc-300 font-medium">{label}</span>
        <span className="text-white font-bold">${value}{typeof value === 'number' ? 'B' : ''}</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const SegmentDetail = ({ title, revenue, growth, operatingIncome, highlights, icon: Icon, color }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900 transition-all duration-300">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}><Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} /></div>
        <div>
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <span className={`text-sm ${growth && growth.startsWith('+') ? 'text-emerald-400' : 'text-zinc-400'}`}>{growth}</span>
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
      </div>
      <div className="space-y-3">
        <h4 className="text-zinc-400 text-sm uppercase tracking-wider font-semibold">Management Commentary</h4>
        <ul className="space-y-2">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
              <div className={`w-1.5 h-1.5 rounded-full ${color} mt-1.5 shrink-0`} /><span>{item}</span>
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

// ===== CODE 2: DATA-DRIVEN COMPANIES =====

const COMPANIES = {
  FERRARI: {
    id: 'ferrari', name: 'Ferrari', accentColor: 'red', accentText: 'text-red-500', accentBorder: 'border-red-600', accentBg: 'bg-red-500/10', heroIcon: Zap,
    date: 'Feb 10, 2026 Earnings Call', headline: 'Strong Performance & Record Results',
    summary: 'Ferrari delivered FY 2025 revenues of €7.1B (+7%) and EBIT of €2.11B (+12%). The company boasts a strong order book extending to the end of 2027.',
    stats: [
      { title: 'Net Revenues', value: '€7.1B', trend: '+7.0% YoY', icon: DollarSign, sub: 'FY 2025' },
      { title: 'EBIT (Adj)', value: '€2.11B', trend: '+12% YoY', icon: Activity, sub: 'Margin 29.5%' },
      { title: 'Diluted EPS', value: '€8.96', trend: '+5.9% YoY', icon: TrendingUp, sub: 'Adjusted' },
      { title: 'Shipments', value: '13,640', trend: '-0.8% YoY', icon: Truck, sub: 'Units Delivered' },
    ],
    segments: [{ name: 'Cars & Spare Parts', value: '€6.0B', percent: 84 },{ name: 'Sponsorship/Brand', value: '€0.82B', percent: 11 },{ name: 'Engines/Other', value: '€0.32B', percent: 5 }],
    narrative: [{ title: 'Product Enrichment', desc: 'Launched 6 new models in 2025 including the Ferrari Amalfi and 849 Testarossa.' },{ title: 'Order Book Strength', desc: 'Strong visibility with orders covering production through the end of 2027.' },{ title: 'Financial Discipline', desc: 'Industrial Free Cash Flow generated >€1.5B; continued share repurchase program.' }],
    segmentDetails: [
      { name: 'Regional Performance', growth: '+7% Rev', value: 'Global', financials: 'Americas +33 units; Mainland China -221 units.', highlights: ['EMEA: 6,346 units (+142)','Americas: 3,937 units (-66)','Rich product mix sustained by SF90 XX and 12Cilindri families.'] },
      { name: 'Lifestyle & Racing', growth: '+8% YoY', value: '€820M', financials: 'Better F1 ranking drove commercial revenues.', highlights: ['2025 World Champions in WEC.','Record museum visitors.','New London and NYC lifestyle openings planned for 2026.'] }
    ],
    products: [{ name: 'Ferrari Amalfi', category: 'New Model', desc: 'A key driver supporting order intake.' },{ name: '849 Testarossa', category: 'Icona', desc: 'Modern interpretation of a classic.' },{ name: 'F80', category: 'Supercar', desc: 'Advances supporting working capital.' },{ name: 'Ferrari Luce', category: 'EV', desc: 'Full reveal approaching in 2026.' },{ name: 'SF90 XX Spider', category: 'Special', desc: 'Sustaining enriched product mix.' },{ name: '499P Modificata', category: 'Racing', desc: 'Positive contribution to revenues.' }],
    outlook: { guidance: [{ metric: '2026 Net Revenues', range: '> €7.5B' },{ metric: '2026 Adj EBIT', range: '> €2.22B' },{ metric: '2026 Adj Diluted EPS', range: '~ €9.45' }], drivers: 'Significant model change-over to shape the year. Higher racing revenues from sponsorships.' }
  },
  MARTIN_MARIETTA: {
    id: 'mlm', name: 'Martin Marietta', accentColor: 'blue', accentText: 'text-blue-500', accentBorder: 'border-blue-600', accentBg: 'bg-blue-500/10', heroIcon: Box,
    date: 'Feb 11, 2026 Earnings Call', headline: 'Record Aggregates Profitability',
    summary: 'Achieved record full-year Aggregates revenues and gross profit. Pricing discipline drove a 16% increase in total Gross Profit to $1.89B.',
    stats: [
      { title: 'Total Revenue', value: '$6.15B', trend: '+9% YoY', icon: DollarSign, sub: 'Record High' },
      { title: 'Gross Profit', value: '$1.89B', trend: '+16% YoY', icon: Activity, sub: 'Margin Expansion' },
      { title: 'Aggregates GP/Ton', value: '$8.45', trend: '+12% YoY', icon: TrendingUp, sub: 'Unit Profitability' },
      { title: 'Free Cash Flow', value: '$1.79B', trend: '+22% YoY', icon: BarChart3, sub: 'Operating Cash' },
    ],
    segments: [{ name: 'Aggregates', value: '$5.0B', percent: 81 },{ name: 'Other Materials', value: '$1.08B', percent: 14 },{ name: 'Specialties', value: '$0.32B', percent: 5 }],
    narrative: [{ title: 'SOAR 2030 Strategy', desc: 'Launched new strategic plan. Focused on value-over-volume.' },{ title: 'Portfolio Optimization', desc: 'Pending exchange of assets with Quikrete.' },{ title: 'Pricing Power', desc: 'Aggregates ASP increased 7% to $23.30 per ton.' }],
    segmentDetails: [
      { name: 'Aggregates', growth: '+11% Rev', value: '$5.0B', financials: 'Gross Margin expanded 93bps to 34% in Q4.', highlights: ['Shipments increased 4% to 198.5M tons.','ASP up 7% to $23.30/ton.','Record profitability despite macro headwinds.'] },
      { name: 'Specialties', growth: 'Record', value: '$320M', financials: 'Gross Profit $137M (Full Year).', highlights: ['High-purity magnesia and dolomitic lime products.','Record Q4 and Full-Year revenues.','Strategic differentiator in the portfolio.'] }
    ],
    products: [{ name: 'Aggregates', category: 'Core', desc: 'Crushed stone, sand, and gravel for infrastructure.' },{ name: 'Magnesia Specialties', category: 'Chemicals', desc: 'Used in environmental and industrial applications.' },{ name: 'Dolomitic Lime', category: 'Industrial', desc: 'Essential for steel production.' },{ name: 'Asphalt (MN)', category: 'Materials', desc: 'Acquired FOB asphalt assets in Minnesota.' },{ name: 'Cement (Divest)', category: 'Strategic', desc: 'Midlothian plant classified as held for sale.' },{ name: 'Ready Mix (Divest)', category: 'Strategic', desc: 'Texas ready-mix assets exiting portfolio.' }],
    outlook: { guidance: [{ metric: '2026 Revenues', range: '$6.42B - $6.78B' },{ metric: '2026 Adj EBITDA', range: '$2.41B - $2.56B' },{ metric: '2026 Aggs Pricing', range: '+4% to +6%' }], drivers: 'Infrastructure investment, data centers, and energy projects expected to offset residential softness.' }
  },
  NEBIUS: {
    id: 'nebius', name: 'Nebius Group', accentColor: 'lime', accentText: 'text-lime-400', accentBorder: 'border-lime-500', accentBg: 'bg-lime-500/10', heroIcon: Cpu,
    date: 'Feb 12, 2026 Shareholder Letter', headline: 'Breakout Year: Scaling AI Infrastructure',
    summary: 'Nebius reported explosive growth with Q4 revenue up 547% to $228M. Reached $1.25B in ARR and achieved first positive Adjusted EBITDA.',
    stats: [
      { title: 'Annual Run-Rate', value: '$1.25B', trend: '> Guidance', icon: Zap, sub: 'Dec 2025' },
      { title: 'Q4 Revenue', value: '$228M', trend: '+547% YoY', icon: Activity, sub: 'Hypergrowth' },
      { title: 'Cash Position', value: '$3.7B', trend: 'Strong', icon: DollarSign, sub: 'Balance Sheet' },
      { title: 'Contracted Power', value: '>2.0 GW', trend: 'Expanding', icon: Anchor, sub: 'For 2026+' },
    ],
    segments: [{ name: 'Core AI Cloud', value: '$214M (Q4)', percent: 94 },{ name: 'TripleTen (EdTech)', value: '~6%', percent: 6 },{ name: 'Other (Avride)', value: 'Immaterial', percent: 0 }],
    narrative: [{ title: 'Capacity Expansion', desc: 'Deployed 5 new locations in 2025. Targeting >3.0 GW by YE 2026.' },{ title: 'Customer Wins', desc: 'Major multi-year deals with Microsoft and Meta.' },{ title: 'Platform Evolution', desc: 'Launched Aether 3.1 and Token Factory; acquired Tavily.' }],
    segmentDetails: [
      { name: 'AI Cloud Infrastructure', growth: '+802% YoY', value: '$214M', financials: 'Adj. EBITDA margin 24% in Q4.', highlights: ['Active power ~170 MW at YE\'25.','Sold out of capacity in Q4.','Deploying NVIDIA H200/B200 clusters.'] },
      { name: 'Avride & TripleTen', growth: 'Mixed', value: 'Other', financials: 'TripleTen grew revenue 88% YoY.', highlights: ['Avride: Launched robotaxi service in Dallas.','TripleTen: EdTech enrollment up 55%.','ClickHouse stake valued at ~$158M.'] }
    ],
    products: [{ name: 'Nebius AI Cloud', category: 'IaaS', desc: 'Full-stack platform for AI builders.' },{ name: 'Aether 3.1', category: 'Software', desc: 'OS for AI supercomputers.' },{ name: 'Token Factory', category: 'Inference', desc: 'Managed service for production-scale inference.' },{ name: 'Tavily', category: 'Search', desc: 'Recently acquired agentic search infrastructure.' },{ name: 'NVIDIA H200/GB200', category: 'Hardware', desc: 'First to market with latest GPU clusters.' },{ name: 'Avride Robots', category: 'Autonomous', desc: 'Robotaxi and delivery robots in US/Korea.' }],
    outlook: { guidance: [{ metric: '2026 ARR Target', range: '$7B - $9B' },{ metric: 'Contracted Power', range: '> 3.0 GW' },{ metric: 'Connected Power', range: '800MW - 1GW' }], drivers: 'Scaling capacity with discipline. Demand from enterprises outpacing supply.' }
  },
  VERTIV: {
    id: 'vertiv', name: 'Vertiv', accentColor: 'orange', accentText: 'text-orange-500', accentBorder: 'border-orange-500', accentBg: 'bg-orange-500/10', heroIcon: Droplet,
    date: 'Feb 11, 2026 Results', headline: 'AI-Driven Demand & Liquid Cooling',
    summary: 'Vertiv reported Q4 sales of $2.88B (+19% organic) and a massive backlog increase to $15.0B (+109% YoY).',
    stats: [
      { title: 'Backlog', value: '$15.0B', trend: '+109% YoY', icon: Layers, sub: 'Record High' },
      { title: 'Q4 Orders', value: 'Growth', trend: '+252%', icon: TrendingUp, sub: 'Organic YoY' },
      { title: 'Q4 Net Sales', value: '$2.88B', trend: '+19%', icon: DollarSign, sub: 'Organic YoY' },
      { title: 'Adj Op Margin', value: '23.2%', trend: '+170bps', icon: Activity, sub: 'Expansion' },
    ],
    segments: [{ name: 'Americas', value: '$1.89B (Q4)', percent: 65 },{ name: 'EMEA', value: '$0.50B (Q4)', percent: 18 },{ name: 'APAC', value: '$0.49B (Q4)', percent: 17 }],
    narrative: [{ title: 'AI Infrastructure', desc: 'Unprecedented order growth driven by AI data center buildouts.' },{ title: 'Liquid Cooling', desc: 'Acquisition of Purge Rite strengthens fluid management.' },{ title: 'Operational Execution', desc: 'Book-to-bill ratio of 2.9x in Q4.' }],
    segmentDetails: [
      { name: 'Americas', growth: '+46% Org', value: '$1.89B', financials: 'Adj. Op Margin 30.1% (+450bps YoY).', highlights: ['Broad-based growth across product lines.','Market accelerating; Vertiv outpacing market.','Pipeline growth remains robust.'] },
      { name: 'EMEA & APAC', growth: 'Declined', value: '$1.0B', financials: 'EMEA -14% Org; APAC -9% Org.', highlights: ['EMEA: "Coiled spring" - orders accelerated in Q4.','APAC: India/Rest of Asia strong; China muted.','Expect return to sales growth in 2H 2026 for EMEA.'] }
    ],
    products: [{ name: 'Vertiv OneCore', category: 'Integrated', desc: 'Pre-fabricated modular data center blocks.' },{ name: 'SmartRun', category: 'Power', desc: 'Fluid-ready power infrastructure for AI clusters.' },{ name: 'Liquid Cooling', category: 'Thermal', desc: 'CDUs and fluid distribution for high-density chips.' },{ name: 'Purge Rite', category: 'Services', desc: 'Recently acquired fluid management services.' },{ name: 'Switchgear', category: 'Power', desc: 'High-density power distribution units.' },{ name: 'Lifecycle Services', category: 'Services', desc: 'AI-driven predictive maintenance.' }],
    outlook: { guidance: [{ metric: '2026 Sales', range: '$13.25B - $13.75B' },{ metric: '2026 Organic Growth', range: '~28%' },{ metric: '2026 Adj EPS', range: '$5.97 - $6.07' }], drivers: 'AI factory buildouts. Liquid cooling adoption. CapEx increasing to 3-4% of sales.' }
  },
  APPLIED_MATERIALS: {
    id: 'amat', name: 'Applied Materials', accentColor: 'blue', accentText: 'text-blue-400', accentBorder: 'border-blue-500', accentBg: 'bg-blue-500/10', heroIcon: Cpu,
    date: 'Feb 12, 2026 Earnings Call', headline: 'Strong Execution in AI & ICAPS',
    summary: 'Applied Materials delivered Q1 FY26 revenue of $7.2B, at the high end of guidance.',
    stats: [
      { title: 'Net Sales', value: '$7.2B', trend: '+7% YoY', icon: DollarSign, sub: 'Q1 FY26' },
      { title: 'Non-GAAP EPS', value: '$2.41', trend: '+13% YoY', icon: TrendingUp, sub: 'Strong Profitability' },
      { title: 'Free Cash Flow', value: '$2.31B', trend: '+35% YoY', icon: BarChart3, sub: 'Cash Generation' },
      { title: 'Operating Margin', value: '29.3%', trend: '+30bps YoY', icon: Activity, sub: 'Non-GAAP' },
    ],
    segments: [{ name: 'Semiconductor Systems', value: '$5.36B', percent: 74 },{ name: 'Global Services (AGS)', value: '$1.60B', percent: 22 },{ name: 'Display & Adj. Mkts', value: '$0.21B', percent: 3 }],
    narrative: [{ title: 'AI Leadership', desc: 'Strong position in materials engineering for AI chips.' },{ title: 'Services Growth', desc: 'AGS revenue grew 9% YoY with 17,000+ connected tools.' },{ title: 'Capital Allocation', desc: 'Returned $1.29B to shareholders in Q1.' }],
    segmentDetails: [
      { name: 'Semiconductor Systems', growth: '+7% YoY', value: '$5.36B', financials: 'Operating Margin 35.5%.', highlights: ['Foundry, Logic and other: 67% of segment sales.','DRAM: 26% of segment sales.','Flash Memory: 7% of segment sales.'] },
      { name: 'Applied Global Services', growth: '+9% YoY', value: '$1.60B', financials: 'Operating Margin 28.5%.', highlights: ['Record recurring revenue.','Growing installed base of connected tools.','Long-term service agreements providing visibility.'] }
    ],
    products: [{ name: 'Logic/Foundry Tools', category: 'Semi', desc: 'Equipment for advanced nodes (Gate-All-Around).' },{ name: 'DRAM Systems', category: 'Memory', desc: 'Solutions for high-bandwidth memory (HBM).' },{ name: 'Packaging', category: 'Advanced', desc: 'Heterogeneous integration for AI accelerators.' },{ name: 'Display Equipment', category: 'Display', desc: 'OLED and advanced display manufacturing tools.' },{ name: 'Services (AGS)', category: 'Recurring', desc: 'Spares, upgrades, and maintenance contracts.' },{ name: 'ICAPS', category: 'IoT/Auto', desc: 'Tools for IoT, Communications, Auto, Power, Sensors.' }],
    outlook: { guidance: [{ metric: 'Q2 FY26 Net Sales', range: '$7.34B ± $400M' },{ metric: 'Q2 Non-GAAP EPS', range: '$2.49 ± $0.18' },{ metric: 'Q2 Op Margin', range: '~29.4%' }], drivers: 'Continued strength in AI-related logic and memory. Healthy ICAPS demand.' }
  },
  ARISTA: {
    id: 'arista', name: 'Arista Networks', accentColor: 'indigo', accentText: 'text-indigo-400', accentBorder: 'border-indigo-500', accentBg: 'bg-indigo-500/10', heroIcon: Layers,
    date: 'Feb 12, 2026 Financial Results', headline: 'AI Networking Momentum',
    summary: 'Arista reported Q4 revenue of $1.81B (+20% YoY) and FY25 revenue of $6.85B.',
    stats: [
      { title: 'Q4 Revenue', value: '$1.81B', trend: '+20% YoY', icon: DollarSign, sub: 'Strong Growth' },
      { title: 'Non-GAAP Net Income', value: '$839M', trend: 'Record', icon: Activity, sub: 'Profitability' },
      { title: 'Non-GAAP EPS', value: '$2.62', trend: '+28% YoY', icon: TrendingUp, sub: 'Diluted' },
      { title: 'Gross Margin', value: '64.2%', trend: 'Stable', icon: BarChart3, sub: 'Non-GAAP' },
    ],
    segments: [{ name: 'Product', value: '$1.55B', percent: 86 },{ name: 'Service', value: '$0.26B', percent: 14 }],
    narrative: [{ title: 'AI Networking', desc: 'Exceeded AI networking goals; shipping high-performance switches.' },{ title: '150 Million Ports', desc: 'Milestone reached in cumulative port shipments.' },{ title: 'Campus Expansion', desc: 'Strong progress broadening beyond data center.' }],
    segmentDetails: [
      { name: 'Product Revenue', growth: '+21% YoY', value: '$1.55B', financials: 'Driven by Cloud Titans and Enterprise.', highlights: ['Strong demand for 400G and 800G products.','AI spine/leaf architecture wins.','Cloud Titan spending remains robust.'] },
      { name: 'Service Revenue', growth: '+14% YoY', value: '$260M', financials: 'Recurring support and renewals.', highlights: ['High renewal rates for A-CARE services.','Growing software subscription revenue.','CloudVision adoption increasing.'] }
    ],
    products: [{ name: '7800R3 Series', category: 'Spine', desc: 'High-density 400G/800G AI backbone switches.' },{ name: 'CloudVision', category: 'Software', desc: 'Network automation and telemetry platform.' },{ name: 'EOS', category: 'OS', desc: 'Extensible Operating System for all platforms.' },{ name: '7050X4 Series', category: 'Leaf', desc: 'Enterprise and cloud leaf switches.' },{ name: 'Campus Switches', category: 'Campus', desc: 'Wired and wireless unified access solutions.' },{ name: 'AI Etherlink', category: 'AI', desc: 'Optimized Ethernet for AI workloads.' }],
    outlook: { guidance: [{ metric: 'Q1 2026 Revenue', range: '$1.82B - $1.86B' },{ metric: 'Q1 Non-GAAP GM', range: '~63% - 64%' },{ metric: 'Q1 Non-GAAP Op Margin', range: '~44%' }], drivers: 'AI cluster deployments. Enterprise campus refresh. Cloud Titan capex expansion.' }
  },
  COCA_COLA: {
    id: 'ko', name: 'Coca-Cola', accentColor: 'red', accentText: 'text-red-500', accentBorder: 'border-red-600', accentBg: 'bg-red-500/10', heroIcon: Coffee,
    date: 'Feb 10, 2026 Earnings Release', headline: 'Resilience & Momentum',
    summary: 'Coca-Cola delivered 5% organic revenue growth in Q4 and FY25. Comparable EPS grew 4% for the full year.',
    stats: [
      { title: 'Q4 Net Revenues', value: '$10.9B', trend: '+2% YoY', icon: DollarSign, sub: '+5% Organic' },
      { title: 'FY Comparable EPS', value: '$3.00', trend: '+4% YoY', icon: TrendingUp, sub: 'Adj. Earnings' },
      { title: 'Free Cash Flow', value: '$11.4B', trend: 'Strong', icon: BarChart3, sub: 'Excl. Contingent' },
      { title: 'Unit Case Volume', value: '+1%', trend: 'Growth', icon: Activity, sub: 'Q4 Global' },
    ],
    segments: [{ name: 'North America', value: '38% Rev', percent: 38 },{ name: 'Bottling Investments', value: '18% Rev', percent: 18 },{ name: 'EMEA', value: '16% Rev', percent: 16 }],
    narrative: [{ title: 'Pricing Power', desc: 'Price/mix grew 9% for the quarter, offsetting inflation.' },{ title: 'Category Strength', desc: 'Sparkling Soft Drinks grew 2%; Juice/Dairy/Plant-based grew 6%.' },{ title: 'Emerging Markets', desc: 'Strong growth in Latin America and India.' }],
    segmentDetails: [
      { name: 'North America', growth: '+5% Org Rev', value: 'Key Market', financials: 'Op Income +6% (Comp Currency Neutral).', highlights: ['Unit case volume declined 1%.','Price/mix grew 7%.','fairlife and Core Power showed strong momentum.'] },
      { name: 'International', growth: 'Mixed', value: 'Global', financials: 'LatAm +23% Org Rev; EMEA +10% Org Rev.', highlights: ['Latin America: Strong volume in Mexico and Brazil.','EMEA: Growth in Nigeria and Germany.','Asia Pacific: Growth in India and Philippines.'] }
    ],
    products: [{ name: 'Coca-Cola Zero Sugar', category: 'Sparkling', desc: 'Grew 4% in volume for the quarter.' },{ name: 'fairlife', category: 'Dairy', desc: 'Double-digit volume growth in NA.' },{ name: 'Fuze Tea', category: 'Tea', desc: 'Gained value share in Europe.' },{ name: 'Sprite', category: 'Sparkling', desc: 'Continued global momentum.' },{ name: 'Powerade', category: 'Sports', desc: 'Innovation driving renewed interest.' },{ name: 'Costa Coffee', category: 'Coffee', desc: 'Expanding ready-to-drink footprint.' }],
    outlook: { guidance: [{ metric: '2026 Org Rev Growth', range: '+6% to +7%' },{ metric: '2026 Comp EPS Growth', range: '+4% to +5%' },{ metric: 'Free Cash Flow', range: '$9.0B - $9.5B' }], drivers: 'Continued marketing investment. Revenue growth management execution.' }
  },
  MCDONALDS: {
    id: 'mcd', name: "McDonald's", accentColor: 'orange', accentText: 'text-orange-400', accentBorder: 'border-orange-500', accentBg: 'bg-orange-500/10', heroIcon: Utensils,
    date: 'Feb 11, 2026 Earnings Release', headline: 'Value Leadership Winning',
    summary: 'Global comparable sales increased 5.7% in Q4. Systemwide sales grew 7% to over $139B for the year.',
    stats: [
      { title: 'Global Comp Sales', value: '+5.7%', trend: 'Q4', icon: Activity, sub: 'Broad Growth' },
      { title: 'Systemwide Sales', value: '$139B', trend: '+7% YoY', icon: DollarSign, sub: 'FY 2025' },
      { title: 'Loyalty Sales', value: '$37B', trend: '+20% YoY', icon: Smartphone, sub: 'Systemwide FY' },
      { title: 'Active Users', value: '210M', trend: '+19% YoY', icon: Globe, sub: 'Loyalty Members' },
    ],
    segments: [{ name: 'U.S.', value: '$45B+ Sys', percent: 40 },{ name: 'IOM', value: '$60B+ Sys', percent: 45 },{ name: 'IDL', value: '$30B+ Sys', percent: 15 }],
    narrative: [{ title: 'Value Strategy', desc: 'Improved affordability scores and traffic.' },{ title: 'Digital Growth', desc: 'Loyalty sales grew 20% to $37B; 210M active users.' },{ title: 'Chicken Leadership', desc: 'McCrispy and McNuggets driving food sales.' }],
    segmentDetails: [
      { name: 'U.S. Market', growth: '+4.3% Comps', value: 'Q4', financials: 'Guest counts positive.', highlights: ['Effective value promotions.','Strong digital engagement.','Operational execution improvements.'] },
      { name: 'International Operated', growth: '+4.4% Comps', value: 'Q4', financials: 'Led by UK, Germany, and Canada.', highlights: ['Strong marketing campaigns.','Resilient despite macro headwinds in France.','Digital mix increasing.'] }
    ],
    products: [{ name: 'McCrispy', category: 'Chicken', desc: 'Billion-dollar brand continuing to grow.' },{ name: 'Big Mac', category: 'Burger', desc: '"Best Burger" initiative improving quality.' },{ name: 'Loyalty App', category: 'Digital', desc: 'Driving frequency and higher average check.' },{ name: 'McNuggets', category: 'Chicken', desc: 'Core menu staple performing well.' },{ name: 'Value Menu', category: 'Value', desc: 'Entry-level price points driving traffic.' },{ name: "CosMc's", category: 'New', desc: 'Pilot concept showing promising early results.' }],
    outlook: { guidance: [{ metric: '2026 Net Restaurant Adds', range: '> 1,600' },{ metric: '2026 Op Margin', range: 'Mid-40s %' },{ metric: '2026 CapEx', range: '$2.5B - $2.7B' }], drivers: 'Accelerating new restaurant openings. Continued focus on core menu and digital.' }
  }
};

// ===== DATA-DRIVEN VIEW COMPONENTS =====

const DataDrivenHero = ({ company }) => (
  <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-8 mb-8">
    <company.heroIcon className="absolute -top-6 -right-6 w-64 h-64 text-zinc-800 opacity-20" />
    <div className="relative z-10">
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${company.accentBg} ${company.accentText} border ${company.accentBorder}`}>{company.date}</div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">{company.name}</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">{company.headline}</h2>
      <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">{company.summary}</p>
    </div>
  </div>
);

const DataDrivenStatCard = ({ stat, accentColor }) => {
  const Icon = stat.icon;
  const colorMap = { red: 'text-red-500', blue: 'text-blue-500', lime: 'text-lime-400', orange: 'text-orange-500', indigo: 'text-indigo-400' };
  const badgeMap = { red: 'bg-red-500/10 text-red-400', blue: 'bg-blue-500/10 text-blue-400', lime: 'bg-lime-500/10 text-lime-400', orange: 'bg-orange-500/10 text-orange-400', indigo: 'bg-indigo-500/10 text-indigo-400' };
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between h-full hover:border-zinc-700 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg bg-zinc-800 ${colorMap[accentColor] || 'text-zinc-400'}`}><Icon size={24} /></div>
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${badgeMap[accentColor] || 'bg-zinc-800 text-zinc-400'}`}>{stat.trend}</span>
      </div>
      <div>
        <div className="text-zinc-400 text-sm font-medium mb-1">{stat.title}</div>
        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-zinc-500 text-xs">{stat.sub}</div>
      </div>
    </div>
  );
};

const DataDrivenFinancials = ({ company }) => {
  const barColor = { red: 'bg-red-600', blue: 'bg-blue-600', lime: 'bg-lime-500', orange: 'bg-orange-500', indigo: 'bg-indigo-500' }[company.accentColor] || 'bg-zinc-500';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6"><PieChart className="text-zinc-400" size={20} /><h3 className="text-lg font-semibold text-white">Revenue Mix by Segment</h3></div>
        <div className="space-y-6">
          {company.segments.map((seg, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-2"><span className="text-zinc-300 font-medium">{seg.name}</span><span className="text-zinc-400">{seg.value}</span></div>
              <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden"><div className={`h-full ${barColor} rounded-full`} style={{ width: `${seg.percent}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6"><Globe className="text-zinc-400" size={20} /><h3 className="text-lg font-semibold text-white">Performance Narrative</h3></div>
        <div className="space-y-6">
          {company.narrative.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${company.accentBorder} ${company.accentText} bg-zinc-950`}>{idx + 1}</div>
              <div><h4 className="text-zinc-200 font-medium text-sm mb-1">{item.title}</h4><p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DataDrivenSegments = ({ company }) => (
  <div className="mb-8 space-y-4">
    {company.segmentDetails.map((seg, idx) => (
      <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
          <div><h3 className="text-lg font-bold text-white">{seg.name}</h3><span className={`text-sm font-medium ${company.accentText}`}>{seg.growth}</span></div>
          <div className="text-xl font-mono text-zinc-300">{seg.value}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div><div className="text-xs uppercase tracking-wider text-zinc-500 mb-2 font-bold">Key Financials</div><p className="text-zinc-300 text-sm">{seg.financials}</p></div>
          <div><div className="text-xs uppercase tracking-wider text-zinc-500 mb-2 font-bold">Highlights</div>
            <ul className="space-y-2">{seg.highlights.map((p, i) => <li key={i} className="text-zinc-400 text-sm flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-500" />{p}</li>)}</ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const DataDrivenProducts = ({ company }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-white mb-4">Products & Ecosystem</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {company.products.map((prod, idx) => (
        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800/50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-zinc-200">{prod.name}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${company.accentBorder} ${company.accentText}`}>{prod.category}</span>
          </div>
          <p className="text-xs text-zinc-400 leading-snug">{prod.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const DataDrivenOutlook = ({ company }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1"><h3 className="text-xl font-bold text-white mb-2">Future Outlook</h3><p className="text-zinc-400 text-sm leading-relaxed">{company.outlook.drivers}</p></div>
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {company.outlook.guidance.map((item, idx) => (
            <div key={idx} className="bg-zinc-950 rounded-lg p-4 border border-zinc-800">
              <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">{item.metric}</div>
              <div className={`text-lg font-bold ${company.accentText}`}>{item.range}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DataDrivenCompanyView = ({ companyKey }) => {
  const company = COMPANIES[companyKey];
  if (!company) return <div className="text-white p-8">Company not found.</div>;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <DataDrivenHero company={company} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {company.stats.map((stat, idx) => <DataDrivenStatCard key={idx} stat={stat} accentColor={company.accentColor} />)}
      </div>
      <DataDrivenFinancials company={company} />
      <DataDrivenSegments company={company} />
      <DataDrivenProducts company={company} />
      <DataDrivenOutlook company={company} />
      <footer className="border-t border-zinc-900 pt-8 pb-4 mt-12 text-center">
        <p className="text-zinc-600 text-sm">© 2026 {company.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

// ===== CODE 1: HAND-CRAFTED VIEW COMPONENTS =====

const AMDView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Cpu size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4"><Calendar size={14} /><span>Feb 3, 2026 Earnings Call</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Record Year-End <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Performance</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">AMD delivered record annual revenue of $34.6 Billion in 2025, with Data Center revenue now surpassing Client & Gaming combined.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Q4 Revenue" value="$10.3B" subtext="Record Quarterly High" trend="34% YoY" icon={DollarSign} />
        <StatCardV1 title="FY 2025 Revenue" value="$34.6B" subtext="Record Annual High" trend="34% YoY" icon={BarChart2} />
        <StatCardV1 title="Q4 Non-GAAP EPS" value="$1.53" subtext="Earnings Per Share" trend="40% YoY" icon={TrendingUp} />
        <StatCardV1 title="Free Cash Flow" value="$2.1B" subtext="Strong Liquidity" trend="Record" icon={Activity} />
      </div>
    </section>
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <div className="flex items-center justify-between mb-8"><div><h2 className="text-2xl font-bold text-white">Revenue Mix Transformation</h2><p className="text-zinc-500 text-sm">Q4 2025 Segment Contribution</p></div><Badge color="blue">Q4 2025</Badge></div>
          <div className="space-y-8">
            <ProgressBar label="Data Center" value={5.4} max={10.3} color="bg-blue-500" />
            <ProgressBar label="Client & Gaming" value={3.9} max={10.3} color="bg-amber-500" />
            <ProgressBar label="Embedded" value={0.95} max={10.3} color="bg-purple-500" />
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
            <div><span className="block text-zinc-500 text-xs uppercase tracking-wider">Gross Margin (Non-GAAP)</span><span className="text-2xl font-bold text-white">57%</span><span className="text-emerald-400 text-xs ml-2">+3 pts YoY</span></div>
            <div><span className="block text-zinc-500 text-xs uppercase tracking-wider">Operating Income (Non-GAAP)</span><span className="text-2xl font-bold text-white">$2.85B</span><span className="text-emerald-400 text-xs ml-2">+41% YoY</span></div>
          </div>
        </Card>
      </div>
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700 h-full flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white mb-6">Performance Narrative</h3>
        <div className="space-y-6 relative">
          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-zinc-800"></div>
          {[{t:'Data Center Dominance',d:'Revenue grew 39% YoY to $5.4B, fueled by Instinct GPUs and EPYC CPUs.'},{t:'Client Resurgence',d:'Combined revenue up 37%. Strong Ryzen processor sales.'},{t:'Margin Expansion',d:'Gross margins expanded to 57% driven by richer product mix.'}].map((item,idx)=>(
            <div key={idx} className="relative pl-8"><div className="absolute left-0 top-0 w-6 h-6 bg-zinc-800 rounded-full border-4 border-black text-amber-500 flex items-center justify-center text-[10px] font-bold">{idx+1}</div><h4 className="text-white font-medium">{item.t}</h4><p className="text-zinc-400 text-sm mt-1">{item.d}</p></div>
          ))}
        </div>
      </Card>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-amber-500" /><h2 className="text-3xl font-bold text-white">Segment Performance</h2></div>
      <SegmentDetail title="Data Center" revenue="5.4" growth="+39%" operatingIncome="1.8B" icon={Server} color="bg-blue-500" highlights={['Unveiled AMD Instinct MI440X GPU for Enterprise AI','Previewed AMD Helios rack-scale platform','Strong adoption of 5th Gen AMD EPYC CPUs by AWS','HPE to deliver \'Herder\' supercomputer with MI430X','Strategic partnership with TCS']} />
      <SegmentDetail title="Client & Gaming" revenue="3.9" growth="+37%" operatingIncome="725M" icon={Gamepad2} color="bg-amber-500" highlights={['Ryzen 7 9850X3D: Fastest gaming processor','Introduced Ryzen AI Halo Platform (200B params)','FSR \'Redstone\' AI-upscaling tech launched','Record Ryzen processor sales drove $3.1B Client revenue','Ryzen AI 400 & PRO 400 Series expanding share']} />
      <SegmentDetail title="Embedded" revenue="0.95" growth="+3%" operatingIncome="357M" icon={Cpu} color="bg-purple-500" highlights={['Launched Ryzen AI Embedded P100 and X100 Series','New Space-grade Versal RF Series & AI Edge Gen 2','EPYC Embedded 2005 Series for networking security','Demand strengthening in industrial and automotive sectors']} />
    </section>
    <section>
      <div className="flex items-center gap-3 mb-8"><Zap className="text-amber-500" /><h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard name="AMD Helios" category="Infrastructure" description="Rack-scale platform for Yotta-scale AI supercomputing clusters." />
        <ProductCard name="Instinct MI440X" category="AI Accelerator" description="Next-gen GPU for enterprise AI workloads, unveiled at CES." />
        <ProductCard name="Ryzen 7 9850X3D" category="Consumer CPU" description="World's fastest gaming processor, Zen 5 + 2nd Gen 3D V-Cache." />
        <ProductCard name="Ryzen AI Halo" category="Developer Platform" description="Developer kit for running AI models up to 200B parameters locally." />
        <ProductCard name="FSR 'Redstone'" category="Software" description="AI-powered upscaling for Radeon graphics." />
        <ProductCard name="Versal AI Edge Gen 2" category="Adaptive SoC" description="Space-grade SoCs for extreme environments and edge AI." />
      </div>
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-emerald-400" /><h2 className="text-3xl font-bold text-white">Future Outlook & Strategy</h2></div>
      <Card className="border-emerald-500/20 bg-emerald-900/5 mb-8">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">Q1 2026 Financial Outlook (Non-GAAP)</h3><span className="text-emerald-400 text-sm font-medium">Period Ending March 2026</span></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <OutlookItem label="Projected Revenue" value="~$9.8B" detail="+/- $300 Million" />
          <OutlookItem label="Gross Margin" value="~55%" detail="Non-GAAP" />
          <OutlookItem label="Operating Expenses" value="~$3.05B" detail="Non-GAAP" />
          <OutlookItem label="Tax Rate" value="~13%" detail="of Pre-tax Income" />
          <OutlookItem label="Diluted Shares" value="1.65B" detail="Share Count" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Advanced Micro Devices, Inc. All rights reserved.</p></footer>
  </div>
);

const GoogleView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Cloud size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4"><Calendar size={14} /><span>Feb 4, 2026 Earnings Call</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Cloud Acceleration & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700">AI Momentum</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Alphabet delivered Q4 revenues growing 18% to $113.8B. Annual revenue exceeded $400B for the first time.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Q4 Revenue" value="$113.8B" subtext="Strong broad-based growth" trend="18% YoY" icon={DollarSign} />
        <StatCardV1 title="FY 2025 Revenue" value="$403B" subtext="Historic Milestone" trend="15% YoY" icon={BarChart2} />
        <StatCardV1 title="Google Cloud Growth" value="+48%" subtext="Accelerating Momentum" trend="Record" icon={TrendingUp} />
        <StatCardV1 title="Q4 Diluted EPS" value="$2.82" subtext="Strong Profitability" trend="31% YoY" icon={Activity} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-blue-500" /><h2 className="text-3xl font-bold text-white">Segment Performance</h2></div>
      <SegmentDetail title="Google Cloud" revenue="17.7" growth="+48%" operatingIncome="5.3B" icon={Cloud} color="bg-red-500" highlights={['Annual run rate now over $70 Billion','Backlog grew 55% QoQ to $240 Billion','Strong demand for AI infrastructure (TPU/GPU)','Collaborating with Apple to develop next-gen models']} />
      <SegmentDetail title="Google Services" revenue="95.5" growth="+14%" operatingIncome="40.1B" icon={Search} color="bg-blue-500" highlights={['Search & Other revenue up 17% to $63.1B','YouTube Ads up 9% to $11.4B','Subscriptions/Devices revenue up 17%','Pixel 10 series launching soon']} />
      <SegmentDetail title="Other Bets" revenue="0.37" growth="N/A" operatingIncome="(3.6B)" icon={Car} color="bg-purple-500" highlights={['Waymo surpassed 20 million autonomous trips','Providing >400,000 rides every week','Operating loss includes $2.1B valuation charge']} />
    </section>
    <section>
      <div className="flex items-center gap-3 mb-8"><Zap className="text-blue-500" /><h2 className="text-3xl font-bold text-white">Product & Technology Ecosystem</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard name="Gemini 3" category="AI Model" description="Major model update powering Search 'AI Overviews'." />
        <ProductCard name="Project Genie" category="World Model" description="General-purpose world model for interactive worlds." />
        <ProductCard name="Waymo One" category="Autonomous" description="Now serving 400k weekly rides." />
        <ProductCard name="TPU Ironwood" category="Infrastructure" description="7th gen TPU for AI training/inference." />
        <ProductCard name="Circle to Search" category="Search" description="Available on 580M+ Android devices." />
        <ProductCard name="Universal Commerce" category="Protocol" description="Open standard for agentic commerce." />
      </div>
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-blue-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-blue-500/20 bg-blue-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">2026 Financial Outlook</h3><span className="text-blue-400 text-sm font-medium">FY 2026</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="2026 CapEx Guidance" value="$175B - $185B" detail="AI Compute & Infrastructure" />
          <OutlookItem label="Depreciation" value="Accelerating" detail="Technical infra investment" />
          <OutlookItem label="Operating Focus" value="Efficiency" detail="AI agents lowering costs" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Alphabet Inc. All rights reserved.</p></footer>
  </div>
);

const PalantirView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Target size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"><Calendar size={14} /><span>Q4 2025 Earnings Report</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">AIP Revolution & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-500 to-purple-700">Commercial Surge</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Palantir delivered US Commercial revenue growing 137% YoY. Rule of 40 score of 127%.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Q4 Revenue" value="$1.41B" subtext="Total Revenue" trend="70% YoY" icon={DollarSign} />
        <StatCardV1 title="US Commercial Growth" value="+137%" subtext="AIP Momentum" trend="Record" icon={TrendingUp} />
        <StatCardV1 title="Rule of 40" value="127%" subtext="Growth + Margin" trend="Top Tier" icon={Activity} />
        <StatCardV1 title="Adj. Free Cash Flow" value="$791M" subtext="56% Margin" trend="Record" icon={BarChart2} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-purple-500" /><h2 className="text-3xl font-bold text-white">Segment Performance</h2></div>
      <SegmentDetail title="US Commercial" revenue="0.51" growth="+137%" operatingIncome="N/A" icon={Rocket} color="bg-purple-500" highlights={['RDV grew 145% YoY to $4.38B','180 deals >$1M, 61 deals >$10M','Customer count grew 49% to 571','Accenture partnership to scale AIP']} />
      <SegmentDetail title="US Government" revenue="0.57" growth="+66%" operatingIncome="N/A" icon={ShieldCheck} color="bg-zinc-500" highlights={['Launched ShipOS with US Navy','Revenue growth accelerated to 66% YoY','Strong demand for AI-enabled defense','Project Maven driving adoption']} />
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-purple-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-purple-500/20 bg-purple-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">2026 Financial Outlook</h3><span className="text-purple-400 text-sm font-medium">FY 2026</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="FY 2026 Revenue" value="$7.18B - $7.20B" detail="Total Revenue Guidance" />
          <OutlookItem label="US Commercial" value="> $3.14B" detail="At least 115% growth" />
          <OutlookItem label="Adj. Free Cash Flow" value="~$4 Billion" detail="$3.925B - $4.125B" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Palantir Technologies Inc. All rights reserved.</p></footer>
  </div>
);

const QualcommView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Zap size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-4"><Calendar size={14} /><span>Q1 FY26 Earnings Report</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">AI-Native Era & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-500 to-rose-700">Diversified Growth</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Qualcomm delivered strong Q1 FY26 results driven by Snapdragon 8 Elite and record Automotive performance.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Non-GAAP Revenue" value="$10.7B" subtext="Above Guidance" trend="Strong" icon={DollarSign} />
        <StatCardV1 title="Non-GAAP EPS" value="$3.25" subtext="Strong Execution" trend="Beat" icon={Activity} />
        <StatCardV1 title="Automotive Revenue" value="$850M" subtext="Record" trend="50% YoY" icon={Car} />
        <StatCardV1 title="Operating Cash Flow" value="$3.1B" subtext="Robust Liquidity" trend="Solid" icon={BarChart2} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-rose-500" /><h2 className="text-3xl font-bold text-white">Segment Performance</h2></div>
      <SegmentDetail title="QCT (Chips)" revenue="9.3" growth="Solid" operatingIncome="34% EBT" icon={Microchip} color="bg-rose-500" highlights={['Handset revenue $6.6B from Android flagships','Automotive grew 50% YoY to $850M','IoT revenue $1.8B from industrial edge','Normalized inventory levels']} />
      <SegmentDetail title="QTL (Licensing)" revenue="1.4" growth="Stable" operatingIncome="73% EBT" icon={Wifi} color="bg-zinc-500" highlights={['Revenue of $1.4B aligns with expectations','Extended Apple license agreement','Strong 5G licensing program','73% operating margin']} />
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-rose-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-rose-500/20 bg-rose-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">Q2 FY26 Guidance</h3><span className="text-rose-400 text-sm font-medium">FY 2026</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="Q2 Revenue" value="$10.3B - $11.1B" detail="Guidance Range" />
          <OutlookItem label="Non-GAAP EPS" value="$3.10 - $3.30" detail="Guidance Range" />
          <OutlookItem label="QCT Revenue" value="$8.9B - $9.7B" detail="Projected Segment Rev" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Qualcomm Inc. All rights reserved.</p></footer>
  </div>
);

const CumminsView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Truck size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4"><Calendar size={14} /><span>Q4 2025 Earnings Report</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Powering Growth & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-800">Energy Transition</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Cummins delivered Q4 revenues of $8.5B. Full-year 2025 revenue hit a record $33.7B.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Q4 Revenue" value="$8.5B" subtext="Strong Quarter" trend="Flat YoY" icon={DollarSign} />
        <StatCardV1 title="FY 2025 Revenue" value="$33.7B" subtext="Record Full Year" trend="Record" icon={BarChart2} />
        <StatCardV1 title="Q4 EBITDA" value="$1.15B" subtext="13.5% of Sales" trend="Solid" icon={Activity} />
        <StatCardV1 title="Q4 Diluted EPS" value="$4.27" subtext="GAAP Earnings" trend="Solid" icon={TrendingUp} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-red-500" /><h2 className="text-3xl font-bold text-white">Segment Performance</h2></div>
      <SegmentDetail title="Components" revenue="2.9" growth="-4%" operatingIncome="$392M (13.7%)" icon={Box} color="bg-orange-500" highlights={['8% lower heavy-duty truck build rates','China sales dropped 12%','EBITDA margin solid at 13.7%']} />
      <SegmentDetail title="Engine" revenue="2.2" growth="-2%" operatingIncome="$327M (14.9%)" icon={Truck} color="bg-red-500" highlights={['On-highway revenues decreased 2%','Off-highway declined 2% (construction weakness)','EBITDA margin expanded to 14.9%']} />
      <SegmentDetail title="Power Systems" revenue="1.6" growth="+13%" operatingIncome="$287M (17.5%)" icon={Zap} color="bg-zinc-500" highlights={['Power generation sales surged 22% (data center demand)','Industrial revenue decreased 5%','EBITDA margin expanded to 17.5%']} />
      <SegmentDetail title="Accelera" revenue="99" growth="+15%" operatingIncome="($323M)" icon={BatteryCharging} color="bg-green-500" highlights={['Revenue growth from electrolyzer installations','$218M charges related to electrolyzer review','Focusing on zero-emissions technologies']} />
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-emerald-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-emerald-500/20 bg-emerald-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">2026 Financial Outlook</h3><span className="text-emerald-400 text-sm font-medium">FY 2026</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="2026 Revenue" value="$33B - $35B" detail="Revenue guidance" />
          <OutlookItem label="EBITDA Margin" value="~16%" detail="Continued expansion" />
          <OutlookItem label="Power Systems" value="Strong" detail="Data center driving growth" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Cummins Inc. All rights reserved.</p></footer>
  </div>
);

const RedditView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><MessageCircle size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4"><Calendar size={14} /><span>Q4 2025 Earnings Report</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Community & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800">Everyday Utility</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Reddit Q4 revenue grew 70% to $726M. First full year of GAAP profitability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Q4 Revenue" value="$726M" subtext="Record Growth" trend="70% YoY" icon={DollarSign} />
        <StatCardV1 title="Adj. EBITDA" value="$327M" subtext="45% Margin" trend="Record" icon={Activity} />
        <StatCardV1 title="Daily Active Uniques" value="121.4M" subtext="Global Community" trend="19% YoY" icon={Users} />
        <StatCardV1 title="Q4 Net Income" value="$252M" subtext="35% Net Margin" trend="GAAP" icon={TrendingUp} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-orange-500" /><h2 className="text-3xl font-bold text-white">Growth Engines</h2></div>
      <SegmentDetail title="Advertising" revenue="0.65" growth="+High" operatingIncome="Core Driver" icon={MessageCircle} color="bg-orange-500" highlights={['Ad revenue grew 70% YoY','\'Conversation Ads\' and new formats','Full funnel attribution improving ROI','International expansion unlocking inventory']} />
      <SegmentDetail title="Data & Other" revenue="0.07" growth="+Rapid" operatingIncome="High Margin" icon={Database} color="bg-purple-500" highlights={['Data licensing becoming material contributor','Partnerships with AI labs for model training','Human conversation as premium asset','Developer platform showing promise']} />
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-orange-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-orange-500/20 bg-orange-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">Strategic Focus</h3><span className="text-orange-400 text-sm font-medium">Next Era of Reddit</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="Share Repurchase" value="$1 Billion" detail="Class A Common Stock" />
          <OutlookItem label="FY 2025 Revenue" value="$2.2 Billion" detail="+69% YoY" />
          <OutlookItem label="Cash Balance" value="$2.48 Billion" detail="Strong Liquidity" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Reddit, Inc. All rights reserved.</p></footer>
  </div>
);

const LindeView = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
    <section className="relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none"><Factory size={400} strokeWidth={0.5} /></div>
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"><Calendar size={14} /><span>Q4 2025 Earnings Report</span></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Productivity & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800">Pricing Resilience</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">Linde Q4 highlighted by continued pricing strength and a 25-year trend of positive pricing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCardV1 title="Pricing Strategy" value="Positive" subtext="25-Year Trend" trend="Consistent" icon={TrendingUp} />
        <StatCardV1 title="Adjusted Capital" value="$29.6B" subtext="Q4 2025" trend="Capital Base" icon={Activity} />
        <StatCardV1 title="Ending Capital" value="$55.7B" subtext="Strong Balance Sheet" trend="Solid" icon={DollarSign} />
        <StatCardV1 title="Market Headwinds" value="China/Helium" subtext="Specific Weakness" trend="Managed" icon={Wind} />
      </div>
    </section>
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-6"><Layers className="text-cyan-500" /><h2 className="text-3xl font-bold text-white">Operational Focus</h2></div>
      <SegmentDetail title="Pricing Strategy" revenue="Positive" growth="Consistent" operatingIncome="Key Driver" icon={TrendingUp} color="bg-cyan-500" highlights={['Pricing aligned with globally weighted CPI','Ability to offset cost inflation','25 consecutive years of positive pricing','Management confident in continued pricing power']} />
      <SegmentDetail title="Regional Performance" revenue="Mixed" growth="Variable" operatingIncome="Resilient" icon={Globe} color="bg-blue-500" highlights={['Americas and APAC performing well','China \'deflation weakness\'','Helium headwind in the quarter','Long-term gas intensity increasing']} />
    </section>
    <section className="pb-20">
      <div className="flex items-center gap-3 mb-8"><TrendingUp className="text-cyan-400" /><h2 className="text-3xl font-bold text-white">Future Outlook</h2></div>
      <Card className="border-cyan-500/20 bg-cyan-900/5">
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4"><h3 className="text-xl font-bold text-white">Strategic Outlook</h3><span className="text-cyan-400 text-sm font-medium">Forward Commentary</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OutlookItem label="Pricing Outlook" value="At/Around CPI" detail="Globally Weighted" />
          <OutlookItem label="Capital Strategy" value="Discipline" detail="Adjusted Capital Focus" />
          <OutlookItem label="China Market" value="Monitoring" detail="Deflationary pressure" />
        </div>
      </Card>
    </section>
    <footer className="border-t border-zinc-900 pt-8 pb-4 text-center"><p className="text-zinc-600 text-sm">© 2026 Linde plc. All rights reserved.</p></footer>
  </div>
);

const ArmView = () => <DataDrivenCompanyView companyKey="ARISTA" />;

// ===== HOME VIEW =====

const HomeView = ({ setView }) => {
  const code1Companies = [
    { id: 'amd', name: 'AMD', badge: 'Q4 2025', date: 'Feb 3, 2026', desc: 'Record annual revenue driven by Data Center AI momentum.', icon: Cpu },
    { id: 'google', name: 'Alphabet', badge: 'Q4 2025', date: 'Feb 4, 2026', desc: 'Annual revenue exceeds $400B. Cloud acceleration.', icon: Search },
    { id: 'palantir', name: 'Palantir', badge: 'Q4 2025', date: 'Feb 2026', desc: 'Explosive US Commercial growth (+137%) and AIP momentum.', icon: Binary },
    { id: 'arm', name: 'ARM', badge: 'Q3 FYE26', date: 'Feb 4, 2026', desc: 'Record revenue ($951M) driven by v9 adoption.', icon: Cpu },
    { id: 'qualcomm', name: 'Qualcomm', badge: 'Q1 FY26', date: 'Feb 4, 2026', desc: 'Strong automotive growth and AI-native handset leadership.', icon: Smartphone },
    { id: 'cummins', name: 'Cummins', badge: 'Q4 2025', date: 'Feb 5, 2026', desc: 'Record revenues. Power Systems leading with 22% growth.', icon: Truck },
    { id: 'reddit', name: 'Reddit', badge: 'Q4 2025', date: 'Feb 5, 2026', desc: 'Revenue up 70% YoY. First full year of GAAP profitability.', icon: MessageCircle },
    { id: 'linde', name: 'Linde', badge: 'Q4 2025', date: 'Feb 5, 2026', desc: 'Positive pricing momentum for 25th year.', icon: Factory },
  ];

  const code2Companies = Object.values(COMPANIES).map(c => ({
    id: `dd_${c.id}`, name: c.name,
    badge: c.date.split(' ').slice(0, 2).join(' '),
    desc: c.summary.substring(0, 90) + '...',
    icon: c.heroIcon, accentColor: c.accentColor,
  }));

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Financial Reports Hub</h1>
        <p className="text-xl text-zinc-400">Select a company to view their latest quarterly earnings summary.</p>
      </div>

      <div className="mb-6"><h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 px-1">Week 1 — Feb 3–5</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {code1Companies.map((c) => {
          const Icon = c.icon;
          return (
            <button key={c.id} onClick={() => setView(c.id)} className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-zinc-300 transition-colors"><ArrowUpRight size={20} /></div>
              <div className="w-14 h-14 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-5"><Icon className="w-7 h-7 text-white" /></div>
              <h2 className="text-xl font-bold text-white mb-2">{c.name}</h2>
              <div className="flex items-center gap-2 mb-3"><Badge color="green">{c.badge}</Badge><span className="text-zinc-500 text-xs">{c.date}</span></div>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="mb-6"><h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 px-1">Week 2 — Feb 10–12</h2></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {code2Companies.map((c) => {
          const Icon = c.icon;
          const bc = { red: 'red', blue: 'blue', lime: 'green', orange: 'orange', indigo: 'purple' }[c.accentColor] || 'green';
          return (
            <button key={c.id} onClick={() => setView(c.id)} className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-zinc-300 transition-colors"><ArrowUpRight size={20} /></div>
              <div className="w-14 h-14 bg-black rounded-xl border border-zinc-700 flex items-center justify-center mb-5"><Icon className="w-7 h-7 text-white" /></div>
              <h2 className="text-xl font-bold text-white mb-2">{c.name}</h2>
              <div className="flex items-center gap-2 mb-3"><Badge color={bc}>{c.badge}</Badge></div>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ===== MAIN APP =====

export default function EarningsSummariesApp() {
  const [currentView, setCurrentView] = useState('home');

  const ddCompanyMap = {};
  Object.keys(COMPANIES).forEach(key => { ddCompanyMap[`dd_${COMPANIES[key].id}`] = key; });
  const isDataDriven = currentView.startsWith('dd_');
  const companyKey = isDataDriven ? ddCompanyMap[currentView] : null;

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-amber-500/30">
      <nav className="border-b border-zinc-800 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="w-8 h-8 bg-gradient-to-br from-zinc-200 to-zinc-400 flex items-center justify-center rounded-lg shadow-lg">
                <LayoutGrid size={20} className="text-black" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Earnings Summaries</span>
            </div>
            {currentView !== 'home' && (
              <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-900">
                <ChevronLeft size={16} />Back to Home
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
        {isDataDriven && companyKey && <DataDrivenCompanyView companyKey={companyKey} />}
      </main>
    </div>
  );
}
