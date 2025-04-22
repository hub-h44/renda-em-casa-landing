
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <ResponsiveContainer>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para <span className="text-renda">transformar</span> sua vida financeira?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Não espere mais para conquistar sua independência financeira e liberdade. 
              Comece hoje mesmo a construir um futuro melhor trabalhando do conforto da sua casa.
            </p>
            
            <CTAButton size="lg" pulse arrow>
              QUERO COMEÇAR AGORA
            </CTAButton>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">SUA RENDA EM CASA</h3>
              <p className="text-gray-400 text-sm">
                Transformando vidas através da independência financeira.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-renda transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-renda transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-renda transition-colors">Reembolso</a>
              <a href="#" className="hover:text-renda transition-colors">Suporte</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              © {currentYear} Sua Renda em Casa. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Este site não é afiliado ao Facebook, Google ou qualquer entidade do Meta. 
              Ao acessar este site, você concorda com os nossos Termos e Condições.
            </p>
            <p className="mt-2">
              <strong>Aviso Legal:</strong> Os resultados apresentados não são garantidos e podem variar de pessoa para pessoa, 
              dependendo de vários fatores individuais, incluindo dedicação, experiência prévia, e outros fatores externos.
            </p>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
