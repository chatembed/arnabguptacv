"use client"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <div>© {year} Arnab Gupta.</div>
        <a
          href="/sitemap.xml"
          className="hover:text-foreground transition-colors text-sm"
          aria-label="Sitemap"
        >
          Sitemap
        </a>
      </div>
    </footer>
  )
}
