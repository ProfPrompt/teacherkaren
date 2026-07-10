import { GraduationCap, Users, Calendar, DollarSign, BookOpen, Gamepad2, TrendingUp, Cpu } from 'lucide-react';
import qrCodeImg from './qr.png';
import stripeImg from './stripe.png';
import teacherPhotoImg from './featured.png';
import weChatPayImg from './WeChat.png';

export type Language = 'en' | 'zh';

export const IMAGES = {
  qrCode: qrCodeImg,
  stripe: stripeImg,
  teacherPhoto: teacherPhotoImg,
  weChatPay: weChatPayImg,
};

export const CONTACT_INFO = {
  email: "teacherkarenut@qq.com",
  whatsapp: "+1 (407) 227-4816",
  wechat: "TeacherKarenUT",
};

export const THEMES = [
  { name: 'Violet', primary: '#7c3aed', secondary: '#10b981', font: 'Nunito' },
  { name: 'Orange', primary: '#ea580c', secondary: '#06b6d4', font: 'Quicksand' },
  { name: 'Sky Blue', primary: '#0284c7', secondary: '#fbbf24', font: 'Inter' },
  { name: 'Emerald', primary: '#059669', secondary: '#f59e0b', font: 'Poppins' },
  { name: 'Indigo', primary: '#4f46e5', secondary: '#ec4899', font: 'Roboto' },
  { name: 'Rose', primary: '#e11d48', secondary: '#fcd34d', font: 'Lato' },
  { name: 'Amber', primary: '#d97706', secondary: '#0ea5e9', font: 'Open Sans' },
  { name: 'Teal', primary: '#0d9488', secondary: '#f43f5e', font: 'Montserrat' },
  { name: 'Slate', primary: '#475569', secondary: '#3b82f6', font: 'Work Sans' },
  { name: 'Ocean', primary: '#0891b2', secondary: '#facc15', font: 'Raleway' },
];

export const CONTENT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      courses: 'Courses',
      features: 'Features',
      payments: 'Payments',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Book Now',
      bookFree: 'Book Free Model Lesson',
    },
    hero: {
      certified: 'Certified TEFL Educator',
      titlePrefix: 'Meet',
      titleHighlight: 'Teacher Karen',
      description: "Hi, I'm Teacher Karen. It's nice to meet you! I provide customized native English lessons conforming strictly to North American educational standards.",
      ctaPrimary: 'Free Model Lesson',
      ctaSecondary: 'Learn More',
    },
    features: {
      title: 'Why Choose Teacher Karen?',
      subtitle: 'Professional, flexible, and customized for every student.',
      items: [
        {
          title: "Native English Lessons",
          subtitle: "N. American Standards",
          description: "All of my lessons strictly conform to North American educational standards!",
          icon: GraduationCap,
          color: "bg-blue-100 text-blue-600",
        },
        {
          title: "Customized Lessons",
          subtitle: "For all ages & levels",
          description: "I provide a custom classroom for each student, regardless of age or level!",
          icon: Users,
          color: "bg-green-100 text-green-600",
        },
        {
          title: "Flexible Schedule",
          subtitle: "Cancel anytime",
          description: "You will never be charged for a missed lesson. Cancel or reschedule any time!",
          icon: Calendar,
          color: "bg-amber-100 text-amber-600",
        },
        {
          title: "Affordable Rates",
          subtitle: "260 CNY per lesson",
          description: "1040 CNY is billed every four lessons. High quality at a great price.",
          icon: DollarSign,
          color: "bg-purple-100 text-purple-600",
        },
      ]
    },
    courses: {
        title: 'Comprehensive Curriculum',
        subtitle: 'From young learners to business professionals, we have a tailored path for you.',
        items: [
            {
                title: "Young Learners",
                description: "Interactive, game-based learning designed to spark joy and curiosity. We focus on phonics, basic vocabulary, and confidence-building through storytelling and play.",
                icon: Gamepad2,
                color: "bg-pink-100 text-pink-600",
            },
            {
                title: "Academic Excellence",
                description: "Structured Reading & Grammar courses aligned with US Common Core State Standards. Perfect for students preparing for international schools or study abroad.",
                icon: BookOpen,
                color: "bg-blue-100 text-blue-600",
            },
            {
                title: "Adult Mastery (A1-C2)",
                description: "A progressive curriculum following the CEFR (Common European Framework of Reference) track. From survival English to complex business negotiation fluency.",
                icon: TrendingUp,
                color: "bg-indigo-100 text-indigo-600",
            },
            {
                title: "AI-Enhanced Customization",
                description: "Leveraging the latest textbooks, digital resources, and Generative AI to create highly tailored lessons based on your specific interests and goals.",
                icon: Cpu,
                color: "bg-emerald-100 text-emerald-600",
            }
        ]
    },
    about: {
      title: 'About The Teacher',
      badges: [
        "Experienced ESL Teacher",
        "10+ Years Experience",
        "Degree in English",
        "TEFL Certification",
      ],
      name: 'Karen Gawne',
      bio1: "Karen Gawne is an experienced ESL teacher with a passion for teaching children. She has over a decade of experience teaching English as a Second Language to children in various countries, including Japan and China. Karen holds a degree in English, and a TEFL certification. Her teaching methods are creative and effective, tailored to meet the unique needs of her students while also instilling a love for learning.",
      bio2: "Karen's dedication to her students is evident in her unwavering commitment to her profession. She has a special ability to motivate and inspire her students, and she has earned a reputation for excellence in her field. Karen's deep passion for teaching, combined with her knowledge of English literature and language, makes her an outstanding teacher who has positively impacted the lives of her students.",
      bio3: "She consistently goes above and beyond to ensure her students' success and growth, both academically and personally. Karen is an asset to the ESL teaching community and is highly respected by her peers and students alike."
    },
    payments: {
      title: 'International Payments',
      description: 'We are excited to announce that we have partnered with Stripe, the leading payment processing platform for the internet. Stripe allows us to accept payments from customers all over the world, including WeChat Pay for Chinese nationals, as well as most credit and debit cards.',
      steps: [
        { title: '1. Request Lesson', desc: 'Contact me directly via WeChat or email.' },
        { title: '2. Schedule', desc: 'We agree on a time that works for you.' },
        { title: '3. Invoice', desc: 'I send an invoice for the first four lessons. Simple!' },
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: "How long are the classes?",
          answer: "Each class is 50 minutes in length.",
        },
        {
          question: "Do you offer a model lesson?",
          answer: "Yes, I offer a free model lesson, to meet the student and understand their needs and level.",
        },
        {
          question: "How many classes do I need to book at a time?",
          answer: "Classes are booked four at a time. Scheduling is available on a first come, first served basis. If you need to cancel, reschedule or postpone a class, simply let me know.",
        },
        {
          question: "Can I cancel a lesson?",
          answer: "Yes! Just send me a message, and we will work out time to reschedule.",
        },
        {
          question: "How do I get started?",
          answer: "Contact me today and schedule your free model lesson!",
        },
      ]
    },
    contact: {
      title: 'Start Learning Today!',
      subtitle: "Contact me now for a free model lesson! I'm excited to help you achieve your English language goals.",
      scanTitle: 'Scan to Connect on WeChat',
      scanDesc: 'Scan the QR code to add Teacher Karen directly.',
      labels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        wechat: 'WeChat'
      }
    },
    footer: {
      rights: 'Copyright Karen Gawne 2023. All rights reserved.',
      tagline: 'Native English Lessons • N. American Standards'
    }
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      courses: '课程',
      features: '特色',
      payments: '支付',
      faq: '常见问题',
      contact: '联系',
      bookNow: '立即预订',
      bookFree: '预约免费试听课',
    },
    hero: {
      certified: '认证TEFL教育家',
      titlePrefix: '嗨，我是',
      titleHighlight: 'Karen老师',
      description: "很高兴认识你！我提供严格符合北美教育标准的定制英语母语课程。",
      ctaPrimary: '免费试听课',
      ctaSecondary: '了解更多',
    },
    features: {
      title: '为什么选择Karen老师？',
      subtitle: '专业、灵活，为每位学生量身定制。',
      items: [
        {
          title: "英语母语课程",
          subtitle: "北美标准",
          description: "我所有的课程都严格符合北美教育标准！",
          icon: GraduationCap,
          color: "bg-blue-100 text-blue-600",
        },
        {
          title: "定制课程",
          subtitle: "适合所有年龄和水平",
          description: "我为每个学生提供一个定制的教室，无论年龄或水平如何！",
          icon: Users,
          color: "bg-green-100 text-green-600",
        },
        {
          title: "灵活的时间表",
          subtitle: "随时取消",
          description: "您永远不会因错过的课程而被收费。随时取消或重新安排！",
          icon: Calendar,
          color: "bg-amber-100 text-amber-600",
        },
        {
          title: "实惠的价格",
          subtitle: "每节课只需260元",
          description: "每四节课1040元，通过微信支付结算。",
          icon: DollarSign,
          color: "bg-purple-100 text-purple-600",
        },
      ]
    },
    courses: {
        title: '全面课程体系',
        subtitle: '从少儿英语到职场商务，我们为您规划专属学习路径。',
        items: [
            {
                title: "少儿趣味互动",
                description: "寓教于乐的游戏化教学，激发孩子的好奇心与学习兴趣。我们通过故事和互动游戏专注于自然拼读、基础词汇和自信心的建立。",
                icon: Gamepad2,
                color: "bg-pink-100 text-pink-600",
            },
            {
                title: "美式学科英语",
                description: "严格对标美国核心州立标准（Common Core）的阅读与语法课程。非常适合准备进入国际学校或出国留学的学生。",
                icon: BookOpen,
                color: "bg-blue-100 text-blue-600",
            },
            {
                title: "成人进阶体系",
                description: "遵循欧洲语言共同参考框架（CEFR A1-C2）的专业分级课程。从生存英语到复杂的商务谈判流利度全覆盖。",
                icon: TrendingUp,
                color: "bg-indigo-100 text-indigo-600",
            },
            {
                title: "AI智能定制",
                description: "结合最新教材、数字资源与生成式AI技术，为您量身打造独一无二的专属课堂，精准满足您的兴趣与目标。",
                icon: Cpu,
                color: "bg-emerald-100 text-emerald-600",
            }
        ]
    },
    about: {
      title: '关于老师',
      badges: [
        "经验丰富的ESL教师",
        "10年以上经验",
        "英语学位",
        "TEFL认证",
      ],
      name: 'Karen Gawne',
      bio1: "Karen Gawne 是一位经验丰富的 ESL 教师，对教授儿童有着同样的热情。她在日本、中国等多个国家拥有十多年向儿童教授英语作为第二语言的经验。Karen 拥有英语学位和 TEFL 认证。她的教学方法极具创意且高效，量身定制以满足学生的独特需求，同时激发他们对学习的热爱。",
      bio2: "Karen 对学生的奉献精神体现在她对职业的坚定承诺中。她有一种特殊的能力，能够激励和启发她的学生，她在她的领域赢得了卓越的声誉。Karen 对教学的深厚热情，结合她对英语文学和语言的知识，使她成为一位杰出的老师，对学生的生活产生了积极的影响。",
      bio3: "她始终超越自我，确保学生在学业和个人成长方面取得成功。Karen 是 ESL 教学界的宝贵财富，深受同行和学生的尊敬。"
    },
    payments: {
      title: '我如何支付课程费用？',
      description: '我们很高兴地宣布，我们已经与领先的互联网支付处理平台 Stripe 合作。Stripe 允许我们接受来自世界各地客户的付款，包括支持中国客户使用微信支付。要申请课程，请直接使用微信或电子邮件与我联系。安排好最初的课程后，我会向您发送前四节课的发票。这是一个非常简单的过程。',
      steps: [
        { title: '1. 申请课程', desc: '请直接使用微信或电子邮件与我联系。' },
        { title: '2. 安排时间', desc: '我们商定一个适合您的时间。' },
        { title: '3. 发票', desc: '我会向您发送前四节课的发票。非常简单！' },
      ]
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: "课程有多长？",
          answer: "每节课50分钟。",
        },
        {
          question: "提供试听课吗？",
          answer: "是的，我提供免费试听课，以便了解学生及其需求和水平。",
        },
        {
          question: "需要一次预订多少节课？",
          answer: "课程一次预订四节。按先到先得的原则安排时间。如果您需要取消、重新安排或推迟课程，只需告诉我即可。",
        },
        {
          question: "可以取消课程吗？",
          answer: "可以！只需给我发消息，我们会商定重新安排的时间。",
        },
        {
          question: "如何开始？",
          answer: "今天就联系我，预约您的免费试听课！",
        },
      ]
    },
    contact: {
      title: '今天开始学习！',
      subtitle: "与我联系以获取示例课程材料和免费模型课程！",
      scanTitle: '扫码添加微信',
      scanDesc: '扫描二维码直接添加Karen老师。',
      labels: {
        email: '电子邮件',
        whatsapp: 'WhatsApp',
        wechat: '微信'
      }
    },
    footer: {
      rights: 'Copyright Karen Gawne 2023. 版权所有。',
      tagline: '英语母语课程 • 北美标准'
    }
  }
};
