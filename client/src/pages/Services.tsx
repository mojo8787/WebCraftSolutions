import { motion } from "framer-motion";
import ServiceCard from "@/components/sections/ServiceCard";
import {
  Brain,
  Code,
  Database,
  Cpu,
  Bot,
  BarChart,
  Cloud,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description:
        "Custom AI solutions including machine learning models, natural language processing, and computer vision systems.",
    },
    {
      icon: Code,
      title: "App Development",
      description:
        "Full-stack web and mobile application development using modern frameworks and technologies.",
    },
    {
      icon: Database,
      title: "Data Services",
      description:
        "Data management, analytics, and visualization solutions to help you make data-driven decisions.",
    },
    {
      icon: Cpu,
      title: "IT Solutions",
      description:
        "Comprehensive IT infrastructure management and support services.",
    },
    {
      icon: Bot,
      title: "Process Automation",
      description:
        "Robotic Process Automation (RPA) and workflow optimization solutions.",
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description:
        "Advanced analytics and reporting tools to gain insights from your data.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Cloud migration, management, and optimization services for scalable infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive technology solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;