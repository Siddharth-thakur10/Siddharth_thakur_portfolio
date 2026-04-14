export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-3xl tracking-tight text-foreground flex items-start font-display">
          Siddharth thakur<sup className="text-xs mt-1">®</sup>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-foreground hover:opacity-80 transition-opacity">
            Home
          </a>
          {['Projects', 'About', 'Resume', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="#contact" 
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-300 inline-block"
        >
          <span className="relative z-10">Begin Journey</span>
        </a>
      </div>
    </nav>
  );
}