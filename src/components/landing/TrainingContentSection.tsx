
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Check, BookOpen, Video, FileText, Users, Clock } from "lucide-react";

interface ContentItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function ContentItem({ icon, title, description, index }: ContentItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
    >
      <div className="p-2 rounded-full bg-renda/10 text-renda">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export function TrainingContentSection() {
  const contentItems = [
    {
      icon: <Video />,
      title: "Mais de 40 vídeos passo a passo",
      description: "Aulas detalhadas com todo o processo explicado do básico ao avançado."
    },
    {
      icon: <BookOpen />,
      title: "Material de apoio completo",
      description: "Planilhas, checklists e guias para você aplicar tudo imediatamente."
    },
    {
      icon: <Users />,
      title: "Comunidade privada",
      description: "Grupo exclusivo para alunos, onde você pode tirar dúvidas e networking."
    },
    {
      icon: <FileText />,
      title: "Templates prontos",
      description: "Modelos e scripts prontos para você começar sem perder tempo."
    },
    {
      icon: <Clock />,
      title: "Acesso vitalício",
      description: "Acesso a todas as atualizações futuras do treinamento sem custo adicional."
    },
    {
      icon: <Check />,
      title: "Suporte personalizado",
      description: "Tire suas dúvidas diretamente com nossa equipe para avançar mais rápido."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            O QUE ESTÁ <span className="text-renda">INCLUÍDO</span> NO TREINAMENTO
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tudo o que você precisa para começar sua jornada de sucesso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentItems.map((item, index) => (
            <ContentItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
}
