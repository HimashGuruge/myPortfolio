import { useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaPhone,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

// ============================================================
// DATA LAYER
// ============================================================
const portfolioData = {
  personal: {
    name: "Himira Guruge",
    title: "Full Stack Developer",
    location: "Mt. Lavinia, Sri Lanka",
    email: "himezguruge@gmail.com",
    phone: "+94 75 7777343",
    github: "github.com/HimashGuruge",
    linkedin: "linkedin.com/in/himiraguruge",
    profileImage: "/aaa.jpg",
    cvLink:
      "https://drive.google.com/file/d/1OrWWRUsq2JXVKmG9tTiAsGUW1UQ2Z_Gr/view?usp=sharing",
  },

  bio: "Multimedia & Web Technology undergraduate passionate about software engineering and full-stack development. I build responsive user interfaces, RESTful APIs, and database integrations.",

  about: `I am a Multimedia & Web Technology undergraduate student at the University of Vocational Technology (UNIVOTEC), passionate about software engineering and full-stack development. I have strong skills in modern web development, problem-solving, and system design, with hands-on experience in building responsive user interfaces, RESTful APIs, and database integrations. I enjoy full-stack development and always seek to learn new technologies. My goal is to join a creative team and build modern, useful software solutions.`,

  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "3", label: "Companies Worked" },
  ],

  navLinks: [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Subjects",
    "Contact",
  ],

  education: [
    {
      degree: "Bachelor of Technology in Multimedia & Web Technology",
      institution: "University of Vocational Technology, Rathmalana",
      period: "2022–2026",
    },
    {
      degree: "NVQ Level 5: Information & Communication Technology (ICT)",
      institution: "Maradana College of Technology, Maradana",
      period: "",
    },
    {
      degree: "NVQ Level 4: Computer Graphic Designer",
      institution:
        "Lalith Athulathmudali Vocational Training Center, Ratmalana",
      period: "",
    },
  ],

  experiences: [
    {
      company: "Construction Industry Development Authority (CIDA)",
      role: "Full Stack Developer (6 Month Internship)",
      period: "2025 – Completed",
      achievements: [
        "Developed the frontend of a web application using React.js, focusing on responsive design, modular UI components, and API integration for dynamic content rendering.",
        "Collaborated on the CIDA website revamp following the Software Development Life Cycle (SDLC) process, contributing to UI/UX design and frontend implementation.",
        "Designed and built a streamlined booking system interface for students to schedule meetings with lecturers and supervisors.",
        "Participated in QA testing and frontend development for key internal systems including Mail Tracking System, ERP System, and Craftsman Registration System.",
      ],
    },
    {
      company: "Rodee Web Design & Services (Pvt) Ltd",
      role: "Full Stack Developer (6 Month Internship)",
      period: "",
      achievements: [
        "Developed and maintained full-stack web applications using JavaScript, React.js, Node.js, and Express.js.",
        "Designed responsive user interfaces (UI/UX) with HTML5, CSS3, and modern frontend techniques, improving user engagement.",
        "Implemented RESTful APIs and connected backend services with MongoDB and MySQL databases.",
        "Collaborated with design and development teams to debug, optimize performance, and deliver client-ready web solutions.",
        "Utilized Git and GitHub for version control and collaborative code management.",
      ],
    },
  ],

  projects: [
    {
      id: "ecommerce",
      title: "Full-Stack E-Commerce Platform with AI & Voice Integration",
      category: "Full Stack",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Vite",
        "Tailwind CSS",
      ],
      description:
        "University Final Project: Developed a scalable, production-ready Full-Stack E-Commerce platform featuring separate user portals and interactive admin management dashboards. Integrated AI Chatbot and Voice Recognition (Speech-to-Text) capabilities to enhance search functionality.",
      icon: "🛒",
      frontendLink: "https://github.com/HimashGuruge/ecom_frontent",
      backendLink: "https://github.com/HimashGuruge/ecom_backend",
    },
    {
      id: "cida",
      title: "CIDA Official Web Portal Frontend",
      category: "Frontend",
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Lucide Icons",
      ],
      description:
        "Built a responsive, modular front-end portal for CIDA with dynamic Hero Banner, News/Events slider, Certificate Verification & Tracking system, Facility Booking UI, and interactive course directories.",
      icon: "🏛️",
      frontendLink: "https://github.com/HimashGuruge/CIDA-Revamp-Site",
      backendLink: "",
    },
  ],

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Speech-to-Text Integration",
    ],
    databases: ["MongoDB", "MySQL"],
    tools: [
      "Docker",
      "Vercel",
      "Render",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "NPM",
    ],
    hardware: [
      "Desktop Hardware Maintenance",
      "PC Repair",
      "Hardware Troubleshooting & Assembly",
    ],
    design: ["UI/UX Design", "Adobe Creative Suite"],
  },

  certificates: [
    "NVQ Level 5 Certificate in Information & Communication Technology (ICT) — Maradana College of Technology",
    "NVQ Level 4 Certificate in Computer Graphic Design — Lalith Athulathmudali Vocational Training Center",
    "IT Essentials Certificate — Cisco Networking Academy",
    "Advanced English Language Certificate — The Noeline Honter Academy",
  ],

  references: [
    {
      name: "Tharaka Gunarathna",
      title: "Assistant Director (IT)",
      company: "Construction Industry Development Authority",
      email: "adit@cida.gov.lk",
      phone: "+94 715196060",
    },
    {
      name: "W.D.S. Weerathunga",
      title: "Visiting Lecture",
      company: "University of Vocational Technology",
      email: "weerathungadinushika@gmail.com",
      phone: "+94 715595401",
    },
  ],
};

const {
  personal,
  stats,
  navLinks,
  education,
  experiences,
  projects,
  skills,
  certificates,
  references,
  bio,
  about,
} = portfolioData;

// ============================================================
// SUBJECT DATA - ALL SUBJECTS (NO OPTIONAL)
// ============================================================
const subjectData = [
  {
    year: "Year 1 - Foundation",
    icon: "📚",
    description:
      "In the first year, students learn the fundamentals of computer science and web technology, along with basic communication skills.",
    subjects: [
      "Computer Architecture & Operating System",
      "Data Structures and Algorithms",
      "Object-Oriented Programming with C++",
      "Software Development Practices",
      "Database Analysis and Design",
      "Database Programming",
      "Database Management Systems",
      "Computer Networks",
      "Network Administration",
      "Internet Technologies",
      "Web Programming",
      "Enterprise Technologies and Architectures",
      "Communication Skills - I",
      "Communication Skills - II",
      "Fundamentals of Mass Communication",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "Year 2 - Multimedia & Development",
    icon: "🎨",
    description:
      "In the second year, multimedia (graphics, audio-video, animation) design components are introduced along with project management and entrepreneurship.",
    subjects: [
      "Programming in .NET",
      "Web Technology & Applications",
      "Digital Electronics",
      "Art and Design",
      "2D and 3D Graphics",
      "Audio & Video Production Techniques",
      "Digital Signal Processing Techniques & Image Processing",
      "Audio and Video Editing Techniques",
      "Multimedia Product Development",
      "Animation Technology and Applications",
      "Project Management Practices",
      "Entrepreneurship Development and Management",
      "Software Quality Assurance",
      "Research Methods",
      "Stress Management",
      "Cosmology",
      "Fundamentals of Energy Management",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "Year 3 - Advanced & Industrial Training",
    icon: "💼",
    description:
      "In the final year, industrial training is mandatory, along with advanced web and multimedia processing subjects and a major project.",
    subjects: [
      "Work Based / Industrial Training",
      "Enterprise System Design",
      "Web Interface Design & Application Software",
      "Multimedia Data Processing",
      "Professional Issues in Information Technology",
      "Information Systems Management",
      "Project (Multimedia & Web Development Project)",
      "Photography",
      "Occupational Health & Safety",
    ],
    color: "from-orange-500 to-red-500",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

// Navigation Component
const Navigation = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div></div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-600 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = ({
  name,
  title,
  location,
  bio,
  stats,
  email,
  phone,
  profileImage,
  cvLink,
}) => {
  const handleCVClick = () => {
    if (cvLink) window.open(cvLink, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Open to opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <br />
              <span className="text-blue-600">{name}</span>
            </h1>
            <p className="text-xl text-blue-600 font-medium mt-2">{title}</p>
            <p className="text-lg text-gray-600 mt-4 max-w-lg">{bio}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> {location}
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-blue-500" /> {phone}
              </span>
              <span className="flex items-center gap-2">
                <MdEmail className="text-blue-500" /> {email}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-medium border border-gray-200 transition-all"
              >
                View My Work
              </a>
              <button
                onClick={handleCVClick}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-green-600/25 hover:shadow-green-600/40"
              >
                <FaFileDownload /> Download CV
              </button>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-blue-500/20">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                        ${name.charAt(0)}
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-blue-200/30 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg border border-gray-100">
                <span className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = ({ about, education, certificates }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Passionate Developer & Creative Thinker
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <p className="text-gray-600 leading-relaxed">{about}</p>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" /> Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <p className="font-medium text-gray-900">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.institution}</p>
                    {edu.period && (
                      <p className="text-xs text-gray-400">{edu.period}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white h-full">
              <h3 className="font-semibold text-lg mb-4">Certificates</h3>
              <ul className="space-y-3">
                {certificates.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1">🎓</span>
                    <span className="text-sm text-white/90">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Where I've Worked
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.role}</p>
                </div>
                {exp.period && (
                  <span className="text-sm text-gray-500 bg-gray-50 px-4 py-1.5 rounded-full">
                    {exp.period}
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = ({ skills }) => {
  const skillCategories = [
    {
      key: "frontend",
      icon: <FaCode />,
      label: "Frontend Development",
      color: "from-blue-500 to-blue-600",
    },
    {
      key: "backend",
      icon: <FaServer />,
      label: "Backend & APIs",
      color: "from-purple-500 to-purple-600",
    },
    {
      key: "databases",
      icon: <FaDatabase />,
      label: "Databases",
      color: "from-green-500 to-green-600",
    },
    {
      key: "tools",
      icon: <FaTools />,
      label: "Tools & DevOps",
      color: "from-orange-500 to-orange-600",
    },
    {
      key: "hardware",
      icon: <FaTools />,
      label: "Hardware & Systems",
      color: "from-red-500 to-red-600",
    },
    {
      key: "design",
      icon: <FaPaintBrush />,
      label: "Design & Multimedia",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Tech Stack & Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} text-white text-xl mb-4`}
              >
                {category.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills[category.key]?.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = ({ projects }) => {
  const handleCardClick = (project) => {
    const linkToOpen = project.frontendLink || project.backendLink;
    if (linkToOpen) window.open(linkToOpen, "_blank");
  };

  const handleGitHubClick = (e, link) => {
    e.stopPropagation();
    if (link) window.open(link, "_blank");
  };

  return (
    <section id="projects" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-3">
            Each project showcases my skills in full-stack development and UI/UX
            design.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-7xl">
                {project.icon}
              </div>
              <div className="p-6">
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.frontendLink && (
                    <button
                      onClick={(e) =>
                        handleGitHubClick(e, project.frontendLink)
                      }
                      className="inline-flex items-center gap-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full transition-colors font-medium"
                    >
                      <FaGithub /> Frontend
                    </button>
                  )}
                  {project.backendLink && (
                    <button
                      onClick={(e) => handleGitHubClick(e, project.backendLink)}
                      className="inline-flex items-center gap-2 text-sm bg-purple-50 hover:bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full transition-colors font-medium"
                    >
                      <FaGithub /> Backend
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// SUBJECTS SECTION
// ============================================================
const Subjects = () => {
  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (index) => {
    setOpenYear(openYear === index ? null : index);
  };

  // Calculate total subjects
  const totalSubjects = subjectData.reduce(
    (acc, year) => acc + year.subjects.length,
    0,
  );

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Academic Subjects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            📚 Course Curriculum
          </h2>
          <p className="text-gray-600 mt-3">
            Complete list of all subjects covered in the Multimedia & Web
            Development program
          </p>
        </div>

        <div className="space-y-4">
          {subjectData.map((yearData, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleYear(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`text-3xl bg-gradient-to-r ${yearData.color} p-3 rounded-xl text-white`}
                  >
                    {yearData.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {yearData.year}
                    </h3>
                    <p className="text-gray-500 text-sm max-w-2xl line-clamp-2">
                      {yearData.description}
                    </p>
                  </div>
                </div>
                <span
                  className={`transform transition-transform duration-300 ${openYear === index ? "rotate-180" : ""}`}
                >
                  <FaChevronDown className="text-gray-400" />
                </span>
              </button>

              {openYear === index && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {yearData.subjects.map((subject, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors group"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${yearData.color}`}
                        ></div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          {subject}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FaCheckCircle className="text-green-500" />
                      {yearData.subjects.length} subjects completed
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Summary Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 mt-4 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-2xl" />
                <div>
                  <p className="text-sm text-white/80">Total Subjects</p>
                  <p className="text-xl font-bold">{totalSubjects}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-2xl" />
                <div>
                  <p className="text-sm text-white/80">Program Duration</p>
                  <p className="text-xl font-bold">3 Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaBook className="text-2xl" />
                <div>
                  <p className="text-sm text-white/80">Subjects per Year</p>
                  <p className="text-xl font-bold">
                    {subjectData.map((y) => y.subjects.length).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = ({ socials, email, phone, location, references }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Connect</h2>
            <p className="text-white/80 mt-2 max-w-lg mx-auto">
              Have a project in mind or want to collaborate? Reach out and let's
              create something amazing together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FaEnvelope className="text-2xl" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="font-medium hover:text-blue-200 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FaPhone className="text-2xl" />
                <div>
                  <p className="text-sm text-white/70">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="font-medium hover:text-blue-200 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FaMapMarkerAlt className="text-2xl" />
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <span className="font-medium">{location}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a
                  href={`https://${socials.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 text-center transition-all border border-white/10"
                >
                  <FaGithub className="text-2xl mx-auto mb-1" />
                  <span className="text-xs block">GitHub</span>
                </a>
                <a
                  href={`https://${socials.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 text-center transition-all border border-white/10"
                >
                  <FaLinkedin className="text-2xl mx-auto mb-1" />
                  <span className="text-xs block">LinkedIn</span>
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-white/70 mb-2">References</p>
                {references.map((ref, index) => (
                  <div
                    key={index}
                    className="text-sm border-b border-white/10 last:border-0 py-2"
                  >
                    <p className="font-medium">{ref.name}</p>
                    <p className="text-white/70 text-xs">
                      {ref.title}, {ref.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ name, navLinks }) => {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================
// MAIN APP
// ============================================================
function Page() {
  const {
    name,
    title,
    location,
    email,
    phone,
    github,
    linkedin,
    profileImage,
    cvLink,
  } = personal;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation links={navLinks} />
      <Hero
        name={name}
        title={title}
        location={location}
        bio={bio}
        stats={stats}
        email={email}
        phone={phone}
        profileImage={profileImage}
        cvLink={cvLink}
      />
      <About about={about} education={education} certificates={certificates} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Subjects />
      <Contact
        socials={{ github, linkedin }}
        email={email}
        phone={phone}
        location={location}
        references={references}
      />
      <Footer name={name} navLinks={navLinks} />
    </div>
  );
}

export default Page;
