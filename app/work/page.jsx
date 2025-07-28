'use client'
import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { BsArrowUpRight } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "../../components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "SAP S/4HANA Implementation",
    title: "El Kammar Group Digital Transformation",
    description: "Led the end-to-end implementation of SAP S/4HANA at El Kammar Group for Food Industry, covering Finance (FI), Materials Management (MM), Production Planning (PP), Sales & Distribution (SD), and Controlling (CO) modules. Successfully reduced process execution time by 20% through workflow redesign and system optimization for over 100 users across multiple departments. Managed testing, deployment, and go-live processes while ensuring business alignment with SAP best practices.",
    stack: [
      { name: 'SAP S/4HANA' },
      { name: 'Finance (FI)' },
      { name: 'Materials Management (MM)' },
      { name: 'Production Planning (PP)' },
      { name: 'Sales & Distribution (SD)' },
      { name: 'Controlling (CO)' },
      { name: 'Project Leadership' },
      { name: 'Business Process Re-engineering' }
    ],
    image: "/assets/sap-s4hana-implementation.jpg",
    live: "",
    github: '',
    caseStudy: "#case-study-sap"
  },
  {
    num: "02",
    category: "Custom ERP Development",
    title: "Legacy ERP System Modernization",
    description: "Revived and upgraded a legacy in-house ERP system by identifying functional gaps and implementing comprehensive improvements. Led the integration of finance, logistics, and production features into a unified platform. Successfully managed migration from Salesforce to the enhanced ERP system within 6 months, ensuring operational continuity. Delivered incremental releases with improved dashboards, reporting capabilities, and user experience enhancements.",
    stack: [
      { name: 'Custom ERP' },
      { name: 'System Integration' },
      { name: 'Database Migration' },
      { name: 'Business Process Analysis' },
      { name: 'Dashboard Development' },
      { name: 'Reporting Systems' },
      { name: 'Team Leadership' }
    ],
    image: "/assets/custom-erp-modernization.jpg",
    live: "",
    github: '',
    caseStudy: "#case-study-erp"
  },
  {
    num: "03",
    category: "Salesforce CRM Implementation",
    title: "Sales & Customer Service Automation",
    description: "Led the design and implementation of Salesforce CRM tailored specifically for sales and customer service departments. Managed a cross-functional team to develop automation workflows that enhanced reporting efficiency and streamlined operations. Created comprehensive approval chains, opportunity pipelines, and performance tracking dashboards. Ensured long-term sustainability through extensive user training and ongoing system enhancements post go-live.",
    stack: [
      { name: 'Salesforce CRM' },
      { name: 'Workflow Automation' },
      { name: 'Sales Pipeline Management' },
      { name: 'Dashboard Design' },
      { name: 'User Training' },
      { name: 'Process Optimization' },
      { name: 'Stakeholder Management' }
    ],
    image: "/assets/salesforce-crm-implementation.jpg",
    live: "",
    github: '',
    caseStudy: "#case-study-salesforce"
  },
  {
    num: "04",
    category: "ERP Implementation Leadership",
    title: "Multi-Industry ERP Solutions",
    description: "Led a team of ERP implementers delivering tailored solutions to clients across manufacturing, trading, and service sectors at Omega Soft Projects Co. Improved internal delivery methodology, achieving a 15% reduction in implementation time. Conducted comprehensive pre-implementation analysis and post-deployment reviews to optimize system performance. Provided technical training and documentation to ensure client teams' long-term success and system adoption.",
    stack: [
      { name: 'ERP Implementation' },
      { name: 'Multi-Industry Solutions' },
      { name: 'Team Management' },
      { name: 'Process Improvement' },
      { name: 'Client Training' },
      { name: 'Technical Documentation' },
      { name: 'Quality Assurance' }
    ],
    image: "/assets/multi-industry-erp.jpeg",
    live: "",
    github: '',
    caseStudy: "#case-study-multi-erp"
  },
  {
    num: "05",
    category: "Business Analysis & Requirements",
    title: "ERP Module Development & Optimization",
    description: "Analyzed end-to-end business processes and documented comprehensive requirements for ERP module development. Conducted detailed gap analysis and proposed technical solutions to enhance system efficiency across finance, warehouse, and costing departments. Delivered extensive user training and provided ongoing support for system optimization. Managed change requests and ensured timely delivery of ERP modules aligned with business milestones.",
    stack: [
      { name: 'Business Analysis' },
      { name: 'Requirements Gathering' },
      { name: 'Gap Analysis' },
      { name: 'ERP Modules' },
      { name: 'Process Documentation' },
      { name: 'User Training' },
      { name: 'Change Management' }
    ],
    image: "/assets/business-analysis-erp.jpeg",
    live: "",
    github: '',
    caseStudy: "#case-study-analysis"
  },
  {
    num: "06",
    category: "Financial Systems Integration",
    title: "Treasury & Financial Operations Optimization",
    description: "Managed comprehensive financial operations including treasury management, accounts receivable/payable processes, and product costing analysis. Implemented ERP systems for financial transaction processing, compliance monitoring, and automated reporting. Collaborated with audit teams and internal departments to resolve discrepancies and streamline financial processes. Supported pricing and budgeting decisions through detailed profitability analysis and cost management systems.",
    stack: [
      { name: 'Financial Management' },
      { name: 'Treasury Operations' },
      { name: 'AR/AP Processing' },
      { name: 'Cost Analysis' },
      { name: 'ERP Integration' },
      { name: 'Compliance Monitoring' },
      { name: 'Financial Reporting' }
    ],
    image: "/assets/financial-systems-integration.jpeg",
    live: "",
    github: '',
    caseStudy: "#case-study-financial"
  }
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-emerald-500/20 leading-none">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white hover:text-emerald-500 transition-all duration-500 leading-none">
                {project.category}
              </h2>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li 
                      key={index} 
                      className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* Live Project Link - Only if available */}
                {project.live && project.live !== '#' && project.live !== '' && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center hover:bg-emerald-500/20 transition-all duration-300">
                          <BsArrowUpRight className="text-white text-3xl hover:text-emerald-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={true}
              className="xl:h-[520px] mb-12 swiper-container"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent rounded-xl overflow-hidden border border-emerald-500/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          alt={project.title}
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-emerald-900/20 to-emerald-600/10 flex items-center justify-center" style={{display: 'none'}}>
                          <div className="text-center text-white/80">
                            <div className="text-6xl mb-4 text-emerald-400">
                              {project.num}
                            </div>
                            <div className="text-xl font-semibold text-white">
                              {project.category}
                            </div>
                            <div className="text-sm text-white/60 mt-2 max-w-xs">
                              {project.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work