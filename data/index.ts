export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Refrences", link: "#refrences" },
  { name: "Professional Experience", link: "#experience" },
  { name: "Contact Me", link: "#contact" },
];

export const gridItems = [
  {
    id: 4,
    title: "Boston University",
    description: "My Education",
    major: "B.A in Computer Science,",
    honor: "Dean's List Award",
    courseWork:
      "Coursework: DSA, OOP, Linear Algebra, Probability and Statistics, Software Engineering, Web Application Development, DataScience Applications and Tools, Machine Learning, Theory of Computation, Databases, Full-Stack Development, Computer Systems",
    date: "Expected May 2025",
    className: "lg:col-span-5 md:col-span-5 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title:
      "I embrace continuous growth and learning, driven by curiosity. I believe success is cultivated in a inclusive and supportive environment, where collaboration flourishes and innovation thrives. With a commitment to personal and collective well-being, I aim to create spaces where creativity and dedication leads to meaningful impact.",
    description: "What I value",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I have professional and educational experience in United States, Netherlands, Spain, and Turkey.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote: "Coming Soon...",
    name: "Name Lastname",
    title: "Position - Company",
    img: "/profile-default-svgrepo-com.svg",
  },
  {
    quote: "Coming Soon...",
    name: "Name Lastname",
    title: "Position - Company",
    img: "/profile-default-svgrepo-com.svg",
  },
  {
    quote: "Coming Soon...",
    name: "Name Lastname",
    title: "Position - Company",
    img: "/profile-default-svgrepo-com.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    companyName: "MadByte Games",
    date: "Jun 2024 - present",
    location: "Istanbul, Turkey",
    desc: [
      "Built the front and backend of a referral system in ASP.NET Core for a game with over 33 million accounts created",
      "Engineered a reward system that grants users prizes for verifying their phone numbers and emails, fostering account security",
      "Resolved captcha and cookies errors through intensive unit testing, enhancing system reliability and decreasing vulnerability",
    ],
    className: "md:col-span-2",
    thumbnail: "/madbyte-logo.png",
  },
  {
    id: 2,
    title: "Web Developer",
    companyName: "Boston University School of Medicine",
    date: "Feb 2024 - present",
    location: "Boston, MA",
    desc: [
      "Directing the development and maintenance of 4 department-specific websites, enhancing user experience and functionality",
      "Serving as the primary contact for all web-related requests, achieving a 50% faster completion rate by strategic management",
    ],
    className: "md:col-span-2",
    thumbnail: "/Boston-University-Logo.png",
  },
  {
    id: 3,
    title: "Software Engineer",
    companyName: "PM Ready Global",
    date: "Jan 2024 – Jun 2024",
    location: "Boston, MA",
    desc: [
      "Transformed Figma designs into functional React user interfaces, guaranteeing alignment with UI and UX objectives",
      "Coordinated cross-team communication, organized meetings, resolved staff issues and ensured equal distribution of work",
    ],
    className: "md:col-span-2",
    thumbnail: "/pm-logo.svg",
  },
  {
    id: 4,
    title: "Limak Construction Europe S.L.",
    companyName: "IT Support Intern",
    date: "Jul 2023 - Aug 2023",
    location: "Barcelona, Spain",
    desc: [
      "Oversaw more than 100 computers by monitoring, configuring, and troubleshooting hardware and software issues",
      "Administered databases to monitor 1000+ employee accounts and device loans, ensuring integrity across systems",
    ],
    className: "md:col-span-2",
    thumbnail: "/limak-logo.png",
  },
  {
    id: 5,
    title: "Analyst Intern",
    companyName: "Alberk QA Technic",
    date: "May 2023 - Jun 2023",
    location: "Istanbul, Turkey",
    desc: [
      "Utilized analytics tools to identify trending issues and proposed strategies generating 30% competitive advantage",
      "Examined industry behavior through research and used visualization tools to present data insights to stakeholders",
    ],
    className: "md:col-span-2",
    thumbnail: "/alberk-logo.jpg",
  },
  {
    id: 6,
    title: "Smartmind Inc.",
    companyName: "Data Science Intern",
    date: "Jun 2022 - Aug 2022",
    location: "Istanbul, Turkey",
    desc: [
      "Pre-processed data and conducted exploratory data analysis to identify patterns and trends in customer behaviors",
      "Collaborated to design a model to predict tendency of a customer to make a late payment with 80% accuracy",
    ],
    className: "md:col-span-2",
    thumbnail: "/smartmind-logo.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/doruksavasan/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/DKsavasan",
  },
];
