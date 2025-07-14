export function LogoSection() {
  const logos = [
    { src: "https://www.chatbase.co/_next/static/media/0.7eb72cbd.svg", alt: "Alpian" },
    { src: "https://www.chatbase.co/_next/static/media/1.a2c60d9d.svg", alt: "Opal" },
    { src: "https://www.chatbase.co/_next/static/media/2.979f5eb2.svg", alt: "Siemens" },
    { src: "https://www.chatbase.co/_next/static/media/3.af1bc48a.svg", alt: "Postman" },
    { src: "https://www.chatbase.co/_next/static/media/4.fff2ca29.svg", alt: "Pwc" },
    { src: "https://www.chatbase.co/_next/static/media/5.6b017c6f.svg", alt: "Al Baraka" },
  ];

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-500">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-12 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}