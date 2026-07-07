<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const content = {
  zh: {
    eyebrow: 'About',
    title: '让信贷机构用 AI 重构效率、风控与增长',
    subtitle:
      'Aladdin AI 专注于智能信贷自动化，将 AI 客服、审批策略、风险模型、财务对账和贷后管理整合为统一系统，帮助金融机构减少人工环节、提升审批质量并增强业务可控性。',
    cta: '联系我们',
    stats: [
      ['80%', '人工成本节省'],
      ['ms', '风控响应速度'],
      ['24/7', '自动客户触达'],
      ['4.9', '客户评分'],
    ],
    principles: [
      ['可解释', '每一次审批、拒绝和额度调整都保留审计线索，方便业务和合规复核。'],
      ['可配置', '渠道、模型、规则、权限和财务动作都可以按机构现有流程组合。'],
      ['可扩展', '支持从单一业务线开始接入，再逐步扩展到多地区、多产品和私有化部署。'],
    ],
    positioningEyebrow: 'Positioning',
    positioningTitle: '不是单点工具，而是信贷自动化中枢',
    positioningDesc: '我们服务银行、消费金融、小额贷款和供应链金融场景，支持按模块接入或完整私有化部署。系统关注业务可落地，而不是只展示模型能力。',
    teams: [
      ['业务团队', '减少重复沟通、人工审核和跨系统录入，让运营关注转化与资产质量。'],
      ['风控团队', '策略可配置、结果可解释、日志可审计，降低黑盒模型直接上线的风险。'],
      ['技术团队', '标准 API、模块化部署和权限隔离，减少对现有核心系统的侵入。'],
    ],
  },
  en: {
    eyebrow: 'About',
    title: 'Helping lenders rebuild efficiency, risk control, and growth with AI',
    subtitle:
      'Aladdin AI focuses on intelligent lending automation, combining AI service, approval policies, risk models, reconciliation, and post-loan management into one operating system for financial institutions.',
    cta: 'Contact us',
    stats: [
      ['80%', 'Labor cost savings'],
      ['ms', 'Risk response speed'],
      ['24/7', 'Automated customer reach'],
      ['4.9', 'Customer rating'],
    ],
    principles: [
      ['Explainable', 'Every approval, rejection, and limit adjustment keeps an audit trail for business and compliance review.'],
      ['Configurable', 'Channels, models, rules, permissions, and financial actions can be assembled around your existing process.'],
      ['Scalable', 'Start from one business line, then expand to multiple regions, products, and private deployments.'],
    ],
    positioningEyebrow: 'Positioning',
    positioningTitle: 'Not a point tool, but a lending automation hub',
    positioningDesc: 'We serve banks, consumer finance, micro-lending, and supply chain finance scenarios with modular integration or full private deployment. The system is built for operational rollout, not just model demos.',
    teams: [
      ['Business teams', 'Reduce repetitive communication, manual review, and cross-system entry so operations can focus on conversion and asset quality.'],
      ['Risk teams', 'Configurable policies, explainable outcomes, and auditable logs reduce the risk of deploying black-box models directly.'],
      ['Technology teams', 'Standard APIs, modular deployment, and permission isolation reduce intrusion into existing core systems.'],
    ],
  },
}

const c = computed(() => content[currentLocale.value])
</script>

<template>
  <SiteLayout v-slot="{ openDemo }">
    <section class="page-hero">
      <div class="section-shell relative z-10">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <p class="eyebrow mb-6">{{ c.eyebrow }}</p>
            <h1 class="hero-title mb-6 text-5xl text-white md:text-7xl">{{ c.title }}</h1>
            <p class="mb-8 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
              {{ c.subtitle }}
            </p>
            <button class="btn-primary rounded-full px-8 py-3 font-bold" type="button" @click="openDemo">{{ c.cta }}</button>
          </div>
          <div class="premium-panel rounded-3xl p-8">
            <div class="relative z-10 grid grid-cols-2 gap-6">
              <div v-for="stat in c.stats" :key="stat[1]" class="metric-card">
                <div class="text-4xl font-extrabold text-secondary">{{ stat[0] }}</div>
                <p class="mt-2 text-sm text-on-surface-variant">{{ stat[1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pb-24">
      <div class="grid gap-6 lg:grid-cols-3">
        <article v-for="item in c.principles" :key="item[0]" class="glass-card rounded-3xl p-8">
          <h2 class="mb-4 text-2xl font-bold text-secondary">{{ item[0] }}</h2>
          <p class="leading-relaxed text-on-surface-variant">{{ item[1] }}</p>
        </article>
      </div>
    </section>

    <section class="section-shell pb-28">
      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="rounded-3xl border border-white/10 bg-surface-container-low/70 p-8">
          <p class="eyebrow mb-5">{{ c.positioningEyebrow }}</p>
          <h2 class="mb-5 font-display text-3xl font-bold text-white">{{ c.positioningTitle }}</h2>
          <p class="leading-relaxed text-on-surface-variant">
            {{ c.positioningDesc }}
          </p>
        </div>
        <div class="grid gap-4">
          <div v-for="team in c.teams" :key="team[0]" class="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div class="mb-2 font-bold text-white">{{ team[0] }}</div>
            <p class="text-sm leading-relaxed text-on-surface-variant">{{ team[1] }}</p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
