import Link from "next/link";
import { Briefcase, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">InternHub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting students with opportunities that shape their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/opportunities"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Browse Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/start-here"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Start Here
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/opportunities?type=Internship"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities?type=Program"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities?type=Competition"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Competitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="h-4 w-4" />
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} InternHub. Helping students find their path.
          </p>
        </div>
      </div>
    </footer>
  );
}
