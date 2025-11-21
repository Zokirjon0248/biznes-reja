export default function AboutSection() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">MSS nima?</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Maqsad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kichik bizneslar va xizmat ko'rsatuvchilar uchun arzon, sifatli, tez tayyor bo'ladigan mini
                  veb-saytlar yaratish studiyasi.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Muammoni hal qiladi</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Bozarda IT kompaniyalar ko'p va raqobat juda kuchli</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Narxlar juda qimmat (100$–1000$)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Yangi bizneslar bu narxlarga tayyor emas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Ko'pchilik "hozircha kerak emas" deb yashiradi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="p-8 rounded-xl border border-border bg-card hover-glow transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Asosiy Foydalari</h3>
              <ul className="space-y-4">
                {[
                  "Narx arzon",
                  "Sifat yuqori",
                  "Kichik bizneslar uchun ideal",
                  "Tez tayyor bo'ladi",
                  "Hech qanday murakkabliksiz ishlaydi",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-sm text-muted-foreground italic">
                "MSS esa aynan shu segmentga eng arzon va sifatli yechimni taklif qiladi"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
