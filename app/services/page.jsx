'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Network,
  Settings,
  BookOpen,
  Building2,
  Workflow,
  FileSearch2,
  Layers3,
  Presentation,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "ERP Architecture & Integration",
    description:
      "Design scalable ERP systems and lead SAP S/4HANA landscape architecture aligned with business and IT strategy.",
    icon: <Layers3 className="text-emerald-500" size={32} />,
    benefits: ["Scalable Architecture", "Business Alignment", "IT Strategy Integration"],
    category: "Architecture",
  },
  {
    num: "02",
    title: "SAP S/4HANA Project Leadership",
    description:
      "Lead cross-functional SAP project teams in full-cycle implementations. Manage planning, execution, testing, and cutover phases.",
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    benefits: ["Full-Cycle Management", "Cross-Functional Teams", "Risk Mitigation"],
    category: "Leadership",
  },
  {
    num: "03",
    title: "ERP Business Analysis",
    description:
      "Analyze and align business needs with ERP capabilities. Perform GAP-FIT analysis and design optimized process flows.",
    icon: <FileSearch2 className="text-emerald-500" size={32} />,
    benefits: ["GAP-FIT Analysis", "Process Optimization", "Business Alignment"],
    category: "Analysis",
  },
  {
    num: "04",
    title: "Software & Functional Analysis",
    description:
      "Document and translate complex business requirements into functional and technical specifications across modules.",
    icon: <Settings className="text-emerald-500" size={32} />,
    benefits: ["Technical Specifications", "Requirement Translation", "Module Integration"],
    category: "Analysis",
  },
  {
    num: "05",
    title: "Business Process Re-Engineering",
    description:
      "Restructure and optimize key business operations using SAP-standard methodologies and BPMN frameworks.",
    icon: <Workflow className="text-emerald-500" size={32} />,
    benefits: ["Process Optimization", "SAP Standards", "BPMN Framework"],
    category: "Optimization",
  },
  {
    num: "06",
    title: "Cross-Functional Coordination",
    description:
      "Facilitate smooth collaboration between developers, consultants, and stakeholders to deliver ERP value on time.",
    icon: <Network className="text-emerald-500" size={32} />,
    benefits: ["Team Collaboration", "Stakeholder Management", "Timely Delivery"],
    category: "Coordination",
  },
  {
    num: "07",
    title: "UAT & Stakeholder Enablement",
    description:
      "Manage testing cycles, validate deliverables with end-users, and align feedback with development and PMO.",
    icon: <Building2 className="text-emerald-500" size={32} />,
    benefits: ["User Testing", "Quality Validation", "Feedback Integration"],
    category: "Testing",
  },
  {
    num: "08",
    title: "ERP Technical Documentation & Enablement",
    description:
      "Deliver structured training documents, user guides, and implementation manuals to boost adoption and continuity.",
    icon: <BookOpen className="text-emerald-500" size={32} />,
    benefits: ["Comprehensive Documentation", "User Guides", "Knowledge Transfer"],
    category: "Documentation",
  },
  {
    num: "09",
    title: "ERP Instructor & Bootcamp Leader",
    description:
      "Deliver instructor-led workshops and ERP implementation bootcamps for junior consultants and power users.",
    icon: <Presentation className="text-emerald-500" size={32} />,
    benefits: ["Hands-On Training", "Bootcamp Programs", "Skill Development"],
    category: "Training",
  },
  {
    num: "10",
    title: "Corporate & Academic Training",
    description:
      "Provide structured learning programs for ERP modules, SAP navigation, and functional business flows.",
    icon: <GraduationCap className="text-emerald-500" size={32} />,
    benefits: ["Structured Learning", "Corporate Training", "Academic Programs"],
    category: "Education",
  },
];

const categories = [
  "All",
  "Architecture",
  "Leadership",
  "Analysis",
  "Optimization",
  "Coordination",
  "Testing",
  "Documentation",
  "Training",
  "Education",
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredService, setHoveredService] = useState(null);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      role="region"
      aria-label="Professional Services"
      className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-20 px-6 xl:px-0 bg-[#1a1a1d] text-white"
    >
      <div className="container mx-auto px-5">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl xl:text-6xl font-bold mb-6">
            Professional <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive ERP solutions and SAP S/4HANA expertise to transform your business operations
            and drive digital innovation across your organization.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.article
              key={service.num}
              variants={itemVariants}
              id={`service-${service.num}`}
              className="group relative flex flex-col justify-start gap-6 bg-[#232329] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-[#2a2a31] border border-transparent hover:border-emerald-500/20"
              onMouseEnter={() => setHoveredService(service.num)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Badge-like number with enhanced animation */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                {service.num}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                {service.category}
              </div>

              {/* Icon and Title */}
              <div className="flex items-center gap-4 mt-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div
                className={`flex items-center gap-2 text-emerald-400 font-medium transition-all duration-300 ${
                  hoveredService === service.num
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <div className="border-b border-white/10 w-full group-hover:border-emerald-500/30 transition-colors duration-300"></div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-transparent p-8 rounded-2xl border border-emerald-500/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how these services can drive your digital transformation and optimize your ERP operations.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;