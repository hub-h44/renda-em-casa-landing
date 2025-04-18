
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
      name: "Thiago Souza",
      role: "Fundador e Mentor Principal",
      bio: "Especialista em marketing digital e empreendedorismo online, Thiago ajudou mais de 3.500 alunos a conquistarem independência financeira.",
      image: "",
      achievements: [
        "Gerou mais de R$5 milhões em vendas online nos últimos 3 anos",
        "Criou um método exclusivo para trabalhar de casa com resultados reais",
        "Mentoria para mais de 3.500 alunos com histórias de sucesso comprovadas"
      ]
    },
    {
      name: "Nathalia Martins",
      role: "Especialista em Marketing Digital",
      bio: "Com expertise em estratégias de marketing e vendas online, Nathalia traz métodos práticos e atualizados para o mundo digital.",
      image: "",
      achievements: [
        "Especialista em tráfego pago com mais de R$1 milhão em ROI para clientes",
        "Desenvolveu estratégias utilizadas por grandes empresas do mercado",
        "Professora convidada em eventos internacionais de marketing digital"
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
