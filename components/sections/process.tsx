export default function ProcessSection() {
  const steps = [
    { number: "01", title: "Talablarni Qabul", description: "Mijozdan to'liq ma'lumotlarni olish" },
    { number: "02", title: "Dizayn Yaratish", description: "Professional UI/UX dizayn" },
    { number: "03", title: "Kodlash", description: "Frontend va Backend ishlab chiqarish" },
    { number: "04", title: "Test Qilish", description: "Tekshirish va xatolarni tuzatish" },
    { number: "05", title: "Launch", description: "Saytni internetga joylashtirish" },
    { number: "06", title: "Qo'llab-Quvvatlash", description: "Davomiy texnik yordamchi xizmat" },
    { number: "07", title: "Statistika", description: "O'sish metrikalari o'lchash" },
  ]

  return (
    <section className="relative w-full py-12 md:py-20 bg-linear-to-r from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Ishlab Chiqarish Jarayoni</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-4 md:gap-8 animate-fade-in-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="p-4 md:p-6 rounded-lg border border-border bg-card hover-glow transition-all duration-300">
                    <div className="inline-block px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="text-base md:text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-1/2 justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background relative z-10" />
                </div>

                {/* Empty space */}
                <div className="hidden md:flex-1 md:block" />

                <div className="md:hidden absolute left-0 w-12 h-full flex items-start pt-2">
                  <div className="w-full text-center">
                    <div className="w-7 h-7 rounded-full bg-primary text-background font-bold text-xs flex items-center justify-center mx-auto shrink-0">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline estimate */}
        <div
          className="mt-12 md:mt-16 text-center p-6 md:p-8 rounded-xl bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in-up"
          style={{ animationDelay: `${steps.length * 0.1}s` }}
        >
          <p className="text-muted-foreground mb-2 text-sm md:text-base">Taxminiy vaqt</p>
          <p className="text-xl md:text-2xl font-bold">3-4 kun ichida tayyor</p>
        </div>
      </div>
    </section>
  )
}
