
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=exitpopup&utm_campaign=sua_renda";

  useEffect(() => {
    // Set up the exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if the mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
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

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-bold">🎁 Bônus 1: Aulas ao vivo 3x por semana</p>
                  <p className="text-gray-600 dark:text-gray-400 line-through">Valor: R$2.000,00</p>
                  <p className="font-bold text-renda">GRÁTIS para você!</p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-bold">🎯 Bônus 2: Método rápido para fechar clientes</p>
                  <p className="text-gray-600 dark:text-gray-400 line-through">Valor: R$97,00</p>
                  <p className="font-bold text-renda">GRÁTIS para você!</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 line-through mb-1">
                  Valor normal: R$997,00
                </p>
                <p className="text-2xl font-bold mb-2">
                  Hoje: <span className="text-renda">R$697,00</span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  ou 12x de R$67,92 no cartão
                </p>
                
                <a 
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full py-4 px-6 text-xl font-bold uppercase tracking-wider bg-renda text-black rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-[pulse_3s_ease-in-out_infinite]">
                    APROVEITAR OFERTA ESPECIAL
                  </button>
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

