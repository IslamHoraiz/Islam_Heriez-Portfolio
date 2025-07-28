'use client';

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
// **تم التعديل: إضافة FaWhatsapp**
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+20 1017646512",
    href: "tel:+201017646512", // **تم التعديل: رابط الاتصال المباشر**
  },
  {
    icon: <FaWhatsapp />, // **تم الإضافة: أيقونة واتساب**
    title: "WhatsApp", // **تم الإضافة: عنوان واتساب**
    description: "+20 1017646512", // **تم الإضافة: وصف رقم الواتساب**
    href: "https://wa.me/201017646512", // **تم الإضافة: رابط الواتساب**
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "islammohammedwheed@gmail.com",
    href: "mailto:islammohammedwheed@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Toukh, Al Qalyubiyah, Egypt",
    href: "https://www.google.com/maps/search/Toukh,+Al+Qalyubiyah,+Egypt",
  },
];

const services = [
  "ERP Architecture & Integration",
  "SAP S/4HANA Project Leadership",
  "ERP Business Analysis",
  "Software & Functional Analysis",
  "Business Process Re-Engineering",
  "Cross-Functional Coordination",
  "UAT & Stakeholder Enablement",
  "ERP Technical Documentation & Enablement",
  "ERP Instructor & Bootcamp Leader",
  "Corporate & Academic Training"
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xanbopal");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' } }}
      className="p-6 xl:p-10"
    >
      <div className="container mx-auto max-w-7xl rounded-4xl">
        <div className="flex flex-col xl:flex-row gap-16">
          {/* --- Contact Form --- */}
          <div className="w-full xl:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#1f1f22] rounded-xl shadow-md"
            >
              <h3 className="text-4xl text-emerald-500 font-bold">Let's work together</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                As an ERP Project Leader and SAP S/4HANA Implementation Expert, I help businesses streamline operations, adopt digital solutions, and deliver real value from ERP investments. Drop a message to start your transformation journey.
              </p>

              {/* --- Input Fields --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  required
                  aria-label="First name"
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  required
                  aria-label="Last name"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  aria-label="Email address"
                />
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  aria-label="Phone number"
                />
              </div>

              {/* --- Select Service --- */}
              <Select name="service" required>
                <SelectTrigger className="w-full" aria-label="Select a service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* --- Message --- */}
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="h-[160px]"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              {/* --- Submit Button --- */}
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>

              {/* --- Success Message --- */}
              {state.succeeded && (
                <p className="text-green-400 mt-4 text-sm text-center">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* --- Contact Info --- */}
          <div className="w-full xl:w-1/3 flex flex-col gap-8 p-10 bg-[#232326] rounded-xl shadow-md">
            <h3 className="text-3xl text-emerald-500 font-bold">Contact Info</h3>
            <ul className="flex flex-col gap-6">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <span className="text-emerald-500 text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-emerald-500 transition-colors duration-300"
                    >
                      <p>{item.description}</p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;