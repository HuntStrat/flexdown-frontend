// const [text, setText] = useState("Sync your listings with FlexDown 🔥");
// const messages = [
//   "Keep your sales team on top of every opportunity. FlexDown CRM 🔥",
//   "Sync your listings with FlexDown 🔥",
//                 Connecting You to Flexible Living Solutions
//                                     Flexible, Affordable, and Hassle - Free Living Solutions at Your
// Fingertips

import { SiVorondesign } from "react-icons/si";
import { MdAssessment, MdCampaign } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";

export const navData = {
  menuItems: [
    { id: 1, label: "Features", href: "#features" },
    { id: 2, label: "Testimonials", href: "#testimonials" },
    { id: 3, label: "Pricing", href: "#pricing" },
    { id: 4, label: "FAQs", href: "#faq" },
  ],
  logo: { src: "./src/assets/images/logo/flexdown_logo.png", alt: "logo" },
};

export const heroCopy = {
  mainCopy: "Connecting You to Flexible Living Solutions, Hassle-Free ",
  subCopy:
    "Experience seamless property management and take control of your portfolio effortlessly",
  somtrhtingelse: "Living Solutions at Your Fingertips",
};

export const clientCopy = "Trusted by Leading Real Estate Companies Worldwide";

export const clientLogos = [
  "./src/assets/images/logoipsum-258.svg",
  "./src/assets/images/logoipsum-264.svg",
  "./src/assets/images/logoipsum-285.svg",
  "./src/assets/images/logoipsum-288.svg",
  "./src/assets/images/logoipsum-325.svg",
];

export const featuresCopy = {
  mainCopy: "Discover FlexDown's Powerful Real Estate Tools",
  subCopy:
    "Explore advanced features designed to streamline property management and optimize your investments.",
};

export const features = [
  {
    id: 1,
    title: "Design",
    description:
      "  FlexDown's platform is simple and easy to use. Whether listing, searching, or a managing rentals, our interface guides you smoothly. With helpful suggestions and quick access to key info, finding the right place is easy...",
    icon: SiVorondesign,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "FlexDown is build to make finding flexible and afforbale living arrangements easy. We eliminate the hassle of traditional real estate, offering tools and AI-driven solutions, and real-time statistics to help you make quick, informed decisions.",
    icon: HiLightBulb,
  },
  {
    id: 3,
    title: "Marketing",
    description:
      "We focus on reaching you where it counts- trough targeted ads, social media, and strategic partherships. Our goal is to connect you with the right housing options while educating you on the process.",
    icon: MdCampaign,
  },
  {
    id: 4,
    title: "Customizable Reporting",
    description:
      "Generate detailed, customizable reports with ease. Our reporting tools allow you to create and export reports on occupancy rates, financial performance, maintenance issues, and more.",
    icon: MdAssessment,
  },
];

export const testimonialCopy = {
  mainCopy: "What Our Happy Clients Are Saying",
  subCopy:
    "Hear from satisfied clients who have transformed their property management experience with our platform.",
};

export const testimonials = [
  {
    id: 1,
    quote:
      "FlexDown has completely transformed how we manage our properties. The real-time analytics and automated invoicing features have saved us countless hours each week.",
    name: "Yazdan Jubril",
    position: "CTO",
    imgUrl: "./src/assets/images/pexels-photo-5876516.webp",
  },
  {
    id: 2,
    quote:
      "I love the customizable reports! They give me the insights I need to make informed decisions and optimize my investments. FlexDown is a game-changer.",
    name: "Sandra Bisheva",
    position: "Realtor",
    imgUrl: "./src/assets/images/pexels-tima-miroshnichenko-6170397.jpg",
  },
  {
    id: 3,
    quote:
      "The tenant management tools are fantastic. Communication is seamless, and keeping track of leases and payments has never been easier. Highly recommend FlexDown!",
    name: "Emily Green",
    position: "Manager",
    imgUrl: "./src/assets/images/pexels-gustavo-fring-3874032.jpg",
  },
  {
    id: 4,
    quote:
      "FlexDown's secure document storage keeps all my important files in one place. I feel confident knowing my data is protected and easily accessible when I need it.",
    name: "JOHN ASEMOH",
    position: "Estate Evaluator",
    imgUrl: "./src/assets/images/pexels-gabby-k-6999225.jpg",
  },
];

export const pricingCopy = {
  mainCopy: "Our Pricing",
  subCopy:
    "Choose a plan that fits your business and unlocks powerful tools to elevate your property management",
};

export const pricingOptions = [
  {
    id: 1,
    title: "Starter Plan",
    desc: "For small property owners and managers just getting started.",
    price: "$29.99",
    choiceText: "Pause or cancel anytime",
    featuresText: "Starter Plan Features:",
    features: [
      "Manage up to 10 properties",
      "Basic analytics and reporting",
      "Secure document storage",
      "Automated invoicing",
    ],
  },
  {
    id: 2,
    title: "Pro Plan",
    desc: "For property owners and managers seeking advanced features.",
    price: "$79.99",
    choiceText: "Pause or cancel anytime",
    featuresText: "Everything in Starter Plan, plus:",
    features: [
      "Manage unlimited properties",
      "Advanced analytics and reporting",
      "Integrated payment processing",
      "Everything on starter plan plus",
    ],
  },
];

export const faqCopy = {
  mainCopy: "Frequently Asked Questions",
  subCopy: "Find answers to common questions about our platform and services.",
};

export const faqs = [
  {
    id: 1,
    question: "What is FlexDown and how can it help me?",
    answer:
      "FlexDown is a comprehensive real estate management platform designed to simplify property management tasks. It offers features like real-time analytics, automated invoicing, secure document storage, and customizable reporting to help you optimize your property operations.",
  },
  {
    id: 2,
    question: "How does the free trial work?",
    answer:
      "Our free trial gives you full access to all features of the Pro Plan for 14 days. You can explore and test the platform without any commitment. At the end of the trial, you can choose a plan that best suits your needs.",
  },
  {
    id: 3,
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings. Changes will take effect immediately, and you will be billed accordingly.",
  },
  {
    id: 4,
    question: "How secure is my data with FlexDown?",
    answer:
      "We take data security seriously. FlexDown uses advanced encryption methods to protect your data, and we regularly perform security audits to ensure your information is safe.",
  },
  {
    id: 5,
    question: "What kind of support is available to me?",
    answer:
      "FlexDown offers comprehensive support through various channels. Starter Plan users have access to email support, while Pro Plan users receive priority support, including email and live chat options. Our support team is available to assist you with any questions or issues you may encounter.",
  },
];

export const bannerCopy = "Transform Your Property Management Today!";

export const footerCopy = {
  mainCopy: "Empowering Property Owners with Cutting-Edge Management Tools",
  copyright: "FlexDown. All rights reserved.",
};
