const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    description: "We start with a confidential, no-obligation conversation to understand your situation, goals, and timeline. No pressure, just listening.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "If there's mutual interest, we conduct a thorough but respectful assessment of your business, always maintaining confidentiality.",
  },
  {
    number: "03",
    title: "Proposal",
    description: "We present a fair offer along with a clear transition plan that addresses your concerns—from employee retention to customer relationships.",
  },
  {
    number: "04",
    title: "Smooth Transition",
    description: "We work at your pace to ensure a seamless handover. Many owners stay involved as advisors during the transition period.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            A Thoughtful Approach to Transition
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We understand that selling your business is a significant decision. {"That's"} why {"we've"} designed a process that prioritizes your comfort and concerns at every step.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-8 bg-background rounded-lg border border-border"
              >
                <div className="flex items-start gap-4">
                  <span className="font-serif text-4xl font-semibold text-primary/20">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
