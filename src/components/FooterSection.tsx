const FooterSection = () => {
  const columns = [
    {
      title: "Models",
      links: ["Revuelto", "Huracán", "Urus", "Limited Series"],
    },
    {
      title: "Brand",
      links: ["Heritage", "Design", "Innovation", "Motorsport"],
    },
    {
      title: "Experience",
      links: ["Customization", "Driving Academy", "Events", "Museum"],
    },
    {
      title: "Connect",
      links: ["Dealer Locator", "Contact Us", "Newsletter", "Careers"],
    },
  ];

  return (
    <section className="snap-section relative flex flex-col justify-end bg-background border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-8 py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-heading-xl text-sm tracking-[0.2em] text-foreground mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="nav-link text-muted-foreground text-[11px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-heading-xl text-3xl tracking-[0.2em] text-foreground">
            LAMBORGHINI
          </div>
          <p className="text-muted-foreground text-[10px] tracking-widest uppercase font-body">
            © 2026 Automobili Lamborghini S.p.A. — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
