<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const images = {
  hero: '/images/features/hero.jpg',
  reach: '/images/features/reach.jpg',
  marketing: '/images/features/marketing.jpg',
  finance: '/images/features/finance.jpg',
  risk: '/images/features/risk.jpg',
}

const copy = {
  zh: {
    tag: '系统架构概览',
    title: '全流程AI自动放款系统',
    desc: 'Aladdin AI 集成深层机器学习与高频金融协议，提供超高效的全自动贷款生态系统。体验 99.9% 的正常运行时间和微秒级的风险评估。',
    latency: '平均延迟',
    data: '每日数据处理量',
    fraud: '欺诈检测率',
    f1Title: '01. 全渠道智能触达',
    f1Desc: '通过我们的 AI 驱动型全渠道集成打破沟通孤岛。在 Telegram、WhatsApp 和自有门户部署智能机器人，维持 100% 数据保真度的状态化对话。',
    f1Line1: '实时自然语言处理，自动分流咨询。',
    f1Line2: '端到端加密的金融数据传输。',
    f1Api: 'API 响应: HTTP 202 | 延迟: 42ms | 负载: 4.5w/分',
    f2Title: '02. 全生命周期营销',
    f2Desc: '从获客到留存，我们的自主营销引擎利用预测性行为建模优化每一个触点。',
    targeting: '精准定向',
    targetingDesc: '基于实时财务行为和风险偏好进行用户细分。',
    optimization: '自动优化',
    optimizationDesc: '全天候运行针对创意资产和贷款方案的 A/B 测试。',
    churn: '流失预测',
    churnDesc: '在客户离开生态系统前，以 94% 的准确率识别流失风险。',
    f3Title: '03. 财务自动化方案',
    f3Desc: '消除手动会计。Aladdin AI 负责处理自动结算、账簿记录及多币种对账，全程无需人工干预。',
    ledger: '分类账实时同步',
    ledgerDesc: '在 ERP 与区块链协议间实现毫秒级同步。',
    settlement: '动态结算',
    settlementDesc: '针对已批准的贷款发放进行即时放款处理。',
    live: '正在实时处理',
    f4Title: '04. 智能风险核实',
    f4Desc: '专有的 Sovereign Scan 引擎利用集成机器学习模型，在亚毫秒级别检测异常和欺诈行为。',
    integrity: '系统安全完整性',
    kyc: '自动身份验证与反洗钱检查。',
    behavioralTitle: '行为扫描',
    behavioral: '用于机器人检测的生物特征与导航模式分析。',
    auditTitle: '审计追踪',
    audit: '所有 AI 决策和参数调整的不可篡改日志。',
    holdTitle: '即时挂起',
    hold: '检测到高风险时自动挂起交易。',
    ctaTitle: '准备好拥抱技术主权了吗？',
    ctaDesc: '加入全球领先金融机构行列，利用 Aladdin AI 实现自主贷款与智能风险控制。',
    demo: '预约演示',
    docs: '查看技术文档',
  },
  en: {
    tag: 'Architectural Overview',
    title: 'The Sovereign Engine of Autonomous Finance',
    desc: 'Aladdin AI integrates deep-tier machine learning with high-frequency financial protocols to deliver a hyper-efficient, fully automated lending ecosystem. Experience 99.9% uptime and microsecond risk assessment.',
    latency: 'Average Latency',
    data: 'Data Points/Day',
    fraud: 'Fraud Detection Rate',
    f1Title: '01. All-Channel Intelligent Reach',
    f1Desc: 'Break communication silos with our AI-driven omnichannel integration. Deploy intelligent bots across Telegram, WhatsApp, and proprietary portals that maintain stateful conversations with 100% data fidelity.',
    f1Line1: 'Real-time NLP for automated inquiry routing.',
    f1Line2: 'End-to-end encrypted financial data transmission.',
    f1Api: 'API Response: HTTP 202 | latency: 42ms | load: 45k req/min',
    f2Title: '02. Full Customer Lifecycle Marketing',
    f2Desc: 'From acquisition to retention, our autonomous marketing engine optimizes every touchpoint using predictive behavioral modeling.',
    targeting: 'Precision Targeting',
    targetingDesc: 'Segment users based on real-time financial behaviors and risk appetite.',
    optimization: 'Auto-Optimization',
    optimizationDesc: 'A/B testing running 24/7 on creative assets and loan offer structures.',
    churn: 'Churn Prediction',
    churnDesc: 'Identify at-risk customers with 94% accuracy before they leave the ecosystem.',
    f3Title: '03. Financial Automation Solutions',
    f3Desc: 'Eliminate manual accounting. Aladdin AI handles automated settlement, ledger entries, and multi-currency reconciliation with zero human intervention.',
    ledger: 'Ledger Synchronization',
    ledgerDesc: 'Real-time sync across ERP and blockchain protocols.',
    settlement: 'Dynamic Settlement',
    settlementDesc: 'Instant payout processing for approved loan disbursements.',
    live: 'Live Processing',
    f4Title: '04. Intelligent Risk Control',
    f4Desc: 'Our proprietary Sovereign Scan engine leverages ensemble machine learning models to detect anomalies and fraudulent behavior in sub-millisecond windows.',
    integrity: 'Safety Integrity',
    kyc: 'Automated identity verification and anti-money laundering checks.',
    behavioralTitle: 'Behavioral Scans',
    behavioral: 'Biometric and navigational pattern analysis for bot detection.',
    auditTitle: 'Audit Trail',
    audit: 'Immutable logs for all AI decisions and parameter shifts.',
    holdTitle: 'Instant Hold',
    hold: 'Automatic transaction suspension upon high-risk detection.',
    ctaTitle: 'Ready for Technological Sovereignty?',
    ctaDesc: 'Join the league of elite financial institutions leveraging Aladdin AI for autonomous lending and intelligent risk control.',
    demo: 'Book a Live Demo',
    docs: 'View Technical Docs',
  },
}

const c = computed(() => copy[currentLocale.value])

const marketingCards = computed(() => [
  ['target', c.value.targeting, c.value.targetingDesc],
  ['auto_awesome', c.value.optimization, c.value.optimizationDesc],
  ['rebase_edit', c.value.churn, c.value.churnDesc],
])

const riskCards = computed(() => [
  ['KYC/AML', c.value.kyc],
  [c.value.behavioralTitle, c.value.behavioral],
  [c.value.auditTitle, c.value.audit],
  [c.value.holdTitle, c.value.hold],
])
</script>

<template>
  <SiteLayout v-slot="{ openDemo }">
    <section class="relative flex min-h-[716px] items-center overflow-hidden px-margin-mobile py-24 pt-36 md:px-margin-desktop">
      <div class="relative z-10 mx-auto grid max-w-container-max items-center gap-12 lg:grid-cols-2">
        <div>
          <span
            class="mb-stack-md inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary"
          >
            {{ c.tag }}
          </span>
          <h1 class="mb-stack-md font-display text-5xl font-bold leading-tight text-secondary md:text-6xl">
            {{ c.title }}
          </h1>
          <p class="mb-stack-lg max-w-xl text-lg leading-relaxed text-on-surface-variant">
            {{ c.desc }}
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-secondary">1.2ms</span>
              <span class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{{ c.latency }}</span>
            </div>
            <div class="h-12 w-px bg-outline-variant/30" />
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-secondary">10B+</span>
              <span class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{{ c.data }}</span>
            </div>
            <div class="h-12 w-px bg-outline-variant/30" />
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-tertiary">99.8%</span>
              <span class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{{ c.fraud }}</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="glass-card flex aspect-video items-center justify-center overflow-hidden rounded-xl p-stack-lg">
            <img :src="images.hero" alt="Autonomous Finance AI" class="h-full w-full rounded-xl object-cover">
          </div>
        </div>
      </div>
    </section>

    <section class="bg-surface-container-low/50 px-margin-mobile py-24 md:px-margin-desktop">
      <div class="mx-auto grid max-w-container-max items-center gap-16 lg:grid-cols-2">
        <div class="order-2 lg:order-1">
          <img
            :src="images.reach"
            alt="All-Channel Intelligent Reach"
            class="rounded-xl border border-outline-variant/30 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          >
        </div>
        <div class="order-1 lg:order-2">
          <h2 class="mb-6 text-3xl font-bold text-secondary">{{ c.f1Title }}</h2>
          <p class="mb-8 text-lg leading-relaxed text-on-surface-variant">{{ c.f1Desc }}</p>
          <ul class="mb-10 space-y-4">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-tertiary">check_circle</span>
              <span>{{ c.f1Line1 }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-tertiary">check_circle</span>
              <span>{{ c.f1Line2 }}</span>
            </li>
          </ul>
          <div class="rounded-lg border border-outline-variant/20 bg-surface-container-highest p-4">
            <code class="text-sm text-secondary-fixed">{{ c.f1Api }}</code>
          </div>
        </div>
      </div>
    </section>

    <section class="px-margin-mobile py-24 md:px-margin-desktop">
      <div class="mx-auto max-w-container-max">
        <div class="mb-16 text-center">
          <div class="mx-auto mb-8 max-w-2xl overflow-hidden rounded-xl border border-outline-variant/20 shadow-2xl">
            <img :src="images.marketing" alt="AI Analytics Dashboard" class="h-auto w-full">
          </div>
          <h2 class="mb-4 text-3xl font-bold text-secondary">{{ c.f2Title }}</h2>
          <p class="mx-auto max-w-2xl text-on-surface-variant">{{ c.f2Desc }}</p>
        </div>
        <div class="grid grid-cols-1 gap-gutter md:grid-cols-3">
          <article v-for="card in marketingCards" :key="card[1]" class="glass-card flex flex-col items-center rounded-xl p-stack-lg text-center">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <span class="material-symbols-outlined text-3xl text-secondary">{{ card[0] }}</span>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-secondary">{{ card[1] }}</h3>
            <p class="text-on-surface-variant">{{ card[2] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative bg-surface-container-low/50 px-margin-mobile py-24 md:px-margin-desktop">
      <div class="mx-auto grid max-w-container-max items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 class="mb-6 text-3xl font-bold text-secondary">{{ c.f3Title }}</h2>
          <p class="mb-8 text-lg leading-relaxed text-on-surface-variant">{{ c.f3Desc }}</p>
          <div class="space-y-6">
            <div class="glass-card flex items-center gap-6 rounded-lg p-4">
              <div class="rounded-full bg-tertiary/10 p-3">
                <span class="material-symbols-outlined text-tertiary">account_balance_wallet</span>
              </div>
              <div>
                <div class="font-bold text-secondary">{{ c.ledger }}</div>
                <div class="text-sm text-on-surface-variant">{{ c.ledgerDesc }}</div>
              </div>
            </div>
            <div class="glass-card flex items-center gap-6 rounded-lg p-4">
              <div class="rounded-full bg-tertiary/10 p-3">
                <span class="material-symbols-outlined text-tertiary">currency_exchange</span>
              </div>
              <div>
                <div class="font-bold text-secondary">{{ c.settlement }}</div>
                <div class="text-sm text-on-surface-variant">{{ c.settlementDesc }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group relative">
          <img
            :src="images.finance"
            alt="Financial Automation Interface"
            class="rounded-xl border border-outline-variant/30 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
          >
          <div class="glass-card absolute -right-3 -top-6 rounded-lg border-tertiary/40 p-4 shadow-[0_0_15px_rgba(42,229,0,0.4)] md:-right-6">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 animate-pulse rounded-full bg-tertiary" />
              <span class="text-sm font-bold uppercase text-tertiary">{{ c.live }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-margin-mobile py-24 md:px-margin-desktop">
      <div class="mx-auto grid max-w-container-max items-center gap-16 lg:grid-cols-2">
        <div class="relative aspect-square">
          <img :src="images.risk" alt="Intelligent Risk Control" class="h-full w-full rounded-xl border border-outline-variant/30 object-cover shadow-2xl">
          <div class="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-surface/40 text-center backdrop-blur-sm">
            <div class="font-display text-6xl font-extrabold text-secondary">99.8%</div>
            <div class="text-sm uppercase tracking-widest text-on-surface-variant">{{ c.integrity }}</div>
          </div>
        </div>
        <div>
          <h2 class="mb-6 text-3xl font-bold text-secondary">{{ c.f4Title }}</h2>
          <p class="mb-8 text-lg leading-relaxed text-on-surface-variant">{{ c.f4Desc }}</p>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article v-for="card in riskCards" :key="card[0]" class="rounded-xl border border-outline-variant/20 bg-surface-container p-6">
              <div class="mb-1 font-bold text-tertiary">{{ card[0] }}</div>
              <p class="text-sm text-on-surface-variant">{{ card[1] }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden px-margin-mobile py-32 md:px-margin-desktop">
      <div class="absolute inset-0 bg-secondary/5" />
      <div class="relative z-10 mx-auto max-w-container-max text-center">
        <h2 class="mb-6 font-display text-5xl font-bold text-secondary">{{ c.ctaTitle }}</h2>
        <p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant">{{ c.ctaDesc }}</p>
        <div class="flex flex-col justify-center gap-6 sm:flex-row">
          <button
            class="rounded-full bg-secondary-container px-10 py-5 text-lg font-extrabold text-on-secondary-container shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all duration-300 hover:scale-105"
            type="button"
            @click="openDemo"
          >
            {{ c.demo }}
          </button>
          <button
            class="rounded-full border-2 border-secondary px-10 py-5 text-lg font-extrabold text-secondary transition-all duration-300 hover:bg-secondary/10"
            type="button"
          >
            {{ c.docs }}
          </button>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
