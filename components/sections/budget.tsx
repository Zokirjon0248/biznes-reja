export default function BudgetSection() {
  const budgetItems = [
    { label: "Marketing", value: "30%", detail: "Boshlang'ich foydalanuvchilarni jalb qilish va reklama" },
    { label: "Hosting + Domen", value: "20%", detail: "Server, domen va infratuzilma xarajatlari" },
    { label: "Dasturchilar / Texnik xizmat", value: "25%", detail: "Platformaning barqaror ishlashi uchun" },
    { label: "Dizayn", value: "15%", detail: "UI/UX interfeyslar, komponentlar, brending" },
    { label: "AI Vositalari va Pluginlar", value: "10%", detail: "AI integratsiya, avtomatlashtirish vositalari" },
  ];

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center animate-fade-in-up">
          <span className="gradient-text">Boshlang'ich Investitsiya</span>
        </h2>

        {/* Total Budget Card */}
        <div className="p-8 rounded-2xl border border-primary/30 bg-linear-to-r from-primary/10 to-accent/10 text-center mb-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-2 text-sm">Umumiy ajratilayotgan mablag'</p>
          <h3 className="text-4xl md:text-6xl font-bold mb-2">
            5,000
            <span className="text-xl md:text-2xl text-muted-foreground ml-2">USD</span>
          </h3>
          <p className="text-sm text-muted-foreground">Platformani barqaror ishga tushirish uchun sarflanadi</p>
        </div>

        {/* Budget Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {budgetItems.map((item, index) => (
            <div
              key={item.label}
              className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
              <p className="text-3xl font-bold text-primary">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-3">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Additional Explanation */}
        <div
          className="p-8 rounded-xl border-2 border-primary/20 bg-linear-to-r from-primary/5 to-accent/5 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-xl font-bold mb-6 gradient-text">Investitsiya Qayerga Sarflanadi?</h3>

          <ul className="space-y-4 text-muted-foreground text-sm md:text-base">
            <li><span className="font-semibold text-foreground">Marketing:</span> Foydalanuvchilarni jalb qilish, restoranlar bilan hamkorlikni kengaytirish.</li>
            <li><span className="font-semibold text-foreground">Server va IT infratuzilma:</span> Domen, hosting, xavfsizlik va barqarorlik.</li>
            <li><span className="font-semibold text-foreground">Dasturchilar:</span> Platforma funksiyalarini ishlab chiqish va texnik qo‘llab-quvvatlash.</li>
            <li><span className="font-semibold text-foreground">Dizayn:</span> UI/UX, interfeyslar, brending va qulaylikni yaxshilash.</li>
            <li><span className="font-semibold text-foreground">AI va Qo‘shimcha vositalar:</span> Avtomatlashtirish, analytics, chatbotlar, integratsiyalar.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
