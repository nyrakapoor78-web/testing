import { Sparkles, Award, Users, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "High-quality printing with eco-friendly inks and materials",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your satisfaction",
    },
    {
      icon: Users,
      title: "Design Support",
      description: "Free design assistance for all your printing needs",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Your Trusted Printing Partner in Barpeta
              </h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                AI Enterprise ASM is Barpeta's premier printing service provider, offering comprehensive solutions from
                traditional Assamese gamosa printing to modern sublimation and flex printing services.
              </p>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                With state-of-the-art equipment and a commitment to quality, we serve businesses and individuals across
                Assam with custom sizes, eco-friendly materials, and professional design support.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl" />
              <img
                src="https://www.aienterpriseasm.in/uploads/1765261393-about-Untitled-1%20copy.jpg"
                alt="AI Enterprise ASM Printing Services"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
