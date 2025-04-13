// components/ServiceCard.tsx
import { Link } from "react-router-dom";
import { motion } from "motion/react" // ✅ Framer Motion

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  to,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // ⬇️ Empieza invisible y desplazado hacia abajo
      whileInView={{ opacity: 1, y: 0 }} // ⬆️ Cuando entra en vista: aparece y sube
      viewport={{ once: true, amount: 0.2 }} // ✅ Solo una vez, cuando 20% esté visible
      transition={{ delay: delay / 1000, duration: 0.6, ease: "easeOut" }} // 🔁 Delay y duración
    >
      <Link
        to={to}
        className="group bg-white dark:bg-gray-800 p-8 rounded-2xl 
        shadow-[inset_4px_4px_10px_#e0e0e0,inset_-4px_-4px_10px_#ffffff] 
        dark:shadow-[inset_4px_4px_10px_#1f1f1f,inset_-4px_-4px_10px_#2e2e2e]
        transition-all hover:scale-105 hover:shadow-xl"
      >
        <div
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center 
          rounded-full bg-gradient-to-br from-cyan-200 via-cyan-300 to-cyan-400 
          text-white shadow-md transition-transform duration-300 group-hover:rotate-2"
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
      </Link>
    </motion.div>
  );
}
