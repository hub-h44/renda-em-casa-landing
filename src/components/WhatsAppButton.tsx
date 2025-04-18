
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "5521999999999"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no treinamento Sua Renda em Casa e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entre em contato via WhatsApp"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white"
          >
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 018.413 3.488 11.81 11.81 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.924 11.924 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 0, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: -10, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, y: 0, x: "-50%" }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap mb-2"
            >
              <p className="text-sm font-medium">Dúvidas? Fale conosco!</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
