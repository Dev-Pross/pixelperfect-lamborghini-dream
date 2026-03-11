import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-8 md:px-16 py-16">
        {/* Logo */}
        <div className="flex items-center justify-between mb-16">
          <Link to="/" className="text-heading-xl text-2xl tracking-[0.15em] text-foreground">
            LAMBORGHINI
          </Link>
          <div className="flex gap-8">
            <Link to="/models" className="nav-link text-[11px]">Models</Link>
            <Link to="/configurator" className="nav-link text-[11px]">Configurator</Link>
            <Link to="/dealerships" className="nav-link text-[11px]">Dealerships</Link>
            <Link to="/news" className="nav-link text-[11px]">News</Link>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-3 mb-12">
          <p className="text-[9px] text-muted-foreground leading-relaxed font-body">
            Temerario: Fuel consumption combined: 10.5 l/100km; CO₂ emissions combined: 238 g/km. 
            Efficiency class: G. The values shown are for demonstration purposes only.
          </p>
          <p className="text-[9px] text-muted-foreground leading-relaxed font-body">
            Urus SE: Fuel consumption combined (weighted): 8.0 l/100km; CO₂ emissions combined (weighted): 182 g/km. 
            Efficiency class: E. Electric range (WLTP): 60 km.
          </p>
          <p className="text-[9px] text-muted-foreground leading-relaxed font-body">
            Revuelto: Fuel consumption combined (weighted): 11.9 l/100km; CO₂ emissions combined (weighted): 276 g/km. 
            Efficiency class: G. Electric range (WLTP): 10 km.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-body">
            © 2026 Automobili Lamborghini S.p.A. — All rights reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body">
              Cookie Policy
            </a>
            <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors font-body">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
