import { useState, useRef } from "react";
import { Folder, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// WMSU Palaro images
import WMSUPalaro_1 from "../../assets/wmsu_palaro/1.jfif";
import WMSUPalaro_2 from "../../assets/wmsu_palaro/2.jfif";
import WMSUPalaro_3 from "../../assets/wmsu_palaro/3.jfif";
import WMSUPalaro_4 from "../../assets/wmsu_palaro/4.jfif";
import WMSUPalaro_5 from "../../assets/wmsu_palaro/4.jfif";

// M.A. Yazar images
import MAYazar_logo from "../../assets/ma_yazar/ma_yazar_logo.png";
import MAYazar_1 from "../../assets/ma_yazar/ma_yazar_1.jpg";
import MAYazar_2 from "../../assets/ma_yazar/ma_yazar_2.png";
import MAYazar_3 from "../../assets/ma_yazar/ma_yazar_3.png";
import MAYazar_4 from "../../assets/ma_yazar/ma_yazar_4.png";
import MAYazar_5 from "../../assets/ma_yazar/ma_yazar_5.png";
import MAYazar_6 from "../../assets/ma_yazar/ma_yazar_6.png";
import MAYazar_7 from "../../assets/ma_yazar/ma_yazar_7.png";

// byteSpace images
import ByteSpace_1 from "../../assets/byteSpace/byteSpace_1.jpg";
import ByteSpace_2 from "../../assets/byteSpace/byteSpace_2.jpg";

// Perso images
import Perso_1 from "../../assets/perso/perso_layout_1.webp";
import Perso_2 from "../../assets/perso/perso_layout_2.webp";
import Perso_3 from "../../assets/perso/perso_layout_3.webp";

// Crimson Map v2 images
import CrimsonMap_v2_1 from "../../assets/crimson_v2/crimson_v2_business_card.png";
import CrimsonMap_v2_2 from "../../assets/crimson_v2/crimson_v2_letterhead.png";
import CrimsonMap_v2_3 from "../../assets/crimson_v2/crimson_v2_merch.png";

// Crimson Map images
import CrimsonMapLogo_1 from "../../assets/crimson_map/crimson_map_logo.png";
import CrimsonMapLogo_2 from "../../assets/crimson_map/crimson_map_long.png";
import CrimsonMapOS_1 from "../../assets/crimson_map/crimson_os_1.png";
import CrimsonMapOS_2 from "../../assets/crimson_map/crimson_os_2.png";
import CrimsonMapOS_3 from "../../assets/crimson_map/crimson_os_3.png";
import CrimsonMapSS_1 from "../../assets/crimson_map/crimson_ss_1.png";
import CrimsonMapSS_2 from "../../assets/crimson_map/crimson_ss_2.png";
import CrimsonMapSS_3 from "../../assets/crimson_map/crimson_ss_3.png";
import CrimsonMapSS_4 from "../../assets/crimson_map/crimson_ss_4.png";
import CrimsonMapLanding from "../../assets/crimson_map/crimson_landing.png";
import CrimsonMapWholePage from "../../assets/crimson_map/crimson_web_whole_page.png";
import CrimsonMapAdmin_1 from "../../assets/crimson_map/crimson_admin_1.png";
import CrimsonMapAdmin_2 from "../../assets/crimson_map/crimson_admin_2.png";

// Libris images
import LibrisLogo1 from "../../assets/libris/libris_logo.png";
import LibrisLogo2 from "../../assets/libris/libris_long.png";

// Studya images
import StudyaLogo from "../../assets/studya/studya_io_logo.png";
import StudyaSS_1 from "../../assets/studya/studya_ss_1.png";
import StudyaSS_2 from "../../assets/studya/studya_ss_2.png";
import StudyaSS_3 from "../../assets/studya/studya_ss_3.png";
import StudyaSS_4 from "../../assets/studya/studya_ss_4.png";
import StudyaWholePage from "../../assets/studya/studya_whole_page.png";
import StudyaLanding from "../../assets/studya/studya_landing_1.png";

const devProjects = [
  {
    title: "Crimson Map",
    desc: "An Augmented Reality (AR) campus navigation system for WMSU, developed as our Capstone Project.",
    tags: ["Unity", "Augmented Reality", "Mapbox", "Mobile App"],
    link: "https://wmsucrimsonmapadmin.vercel.app/",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "studya.io",
    desc: "Study Aid App with Pomodoro Technique & Flashcards",
    tags: ["Mobile App", "Flutter"],
    link: "https://yzrsaid.github.io/studya.io.com/",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Al-Furqan Islamic Institute Enrollment and Academic Management System ",
    desc: "Madrasa Enrollment and Academic Management System",
    tags: ["Web App", "Vanilla HTML, JS, CSS"],
    link: "https://github.com/YzrSaid/Al-Furqan-Islamic-Institute-Enrollment-and-Academic-Management-System",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const designProjects = [
  {
    title: "Crimson Map Official",
    desc: "Logo, Web, and Mobile App Design of Crimson Map, an Augmented Reality (AR) Campus Navigation System for Western Mindanao State University.",
    tags: ["Logo", "Web", "Mobile"],
    images: [
      CrimsonMapLogo_1, CrimsonMapLogo_2, CrimsonMapOS_1, CrimsonMapOS_2, CrimsonMapOS_3, CrimsonMapSS_1, CrimsonMapSS_2, CrimsonMapSS_3, CrimsonMapSS_3, CrimsonMapSS_4, CrimsonMapLanding, CrimsonMapWholePage, CrimsonMapAdmin_1, CrimsonMapAdmin_2
    ],
  },
  {
    title: "Libris",
    desc: "Logo Design for a Bookstore/Library Company.",
    tags: ["Logo"],
    images: [
      LibrisLogo1, LibrisLogo2
    ],
  },
  {
    title: "byteSpace",
    desc: "Logo and branding design for ByteSpace, a cybersecurity tools website showcasing secure coding practices like cookie handling, salted password hashing, and session management.",
    tags: ["Logo"],
    images: [
      ByteSpace_1, ByteSpace_2
    ],
  },
  {
    title: "studya.io",
    desc: "Logo, Mobile, and Web App Design of studya.io, a Study Aid App with Pomodoro Technique & Flashcards.",
    tags: ["Logo", "Web", "Mobile"],
    images: [
      StudyaLogo, StudyaSS_1, StudyaSS_2, StudyaSS_3, StudyaSS_4, StudyaLanding, StudyaWholePage
    ],
  },
  {
    title: "Personal Layouts",
    desc: "These are my personal layouts during our Elective 4 Course Subject.",
    tags: ["Layout", "Photoshop"],
    images: [
      Perso_1, Perso_2, Perso_3
    ],
  },
  {
    title: "Crimson Map v2",
    desc: "These are my personal layouts for our proposed company, Crimson Map, during our Elective 4 Course Subject.",
    tags: ["Branding/Layout", "Photoshop", "Merch"],
    images: [
      CrimsonMap_v2_1, CrimsonMap_v2_2, CrimsonMap_v2_3
    ],
  },
  {
    title: "WMSU Palaro 2025",
    desc: "These are personal pictures I took during WMSU Palaro 2025 highlighting 8 different Photography Techniques: Rule of Thirds, Breathing Space, Golden Triangle, Rule of Odds, Simplification, Framing, Perspective/Viewpoint, and Action.",
    tags: ["Branding/Layout", "Photoshop", "Merch"],
    images: [
      WMSUPalaro_1, WMSUPalaro_2, WMSUPalaro_3, WMSUPalaro_4, WMSUPalaro_5
    ],
  },
  {
    title: "M.A. Yazar",
    desc: "These are book covers I personally designed for my original stories published on Wattpad under my pen name, M.A. Yazar, including my account/writer logo.",
    tags: ["Layout", "Book Covers", "Wattpad"],
    images: [
      MAYazar_logo, MAYazar_1, MAYazar_2, MAYazar_3, MAYazar_4, MAYazar_5, MAYazar_6, MAYazar_7
    ],
  },
];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative mt-3">
        {/* Image Grid */}
        <div className="rounded-lg overflow-hidden bg-secondary/20">
          <div className="flex gap-2 p-2">
            {images.slice(currentIndex, currentIndex + 4).map((img, i) => {
              const actualIndex = (currentIndex + i) % images.length;
              return (
                <div
                  key={i}
                  className="flex-1 aspect-square w-full max-w-[120px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(actualIndex)}
                >
                  <img
                    src={img}
                    alt={`Preview ${actualIndex + 1}`}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons on Sides */}
        {images.length > 4 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex]}
              alt={`Full view ${lightboxIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

const ProjectsCard = () => {
  const [activeTab, setActiveTab] = useState("development");
  const contentRef = useRef(null);

  return (
    <div className="rounded-2xl bg-card shadow-lg p-6 border border-border flex flex-col" style={{ height: "450px" }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="rounded-lg bg-primary/10 p-2">
          <Folder className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Recent Projects</h2>
      </div>

      {/* Tab Buttons - Underline Style */}
      <div className="flex gap-1 mb-6 border-b border-border/50">
        <button
          onClick={() => setActiveTab("development")}
          className={`relative px-4 py-3 text-sm font-medium transition-all group ${activeTab === "development"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
            }`}
        >
          Development
          {/* Active underline */}
          {activeTab === "development" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
          )}
          {/* Hover underline effect */}
          <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 rounded-t-full transition-transform duration-300 ${activeTab === "development"
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
        </button>

        <button
          onClick={() => setActiveTab("design")}
          className={`relative px-4 py-3 text-sm font-medium transition-all group ${activeTab === "design"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
            }`}
        >
          Design
          {/* Active underline */}
          {activeTab === "design" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
          )}
          {/* Hover underline effect */}
          <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 rounded-t-full transition-transform duration-300 ${activeTab === "design"
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
            }`}></span>
        </button>
      </div>

      {/* Rest of your code remains the same */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0"
      >
        <div className="space-y-4 pb-2">
          {activeTab === "development" ? (
            // Development Projects
            devProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-xl bg-secondary/5 border border-transparent hover:border-border hover:bg-secondary/10 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 p-2 rounded-md ${project.bg} ${project.color}`}>
                      <Folder size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-l text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-thin  text-muted-foreground line-clamp-2">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 flex-none text-muted-foreground group-hover:text-primary transition-transform"
                    style={{ width: "1rem", height: "1rem" }}
                  />

                </div>
              </a>
            ))
          ) : (
            designProjects.map((project, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-secondary/5 border border-border hover:bg-secondary/10 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-foreground text-l">{project.title}</h3>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                <ImageCarousel images={project.images} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="mt-2 text-xs text-center text-muted-foreground">
        Scroll to see more
      </div>
    </div>
  );
};

export default ProjectsCard;