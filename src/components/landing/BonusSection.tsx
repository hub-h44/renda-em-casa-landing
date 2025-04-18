import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

interface BonusCardProps {
  number: number;
  title: string;
  description: string;
  originalValue: string;
  image?: string;
  delay: number;
}

function BonusCard({ number, title, description, originalValue, image, delay }: BonusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bonus-card relative"
    >
      <div className="absolute -top-4 -right-4 bg-renda text-black font-bold py-1 px-3 rounded-full transform rotate-12">
        Bônus #{number}
      </div>
      
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">Valor original:</div>
          <div className="text-lg font-bold text-gray-500 line-through">{originalValue}</div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-sm text-renda-dark font-bold">Hoje:</div>
          <div className="text-lg font-bold text-renda">GRÁTIS</div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "57%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className="bg-renda h-2.5 rounded-full"
          ></motion.div>
        </div>
        <p className="text-sm text-gray-500 mt-1">57% das vagas já preenchidas</p>
      </div>
    </motion.div>
  );
}

export function BonusSection() {
  const bonuses = [
    {
      number: 1,
      title: "Aulas ao vivo 3 vezes por semana",
      description: "Acesso exclusivo às aulas ao vivo para tirar dúvidas e acelerar seu aprendizado.",
      originalValue: "R$ 2.000,00",
      image: "", // Add image path if needed
    },
    {
      number: 2,
      title: "Aprenda o caminho para fechar seus primeiros clientes em tempo recorde",
      description: "Você quer ter clientes que te pagam todos os meses prestando serviços? Neste bônus você entenderá como fechar cada vez mais clientes em tempo recorde.",
      originalValue: "R$ 97,00",
      image: "", // Add image path if needed
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-rendaGold/10 to-renda/10">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-renda text-black font-bold py-2 px-4 rounded-lg mb-4">
            <Gift className="inline-block mr-2" size={20} />
            BÔNUS EXCLUSIVOS
          </div>
          <h2 className="section-title">
            Bônus exclusivos para <span className="text-renda">acelerar</span> seus resultados
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ao adquirir o treinamento hoje, você receberá esses bônus especiais sem custo adicional:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              number={bonus.number}
              title={bonus.title}
              description={bonus.description}
              originalValue={bonus.originalValue}
              image={bonus.image}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-bold mb-6">
            Valor total dos bônus: <span className="text-renda">R$ 2.097,00</span>
          </p>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg inline-block">
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
              ⚠️ Atenção: Estes bônus têm vagas limitadas e podem ser retirados a qualquer momento!
            </p>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </section>
  );
}
