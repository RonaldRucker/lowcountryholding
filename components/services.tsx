import { Briefcase, HandshakeIcon, LineChart, TrendingUp } from "lucide-react"

const services = [
  {
    icon: HandshakeIcon,
    title: "Business Acquisition",
    description: "Looking to sell your business and retire? We offer fair valuations and a smooth transition process that respects your timeline and concerns.",
    features: [
      "Confidential consultations",
      "Fair market valuations",
      "Flexible transition timelines",
      "Legacy preservation",
    ],
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    description: "Not ready to sell? Our experienced team can help identify opportunities to improve operations, increase revenue, and strengthen your business.",
    features: [
      "Operational assessments",
      "Financial analysis",
      "Growth strategies",
      "Succession planning",
    ],
  },
  {
    icon: TrendingUp,
    title: "Turnaround Services",
    description: "If your business is struggling, we can help. Our team specializes in identifying issues and implementing solutions to restore profitability.",
    features: [
      "Financial restructuring",
      "Cost optimization",
      "Revenue enhancement",
      "Strategic repositioning",
    ],
  },
  {
    icon: Briefcase,
    title: "Exit Planning",
    description: "Planning your exit years in advance? We'll work with you to maximize value and ensure you're ready when the time comes.",
    features: [
      "Long-term planning",
      "Value maximization",
      "Tax-efficient strategies",
      "Retirement coordination",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            How We Can Help
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether {"you're"} ready to sell, looking to improve, or planning for the future, we have solutions tailored to your needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
