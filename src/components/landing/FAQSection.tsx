
import { ResponsiveContainer } from "../ResponsiveContainer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-medium text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 dark:text-gray-300">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Isso varia de pessoa para pessoa, dependendo da dedicação e aplicação do método. Temos alunos que começaram a ver resultados já na primeira semana, enquanto outros levaram cerca de 1 a 2 meses. O importante é seguir o passo a passo e aplicar as estratégias consistentemente.",
      value: "item-1"
    },
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! O treinamento foi desenvolvido pensando em iniciantes. Ensinamos tudo do zero, de forma detalhada e com suporte para tirar suas dúvidas. Você não precisa ter conhecimento técnico ou experiência anterior.",
      value: "item-2"
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos que você dedique pelo menos 1 hora por dia nos primeiros 30 dias para absorver o conteúdo e começar a implementar. Depois desse período inicial, você pode ajustar sua rotina conforme seus objetivos e disponibilidade.",
      value: "item-3"
    },
    {
      question: "O que acontece depois da compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à plataforma do curso. Lá você encontrará todas as aulas, materiais de apoio e acesso à comunidade privada. O suporte também estará disponível para ajudar em qualquer questão técnica.",
      value: "item-4"
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos uma garantia incondicional de 7 dias. Se durante este período você sentir que o treinamento não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem perguntas. Além disso, se você aplicar o método e não tiver resultados, devolvemos seu dinheiro + R$100.",
      value: "item-5"
    },
    {
      question: "Posso assistir às aulas no celular?",
      answer: "Sim! Nossa plataforma é totalmente responsiva, permitindo que você assista às aulas em qualquer dispositivo. No entanto, para realizar as atividades práticas, recomendamos o uso de um computador ou notebook para maior conforto e produtividade.",
      value: "item-6"
    }
  ];

  // Add schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
            Perguntas <span className="text-renda">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o treinamento
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                value={faq.value}
              />
            ))}
          </Accordion>
        </motion.div>

        {/* Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      </ResponsiveContainer>
    </section>
  );
}
