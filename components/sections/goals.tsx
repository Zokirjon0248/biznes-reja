export default function GoalsSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-linear-to-r from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Maqsadi va Yo'nalishi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Asosiy Maqsad */}
          <div className="animate-fade-in-up space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-2xl font-bold">Asosiy Maqsad</h3>
            <ul className="space-y-3">
              {["Brend yaratish", "Moliyaviy erkinlikka chiqish", "Yoshlarga ish o'rinlari yaratish"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Missiya */}
          <div className="animate-fade-in-up space-y-4 md:space-y-6" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg md:text-2xl font-bold">Missiya</h3>
            <p className="text-muted-foreground leading-relaxed border-l-2 border-primary pl-4 text-sm md:text-base">
              Hamyonbop, sifatli veb-saytlarni keng jamoatchilikka taqdim etish va yangi bizneslar o'sishiga yordam
              berish. O'zbekiston IT sohasida soddalashtirilgan yechimlar orqali kichik bizneslarni raqamlashtirish.
            </p>
          </div>
        </div>

        {/* Qisqa va Uzoq Muddatli Maqsadlar */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Qisqa Muddatli */}
          <div
            className="p-6 md:p-8 rounded-xl border border-border bg-card hover-glow transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-base md:text-xl font-bold mb-4 md:mb-6">Qisqa Muddatli Maqsad</h3>
            <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
              {["Brend obro'sini oshirish", "Jamoani kengaytirish", "Daromadni ko'paytirish"].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Uzoq Muddatli */}
          <div
            className="p-6 md:p-8 rounded-xl border border-accent/30 bg-accent/5 hover-glow transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-base md:text-xl font-bold mb-4 md:mb-6">Uzoq Muddatli Maqsad (3+ yil)</h3>
            <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
              {[
                "O'zbekistondagi eng ko'zga ko'ringan brend",
                "100 kishili jamoa",
                "150M so'm oylik aylanma",
                "IT Park rezidentligi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="p-6 md:p-8 rounded-xl border-2 border-primary/30 bg-linear-to-r from-primary/5 to-accent/5 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 gradient-text">Moliyaviy Prognoz</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-sm md:text-base">
            <div>
              <p className="text-muted-foreground mb-2">Boshlang'ich Investitsiya</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">5,000 USD</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Kutilayotgan ROI</p>
              <p className="text-2xl md:text-3xl font-bold text-accent">15-20x oylik</p>
              <p className="text-xs md:text-sm text-muted-foreground">Oylik 15 ta sayt orqali</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
