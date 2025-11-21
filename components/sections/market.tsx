export default function MarketSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-linear-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Bozor Tahlili</span>
        </h2>

        {/* Target Segments */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8 animate-fade-in-up">
            Maqsadli Segmentlar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {["Xizmat ko'rsatuvchilar", "Kichik bizneslar", "Startaplar", "Freelancerlar", "Online sotuvchilar"].map(
              (segment, index) => (
                <div
                  key={segment}
                  className="p-4 md:p-6 rounded-lg border border-border bg-card hover-glow transition-all duration-300 text-center animate-fade-in-up text-sm md:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-medium">{segment}</p>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Competitors */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8 animate-fade-in-up">Raqobatchilar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              {
                name: "IT kompaniya",
                location: "IT Park rezidenti",
                advantage: "Yaxshi brend, lekin narx juda qimmat",
              },
              {
                name: "Web Studio",
                location: "IT Park rezidenti",
                advantage: "Sifatli ishlari bor, lekin narx yuqori",
              },
              {
                name: "Agency",
                location: "Mustaqil",
                advantage: "Reklama ko'p, lekin narxlar eng qimmat",
              },
            ].map((competitor, index) => (
              <div
                key={competitor.name}
                className="p-4 md:p-6 rounded-lg border border-border bg-card animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    ?
                  </div>
                  <h4 className="font-bold text-sm md:text-base">{competitor.name}</h4>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">{competitor.location}</p>
                <p className="text-xs md:text-sm text-foreground italic">{competitor.advantage}</p>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-xl border-2 border-primary/50 bg-linear-to-r from-primary/10 to-accent/10 hover-glow transition-all duration-300 animate-fade-in-up">
            <h4 className="text-lg md:text-xl font-bold mb-2 gradient-text">MSS ning Ustunligi</h4>
            <p className="text-base md:text-lg text-foreground">
              MSS esa aynan shu segmentga <span className="font-bold text-primary">eng arzon va sifatli yechimni</span>{" "}
              taklif qiladi
            </p>
            <p className="text-sm md:text-base text-muted-foreground mt-3">
              Bozor realligi: Bozorda o'zaro munosobat - narx va sifat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
