import {
  mobile,
  backend,
  creator,
  web,
  
  linux,
  aws,
  kubernetes,
  Terraform,
  ansible,
  git,
  
  docker,
  meta,
  starbucks,
  tesla,
 
  carrent,
  jobit,
  tripguide,
  jenkins,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
id:"services",
title:"Services"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "DevOps Engineer", icon: backend },
  { title: "Cloud Infrastructure Specialist", icon: web },
  { title: "CI/CD Automation Expert", icon: creator },
  { title: "Infrastructure Engineer", icon: mobile }
];

const technologies =  [
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Jenkins", icon: jenkins },
  { name: "Terraform", icon: Terraform },
  { name: "Linux", icon: linux },
  { name: "Ansible", icon: ansible },
  { name: "Git", icon: git }
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Jameel Akhtar Projects Oman",
    icon: "shopify",
    iconBg: "#383E56",
    date: "June 2020 - Continue",
    points: [
      "Proficient in virtualization, VM configurations, and hypervisors for scalable computing environments.",
      "Experienced with AWS services (EC2, S3, RDS, Lambda, CloudFormation) for cloud infrastructure management.",
      "Skilled in setting up AWS accounts, IAM roles, and managing EC2 instances, security groups, and scaling." ,
      "Configured AWS Elastic Load Balancers, Auto Scaling Groups, and managed S3 for data storage and hosting." ,
      "Expertise in serverless computing with AWS Lambda and automating deployments using CloudFormation and Terraform." 
    ]
  },
  {
    title: "DevOps Engineer",
    company_name: "3SSolutions Ltd Lahore",
    icon: "shopify",
    iconBg: "#383E56",
    date: "April 2023 - May 2024",
    points: [
      "Designed and implemented CI/CD pipelines using Jenkins, AWS CodePipeline, and GitHub.",
      "Managed cloud infrastructure using AWS services (RDS, S3, IAM, VPC, Load Balancer, Auto Scaling, etc.).",
      "Automated server provisioning with Ansible and Terraform, ensuring efficiency and reliability.",
      "Implemented security best practices for AWS environments and CI/CD pipelines."
    ]
  },
  {
    title: "DevOps Engineer",
    company_name: "Yieldwerx Semiconductors Lahore",
    icon: "shopify",
    iconBg: "#383E56",
    date: "January 2022 - April 2023",
    points: [
      "Automated software installation and deployment using Ansible playbooks.",
      "Designed and customized SolarWinds for asset management and monitoring.",
      "Managed AWS cloud infrastructure and set up VMware solutions for virtualization.",
      "Handled vCloud Director and vCenter for efficient resource deployment."
    ]
  },
  {
    title: "Network Engineer",
    company_name: "US Denim Mills Lahore",
    icon: "shopify",
    iconBg: "#383E56",
    date: "April 2020 - May 2022",
    points: [
      "Implemented innovative solutions to improve network resilience and performance.",
      "Managed VMware environments and optimized network infrastructure.",
      "Performed troubleshooting, system upgrades, and security patching." 
    ]
  },
  {
    title: "Network Engineer",
    company_name: "AL Qaisar IT Group UAE Sharjah",
    icon: "shopify",
    iconBg: "#383E56",
    date: "September 2019 - November 2019",
    points: [
      "Successfully completed training in Cisco router, switch configuration, and server implementation",
      "Developed practical skills in configuring, managing, and troubleshooting Cisco networking devices.",
      "Gained expertise in deploying and maintaining network infrastructure and server systems." 
    ]
  },
  {
    title: "Network Support Engineer",
    company_name: "Crescent Bahuman Pindi Bhattian,",
    icon: "shopify",
    iconBg: "#383E56",
    date: "March 2018 - September 2019",
    points: [
      "Configured and monitored network systems for optimal performance and reliability.",
      "Managed and maintained routers, switches, and firewalls with accurate configuration.",
      "Diagnosed and resolved network issues promptly to minimize downtime." ,
      "Utilized tools like Wireshark and SolarWinds to monitor and optimize network performance." 
    ]
  },

];

const service = [
  {
    title: "DevOps Engineer",
    icon: backend,
    description: "Automating infrastructure, CI/CD pipelines, and cloud deployments for scalable and secure applications.",
  },
  {
    title: "Cloud Infrastructure Specialist",
    icon:  web,
    description: "Designing and managing cloud solutions using AWS, Azure, and Terraform for optimized performance.",
  },
  {
    title: "CI/CD Automation Expert",
    icon:  creator,
    description: "Building automated deployment pipelines using Jenkins, GitHub Actions, and Kubernetes.",
  },
  {
    title: "Infrastructure Engineer",
    icon:  mobile,
    description: "Enhancing IT infrastructure efficiency with Ansible, Terraform, and advanced networking solutions.",
  },
  { title: "Network Engineer",
     icon: web, 
     description: "Designing and managing network infrastructure  and ensuring high availability and security of enterprise networks." }

];

export { service };


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to streamline our entire deployment process and secure our infrastructure flawlessly, but Awais Younas proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a DevOps Engineer who truly cares about their clients' success like Awais Younas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Awais Younas re-engineered our network infrastructure, our system uptime soared and connectivity issues became a thing of the past. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Dashboard Design",
    description:
      "Developed a dynamic front-end dashboard for an e-commerce chat application, integrating management pages for invoices, balances, and profile information. This dashboard streamlines user interactions and enhances navigation, facilitating efficient communication within the platform. Showcases proficiency in creating intuitive interfaces and optimizing user experience, contributing to the success of the e-commerce ecosystem",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chat.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://waqasdashboardproject.netlify.app/",
  },
  {
    name: "Chat App Dashboard Design",
    description:
      "Designed and developed a sleek front-end dashboard for a chat application. The dashboard features intuitive interfaces for user, group, and messaging management, enhancing communication efficiency. With sections for individual users, groups, and message tracking, it offers seamless navigation and streamlined communication processes. Demonstrates expertise in creating user-friendly interfaces and optimizing digital experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chat.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Front end Project",
    description:
      "DubaiKin is a groundbreaking website enabling real-time, fee-free money transfers worldwide. Developed with HTML, CSS, and JavaScript, it offers seamless functionality for users to copy and transfer funds instantly. Revolutionizing financial transactions, DubaiKin prioritizes efficiency and affordability, providing a user-friendly platform for global money management. Experience the future of money transfer with DubaiKin",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Waqas12344/front_end_DubaiKin_project.git",
  },
];

export { services, technologies, experiences, testimonials, projects };