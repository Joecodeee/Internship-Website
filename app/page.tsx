import Link from "next/link";
import { ArrowRight, Search, Star, Clock, Sparkles } from "lucide-react";
import { OpportunityCard } from "@/components/opportunity-card";
import {
  getFeaturedOpportunities,
  getClosingSoonOpportunities,
  getBeginnerFriendlyOpportunities,
} from "@/lib/data";

export default function HomePage() {
  const featuredOpportunities = getFeaturedOpportunities();
  const closingSoonOpportunities = getClosingSoonOpportunities();
  const beginnerFriendlyOpportunities = getBeginnerFriendlyOpportunities();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find Your Next
              <span className="text-primary"> Opportunity</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Discover internships, programs, and competitions designed for students.
              Filter by location, difficulty, and field to find the perfect fit for
              your future.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
                Browse Opportunities
              </Link>
              <Link
                href="/start-here"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Active Opportunities
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">13+</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Fields & Tags
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Free</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Always
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Featured Opportunities
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} featured />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Soon */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Closing Soon</h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            {"Don't miss these opportunities - deadlines approaching!"}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {closingSoonOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Friendly */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">
              Beginner Friendly
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            Perfect starting points for students new to internships and programs.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beginnerFriendlyOpportunities.slice(0, 3).map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/start-here"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              See our guide for beginners
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Browse our full catalog of opportunities and find the perfect match
              for your interests and goals.
            </p>
            <div className="mt-8">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Explore All Opportunities
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
