export default function LaborSection() {
  const roles = [
    { title: "Asoschi", person: "Zokirjon", tasks: ["Stratejiya", "Malumot boshqaruvi", "Hamkorlik"] },
    { title: "Dizayner", person: "Zokirjon", tasks: ["UI/UX dizayn", "Brending", "Tasvirlar"] },
    { title: "Frontend", person: "Zokirjon", tasks: ["React", "Next.js", "Responsive"] },
    { title: "Marketing", person: "Zokirjon", tasks: ["Reklama", "Kontent", "Audit"] },
  ]

  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Mehnat Taqsimoti</span>
        </h2>

        <div className="mb-8 p-6 rounded-lg border border-primary/30 bg-primary/5 text-center animate-fade-in-up">
          <p className="text-muted-foreground">Hozircha barcha vazifalarni bitta expert bajaraydi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="p-6 rounded-lg border border-border bg-card hover-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-foreground">{role.person.charAt(0)}</span>
              </div>
              <h3 className="font-bold mb-1">{role.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">{role.person}</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {role.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-8 rounded-xl border border-accent/30 bg-accent/5 text-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-xl font-bold mb-2">Kelajakdagi Plani</h3>
          <p className="text-muted-foreground">Loyihaning rivojlanishiga qarab, yangi ixtisoschilar qo'shiladi</p>
        </div>
      </div>
    </section>
  )
}
