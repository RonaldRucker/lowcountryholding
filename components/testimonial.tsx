import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-12 w-12 opacity-30 mb-8" />
          <blockquote className="font-serif text-2xl sm:text-3xl font-medium leading-relaxed text-balance">
            {'"'}After 35 years building my HVAC business, I {"wasn't"} ready to hand it over to just anyone. The team at Lowcountry Holdings took the time to understand what my company meant to me and my employees. The transition was smoother than I ever imagined.{'"'}
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold">Robert Mitchell</p>
            <p className="text-sm opacity-80">Former Owner, Mitchell Climate Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
