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
      question: "Por onde receberei o curso?",
      answer: "Após realizar sua inscrição, seu acesso será enviado diretamente em seu e-mail cadastrado.",
      value: "item-1"
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Você pode pagar via boleto, pix ou cartão de crédito em até 12x!",
      value: "item-2"
    },
    {
      question: "E se eu me arrepender?",
      answer: "Em caso de arrependimento, basta nos enviar uma mensagem que devolvemos todo o seu investimento em até 7 dias após sua compra.",
      value: "item-3"
    },
    {
      question: "Em quanto tempo terei resultados?",
      answer: "SE VOCÊ NÃO FIZER UMA NOVA RENDA DIGITAL EM 1 MÊS, DEVOLVO SEU DINHEIRO E AINDA TE DOU R$100 REAIS NO PIX",
      value: "item-4"
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
