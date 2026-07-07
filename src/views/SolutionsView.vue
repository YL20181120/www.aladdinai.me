<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const content = {
  zh: {
    eyebrow: 'Solutions',
    title: '信贷业务从获客到回款的自动化操作系统',
    subtitle:
      'Aladdin AI 将客户触达、申请审核、风控审批、放款执行和贷后管理串成一个可配置的业务中枢，适合银行、消费金融、小贷和供应链金融团队快速落地。',
    metrics: [
      ['80%', '人工处理成本下降'],
      ['24/7', '渠道自动响应'],
      ['ms', '风控决策延迟'],
      ['4w', '典型上线周期'],
    ],
    workflowEyebrow: 'Workflow',
    workflowTitle: '一条业务流，四个自动化节点',
    workflowDesc: '每个节点都可以独立接入，也可以组合成完整信贷中台，避免一次性重构现有系统。',
    steps: [
      {
        index: '01',
        title: '智能获客与申请',
        desc: 'Bot、WhatsApp、Telegram、Autocall 与短信自动触达客户，统一沉淀申请线索。',
        icon: 'campaign',
      },
      {
        index: '02',
        title: '资料采集与核验',
        desc: '结构化采集身份、设备、通讯、账单和行为数据，自动完成一致性校验。',
        icon: 'fact_check',
      },
      {
        index: '03',
        title: '实时风控决策',
        desc: '规则引擎、反欺诈模型和信用评分同步输出授信额度、期限、费率和拒绝原因。',
        icon: 'shield_lock',
      },
      {
        index: '04',
        title: '放款与贷后闭环',
        desc: '协议生成、财务对账、放款执行、还款提醒和分级催收形成自动化闭环。',
        icon: 'payments',
      },
    ],
    scenariosEyebrow: 'Scenarios',
    scenariosTitle: '覆盖主要信贷增长场景',
    scenariosDesc: '平台不绑定单一业务模式，围绕渠道、数据、策略和财务执行做模块化组合。',
    demo: '预约方案演示',
    scenarios: [
      ['消费金融', '高并发进件、短周期授信、自动触达复借客户。'],
      ['小额贷款', '快速上线审批流，降低人工审核与催收压力。'],
      ['供应链金融', '围绕交易、票据和履约数据构建动态信用画像。'],
    ],
    rolloutEyebrow: 'Rollout',
    rolloutTitle: '典型落地路径',
    rolloutDesc: '从流程梳理到正式上线，优先保障现有系统兼容、权限审计和风控策略可解释。',
    rollout: [
      ['第 1 周', '业务流程梳理、字段映射、审批策略初版设计。'],
      ['第 2 周', '渠道接入、风控规则配置、沙盒数据联调。'],
      ['第 3-4 周', '压测、权限、审计、上线演练与正式投产。'],
    ],
  },
  en: {
    eyebrow: 'Solutions',
    title: 'An automation operating system from acquisition to repayment',
    subtitle:
      'Aladdin AI connects customer outreach, application review, risk approval, disbursement execution, and post-loan management into a configurable business hub for banks, consumer finance, micro-lending, and supply chain finance teams.',
    metrics: [
      ['80%', 'Lower manual processing cost'],
      ['24/7', 'Automated channel response'],
      ['ms', 'Risk decision latency'],
      ['4w', 'Typical rollout cycle'],
    ],
    workflowEyebrow: 'Workflow',
    workflowTitle: 'One business flow, four automation nodes',
    workflowDesc: 'Each node can be integrated independently or combined into a complete credit platform without rebuilding existing systems all at once.',
    steps: [
      {
        index: '01',
        title: 'Intelligent acquisition and application',
        desc: 'Bots, WhatsApp, Telegram, Autocall, and SMS automatically reach customers and consolidate application leads.',
        icon: 'campaign',
      },
      {
        index: '02',
        title: 'Data collection and verification',
        desc: 'Collect identity, device, communication, billing, and behavioral data in structured form, then verify consistency automatically.',
        icon: 'fact_check',
      },
      {
        index: '03',
        title: 'Real-time risk decisioning',
        desc: 'Rules, anti-fraud models, and credit scores jointly produce limits, tenors, pricing, and rejection reasons.',
        icon: 'shield_lock',
      },
      {
        index: '04',
        title: 'Disbursement and post-loan loop',
        desc: 'Agreement generation, reconciliation, disbursement, reminders, and segmented collection run as an automated loop.',
        icon: 'payments',
      },
    ],
    scenariosEyebrow: 'Scenarios',
    scenariosTitle: 'Built for major credit growth scenarios',
    scenariosDesc: 'The platform is not tied to one business model. Channels, data, policies, and financial execution can be combined modularly.',
    demo: 'Book a solution demo',
    scenarios: [
      ['Consumer finance', 'High-volume applications, short-cycle approvals, and automated repeat-borrower outreach.'],
      ['Micro lending', 'Launch approval flows quickly while reducing manual review and collection pressure.'],
      ['Supply chain finance', 'Build dynamic credit profiles around transactions, invoices, and fulfillment data.'],
    ],
    rolloutEyebrow: 'Rollout',
    rolloutTitle: 'Typical implementation path',
    rolloutDesc: 'From process mapping to launch, we prioritize system compatibility, permission audits, and explainable risk policies.',
    rollout: [
      ['Week 1', 'Process mapping, field mapping, and initial approval policy design.'],
      ['Week 2', 'Channel integration, risk rule configuration, and sandbox data testing.'],
      ['Weeks 3-4', 'Load testing, permissions, audits, launch rehearsal, and production release.'],
    ],
  },
}

const c = computed(() => content[currentLocale.value])
</script>

<template>
  <SiteLayout v-slot="{ openDemo }">
    <section class="page-hero">
      <div class="section-shell relative z-10">
        <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p class="eyebrow mb-6">{{ c.eyebrow }}</p>
            <h1 class="hero-title mb-6 max-w-4xl text-5xl text-white md:text-7xl">{{ c.title }}</h1>
            <p class="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {{ c.subtitle }}
            </p>
          </div>
          <div class="premium-panel rounded-3xl p-8">
            <div class="relative z-10 grid grid-cols-2 gap-6">
              <div v-for="metric in c.metrics" :key="metric[1]" class="metric-card">
                <div class="text-4xl font-bold text-secondary">{{ metric[0] }}</div>
                <p class="mt-2 text-sm text-on-surface-variant">{{ metric[1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pb-24">
      <div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p class="eyebrow mb-4">{{ c.workflowEyebrow }}</p>
          <h2 class="font-display text-3xl font-bold text-white md:text-4xl">{{ c.workflowTitle }}</h2>
        </div>
        <p class="max-w-xl text-sm leading-relaxed text-on-surface-variant">
          {{ c.workflowDesc }}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <article v-for="step in c.steps" :key="step.index" class="glass-card rounded-2xl p-6">
          <div class="mb-8 flex items-center justify-between">
            <span class="text-sm font-bold tracking-widest text-secondary">{{ step.index }}</span>
            <span class="material-symbols-outlined text-secondary">{{ step.icon }}</span>
          </div>
          <h3 class="mb-3 text-xl font-bold text-white">{{ step.title }}</h3>
          <p class="text-sm leading-relaxed text-on-surface-variant">{{ step.desc }}</p>
        </article>
      </div>
    </section>

    <section class="section-shell pb-24">
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="premium-panel rounded-3xl p-8">
          <div class="relative z-10">
            <p class="eyebrow mb-5">{{ c.scenariosEyebrow }}</p>
            <h2 class="mb-4 font-display text-3xl font-bold text-white">{{ c.scenariosTitle }}</h2>
            <p class="mb-8 leading-relaxed text-on-surface-variant">
              {{ c.scenariosDesc }}
            </p>
            <button class="btn-primary rounded-full px-7 py-3 text-sm font-bold" type="button" @click="openDemo">{{ c.demo }}</button>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="scenario in c.scenarios" :key="scenario[0]" class="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
            <h3 class="mb-3 text-lg font-bold text-secondary">{{ scenario[0] }}</h3>
            <p class="text-sm leading-relaxed text-on-surface-variant">{{ scenario[1] }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell pb-28">
      <div class="rounded-3xl border border-white/10 bg-surface-container-low/70 p-8">
        <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p class="eyebrow mb-4">{{ c.rolloutEyebrow }}</p>
            <h2 class="font-display text-3xl font-bold text-white">{{ c.rolloutTitle }}</h2>
          </div>
          <p class="max-w-lg text-sm leading-relaxed text-on-surface-variant">
            {{ c.rolloutDesc }}
          </p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <div v-for="item in c.rollout" :key="item[0]" class="rounded-2xl border border-white/10 bg-background/50 p-6">
            <div class="mb-3 text-sm font-bold text-tertiary">{{ item[0] }}</div>
            <p class="text-sm leading-relaxed text-on-surface-variant">{{ item[1] }}</p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
