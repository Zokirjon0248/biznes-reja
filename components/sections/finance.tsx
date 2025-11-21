export default function FinanceSection() {
  return (
    <section className="relative w-full py-20 bg-linear-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-text">Moliyaviy Hisob</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Revenue */}
          <div className="p-8 rounded-xl border border-border bg-card animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6">Oylik Daromad</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tayyor saytlar</p>
                <p className="text-2xl font-bold">15 ta</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-1">Har bir sayt narxi</p>
                <p className="text-2xl font-bold">
                  300,000<span className="text-sm text-muted-foreground ml-2">so'm</span>
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground mb-1">Oylik daromad</p>
                <p className="text-3xl font-bold text-primary">
                  4,500,000<span className="text-sm text-muted-foreground ml-2">so'm</span>
                </p>
              </div>
            </div>
          </div>

          {/* Payback Period */}
          <div
            className="p-8 rounded-xl border border-accent/30 bg-accent/5 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-xl font-bold mb-6">Qoplash Muddati</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Kiritilgan pul</p>
                <p className="text-2xl font-bold">
                  5,000<span className="text-sm text-muted-foreground ml-2">USD</span>
                </p>
              </div>
              <div className="border-t border-accent/30 pt-4">
                <p className="text-sm text-muted-foreground mb-1">Teng so'mda</p>
                <p className="text-xl font-bold">
                  60,000,000<span className="text-sm text-muted-foreground ml-2">so'm</span>
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground mb-1">Qoplash muddati</p>
                <p className="text-3xl font-bold text-accent">
                  13.3<span className="text-sm text-muted-foreground ml-2">oy</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Forecast */}
        <div
          className="p-8 rounded-xl border border-border bg-card animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-xl font-bold mb-6">Moliyaviy Prognoz</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { period: "3 oy", value: "13.5M so'm", status: "Boshlangich" },
              { period: "6 oy", value: "27M so'm", status: "Qoplash" },
              { period: "1 yil", value: "54M so'm", status: "Foyda" },
              { period: "2 yil", value: "108M so'm", status: "Rivojlanish" },
            ].map((forecast, index) => (
              <div key={forecast.period} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{forecast.period}</p>
                <p className="font-bold mb-2">{forecast.value}</p>
                <p className="text-xs text-primary font-medium">{forecast.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
