import { UserRoundCheck } from "lucide-react";
import { Brush } from "lucide-react";
import { CodeXml } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Infinity } from "lucide-react";
import { Blocks } from "lucide-react";

import t1 from "../assets/t1.jpeg";
import u1 from "../assets/u1.jpg";
import t3 from "../assets/t3.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const features = [
  {
    icon: <UserRoundCheck />,
    text: "Consulting",
    description:
      "A focuses on transforming an organization's software development to enhance efficiency and productivity.",
  },
  {
    icon: <Brush />,
    text: "UI/UX Design",
    description:
      "We craft and design your product to your taste with focus on market demands and bussiness strategy.",
  },
  {
    icon: <CodeXml />,
    text: "Product Developmenent",
    description:
      "Developers work with stakeholders to understand what the software needs to achieve. Architectural plans and detailed product are created.",
  },
  {
    icon: <ShieldCheck />,
    text: "Testing",
    description:
      "We ensure that the software application met the highest standards of quality and security checks before deployment",
  },
  {
    icon: <Infinity />,
    text: "Post Deployment Operation",
    description:
      "Continuous improvement,rapid feedback loops to streamline the software",
  },
  {
    icon: <Blocks />,
    text: "Integrate New Solutions",
    description:
      "New solutions that effectively operate within the integrated system environment. ",
  },
];
export const pricingOptions = [
  {
    title: "Basic",
    price: "$500",
    features: [
      "Design Consulting",
      "Prototyping",
      "Product Design",
      "Design Testing",
    ],
  },
  {
    title: "Stand",
    price: "$5,000",
    features: [
      "All Service Of Basic Plan +",
      "Product Development",
      "Product Testing",
      "Secure Deployment",
    ],
  },
  {
    title: "Premium",
    price: "$10,000",
    features: [
      "All Services +",
      "Maintainance and Support",
      "Consulting and Post Assessment",
      "Implementing Of New Solutions",
    ],
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: t1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Ocean Technologies",
    image: u1,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "James Hill",
    company: "Naresh Technologies",
    image: t3,
    text: "Integrating the new software solution with our existing systems was a game-changer for our operations. The process was seamless thanks to the detailed planning and expert execution provided.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Protfolio" },
  { href: "#", text: "Services" },
  { href: "#", text: "Community Forums" },
];

export const firmLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Contact" },
  { href: "#", text: "Home" },
  { href: "#", text: "Announcements" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];

export default features;
