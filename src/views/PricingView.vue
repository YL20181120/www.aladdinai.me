<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const content = {
  zh: {
    eyebrow: 'Pricing',
    title: '按业务阶段选择，随规模平滑升级',
    subtitle: '所有版本都围绕自动触达、风控审批、财务执行和贷后管理构建。企业版支持私有化部署、定制模型和跨地区合规配置。',
    recommended: '推荐',
    choose: '选择方案',
    contactSales: '联系销售',
    plans: [
      {
        name: '基础版',
        price: '$999/月',
        description: '适合正在验证自动化信贷流程的团队',
        features: ['智能客服机器人', '基础风控模型', '5,000笔/月处理量'],
      },
      {
        name: '专业版',
        price: '$2,499/月',
        description: '适合需要多渠道获客与深度风控的增长型机构',
        features: ['全渠道智能触达', '深度AI信用画像', '20,000笔/月处理量', '7x24 优先技术支持'],
      },
      {
        name: '企业版',
        price: '定制报价',
        description: '适合有私有化、定制模型或跨地区合规要求的集团客户',
        features: ['私有化部署', '自定义风控算法', '无限制处理量', '专属客户经理'],
      },
    ],
    comparisonHeader: ['能力', '基础版', '专业版', '企业版'],
    comparisons: [
      ['全渠道触达', '基础 Bot', 'Bot + IM + Autocall', '按渠道定制'],
      ['风控能力', '基础规则模型', 'AI 信用画像 + 反欺诈', '自定义模型与策略'],
      ['部署方式', 'SaaS', 'SaaS / 专属实例', '私有化 / 混合云'],
      ['服务支持', '标准支持', '7x24 优先支持', '专属交付与客户经理'],
    ],
    enterpriseEyebrow: 'Enterprise',
    enterpriseTitle: '需要私有化、定制模型或多地区部署？',
    enterpriseDesc: '企业版可按现有系统架构设计数据接入、审批策略、权限审计和合规模块，适合对安全隔离、吞吐量和风控可解释性要求更高的机构。',
    enterpriseBullets: ['私有化部署与数据隔离', '定制审批策略与模型参数', '专属交付与长期支持'],
    enterpriseCta: '预约企业方案',
  },
  en: {
    eyebrow: 'Pricing',
    title: 'Choose by business stage, scale without migration pain',
    subtitle: 'Every plan is built around automated outreach, risk approval, financial execution, and post-loan management. Enterprise supports private deployment, custom models, and multi-region compliance.',
    recommended: 'Recommended',
    choose: 'Choose plan',
    contactSales: 'Contact sales',
    plans: [
      {
        name: 'Starter',
        price: '$999/mo',
        description: 'For teams validating automated credit workflows',
        features: ['AI service bot', 'Basic risk model', '5,000 applications/month'],
      },
      {
        name: 'Professional',
        price: '$2,499/mo',
        description: 'For growth-stage institutions needing multi-channel acquisition and deeper risk control',
        features: ['Omnichannel intelligent reach', 'Deep AI credit profiling', '20,000 applications/month', '24/7 priority support'],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For groups requiring private deployment, custom models, or cross-region compliance',
        features: ['Private deployment', 'Custom risk algorithms', 'Unlimited processing volume', 'Dedicated customer manager'],
      },
    ],
    comparisonHeader: ['Capability', 'Starter', 'Professional', 'Enterprise'],
    comparisons: [
      ['Omnichannel reach', 'Basic bot', 'Bot + IM + Autocall', 'Custom by channel'],
      ['Risk control', 'Basic rules', 'AI credit profile + anti-fraud', 'Custom models and policies'],
      ['Deployment', 'SaaS', 'SaaS / dedicated instance', 'Private / hybrid cloud'],
      ['Support', 'Standard support', '24/7 priority support', 'Dedicated delivery and account team'],
    ],
    enterpriseEyebrow: 'Enterprise',
    enterpriseTitle: 'Need private deployment, custom models, or multi-region operations?',
    enterpriseDesc: 'Enterprise can be designed around your current architecture, including data integration, approval policies, permission audits, and compliance modules for institutions with higher security, throughput, and explainability requirements.',
    enterpriseBullets: ['Private deployment and data isolation', 'Custom approval policies and model parameters', 'Dedicated delivery and long-term support'],
    enterpriseCta: 'Book enterprise consultation',
  },
}

const c = computed(() => content[currentLocale.value])
</script>

<template>
  <SiteLayout v-slot="{ openDemo }">
    <section class="page-hero">
      <div class="section-shell relative z-10">
        <div class="max-w-4xl">
          <p class="eyebrow mb-6">{{ c.eyebrow }}</p>
          <h1 class="hero-title mb-6 text-5xl text-white md:text-7xl">{{ c.title }}</h1>
          <p class="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {{ c.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-shell pb-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <article
          v-for="(plan, index) in c.plans"
          :key="plan.name"
          class="relative flex flex-col rounded-3xl p-8"
          :class="index === 1 ? 'premium-panel scale-[1.02] border-secondary/40 bg-secondary/5' : 'glass-card'"
        >
          <div v-if="index === 1" class="absolute right-5 top-5 z-10 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-background">
            {{ c.recommended }}
          </div>
          <div class="relative z-10 flex flex-1 flex-col">
            <h2 class="mb-3 text-xl font-bold text-white">{{ plan.name }}</h2>
            <div class="mb-4 text-3xl font-extrabold text-secondary">{{ plan.price }}</div>
            <p class="mb-8 min-h-16 text-sm leading-relaxed text-on-surface-variant">{{ plan.description }}</p>
            <ul class="mb-8 flex-1 space-y-4">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2 text-sm text-on-surface-variant">
                <span class="material-symbols-outlined text-lg text-secondary">check_circle</span>
                {{ feature }}
              </li>
            </ul>
            <button class="w-full rounded-full py-3 font-bold transition-all" :class="index === 1 ? 'btn-primary' : 'btn-secondary'" type="button" @click="openDemo">
              {{ index === 2 ? c.contactSales : c.choose }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="section-shell pb-24">
      <div class="overflow-hidden rounded-3xl border border-white/10 bg-surface-container-low/70">
        <div class="grid grid-cols-4 border-b border-white/10 bg-white/[0.025] p-4 text-sm font-bold text-white">
          <div v-for="head in c.comparisonHeader" :key="head">{{ head }}</div>
        </div>
        <div v-for="row in c.comparisons" :key="row[0]" class="grid grid-cols-4 gap-4 border-b border-white/5 p-4 text-sm last:border-b-0">
          <div class="font-semibold text-secondary">{{ row[0] }}</div>
          <div class="text-on-surface-variant">{{ row[1] }}</div>
          <div class="text-on-surface-variant">{{ row[2] }}</div>
          <div class="text-on-surface-variant">{{ row[3] }}</div>
        </div>
      </div>
    </section>

    <section class="section-shell pb-28">
      <div class="premium-panel rounded-3xl p-8 md:p-10">
        <div class="relative z-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p class="eyebrow mb-5">{{ c.enterpriseEyebrow }}</p>
            <h2 class="mb-4 font-display text-3xl font-bold text-white">{{ c.enterpriseTitle }}</h2>
            <p class="max-w-3xl leading-relaxed text-on-surface-variant">
              {{ c.enterpriseDesc }}
            </p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-background/50 p-6">
            <ul class="space-y-4 text-sm text-on-surface-variant">
              <li v-for="(item, index) in c.enterpriseBullets" :key="item" class="flex gap-3">
                <span class="material-symbols-outlined text-secondary">{{ ['lock', 'tune', 'support_agent'][index] }}</span>
                {{ item }}
              </li>
            </ul>
            <button class="btn-primary mt-6 w-full rounded-full py-3 text-sm font-bold" type="button" @click="openDemo">{{ c.enterpriseCta }}</button>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
