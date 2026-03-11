import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Models", href: "/#models" },
  { label: "Configurator", href: "/configurator" },
  { label: "Dealerships", href: "/#dealerships" },
  { label: "News", href: "/#news" },
  { label: "Brand", href: "/#brand" },
  { label: "Motorsport", href: "/#motorsport" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-background/80 backdrop-blur-md">
        {/* Left: Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 text-foreground"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-xs tracking-[0.25em] uppercase font-body hidden md:inline">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>

        {/* Center: Bull Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
          >
            <path
              d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 4c22.6 0 41 18.4 41 41S72.6 91 50 91 9 72.6 9 50 27.4 9 50 9z"
              fill="currentColor"
            />
            <path
              d="M50 15c-4 0-7.5 3-10 7-2 3.2-3.5 7-4.5 11-.8 3-1.2 6-1.5 9h32c-.3-3-.7-6-1.5-9-1-4-2.5-7.8-4.5-11-2.5-4-6-7-10-7z"
              fill="currentColor"
            />
            <path
              d="M22 50c-3-5-5-3-8-1s-4 6-2 10c1.5 3 4 5 7 6 2 .7 4 .5 5-.5 1.5-1.5 1-4-2-8.5v-1l.5-2.5c0-1-.2-2-.5-2.5z"
              fill="currentColor"
            />
            <path
              d="M78 50c3-5 5-3 8-1s4 6 2 10c-1.5 3-4 5-7 6-2 .7-4 .5-5-.5-1.5-1.5-1-4 2-8.5v-1l-.5-2.5c0-1 .2-2 .5-2.5z"
              fill="currentColor"
            />
            <path
              d="M34 46v24c0 4 3 8 7 10 3 1.5 6 2 9 2s6-.5 9-2c4-2 7-6 7-10V46H34z"
              fill="currentColor"
            />
            <path
              d="M42 56c0 1.5 1 3 2.5 3.5 1 .3 2 .3 3 0 1.5-.5 2.5-2 2.5-3.5v-4h-8v4zM44 68l6 4M56 68l-6 4"
              stroke="hsl(0 0% 0%)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button className="text-foreground hover:opacity-60 transition-opacity">
            <MessageCircle size={18} />
          </button>
          <button className="text-foreground hover:opacity-60 transition-opacity">
            <Search size={18} />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] overflow-y-auto flex flex-col"
          >
            {/* Main content — vertically centered, with proper page padding */}
            <div className="flex-1 flex flex-col px-6 md:px-10 justify-center pt-[120px] pb-12 gap-10">
              
              <div className="w-full max-w-[1500px] mx-auto flex flex-col mt-auto gap-8">
                {/* Top Grid Links — 3 columns matching Lamborghini */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0 w-full">
                  {menuLinks.map((link, i) => (
                    <motion.div 
                      key={link.label} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-6 border-b border-white/[0.15] group hover:border-white/50 transition-colors duration-300"
                      >
                        <span className="text-white text-sm lg:text-base font-black tracking-[0.15em] uppercase transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                          {link.label}
                        </span>
                        {/* Minimalist sharp chevron */}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Prominent Separator Line */}
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-px bg-white/20 my-2 origin-left" 
                />

                {/* Bottom Grid Links — Optional secondary links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0 w-full">
                  {[
                    { label: 'Design', href: '#' },
                    { label: 'History', href: '#' }
                  ].map((link, i) => (
                    <motion.div 
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-5 border-b border-white/[0.1] group hover:border-white/40 transition-colors duration-300"
                      >
                        <span className="text-white/80 text-xs lg:text-sm font-medium tracking-wide group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Area — Languages + Text Size */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto pt-16 pb-4 flex flex-wrap items-center justify-between gap-8 max-w-[1500px] mx-auto w-full"
              >
                <div className="flex items-center flex-wrap gap-6 lg:gap-10">
                  <button className="flex items-center gap-2 text-white/70 text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">
                    LANGUAGES
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 1L5 5L9 1" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-5 text-white">
                  <button className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-none hover:border-white transition-colors hover:bg-white/5">
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><path d="M0 0H12V2H0V0Z"/></svg>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-none hover:border-white transition-colors hover:bg-white/5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 0H7V12H5V0ZM0 5H12V7H0V5Z"/></svg>
                  </button>
                  <span className="text-[10px] font-bold tracking-[0.2em] ml-2 uppercase text-white/80">TEXT SIZE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
