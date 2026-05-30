import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/Kingst.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay — darkest at center where text sits */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl px-8 py-10 backdrop-blur-sm bg-black/20">
            <p className="text-sm font-medium uppercase tracking-widest text-white/90 mb-4">
              Charleston, South Carolina
            </p>
            <h1
              className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Your Business Legacy, Our Commitment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85 max-w-2xl mx-auto text-pretty">
              {"We're"} a local holding company dedicated to acquiring and nurturing established businesses from owners ready to transition into the next chapter of their lives.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
