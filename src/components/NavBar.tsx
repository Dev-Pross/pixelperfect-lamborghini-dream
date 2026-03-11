import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  visible: boolean;
}

const navItems = ["Models", "Brand", "Customization", "Dealer Locator"];

const NavBar = ({ visible }: NavBarProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/90 backdrop-blur-sm border-b border-border"
        >
          <div className="text-heading-xl text-2xl tracking-[0.15em] text-foreground">
            LAMBORGHINI
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>
          <button className="btn-primary-brutal hidden md:block text-xs px-6 py-2">
            Configure
          </button>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
