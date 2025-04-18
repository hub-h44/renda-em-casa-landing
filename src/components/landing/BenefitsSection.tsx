
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Coins, MapPin, Clock } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="benefit-card bg-white dark:bg-gray-800"
    >
      <div className="mb-4 text-renda">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <ResponsiveContainer>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Com o treinamento você <span className="text-renda">conseguirá</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Três benefícios principais que vão transformar sua vida
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<Coins size={48} />}
            title="Liberdade Financeira"
            description="Aprenda a gerar renda consistente trabalhando do conforto da sua casa, com potencial de ganhos significativos já nos primeiros meses."
            delay={0.3}
          />
          <BenefitCard
            icon={<MapPin size={48} />}
            title="Liberdade Geográfica"
            description="Trabalhe de qualquer lugar, precisando apenas de um computador e conexão com internet. Viva onde sempre sonhou."
            delay={0.5}
          />
          <BenefitCard
            icon={<Clock size={48} />}
            title="Liberdade de Tempo"
            description="Defina seus próprios horários e tenha mais tempo para família, viagens e projetos pessoais enquanto sua renda cresce."
            delay={0.7}
          />
        </div>
      </ResponsiveContainer>
    </section>
  );
}
