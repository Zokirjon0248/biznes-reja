export default function ConclusionSection() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Xulosa</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              MSS — O'zbekistonda kichik bizneslar uchun eng hamyonbop va sifatli mini-saytlar yechimi.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              {[
                { title: "Mustahkam", description: "Strategiya va bozor tahlili" },
                { title: "Tayyor", description: "Moliyaviy prognozlar va rejalar" },
                { title: "Kelajakdor", description: "O'sishga tayyor va faol marketing" },
              ].map((point, index) => (
                <div
                  key={point.title}
                  className="p-6 rounded-lg border border-border bg-card hover-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <h3 className="font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>

            <div
              className="p-8 rounded-xl border border-primary/30 bg-linear-to-r from-primary/10 to-accent/10 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-xl font-bold mb-2">
                Asosiy O'zbekistan IT sohasida soddalashtirilgan yechimlar orqali kichik bizneslarni raqamlashtirish.
              </p>
              <p className="text-muted-foreground italic">
                MSS yuqori sifat, qulay narx va tez xizmatni birgalikda taqdim qiladi.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow transition-all duration-300">
              Aloqaga chiqing
            </button>
            <button className="px-8 py-3 rounded-lg border border-primary/30 text-foreground hover:bg-primary/10 transition-colors duration-300">
              Biznes rejani yuklab oling
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 MSS — Mini Site Studio. Nematov Zokirjon</p>
            <p className="text-xs text-muted-foreground mt-2">TIFT University | MNK 25-01</p>
          </div>
        </div>
      </div>
    </section>
  )
}
