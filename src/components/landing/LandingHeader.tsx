
import { ResponsiveContainer } from "../ResponsiveContainer";
import { CTAButton } from "../CTAButton";
import { motion } from "framer-motion";

export function LandingHeader() {
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=cta&utm_campaign=sua_renda";

  return (
    <header className="bg-black text-white py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-90 z-0"></div>
      
      <ResponsiveContainer className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 py-12 md:py-16">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 gradient-text">
              SUA RENDA EM CASA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Descubra como <span className="font-bold text-renda">gerar renda extra a partir do conforto da sua casa</span>, mesmo sem experiência prévia
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full max-w-3xl"
          >
            <div className="bg-gradient-to-r from-renda/20 to-rendaGold/20 backdrop-blur-sm p-6 rounded-lg border border-renda/30">
              <p className="text-lg md:text-xl mb-4">
                <span className="font-bold text-renda">Mais de 3.500 alunos</span> já transformaram suas vidas financeiras com nosso método
              </p>
              <p className="text-lg md:text-xl font-bold">
                🔥 Vagas Limitadas: Acesso para nova turma disponível por tempo limitado!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CTAButton size="lg" pulse arrow className="mt-6">
              COMECE AGORA
            </CTAButton>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
