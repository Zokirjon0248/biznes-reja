export default function MarketingSection() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Marketing Rejasi</span>
        </h2>

        {/* Current Status */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8">Hozirgi Holat</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Instagram Akkaunt",
                detail: "AI va foydali saytlar haqida kontent",
                stats: "150 obunachi",
              },
              {
                title: "Video Tarjimasi",
                detail: "Ingliz tilidagi videolarni o'zbekchaga tarjima",
                stats: "24,000 ko'rish",
              },
              {
                title: "O'sish Strategiyasi",
                detail: "Tez o'sish uchun optimallashtirilgan",
                stats: "2 haftada",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border bg-card hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.detail}</p>
                <p className="text-sm font-medium text-primary">{item.stats}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Directions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-xl border border-border bg-card animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              AI Kontent Strategiyasi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI foydali kontent orqali viral o'sish va auditoriyani o'stirish
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Kuniga eng foydali masalalar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Viral video montaji
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Samarali hashtag strategiyasi
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-xl border border-accent/30 bg-accent/5 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-2xl">💼</span>
              Biznes Namunasi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              MSS namuna saytlarini ko'rsatish va bepul sayt sovg'a qilish
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                Haftasiga 2 ta biznesga bepul sayt
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                Case studies ko'rsatish
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                Referral programma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
