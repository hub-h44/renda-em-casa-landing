
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TeacherCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  achievements: string[];
  index: number;
}

function TeacherCard({ name, role, bio, image, achievements, index }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={image || `/lovable-uploads/78529986-587d-4dab-8640-2c1a0a1aba30.png`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-renda font-medium mb-4">{role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{bio}</p>
        
        <h4 className="font-bold mb-2">Principais conquistas:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function TeachersSection() {
  const teachers = [
    {
      name: "Thiago Hora",
      role: "Empresário",
      bio: "Criador do Sua Renda em Casa que fatura múltiplos 6 dígitos ao mês com a venda de produtos físicos, digitais e serviços.",
      image: "https://s3.h44.site/n8nbucket/Sua-Renda-em-casa-pv-Sua-renda-em-casa-04-18-2025_11_39_PM.png",
      achievements: [
        "Criador do método Sua Renda em Casa",
        "Especialista em produtos físicos e digitais",
        "Expert em vendas de serviços"
      ]
    },
    {
      name: "Nathalia Narrima",
      role: "Empreendedora",
      bio: "Empresária e social media, especialista em vendas de serviços visuais.",
      image: "https://s3.h44.site/n8nbucket/Sua-Renda-em-casa-pv-Suaa-renda-em-casa-04-18-2025_11_39_PM.png",
      achievements: [
        "Especialista em social media",
        "Expert em vendas de serviços visuais",
        "Mentora de empreendedores digitais"
      ]
    }
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
            CONHEÇA SEUS <span className="text-renda">PROFESSORES</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprenda com quem já está vivendo a realidade que você deseja alcançar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              role={teacher.role}
              bio={teacher.bio}
              image={teacher.image}
              achievements={teacher.achievements}
              index={index}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
}
