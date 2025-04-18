import { ResponsiveContainer } from "../ResponsiveContainer";
import { CTAButton } from "../CTAButton";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award } from "lucide-react";

export function InvestmentSection() {
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=cta&utm_campaign=sua_renda";

  return (
    <section className="py-16 bg-gray-900 text-white">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            SEU <span className="text-renda">INVESTIMENTO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invista em sua independência financeira hoje mesmo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Aprenda a gerar renda do conforto da sua casa
            </h3>
            
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-renda mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Garantia Incondicional de 7 Dias</h4>
                <p className="text-gray-300">
                  Se dentro de 7 dias você sentir que o treinamento não é para você,
                  basta solicitar o reembolso e devolvemos 100% do seu investimento + R$100 se não tiver resultados.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-renda mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Oferta por Tempo Limitado</h4>
                <p className="text-gray-300">
                  Este valor promocional estará disponível apenas para as próximas 50 vagas.
                  Após isso, o investimento voltará ao valor normal de R$1.997.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Award className="text-renda mt-1" size={24} />
              <div>
                <h4 className="font-bold text-lg">Acesso Vitalício</h4>
                <p className="text-gray-300">
                  Seu acesso nunca expira. Você terá acesso a todas as atualizações futuras sem custo adicional.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black to-gray-800 rounded-xl border border-gray-700 shadow-xl p-8"
          >
            <div className="text-center space-y-6">
              <p className="uppercase tracking-wider text-gray-400">Investimento único</p>
              
              <div>
                <p className="text-gray-400 line-through text-xl">De R$3.997,00 por</p>
                <div className="mt-1 flex items-center justify-center">
                  <p className="text-2xl mr-2">12x</p>
                  <p className="text-6xl font-bold text-renda">R$9,74</p>
                </div>
                <p className="text-gray-300 mt-1">ou R$97,00 à vista</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-lg">
                  🎁 <span className="font-bold">Hoje</span> você também ganha todos os <span className="text-renda font-bold">bônus exclusivos</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Valor total: R$2.097,00
                </p>
              </div>
              
              <a 
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full py-6 px-8 text-xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-renda-dark via-renda to-rendaGold text-black rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-gold">
                  QUERO GARANTIR MINHA VAGA AGORA
                </button>
              </a>
              
              <p className="text-sm text-gray-400">
                Pagamento 100% seguro via Kiwify. Parcelamento em até 12x no cartão.
              </p>
              
              <div className="pt-4 border-t border-gray-700">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "57%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-renda h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  57% das vagas já preenchidas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
