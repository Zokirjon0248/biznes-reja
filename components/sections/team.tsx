const teamMembers = [
  {
    name: "Nematov Zokirjon",
    role: "Leader",
    title: "Loyiha yetakchisi",
    initials: "ZN",
    color: "from-primary to-accent",
  },
  {
    name: "Abduhakimov Zufarbek",
    role: "dasturchi",
    title: "Jarayonlarni boshqarish, kiber hujumni oldini olish",
    initials: "AZ",
    color: "from-accent to-primary",
  },
  {
    name: "Berdiyev Sarvar",
    role: "No Code dasturchi",
    title: "No code saytlar tayyorlash",
    initials: "BS",
    color: "from-primary via-accent to-primary",
  },
 
]

export default function TeamSection() {
  return (
  <section className="relative w-full py-24 bg-linear-to-b from-background via-primary/5 to-background overflow-hidden">
  {/* Backdrop Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
  </div>

  <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
    {/* Section Title */}
    <div className="text-center mb-20 animate-fade-in-up">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
        <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Jamoa
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Hozircha barcha vazifalarni bitta professional bajaraydi
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamMembers.map((member, index) => (
        <div
          key={member.role}
          className="
            group relative p-8 rounded-2xl border border-white/10 
            bg-white/5 dark:bg-black/20 backdrop-blur-xl 
            shadow-[0_0_20px_rgb(0,0,0,0.1)] 
            hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] 
            transition-all duration-500 
            hover:-translate-y-2 hover:scale-[1.02] 
            animate-fade-in-up
          "
          style={{ animationDelay: `${index * 0.12}s` }}
        >
          {/* Avatar Glow */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div
              className={`
                absolute inset-0 rounded-xl bg-linear-to-br ${member.color}
                opacity-80 blur-md group-hover:blur-lg transition-all duration-500
              `}
            />
            <div
              className="
                relative z-10 w-full h-full rounded-xl flex items-center justify-center
                bg-background border border-white/20 backdrop-blur-sm
                group-hover:scale-110 transition-transform duration-500
              "
            >
              <span className="text-2xl font-bold text-foreground">
                {member.initials}
              </span>
            </div>
          </div>

          {/* Info */}
          <h3 className="text-2xl text-primary font-semibold text-center mb-2 uppercase">
            {member.role}
          </h3>
          <h3 className="text-xl font-bold text-center mb-1 tracking-tight">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            {member.title}
          </p>

          {/* Shine Animation */}
          <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom Shine Line */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-primary/40 to-transparent blur-sm"></div>
</section>

  )
}
