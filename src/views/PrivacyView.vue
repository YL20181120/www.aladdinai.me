<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/components/SiteLayout.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'

const { currentLocale } = useSiteLocale()

const content = {
  zh: {
    eyebrow: 'Privacy Policy',
    title: '隐私政策',
    subtitle: '本隐私政策说明 Aladdin AI 在网站访问、商务沟通、产品演示和服务交付过程中如何收集、使用、存储和保护相关信息。最后更新：2026年7月7日。',
    noteTitle: '说明',
    note: '本页面为网站标准隐私文本，不构成法律意见。具体产品、数据处理和服务责任以双方签署的协议、订单或数据处理文件为准。',
    sections: [
      ['1. 我们收集的信息', ['您主动提交的信息：包括姓名、公司名称、职位、联系方式、业务需求、预约演示表单内容以及您通过邮件或其他渠道提供的信息。', '业务合作相关信息：包括机构类型、业务规模、拟接入渠道、产品需求、技术环境、合规要求和商务沟通记录。', '网站使用信息：包括访问时间、浏览页面、设备类型、浏览器类型、IP 地址、来源页面、点击行为和 Cookie 等技术信息。', '服务运行信息：在您使用 Aladdin AI 产品或试用环境时，我们可能根据合同约定处理系统日志、配置数据、接口调用记录和安全审计信息。']],
      ['2. 信息使用目的', ['用于响应咨询、安排演示、提供报价、推进商务合作和客户支持。', '用于提供、维护、保护和改进网站、产品、服务、安全能力和用户体验。', '用于进行身份验证、权限控制、风险防护、异常排查、审计追踪和合规管理。', '用于在获得授权或法律允许的范围内发送产品更新、服务通知、活动信息或重要公告。']],
      ['3. 信息共享与披露', ['我们不会出售您的个人信息。', '在必要范围内，我们可能与云服务、数据存储、邮件发送、客户支持、分析统计等服务供应商共享信息，并要求其仅为约定目的处理相关信息。', '在合并、收购、资产转让或类似交易中，相关信息可能作为业务资产的一部分被转移，但我们会要求接收方继续遵守本隐私政策或提供同等保护。', '如法律法规、监管要求、司法机关或政府部门要求，我们可能依法披露必要信息。']],
      ['4. 数据安全', ['我们采取合理的技术和管理措施保护信息安全，包括访问控制、加密传输、权限隔离、日志审计和安全监控。', '尽管我们会持续提升安全能力，但互联网传输和电子存储无法保证绝对安全。您也应妥善保护账户、凭据和接入密钥。']],
      ['5. 数据保留', ['我们仅在实现本政策所述目的、履行合同义务、满足法律法规或解决争议所需期间内保留信息。', '当信息不再需要时，我们会按照适用要求删除、匿名化或采取其他合理处置方式。']],
      ['6. Cookie 与类似技术', ['我们可能使用 Cookie、Local Storage 或类似技术识别访问状态、记住偏好、分析流量并改进网站体验。', '您可以通过浏览器设置管理或禁用 Cookie，但部分功能可能因此无法正常使用。']],
      ['7. 您的权利', ['在适用法律允许的范围内，您可以请求访问、更正、删除、限制处理、撤回同意或获取您的个人信息副本。', '如您代表机构使用我们的服务，部分数据权利可能需要通过该机构管理员或双方合同约定流程处理。']],
      ['8. 跨境传输', ['如业务合作、技术支持或云服务部署涉及跨境处理，我们会根据适用法律和合同约定采取必要保护措施。', '具体数据处理范围、地区和安全措施可在双方签署的数据处理协议、服务协议或订单文件中进一步约定。']],
      ['9. 未成年人信息', ['我们的产品和网站主要面向企业、金融机构及专业用户，不面向未成年人提供服务。', '如我们发现无意收集了未成年人个人信息，将在核实后依法采取删除或其他必要措施。']],
      ['10. 政策更新与联系我们', ['我们可能根据业务、法律或技术变化更新本隐私政策。重大变更将通过网站公告或其他合理方式提示。', '如您对本隐私政策或个人信息处理有任何问题，请通过 support@aladdinai.me 联系我们。']],
    ],
  },
  en: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    subtitle: 'This Privacy Policy explains how Aladdin AI collects, uses, stores, and protects information during website visits, business communication, product demos, and service delivery. Last updated: July 7, 2026.',
    noteTitle: 'Note',
    note: 'This page is a standard website privacy notice and does not constitute legal advice. Specific products, data processing activities, and service responsibilities are governed by the agreements, orders, or data processing documents signed by both parties.',
    sections: [
      ['1. Information We Collect', ['Information you submit directly, including name, company name, title, contact details, business needs, demo request form content, and information you provide by email or other channels.', 'Business cooperation information, including institution type, business scale, intended channels, product needs, technical environment, compliance requirements, and commercial communication records.', 'Website usage information, including visit time, pages viewed, device type, browser type, IP address, referring page, click behavior, cookies, and similar technical information.', 'Service operation information. When you use Aladdin AI products or trial environments, we may process system logs, configuration data, API call records, and security audit information as agreed by contract.']],
      ['2. How We Use Information', ['To respond to inquiries, schedule demos, provide quotes, advance business cooperation, and deliver customer support.', 'To provide, maintain, protect, and improve our website, products, services, security capabilities, and user experience.', 'To perform authentication, access control, risk protection, troubleshooting, audit tracking, and compliance management.', 'To send product updates, service notices, event information, or important announcements where authorized or permitted by law.']],
      ['3. Sharing and Disclosure', ['We do not sell your personal information.', 'Where necessary, we may share information with service providers such as cloud hosting, data storage, email delivery, customer support, and analytics providers, and require them to process information only for agreed purposes.', 'In a merger, acquisition, asset transfer, or similar transaction, information may be transferred as part of business assets, but we will require the recipient to continue protecting it under this Privacy Policy or equivalent safeguards.', 'We may disclose necessary information when required by laws, regulations, regulators, courts, or government authorities.']],
      ['4. Data Security', ['We use reasonable technical and organizational measures to protect information, including access control, encrypted transmission, permission isolation, log auditing, and security monitoring.', 'Although we continuously improve security, internet transmission and electronic storage cannot be guaranteed to be absolutely secure. You should also protect accounts, credentials, and access keys.']],
      ['5. Data Retention', ['We retain information only for as long as needed to fulfill the purposes described in this Policy, perform contractual obligations, comply with law, or resolve disputes.', 'When information is no longer needed, we will delete, anonymize, or otherwise handle it in a reasonable manner according to applicable requirements.']],
      ['6. Cookies and Similar Technologies', ['We may use cookies, local storage, or similar technologies to identify visit status, remember preferences, analyze traffic, and improve website experience.', 'You can manage or disable cookies through browser settings, but some functions may not work properly as a result.']],
      ['7. Your Rights', ['To the extent permitted by applicable law, you may request access, correction, deletion, restriction of processing, withdrawal of consent, or a copy of your personal information.', 'If you use our services on behalf of an organization, some data rights may need to be handled through that organization’s administrator or the process agreed by contract.']],
      ['8. Cross-Border Transfers', ['If business cooperation, technical support, or cloud deployment involves cross-border processing, we will take necessary safeguards according to applicable law and contract terms.', 'The specific processing scope, regions, and security measures may be further agreed in a data processing agreement, service agreement, or order document signed by both parties.']],
      ['9. Children’s Information', ['Our products and website are primarily intended for enterprises, financial institutions, and professional users, and are not directed to children.', 'If we discover that we have inadvertently collected children’s personal information, we will take deletion or other necessary measures after verification.']],
      ['10. Updates and Contact', ['We may update this Privacy Policy due to business, legal, or technical changes. Material changes will be announced on the website or through other reasonable means.', 'If you have any questions about this Privacy Policy or our personal information processing, please contact us at support@aladdinai.me.']],
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
