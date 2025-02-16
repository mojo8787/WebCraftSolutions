import { motion } from "framer-motion";
import ServiceCard from "@/components/sections/ServiceCard";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Brain,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
    },
    {
      icon: Code,
      title: t('services.items.app.title'),
      description: t('services.items.app.description'),
    },
    {
      icon: Database,
      title: t('services.items.data.title'),
      description: t('services.items.data.description'),
    },
    {
      icon: Cpu,
      title: t('services.items.it.title'),
      description: t('services.items.it.description'),
    },
    {
      icon: Bot,
      title: "Process Automation",
      description: "Robotic Process Automation (RPA) and workflow optimization solutions.",
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to gain insights from your data.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, management, and optimization services for scalable infrastructure.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h1 className="text-4xl font-bold text-gray-900">{t('services.title')}</h1>
          <p className="mt-4 text-xl text-gray-600">
            {t('services.subtitle')}
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