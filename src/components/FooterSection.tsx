import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 sm:px-8 md:px-16 py-12 md:py-16">
        {/* Logo + Nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mb-12 md:mb-16">
          <Link to="/" className="pointer-events-auto">
            <img 
              src="/emotion-drive-logo.png" 
              alt="EDrive" 
              className="h-8 md:h-10 object-contain" 
            />
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <Link to="/#models" className="nav-link text-[11px]">Models</Link>
            <Link to="/configurator" className="nav-link text-[11px]">Configurator</Link>
            <Link to="/become-distributor" className="nav-link text-[11px]">Dealerships</Link>
            <Link to="/investors" className="nav-link text-[11px]">Investors</Link>
            <Link to="/#news" className="nav-link text-[11px]">News</Link>
            <Link to="/company" className="nav-link text-[11px]">Company</Link>
          </div>
        </div>

        {/* Privacy & Legal */}
        <div className="space-y-3 mb-12">
          <h4 className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase font-bold mb-4">Privacy & Legal</h4>
          <p className="text-[9px] text-muted-foreground leading-relaxed font-body">
            All information on this website is provided for informational purposes only and does not constitute an offer, investment advice or contractual obligation.
          </p>
          <p className="text-[9px] text-muted-foreground leading-relaxed font-body">
            Product specifications, availability and features may vary by region and are subject to change without notice.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-body">
            © 2026 eDrive. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body underline underline-offset-2">
              Cookie Settings
            </button>
            <a href="https://wa.me/971553949955" target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body">
              WhatsApp
            </a>
            <a href="mailto:FMC.emotiondrive@gmail.com" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
