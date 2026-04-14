export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground font-display animate-fade-rise">
          Designing <em className="not-italic text-muted-foreground">experiences</em> that feel like <em className="not-italic text-muted-foreground">stories.</em>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          Blending motion, interaction, and intention to create digital products that go beyond the expected.
        </p>

        {/* Main CTA */}
        <a 
          href="#projects" 
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform duration-300 animate-fade-rise-delay-2 inline-block"
        >
          <span className="relative z-10">Explore Projects</span>
        </a>
      </div>
    </section>
  );
}