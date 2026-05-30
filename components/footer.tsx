import Link from "next/link"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="font-serif text-xl font-semibold text-foreground">
              Lowcountry Holdings
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              A Charleston-based holding company dedicated to preserving business legacies.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lowcountry Holdings, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
