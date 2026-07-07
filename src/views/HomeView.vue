<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale, t } = useSiteLocale()
const openFaq = ref(0)

const heroImage = '/images/home/hero.jpg'

const images = {
  reach: '/images/home/reach.jpg',
  finance: '/images/home/finance.jpg',
  risk: '/images/home/risk.jpg',
  security: '/images/home/security.jpg',
}

const testimonials = [
  {
    text: 't1',
    name: 'Maria Rodriguez',
    role: 'CEO, Global Finance Ltd.',
    avatar: '/images/home/avatar-maria.jpg',
  },
  {
    text: 't2',
    name: 'James Chen',
    role: 'CRO, Asia Credit Bank',
    avatar: '/images/home/avatar-james.jpg',
  },
  {
    text: 't3',
    name: 'Sarah Johnson',
    role: 'COO, LendIt Now',
    avatar: '/images/home/avatar-sarah.jpg',
  },
] as const

const localized = {
  zh: {
    coreLabel: 'Autonomous Credit Core',
    statusTitle: '实时业务状态',
    live: 'LIVE',
    recommended: '推荐',
    contact: '联系我们',
    choose: '选择方案',
    heroStats: [
      ['1.2ms', '平均风控延迟'],
      ['10B+', '日处理数据点'],
      ['99.8%', '欺诈识别率'],
    ],
    processSteps: [
      ['01', 'AI智能客服营销', '通过AI机器人、智能电话及短信自动触达客户，引导并协助完成借款申请。'],
      ['02', '秒级数据分析', 'AI深度分析多维替代数据，毫秒级构建精准信用画像，拒绝主观偏差。'],
      ['03', '智能审批决策', '自动化决策引擎实时执行信贷政策，审批结果公正透明。'],
      ['04', '自动化放款执行', '授信通过后，系统自动触发放款协议，资金实时拨付。成本直降80%。'],
      ['05', '贷后智能管理', '持续跟踪信贷健康度，自动启动分级催收策略，合规高效。'],
    ],
    pricingPlans: [
      {
        name: '基础版',
        price: '$999',
        suffix: '/月',
        features: ['智能客服机器人', '基础风控模型', '5,000笔/月处理量'],
        featured: false,
        contact: false,
      },
      {
        name: '专业版',
        price: '$2,499',
        suffix: '/月',
        features: ['全渠道智能触达', '深度AI信用画像', '20,000笔/月处理量', '7x24 优先技术支持'],
        featured: true,
        contact: false,
      },
      {
        name: '企业版',
        price: '定制报价',
        suffix: '',
        features: ['私有化部署', '自定义风控算法', '无限制处理量', '专属客户经理'],
        featured: false,
        contact: true,
      },
    ],
    faqs: [
      ['系统如何确保放款的安全性？', '我们采用银行级的加密技术以及多维度AI风控模型。通过实时扫描、身份验证及反欺诈引擎，确保每一笔交易都在安全受控的范围内执行。'],
      ['支持哪些国家的合规性要求？', 'Aladdin AI 系统模块化设计，可根据不同地区的金融法律法规进行动态配置，目前已广泛支持东南亚、拉美及欧洲部分地区的合规标准。'],
      ['集成周期大约需要多久？', '得益于我们的标准API接口，大多数机构可以在2-4周内完成核心业务流程的对接与测试。'],
    ],
  },
  en: {
    coreLabel: 'Autonomous Credit Core',
    statusTitle: 'Live business status',
    live: 'LIVE',
    recommended: 'Recommended',
    contact: 'Contact us',
    choose: 'Choose plan',
    heroStats: [
      ['1.2ms', 'Average risk latency'],
      ['10B+', 'Data points/day'],
      ['99.8%', 'Fraud detection rate'],
    ],
    processSteps: [
      ['01', 'AI service and marketing', 'AI bots, smart calls, and SMS automatically reach customers and guide loan applications.'],
      ['02', 'Second-level data analysis', 'AI analyzes multidimensional alternative data in milliseconds to build precise credit profiles without subjective bias.'],
      ['03', 'Intelligent approval decisioning', 'Automated decision engines execute credit policies in real time with fair and transparent outcomes.'],
      ['04', 'Automated disbursement', 'After approval, the system triggers agreements and funds disbursement automatically, reducing cost by 80%.'],
      ['05', 'Post-loan intelligence', 'Continuously track credit health and launch segmented collection strategies in a compliant and efficient way.'],
    ],
    pricingPlans: [
      {
        name: 'Starter',
        price: '$999',
        suffix: '/mo',
        features: ['AI service bot', 'Basic risk model', '5,000 applications/month'],
        featured: false,
        contact: false,
      },
      {
        name: 'Professional',
        price: '$2,499',
        suffix: '/mo',
        features: ['Omnichannel intelligent reach', 'Deep AI credit profiling', '20,000 applications/month', '24/7 priority support'],
        featured: true,
        contact: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        suffix: '',
        features: ['Private deployment', 'Custom risk algorithms', 'Unlimited processing volume', 'Dedicated customer manager'],
        featured: false,
        contact: true,
      },
    ],
    faqs: [
      ['How does the system ensure disbursement security?', 'We use bank-grade encryption and multidimensional AI risk models. Real-time scanning, identity verification, and anti-fraud engines keep every transaction controlled and secure.'],
      ['Which countries or regions are supported for compliance?', 'Aladdin AI is modular and can be configured for local financial regulations. It currently supports common requirements across Southeast Asia, Latin America, and parts of Europe.'],
      ['How long does integration usually take?', 'With standard APIs, most institutions can complete core process integration and testing within 2-4 weeks.'],
    ],
  },
}

const page = computed(() => localized[currentLocale.value])
</script>

<template>
  <SiteLayout v-slot="{ openDemo }">
    <section class="relative flex min-h-screen items-center overflow-hidden px-margin-mobile py-32 md:px-margin-desktop">
      <img :src="heroImage" alt="AI Core" class="absolute inset-0 z-0 h-full w-full scale-105 object-cover opacity-38">
      <div class="absolute inset-0 bg-[linear-gradient(90deg,#101415_0%,rgba(16,20,21,0.88)_42%,rgba(16,20,21,0.55)_100%)]" />
      <div class="relative z-10 mx-auto grid w-full max-w-container-max items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div class="eyebrow mb-8">
            <span class="status-dot bg-tertiary text-tertiary" />
            <span>{{ t.heroBadge }}</span>
          </div>
          <h1 class="hero-title mb-6 max-w-4xl text-5xl text-white md:text-7xl">
            {{ t.heroTitle }}
          </h1>
          <p class="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {{ t.heroSubtitle }}
          </p>
          <div class="flex flex-col gap-stack-md sm:flex-row">
            <button class="btn-primary flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold sm:w-auto" type="button" @click="openDemo">
              <span>{{ t.bookDemo }}</span>
              <span class="material-symbols-outlined">rocket_launch</span>
            </button>
            <RouterLink class="btn-secondary flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold sm:w-auto" to="/features">
              <span>{{ t.viewProduct }}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </RouterLink>
          </div>
        </div>
        <div class="premium-panel rounded-3xl p-7">
          <div class="relative z-10">
            <div class="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div class="text-sm font-semibold text-on-surface-variant">{{ page.coreLabel }}</div>
                <div class="mt-1 text-xl font-bold text-white">{{ page.statusTitle }}</div>
              </div>
              <span class="rounded-full bg-tertiary/10 px-3 py-1 text-xs font-bold text-tertiary">{{ page.live }}</span>
            </div>
            <div class="grid gap-5">
              <div v-for="stat in page.heroStats" :key="stat[1]" class="flex items-end justify-between rounded-2xl border border-white/10 bg-background/45 p-5">
                <span class="text-sm text-on-surface-variant">{{ stat[1] }}</span>
                <span class="font-display text-3xl font-bold text-secondary">{{ stat[0] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold text-white">{{ t.techTitle }}</h2>
        <p class="text-on-surface-variant">{{ t.techSubtitle }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:auto-rows-[280px] md:grid-cols-12">
        <article class="glass-card group flex flex-col overflow-hidden rounded-3xl md:col-span-8 md:flex-row">
          <div class="relative h-64 overflow-hidden md:h-full md:w-1/2">
            <img :src="images.reach" :alt="t.f1Title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-surface-container/90 md:block" />
          </div>
          <div class="flex flex-col justify-center p-8 md:w-1/2">
            <div class="mb-4 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <span class="material-symbols-outlined text-secondary">hub</span>
              </div>
              <h3 class="text-2xl font-bold text-white">{{ t.f1Title }}</h3>
            </div>
            <p class="mb-6 leading-relaxed text-on-surface-variant">{{ t.f1Desc }}</p>
            <div class="flex gap-2">
              <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-on-surface-variant">Omnichannel</span>
              <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-on-surface-variant">Real-time</span>
            </div>
          </div>
        </article>

        <article class="glass-card group flex flex-col overflow-hidden rounded-3xl md:col-span-4">
          <div class="relative h-48 overflow-hidden">
            <img :src="images.reach" :alt="t.f2Title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-container/90 to-transparent" />
          </div>
          <div class="flex flex-1 flex-col justify-between p-8">
            <div>
              <div class="mb-4 flex items-center gap-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary/10">
                  <span class="material-symbols-outlined text-tertiary">ads_click</span>
                </div>
                <h3 class="text-xl font-bold text-white">{{ t.f2Title }}</h3>
              </div>
              <p class="text-sm leading-relaxed text-on-surface-variant">{{ t.f2Desc }}</p>
            </div>
            <div class="mt-4 flex items-center justify-between text-tertiary">
              <span class="text-xs font-semibold uppercase tracking-wider">{{ t.f2Badge }}</span>
              <span class="material-symbols-outlined">trending_up</span>
            </div>
          </div>
        </article>

        <article class="glass-card group flex flex-col overflow-hidden rounded-3xl md:col-span-4">
          <div class="relative h-48 overflow-hidden">
            <img :src="images.finance" :alt="t.f3Title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-container/90 to-transparent" />
          </div>
          <div class="flex-1 p-8">
            <div class="mb-4 flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <span class="material-symbols-outlined text-secondary">payments</span>
              </div>
              <h3 class="text-xl font-bold text-white">{{ t.f3Title }}</h3>
            </div>
            <p class="mb-4 text-sm leading-relaxed text-on-surface-variant">{{ t.f3Desc }}</p>
            <div class="text-2xl font-bold text-secondary">80%<span class="ml-1 text-[10px] font-normal uppercase text-on-surface-variant">{{ t.f3Stat }}</span></div>
          </div>
        </article>

        <article class="glass-card group flex flex-col overflow-hidden rounded-3xl md:col-span-8 md:flex-row-reverse">
          <div class="relative h-64 overflow-hidden md:h-full md:w-1/2">
            <img :src="images.risk" :alt="t.f4Title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 hidden bg-gradient-to-l from-transparent via-transparent to-surface-container/90 md:block" />
          </div>
          <div class="flex flex-col justify-center p-8 md:w-1/2">
            <div class="mb-4 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-error/10">
                <span class="material-symbols-outlined text-error">shield_with_heart</span>
              </div>
              <h3 class="text-2xl font-bold text-white">{{ t.f4Title }}</h3>
            </div>
            <p class="mb-6 leading-relaxed text-on-surface-variant">{{ t.f4Desc }}</p>
            <div class="flex items-center gap-6">
              <div class="flex flex-col">
                <span class="text-xs font-semibold uppercase text-on-surface-variant">{{ t.f4Stat1 }}</span>
                <span class="text-2xl font-bold text-tertiary">{{ t.f4Stat1Value }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold uppercase text-on-surface-variant">{{ t.f4Stat2 }}</span>
                <span class="text-2xl font-bold text-secondary">ACTIVE</span>
              </div>
            </div>
          </div>
        </article>

        <article class="glass-card group flex flex-col overflow-hidden rounded-3xl md:col-span-12 md:flex-row">
          <div class="relative h-64 overflow-hidden md:h-full md:w-1/2">
            <img :src="images.security" :alt="t.f5Title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-surface-container/90 md:block" />
          </div>
          <div class="flex flex-col justify-center p-8 md:w-1/2">
            <div class="mb-4 flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <span class="material-symbols-outlined text-secondary">verified_user</span>
              </div>
              <h3 class="text-2xl font-bold text-white">{{ t.f5Title }}</h3>
            </div>
            <p class="mb-6 leading-relaxed text-on-surface-variant">{{ t.f5Desc }}</p>
            <div class="flex gap-2">
              <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-on-surface-variant">Security</span>
              <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-on-surface-variant">Compliance</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="relative overflow-hidden bg-surface-container-lowest/30 py-32">
      <div class="mx-auto mb-20 max-w-4xl px-margin-mobile text-center">
        <h2 class="mb-4 text-3xl font-bold text-white">{{ t.processTitle }}</h2>
        <p class="text-on-surface-variant">{{ t.processSubtitle }}</p>
      </div>
      <div class="relative mx-auto max-w-container-max px-margin-mobile">
        <div class="horizontal-process-line hidden lg:block" />
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-4">
          <div v-for="step in page.processSteps" :key="step[0]" class="group relative z-10 flex flex-col items-center text-center">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary bg-background text-xl font-bold text-secondary shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group-hover:scale-110">
              {{ step[0] }}
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">{{ step[1] }}</h3>
            <p class="text-sm leading-relaxed text-on-surface-variant">{{ step[2] }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="overflow-hidden bg-background py-24">
      <div class="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white">{{ t.testimonialsTitle }}</h2>
          <div class="flex items-center justify-center gap-4">
            <span class="text-4xl font-bold text-white">4.9</span>
            <span class="text-xl text-on-surface-variant">/5</span>
            <div class="flex text-secondary">
              <span v-for="i in 5" :key="i" class="material-symbols-outlined">star</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in testimonials" :key="item.name" class="glass-card rounded-3xl p-8">
            <span class="material-symbols-outlined mb-6 text-4xl text-secondary opacity-40">format_quote</span>
            <p class="mb-8 text-lg leading-relaxed text-white">{{ t[item.text] }}</p>
            <div class="flex items-center gap-4">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <img :src="item.avatar" :alt="item.name" class="h-full w-full object-cover">
              </div>
              <div>
                <div class="font-bold text-white">{{ item.name }}</div>
                <div class="text-xs text-on-surface-variant">{{ item.role }}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-background py-24">
      <div class="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold text-white">{{ t.pricingTitle }}</h2>
          <p class="text-on-surface-variant">{{ t.pricingSubtitle }}</p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <article v-for="plan in page.pricingPlans" :key="plan.name" class="glass-card relative flex flex-col rounded-3xl p-8" :class="{ 'border-secondary/40 bg-secondary/5': plan.featured }">
            <div v-if="plan.featured" class="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-background">{{ page.recommended }}</div>
            <h3 class="mb-2 text-xl font-bold text-white">{{ plan.name }}</h3>
            <div class="mb-6 text-3xl font-extrabold text-secondary">
              {{ plan.price }}<span class="text-sm font-normal text-on-surface-variant">{{ plan.suffix }}</span>
            </div>
            <ul class="mb-8 flex-1 space-y-4">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2 text-sm text-on-surface-variant">
                <span class="material-symbols-outlined text-lg text-secondary">check_circle</span>
                {{ feature }}
              </li>
            </ul>
            <button class="w-full rounded-lg py-3 font-bold transition-all" :class="plan.featured ? 'btn-primary' : 'glass-card text-secondary hover:bg-secondary/10'" type="button" @click="openDemo">
              {{ plan.contact ? page.contact : page.choose }}
            </button>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-margin-mobile py-24">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold text-white">{{ t.faqTitle }}</h2>
        <p class="text-on-surface-variant">{{ t.faqSubtitle }}</p>
      </div>
      <div class="space-y-4">
        <article v-for="(faq, index) in page.faqs" :key="faq[0]" class="glass-card overflow-hidden rounded-2xl border-white/5">
          <button class="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none" type="button" @click="openFaq = openFaq === index ? -1 : index">
            <span class="text-lg font-bold text-white">{{ faq[0] }}</span>
            <span class="material-symbols-outlined text-secondary transition-transform" :class="{ 'rotate-180': openFaq === index }">expand_more</span>
          </button>
          <div v-show="openFaq === index" class="px-8 pb-6">
            <p class="leading-relaxed text-on-surface-variant">{{ faq[1] }}</p>
          </div>
        </article>
      </div>
    </section>
  </SiteLayout>
</template>
