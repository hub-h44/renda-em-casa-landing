
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function TargetAudienceSection() {
  const forYou = [
    "Pessoas que querem uma fonte de renda extra trabalhando de casa",
    "Quem deseja mais liberdade de tempo e localização",
    "Iniciantes sem experiência prévia no mercado digital",
    "Profissionais que querem largar o emprego tradicional",
    "Empreendedores que buscam um novo modelo de negócio",
    "Quem quer resultados reais sem promessas milagrosas"
  ];

  const notForYou = [
    "Quem busca enriquecimento rápido sem esforço",
    "Pessoas que não estão dispostas a aplicar o método",
    "Quem não consegue dedicar pelo menos 1 hora por dia",
    "Quem busca uma fonte de renda passiva instantânea"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            PARA <span className="text-renda">QUEM</span> É ESTE TREINAMENTO?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra se esse método é ideal para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800"
          >
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">
              Este treinamento é para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800"
          >
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 text-center">
              Este treinamento NÃO é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 rounded-full bg-red-500/20 text-red-600 dark:text-red-400">
                    <X size={20} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
