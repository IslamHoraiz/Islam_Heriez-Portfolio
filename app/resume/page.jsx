'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ScrollArea } from '../../components/ui/scroll-area';

const about = {
  title: 'About Me',
  description: 'ERP Leader, SAP S/4HANA Expert, and Business Analyst with 8+ years of experience driving digital transformation and operational excellence.',
  info: [
    { fieldName: 'Name', fieldValue: 'Islam Mohamed Wheed' },
    { fieldName: 'Phone', fieldValue: '+20 1017646512' },
    { fieldName: 'Experience', fieldValue: '10+ years' },
    { fieldName: 'Nationality', fieldValue: 'Egyptian' },
    { fieldName: 'Email', fieldValue: 'islammohammedwheed@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
  ],
};

const experience = {
  title: 'My Experience',
  description: '10+ years of hands-on leadership in ERP, SAP S/4HANA, and digital transformation initiatives.',
  items: [
    { company: 'El Kammar Group for Food Industry', position: 'SAP S/4HANA Team Lead', duration: 'June 2024 – Present' },
    { company: 'El Kammar Group', position: 'Team Lead – Customized ERP Software', duration: 'Nov 2023 – June 2024' },
    { company: 'El Kammar Group', position: 'Salesforce Software Project Team Lead', duration: 'Feb 2020 – Nov 2023' },
    { company: 'El Kammar Group', position: 'Software Business Analyst', duration: 'Apr 2017 – Feb 2020' },
    { company: 'Smart for Home Appliances', position: 'Accountant', duration: 'Apr 2016 – Apr 2017' },
    { company: 'Omega Soft Projects Co.', position: 'ERP Implementor Team Lead', duration: 'Jul 2013 – Feb 2016' },
    { company: 'Omega Soft Projects Co.', position: 'ERP System Implementer', duration: 'Apr 2013 – Jul 2013' },
  ],
};

const education = {
  title: 'My Education',
  description: 'Commerce graduate with extensive training in SAP, business analysis, and ERP project delivery.',
  items: [
    { institution: 'Benha University', degree: 'Bachelor of Commerce (Accounting and Finance)', duration: '2009 – 2012' },
  ],
};

const skills = {
  title: 'My Skills',
  description: 'Split into technical and soft skills reflecting hands-on ERP and leadership experience.',
  technical: [
    'SAP S/4HANA Implementation',
    'ERP System Architecture',
    'Custom ERP Development',
    'Oracle E-Business Suite',
    'Salesforce CRM Customization',
    'SQL & Data Modeling',
    'Business Intelligence & Reporting (Power BI / SAP BI)',
    'UAT & Integration Testing',
    'Financial Systems (AP/AR/GL)',
    'Workflow Automation Tools',
    'Requirement Engineering Tools (e.g., Signavio, Lucidchart)',
    'SAP Activate / Solution Manager'
  ],
  soft: [
    'Stakeholder Management',
    'Cross-functional Team Leadership',
    'Agile / Scrum Collaboration',
    'Problem Solving',
    'Critical Thinking',
    'Effective Communication',
    'Change Management',
    'User Training & Support',
    'Time Management',
    'Conflict Resolution',
    'Strategic Planning'
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60'>{experience.description}</p>
                <ul>
                  {experience.items.map((item, index) => (
                    <li key={index} className='bg-[#232329] m-3 py-6 px-10 rounded-xl'>
                      <span className='text-emerald-500'>{item.duration}</span>
                      <h3>{item.position}</h3>
                      <p>{item.company}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value='education'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                    {education.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] m-3 py-6 px-10 rounded-xl'>
                        <span className='text-emerald-500'>{item.duration}</span>
                        <h3>{item.degree}</h3>
                        <p>{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60'>{skills.description}</p>
                <div>
                  <h4 className='text-2xl font-semibold mt-4 mb-2'>Technical Skills</h4>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 p-3'>
                    {skills.technical.map((item, index) => (
                      <li key={index} className='bg-[#232329] p-4 rounded-xl text-center'>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='text-2xl font-semibold mt-4 mb-2'>Soft Skills</h4>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 p-3'>
                    {skills.soft.map((item, index) => (
                      <li key={index} className='bg-[#232329] p-4 rounded-xl text-center'>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value='about'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6'>
                  {about.info.map((item, index) => (
                    <li key={index} className='flex items-center gap-4'>
                      <span className='text-white/60'>{item.fieldName}:</span>
                      <span className='text-lg'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;