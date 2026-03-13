import { useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// --- ASSETS ---
import DICT_EthicalHacking from "../../assets/dict_cert.png";
import AzureML_Cert from "../../assets/azure_cert.png";
import Udemy_HtmlCss from "../../assets/udemy_cert.png";
import GDSC_ML_Kickoff from "../../assets/gdsc_intro_to_ml.png";
import GDSC_WMSU_Info from "../../assets/gdsc_info_session_wmsu.jpg";
import GDSC_Tuguegarao_Info from "../../assets/gdsc_info_session_tuguegarao.jpg";

const AchievementsCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const certsRef = useRef(null);

  const certifications = [
    {
      name: "Ethical Hacking: Understanding the Thin Line",
      org: "DICT (Department of Information and Communications Technology)",
      type: "Webinar Certificate",
      color: "text-blue-500",
      image: DICT_EthicalHacking,
    },
    {
      name: "Introduction to Azure Machine Learning",
      org: "Microsoft/Workshop",
      type: "Training Completion",
      color: "text-green-500",
      image: AzureML_Cert,
    },
    {
      name: "HTML & CSS Certification Course for Beginners",
      org: "Udemy",
      type: "Course Completion",
      color: "text-purple-500",
      image: Udemy_HtmlCss,
    },
    {
      name: "Info Session: Kickoff & Intro to Machine Learning",
      org: "GDSC Club Philippines",
      type: "Workshop Participation",
      color: "text-orange-500",
      image: GDSC_ML_Kickoff,
    },
    {
      name: "GDSC Info Session at WMSU",
      org: "Google Developer Student Clubs - WMSU",
      type: "Info Session Participation",
      color: "text-red-500",
      image: GDSC_WMSU_Info,
    },
    {
      name: "GDSC Info Session at Tuguegarao",
      org: "Google Developer Student Clubs - Tuguegarao",
      type: "Info Session Participation",
      color: "text-indigo-500",
      image: GDSC_Tuguegarao_Info,
    },
  ];

  const showScrollIndicator =
    certsRef.current &&
    certsRef.current.scrollHeight > certsRef.current.clientHeight;

  return (
    <>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl glass-card p-6 flex flex-col"
        style={{ height: "350px" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-heading font-bold text-foreground">
            Achievements
          </h2>
        </div>

        <div
          ref={certsRef}
          className="overflow-y-auto pr-1 custom-scrollbar flex-1"
        >
          <div className="space-y-2 pb-1">
            {certifications.map((cert, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(cert.image)}
                className="group w-full flex items-center p-3 rounded-xl
                bg-secondary/20 hover:bg-secondary/40
                border border-transparent hover:border-border
                transition-all duration-300 text-left cursor-pointer"
              >
                <div className="flex items-start w-full">
                  <div className="flex-1 pr-6">
                    <span className="text-sm font-medium leading-snug text-foreground/80 group-hover:text-foreground block">
                      {cert.name}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      {cert.org}
                    </span>
                    <span className="text-[10px] text-muted-foreground/80 block mt-2">
                      {cert.type}
                    </span>
                  </div>

                  <ExternalLink
                    className="w-3 h-3 text-muted-foreground opacity-30
                    group-hover:opacity-100 transition-all duration-300
                    flex-shrink-0"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {showScrollIndicator && (
          <div className="mt-2 pt-2 text-xs text-center text-muted-foreground/70 border-t border-border/50">
            Scroll to see more
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-lg shadow-2xl"
            >
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AchievementsCard;