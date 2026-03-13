import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import ProfilePic from "../../assets/formal_picture.webp";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi there! 👋🏻 Thanks for visiting my portfolio. Feel free to ask me anything about my projects, skills, or what I offer. Let me know how I can help!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "stepfun/step-3.5-flash:free",
          messages: [
            {
              role: "system",
              content: `You are Mohammad Aldrin Said, the owner of this portfolio. Answer as if you are Aldrin himself.

- **Identity**: Mohammad Aldrin Said, BSIT student at Western Mindanao State University (4th Year, 2022 - Present).
- **Location**: Zamboanga City, Philippines.
- **Pronouns**: He/Him.
- **What he offers**: Mobile & Web development, UI/UX design. Specializes in Unity AR development, Flutter mobile apps, and web development. Available for commissions and collaborations.
- **Tech Stack**: Unity, Flutter, Next.js, JavaScript, Firebase, Tailwind CSS, Git, GitHub, HTML5, CSS3.

- **Development Projects**:
  1. "Crimson Map" - An Augmented Reality (AR) campus navigation system for WMSU, developed as a Capstone Project. Built with Unity, Mapbox, Firebase. Live at: https://wmsucrimsonmapadmin.vercel.app/
  2. "studya.io" - Study Aid App with Pomodoro Technique & Flashcards. Built with Flutter. Live at: https://yzrsaid.github.io/studya.io.com/
  3. "Al-Furqan Islamic Institute Enrollment and Academic Management System" - Madrasa Enrollment and Academic Management System. Built with Vanilla HTML, JS, CSS.

- **Design Projects**: Crimson Map branding, Libris logo, byteSpace logo, studya.io branding, Personal Layouts (Elective 4), Crimson Map v2 branding/merch, WMSU Palaro 2025 photography, M.A. Yazar book covers (Wattpad pen name).

- **Experience**: Intern Developer at Vintazk Outsourcing (2026 - Present). OJT/Internship. Contributing to frontend development, UI/UX, and collaborative project work.

- **Education**:
  1. BS Information Technology - Western Mindanao State University (2022 - Present, 4th Year)
  2. STEM Strand - Zamboanga Chong Hua High School (Graduated 2022)

- **Achievements/Certificates**:
  1. Ethical Hacking: Understanding the Thin Line - DICT (Webinar Certificate)
  2. Introduction to Azure Machine Learning - Microsoft (Workshop/Training)
  3. HTML & CSS Certification Course for Beginners - Udemy (Course Completion)
  4. Info Session: Kickoff & Intro to Machine Learning - GDSC Club Philippines (Workshop)
  5. GDSC Info Session at WMSU - Google Developer Student Clubs WMSU
  6. GDSC Info Session at Tuguegarao - Google Developer Student Clubs Tuguegarao

- **Rules**:
  1. Answer as Aldrin in first person.
  2. Keep answers brief, professional, and friendly.
  3. If asked about certificates, say they are displayed in the Achievements section of the portfolio.
  4. If asked something not listed, suggest contacting Aldrin directly via the portfolio.`,
            },
            { role: "user", content: input },
          ],
        }),
      });

      const data = await response.json();
      const botReply =
        data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error connecting to AI service." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 h-14 flex items-center justify-center shadow-lg transition-all duration-300 z-50 bg-primary text-primary-foreground cursor-pointer ${
          isOpen ? "w-14 rounded-full" : "w-auto px-6 rounded-full"
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex items-center gap-2">
            <MessageCircle size={24} />
            <span className="font-semibold whitespace-nowrap">
              Chat with Aldrin
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-border bg-card text-card-foreground animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-border bg-muted/40">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={ProfilePic}
                  alt="Aldrin"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-background"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chat with Aldrin</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex flex-col gap-1 max-w-[80%] ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <div className="flex items-center gap-2 mb-1">
                      <img
                        src={ProfilePic}
                        alt="Aldrin"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">
                        Aldrin
                      </span>
                    </div>
                  )}
                  <div
                    className={`p-3 text-sm leading-relaxed shadow-sm break-words ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-2xl rounded-br-none"
                        : "bg-muted text-foreground rounded-2xl rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <Loader2
                    className="animate-spin text-muted-foreground"
                    size={16}
                  />
                  <span className="text-xs text-muted-foreground">
                    Thinking...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask something..."
                className="w-full bg-background text-foreground border border-input rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;