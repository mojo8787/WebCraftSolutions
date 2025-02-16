import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">{t('hero.title')}</span>{" "}
                <span className="block text-primary">{t('hero.subtitle')}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
              >
                {t('hero.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`mt-5 sm:mt-8 sm:flex ${isRTL ? 'sm:justify-center lg:justify-end' : 'sm:justify-center lg:justify-start'} ${isRTL ? 'space-x-reverse' : ''}`}
              >
                <div className="rounded-md shadow">
                  <Button asChild size="lg">
                    <Link href="/contact">{t('hero.cta.primary')}</Link>
                  </Button>
                </div>
                <div className={`mt-3 sm:mt-0 ${isRTL ? 'sm:mr-3' : 'sm:ml-3'}`}>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">{t('hero.cta.secondary')}</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;