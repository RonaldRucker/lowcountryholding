import { Building2, Heart, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We understand the emotional journey of selling a business you've built over decades. Your legacy matters to us.",
  },
  {
    icon: Building2,
    title: "Local Roots",
    description: "As members of the Charleston community, we're invested in preserving the businesses that make our region unique.",
  },
  {
    icon: Users,
    title: "Not Private Equity",
    description: "We're a small, family-oriented holding company—not a faceless PE firm. We take the time to understand your story.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            About Us
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            A Different Approach to Business Acquisition
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Founded in Charleston, we specialize in working with business owners who are ready to retire but want to ensure their {"company's"} future is in good hands. {"We're"} not looking for quick flips—{"we're"} building a portfolio of businesses we can nurture for generations.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative p-8 bg-background rounded-lg border border-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
