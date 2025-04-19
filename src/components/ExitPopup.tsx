
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPopup(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl my-4"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors z-10 shadow-lg"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
            
            <div className="bg-gradient-to-r from-renda/20 to-rendaGold/20 p-4">
              <h3 className="text-xl font-bold text-center">
                Espere! Oferta Especial <span className="text-renda">Exclusiva</span>
              </h3>
            </div>
            
            <div className="p-4 space-y-4">
              <p className="text-base">
                Para você que chegou até aqui, temos uma condição especial: 
                <strong className="text-renda"> 30% OFF</strong> nas próximas 24 horas!
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="font-medium text-center text-sm">
                  ⏱️ Esta oferta expira em <span className="font-bold">24 horas</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-bold text-sm">🎁 Bônus 1: Aulas ao vivo 3x por semana</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-through">Valor: R$2.000,00</p>
                  <p className="font-bold text-renda text-sm">GRÁTIS para você!</p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-bold text-sm">🎯 Bônus 2: Método rápido para fechar clientes</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-through">Valor: R$97,00</p>
                  <p className="font-bold text-renda text-sm">GRÁTIS para você!</p>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-through">
                  Valor normal: R$3.997,00
                </p>
                <p className="text-xl font-bold">
                  Hoje: <span className="text-renda">12x de R$9,74</span>
                </p>
                <p className="text-xs text-gray-500">
                  Ou R$97,00 à vista!
                </p>
                
                <a 
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4"
                >
                  <button className="w-full py-3 px-4 text-lg font-bold uppercase tracking-wider bg-renda text-black rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-[pulse_3s_ease-in-out_infinite]">
                    APROVEITAR OFERTA ESPECIAL
                  </button>
                </a>
                
                <button 
                  onClick={() => setShowPopup(false)}
                  className="mt-3 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
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
