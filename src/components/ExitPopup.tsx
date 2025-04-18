import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { X } from "lucide-react";

export function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=exitpopup&utm_campaign=sua_renda";

  useEffect(() => {
    // Set up the exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if the mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown && document.body.scrollTop > 100) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Also trigger after a certain amount of time on the page
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    }, 40000); // 40 seconds

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
            
            <div className="bg-gradient-to-r from-renda/20 to-rendaGold/20 p-6">
              <h3 className="text-2xl font-bold text-center">
                Espere! Oferta Especial <span className="text-renda">Exclusiva</span>
              </h3>
            </div>
            
            <div className="p-6">
              <p className="text-lg mb-4">
                Para você que chegou até aqui, temos uma condição especial: 
                <strong className="text-renda"> 30% OFF</strong> nas próximas 24 horas!
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
                <p className="font-medium text-center">
                  ⏱️ Esta oferta expira em <span className="font-bold">24 horas</span>
                </p>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-300 line-through mb-1">
                  Valor normal: R$997,00
                </p>
                <p className="text-2xl font-bold">
                  Hoje: <span className="text-renda">R$697,00</span>
                </p>
                <p className="text-sm text-gray-500">
                  ou 12x de R$67,92 no cartão
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto"
                >
                  <CTAButton 
                    size="lg" 
                    pulse 
                    arrow 
                    className="w-full whitespace-normal py-4 px-6 text-base md:text-xl animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                  >
                    APROVEITAR OFERTA ESPECIAL
                  </CTAButton>
                </a>
                
                <button 
                  onClick={() => setShowPopup(false)}
                  className="mt-4 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Não, prefiro pagar o valor integral mais tarde
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
