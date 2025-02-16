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
  Wifi,
  Building2,
  Factory,
  Building,
  Stethoscope
} from "lucide-react";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const mainServices = [
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
  ];

  const iotSolutions = [
    {
      icon: Wifi,
      title: t('services.items.iot.sections.devices.title'),
      description: t('services.items.iot.sections.devices.description'),
    },
    {
      icon: Bot,
      title: t('services.items.iot.sections.control.title'),
      description: t('services.items.iot.sections.control.description'),
    },
    {
      icon: BarChart,
      title: t('services.items.iot.sections.analytics.title'),
      description: t('services.items.iot.sections.analytics.description'),
    }
  ];

  const iotApplications = [
    {
      icon: Building2,
      title: t('services.items.iot.applications.buildings.title'),
      description: t('services.items.iot.applications.buildings.description'),
    },
    {
      icon: Factory,
      title: t('services.items.iot.applications.industrial.title'),
      description: t('services.items.iot.applications.industrial.description'),
    },
    {
      icon: Building,
      title: t('services.items.iot.applications.cities.title'),
      description: t('services.items.iot.applications.cities.description'),
    },
    {
      icon: Stethoscope,
      title: t('services.items.iot.applications.healthcare.title'),
      description: t('services.items.iot.applications.healthcare.description'),
    }
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

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
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

        {/* IoT Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h2 className="text-3xl font-bold text-gray-900">{t('services.items.iot.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('services.items.iot.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {iotSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...solution} />
            </motion.div>
          ))}
        </div>

        {/* IoT Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {iotApplications.map((application, index) => (
            <motion.div
              key={application.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...application} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;