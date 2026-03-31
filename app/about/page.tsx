import Link from "next/link";
import { ArrowRight, Target, Heart, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Accessibility",
    description:
      "Every student deserves access to opportunities that can shape their future, regardless of their background or connections.",
  },
  {
    icon: Heart,
    title: "Quality",
    description:
      "We verify and curate every opportunity we list to ensure students are applying to legitimate, valuable programs.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in lifting each other up. Students helping students discover their potential and achieve their goals.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "Every internship, program, and competition is a chance to learn, grow, and get closer to your dreams.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground">
              About InternHub
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Helping students discover and access opportunities that can shape
              their future careers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                InternHub was created with a simple belief: every student
                deserves access to opportunities that can transform their lives.
                Too often, valuable internships, programs, and competitions
                remain hidden from students who could benefit most from them.
              </p>
              <p>
                We aggregate and curate opportunities from across the country,
                making it easy for students to discover programs that match
                their interests, skills, and goals. Whether you&apos;re interested
                in STEM, business, healthcare, or the arts, we&apos;re here to help
                you find your path.
              </p>
              <p>
                Our goal is to level the playing field by providing free access
                to information that was once only available to those with the
                right connections. We believe that talent is everywhere, but
                opportunity is not - and we&apos;re working to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Our Values
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            The principles that guide everything we do.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground">What We Offer</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-card-foreground">
                  Curated Opportunities
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We hand-pick and verify every opportunity listed on our
                  platform. No spam, no scams - just legitimate programs that
                  can make a real difference in your future.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-card-foreground">
                  Smart Filtering
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Filter opportunities by type, location, difficulty, and field
                  of interest. Find exactly what you&apos;re looking for without
                  wading through irrelevant listings.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-card-foreground">
                  Beginner Resources
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  New to internships? Our &quot;Start Here&quot; guide provides tips,
                  advice, and beginner-friendly opportunities to help you get
                  started on your journey.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-card-foreground">
                  Regular Updates
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We add new opportunities weekly and remove expired listings to
                  ensure our database is always current and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Start Exploring Today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Your next opportunity is waiting. Browse our listings and find the
              perfect fit for your goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Browse Opportunities
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
