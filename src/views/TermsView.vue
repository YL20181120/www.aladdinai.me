<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const content = {
  zh: {
    eyebrow: 'Terms of Service',
    title: '服务条款',
    subtitle: '本服务条款适用于您访问 Aladdin AI 网站、预约演示、试用产品或使用相关服务的行为。最后更新：2026年7月7日。',
    noteTitle: '说明',
    note: '本页面为网站标准服务条款范本。具体商务合作、交付范围、服务等级、费用和数据处理责任，以双方签署的正式协议为准。',
    sections: [
      ['1. 接受条款', ['访问或使用 Aladdin AI 网站、产品演示、试用环境或相关服务，即表示您已阅读、理解并同意受本服务条款约束。', '如您代表公司、金融机构或其他组织使用服务，您确认您有权代表该组织接受本条款。', '如双方另行签署主服务协议、订单、数据处理协议或其他书面文件，相关文件与本条款不一致的，以双方签署文件为准。']],
      ['2. 服务内容', ['Aladdin AI 提供与智能信贷自动化相关的网站信息、产品演示、咨询沟通、软件服务、接口能力、部署支持和技术服务。', '具体服务范围、功能模块、交付周期、服务等级、费用和部署方式，以双方确认的订单、报价或合同为准。', '我们可能持续改进、更新或调整服务功能，但会尽合理努力避免对已购买服务造成重大不利影响。']],
      ['3. 账户与访问权限', ['如服务需要账户、管理员权限、API Key 或其他凭据，您应确保相关信息真实、准确并妥善保管。', '您应对通过您的账户、凭据或授权接口发生的活动负责，除非该活动由我们原因导致。', '发现未经授权访问、凭据泄露或安全事件时，应及时通知我们并配合采取必要措施。']],
      ['4. 可接受使用', ['您不得将服务用于违法、欺诈、侵权、破坏系统安全、规避监管或其他不当目的。', '您不得反向工程、破解、扫描、压测、干扰、绕过访问控制或以超出授权范围的方式使用服务。', '您不得上传或处理您无权使用的数据，也不得通过服务侵犯第三方隐私、知识产权或其他合法权益。']],
      ['5. 客户数据与合规责任', ['您应确保向我们提供或通过服务处理的数据具有合法来源，并已取得必要授权、同意或其他法律依据。', '如服务用于金融、信贷、风控、营销或贷后管理场景，您应负责遵守适用监管规则、消费者保护、数据保护和行业合规要求。', '我们会按照双方协议和适用法律处理客户数据，并采取合理安全措施保护数据。']],
      ['6. 知识产权', ['Aladdin AI 网站、软件、界面、算法、模型、文档、商标、设计和相关技术成果的知识产权归我们或合法权利人所有。', '除双方另有书面约定外，您不会因使用服务而取得我们的知识产权所有权。', '您保留对您提供的数据、资料、品牌和业务内容的合法权利。']],
      ['7. 费用与付款', ['如服务涉及订阅、部署、定制开发、技术支持或其他费用，具体金额、付款周期、税费和结算方式以订单或合同为准。', '除法律规定或双方书面约定外，已支付费用通常不予退还。', '逾期付款可能导致服务暂停、限制或终止，具体以双方协议约定为准。']],
      ['8. 第三方服务', ['服务可能与云平台、消息渠道、支付、通信、数据源或其他第三方服务集成。', '第三方服务由其提供方负责，您使用第三方服务可能需要遵守其单独条款、隐私政策和费用规则。', '我们不对第三方服务的持续可用性、数据准确性或第三方行为承担超出法律规定和双方协议范围的责任。']],
      ['9. 免责声明', ['在法律允许的最大范围内，网站公开内容和演示材料按“现状”提供，仅用于产品介绍和沟通参考。', '服务不构成金融、法律、税务、投资或监管意见。您应根据自身业务、监管要求和专业判断做出最终决策。', 'AI、风控模型和自动化系统可能受数据质量、配置策略、外部环境等因素影响，不能保证识别所有风险或适用于所有场景。']],
      ['10. 责任限制', ['在法律允许的范围内，我们不对间接、附带、特殊、惩罚性或后果性损失承担责任，包括利润损失、业务中断、数据损失或商誉损失。', '除双方签署协议另有约定外，我们对服务相关索赔的总责任以您就相关服务实际支付的费用为上限。', '本条不限制法律不得排除或限制的责任。']],
      ['11. 服务暂停与终止', ['如您违反本条款、未按约付款、存在安全风险、违法使用或监管要求，我们可暂停或终止相关服务。', '服务终止后，双方仍需履行保密、付款、知识产权、责任限制、争议解决等按性质应继续有效的条款。', '客户数据的返还、删除或保留，按照双方协议和适用法律处理。']],
      ['12. 条款更新、法律适用与联系我们', ['我们可能根据业务、法律或技术变化更新本服务条款，并通过网站或其他合理方式发布。', '本条款的适用法律和争议解决方式，以双方签署协议约定为准；如无单独约定，则按照适用法律规则确定。', '如您对本服务条款有任何问题，请通过 support@aladdinai.me 联系我们。']],
    ],
  },
  en: {
    eyebrow: 'Terms of Service',
    title: 'Terms of Service',
    subtitle: 'These Terms of Service apply when you visit the Aladdin AI website, request a demo, try our products, or use related services. Last updated: July 7, 2026.',
    noteTitle: 'Note',
    note: 'This page is a standard website terms template. Specific business cooperation, delivery scope, service levels, fees, and data processing responsibilities are governed by the formal agreements signed by both parties.',
    sections: [
      ['1. Acceptance of Terms', ['By accessing or using the Aladdin AI website, product demos, trial environments, or related services, you acknowledge that you have read, understood, and agreed to these Terms.', 'If you use the services on behalf of a company, financial institution, or other organization, you confirm that you are authorized to accept these Terms on its behalf.', 'If both parties sign a master services agreement, order, data processing agreement, or other written document, that signed document will control if it conflicts with these Terms.']],
      ['2. Services', ['Aladdin AI provides website information, product demos, consulting communication, software services, API capabilities, deployment support, and technical services related to intelligent lending automation.', 'The specific service scope, modules, delivery timeline, service levels, fees, and deployment method are governed by the applicable order, quotation, or contract.', 'We may improve, update, or adjust service features over time, while using reasonable efforts to avoid material adverse effects on purchased services.']],
      ['3. Accounts and Access', ['If services require accounts, administrator permissions, API keys, or other credentials, you must ensure the information is accurate and keep credentials secure.', 'You are responsible for activities occurring through your account, credentials, or authorized interfaces unless caused by us.', 'If you discover unauthorized access, credential leakage, or a security incident, you should notify us promptly and cooperate on necessary measures.']],
      ['4. Acceptable Use', ['You may not use the services for illegal, fraudulent, infringing, system-disruptive, regulatory-evasive, or otherwise improper purposes.', 'You may not reverse engineer, crack, scan, load test, interfere with, bypass access controls, or use the services beyond the authorized scope.', 'You may not upload or process data you are not authorized to use, or use the services to infringe third-party privacy, intellectual property, or other lawful rights.']],
      ['5. Customer Data and Compliance', ['You must ensure that data provided to us or processed through the services has a lawful source and that you have obtained necessary authorization, consent, or other legal basis.', 'If services are used for finance, credit, risk control, marketing, or post-loan management, you are responsible for complying with applicable regulatory, consumer protection, data protection, and industry requirements.', 'We will process customer data according to the parties’ agreements and applicable law, and use reasonable security measures to protect data.']],
      ['6. Intellectual Property', ['Aladdin AI website, software, interfaces, algorithms, models, documentation, trademarks, designs, and related technical results are owned by us or the relevant rights holders.', 'Unless otherwise agreed in writing, your use of the services does not transfer ownership of our intellectual property to you.', 'You retain lawful rights to the data, materials, brands, and business content you provide.']],
      ['7. Fees and Payment', ['If services involve subscriptions, deployment, custom development, technical support, or other fees, the amount, billing cycle, taxes, and settlement method are governed by the applicable order or contract.', 'Except as required by law or agreed in writing, paid fees are generally non-refundable.', 'Late payment may result in service suspension, restriction, or termination according to the parties’ agreement.']],
      ['8. Third-Party Services', ['The services may integrate with cloud platforms, messaging channels, payment providers, communication providers, data sources, or other third-party services.', 'Third-party services are provided by their respective providers, and your use may be subject to their separate terms, privacy policies, and fees.', 'We are not responsible for third-party service availability, data accuracy, or third-party conduct beyond the scope required by law and the parties’ agreements.']],
      ['9. Disclaimers', ['To the maximum extent permitted by law, public website content and demo materials are provided “as is” for product introduction and communication reference only.', 'The services do not constitute financial, legal, tax, investment, or regulatory advice. You should make final decisions based on your business, regulatory requirements, and professional judgment.', 'AI, risk models, and automation systems may be affected by data quality, configurations, policies, and external conditions, and cannot guarantee detection of all risks or suitability for every scenario.']],
      ['10. Limitation of Liability', ['To the extent permitted by law, we are not liable for indirect, incidental, special, punitive, or consequential damages, including lost profits, business interruption, data loss, or goodwill loss.', 'Unless otherwise agreed in a signed agreement, our total liability for service-related claims is limited to the fees actually paid by you for the relevant services.', 'This section does not limit liability that cannot be excluded or limited by law.']],
      ['11. Suspension and Termination', ['We may suspend or terminate services if you violate these Terms, fail to pay, create security risks, use services unlawfully, or if required by regulators.', 'After termination, confidentiality, payment, intellectual property, limitation of liability, dispute resolution, and other provisions that should survive by nature will continue to apply.', 'Return, deletion, or retention of customer data will be handled according to the parties’ agreements and applicable law.']],
      ['12. Updates, Governing Law, and Contact', ['We may update these Terms due to business, legal, or technical changes and publish them on the website or through other reasonable means.', 'The governing law and dispute resolution method are subject to the agreement signed by both parties; if no separate agreement exists, they will be determined under applicable legal rules.', 'If you have any questions about these Terms, please contact us at support@aladdinai.me.']],
    ],
  },
}

const c = computed(() => content[currentLocale.value])
const sections = computed(() =>
  c.value.sections.map((section) => ({
    title: String(section[0]),
    body: section[1] as string[],
  })),
)
</script>

<template>
  <SiteLayout>
    <section class="page-hero">
      <div class="section-shell relative z-10">
        <div class="max-w-4xl">
          <p class="eyebrow mb-6">{{ c.eyebrow }}</p>
          <h1 class="hero-title mb-6 text-5xl text-white md:text-7xl">{{ c.title }}</h1>
          <p class="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            {{ c.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-shell pb-28">
      <div class="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside class="h-fit rounded-3xl border border-white/10 bg-white/[0.025] p-6">
          <h2 class="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary">{{ c.noteTitle }}</h2>
          <p class="text-sm leading-relaxed text-on-surface-variant">
            {{ c.note }}
          </p>
          <a class="mt-6 inline-flex text-sm font-semibold text-secondary hover:text-white" href="mailto:support@aladdinai.me">
            support@aladdinai.me
          </a>
        </aside>

        <div class="premium-panel rounded-3xl p-6 md:p-10">
          <div class="relative z-10 space-y-10">
            <article v-for="section in sections" :key="section.title" class="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
              <h2 class="mb-4 text-2xl font-bold text-white">{{ section.title }}</h2>
              <ul class="space-y-3">
                <li v-for="item in section.body" :key="item" class="leading-relaxed text-on-surface-variant">
                  {{ item }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
</template>
