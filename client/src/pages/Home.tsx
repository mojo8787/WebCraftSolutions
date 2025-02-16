import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import { Brain, Code, Database, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions to automate and optimize your business processes.",
    },
    {
      icon: Code,
      title: "App Development",
      description: "Modern web and mobile applications built with cutting-edge technology.",
    },
    {
      icon: Database,
      title: "Data Services",
      description: "Comprehensive data management and analytics solutions.",
    },
    {
      icon: Cpu,
      title: "IT Solutions",
      description: "End-to-end IT services and infrastructure management.",
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              Comprehensive solutions for your digital transformation needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
