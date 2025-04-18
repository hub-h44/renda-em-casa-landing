
import { useState } from "react";
import { ResponsiveContainer } from "../ResponsiveContainer";
import { VideoPlayer } from "../VideoPlayer";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface TestimonialCardProps {
  name: string;
  image: string;
  videoUrl: string;
  quote: string;
  stars: number;
  occupation?: string;
}

function TestimonialCard({ name, image, videoUrl, quote, stars, occupation }: TestimonialCardProps) {
  return (
    <Dialog>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <DialogTrigger className="cursor-pointer">
          <div className="relative">
            {/* Use YouTube thumbnail as image */}
            <img 
              src={image || `https://i.ytimg.com/vi/${videoUrl.split("v=")[1]}/hqdefault.jpg`} 
              alt={`Depoimento de ${name}`} 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-renda flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-8 h-8 text-white ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </DialogTrigger>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-2">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 italic mb-4 line-clamp-3">"{quote}"</p>
          
          <div className="mt-auto">
            <p className="font-bold text-lg">{name}</p>
            {occupation && <p className="text-gray-500 text-sm">{occupation}</p>}
          </div>
        </div>
      </div>
      
      <DialogContent className="max-w-4xl p-1 bg-black">
        <VideoPlayer url={videoUrl} />
      </DialogContent>
    </Dialog>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      image: "",
      videoUrl: "https://www.youtube.com/watch?v=m2POK9C6MYw",
      quote: "Comecei do zero, sem experiência e em apenas 2 meses já consegui resultados incríveis. O método é simples e funciona.",
      stars: 5,
      occupation: "Designer"
    },
    {
      name: "Mariana Costa",
      image: "",
      videoUrl: "https://www.youtube.com/watch?v=94vv40py55I",
      quote: "Estava cética no início, mas depois de aplicar o método vi minha renda crescer consistentemente. Recomendo muito!",
      stars: 5,
      occupation: "Professora"
    },
    {
      name: "Paulo Mendes",
      image: "",
      videoUrl: "https://www.youtube.com/watch?v=uHZW96gjU2k",
      quote: "Já tentei diversos outros cursos, mas este realmente entrega o que promete. Em 3 semanas tive meus primeiros resultados.",
      stars: 5,
      occupation: "Empresário"
    },
    {
      name: "Juliana Santos",
      image: "",
      videoUrl: "https://www.youtube.com/watch?v=I8OAvaDnVI4",
      quote: "Consegui deixar meu emprego e hoje trabalho de casa com muito mais liberdade. Melhor investimento que já fiz.",
      stars: 5,
      occupation: "Analista"
    }
  ];

  // Simple carousel logic
  const [currentIdx, setCurrentIdx] = useState(0);
  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextSlide = () => {
    if (currentIdx < testimonials.length - itemsPerPage) {
      setCurrentIdx(prev => prev + itemsPerPage);
    } else {
      setCurrentIdx(0);
    }
  };
  
  const prevSlide = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - itemsPerPage);
    } else {
      setCurrentIdx(Math.max(0, testimonials.length - itemsPerPage));
    }
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
            O QUE OS <span className="text-renda">ALUNOS</span> ESTÃO DIZENDO
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Veja os resultados reais alcançados pelos nossos alunos
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIdx * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-1/3 flex-shrink-0 p-3"
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {Array(totalPages).fill(0).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === Math.floor(currentIdx / itemsPerPage) ? 'bg-renda' : 'bg-gray-300 dark:bg-gray-700'}`}
                onClick={() => setCurrentIdx(i * itemsPerPage)}
                aria-label={`Ir para página ${i + 1} de depoimentos`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg text-center">
          <p className="text-lg font-medium mb-2">Satisfação garantida ou seu dinheiro de volta</p>
          <p className="text-gray-600 dark:text-gray-300">
            Todos esses resultados são reais. E você pode ser o próximo caso de sucesso!
          </p>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
