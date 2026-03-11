import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Models", href: "/models" },
  { label: "Configurator", href: "/configurator" },
  { label: "Dealerships", href: "/dealerships" },
  { label: "News", href: "/news" },
  { label: "Brand", href: "#" },
  { label: "Motorsport", href: "#" },
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-heading-xl text-3xl md:text-5xl text-foreground hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
