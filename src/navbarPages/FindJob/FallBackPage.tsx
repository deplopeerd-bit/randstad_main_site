import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface FallbackPageProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

export function FallbackPage({
  title = "oops! something went wrong.",
  message = "The page you are looking for is not available or does not contain any content.",
  showHomeButton = true,
}: FallbackPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-[#f5f5f0] px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#2175e3]/10 flex items-center justify-center">
              <AlertTriangle size={40} className="text-[#2175e3]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-[#00214c] mb-6">
            {title}
          </h1>

          {/* Message */}
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-[#2175e3] text-white font-medium hover:bg-[#1a5eb8] transition-colors flex items-center justify-center gap-2"
            >
              <Home size={18} />
              back to homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 border border-[#00214c] text-[#00214c] hover:bg-[#00214c] hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              go back
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}