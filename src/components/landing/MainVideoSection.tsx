
import { ResponsiveContainer } from "../ResponsiveContainer";
import { VideoPlayer } from "../VideoPlayer";
import { CTAButton } from "../CTAButton";
import { motion } from "framer-motion";

export function MainVideoSection() {
  const mainVideoUrl = "https://www.youtube.com/embed/kq8K_CYZXGU?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fsuarendadigitalemcasa.com.br&widgetid=1";
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=cta&utm_campaign=sua_renda";

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <ResponsiveContainer>
        <div className="flex flex-col items-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto"
          >
            <VideoPlayer 
              url={mainVideoUrl} 
              light={true}
              className="shadow-2xl shadow-renda/20 rounded-xl border-2 border-renda/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Assista agora e descubra como pessoas comuns estão conquistando a independência financeira
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Um novo método que está ajudando mais de 3.500 alunos a gerar renda extra, mesmo sem experiência prévia, 
              a partir do conforto de suas casas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton size="lg" pulse arrow>
                QUERO COMEÇAR AGORA
              </CTAButton>
              
              <p className="text-sm text-gray-400 mt-2 sm:mt-0">
                Oferta por tempo limitado. Garanta sua vaga!
              </p>
            </div>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
