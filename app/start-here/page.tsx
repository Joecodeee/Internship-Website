import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Clock,
  FileText,
  Users,
  Sparkles,
} from "lucide-react";
import { OpportunityCard } from "@/components/opportunity-card";
import { getBeginnerFriendlyOpportunities } from "@/lib/data";

const tips = [
  {
    icon: Target,
    title: "Know Your Interests",
    description:
      "Before applying, identify what fields excite you most. STEM? Business? Healthcare? This helps narrow down opportunities.",
  },
  {
    icon: Clock,
    title: "Start Early",
    description:
      "Many competitive programs have deadlines months in advance. Check deadlines regularly and give yourself time to prepare.",
  },
  {
    icon: FileText,
    title: "Prepare Your Materials",
    description:
      "Have a resume, transcript, and letter of recommendation ready. Many applications require these documents.",
  },
  {
    icon: Users,
    title: "Ask for Help",
    description:
      "Talk to teachers, counselors, or mentors. They can provide guidance, write recommendations, and share opportunities.",
  },
];

const steps = [
  {
    number: "01",
    title: "Browse Opportunities",
    description:
      "Explore our listings and use filters to find opportunities that match your interests, location, and experience level.",
  },
  {
    number: "02",
    title: "Check Requirements",
    description:
      "Review grade eligibility, deadlines, and application materials needed. Make sure you meet the basic requirements.",
  },
  {
    number: "03",
    title: "Prepare Your Application",
    description:
      "Gather your materials, write compelling essays, and ask for recommendations well before the deadline.",
  },
  {
    number: "04",
    title: "Apply and Follow Up",
    description:
      "Submit your application on time and follow any additional instructions. Track your applications and respond promptly.",
  },
];

export default function StartHerePage() {
  const beginnerOpportunities = getBeginnerFriendlyOpportunities();

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Sparkles className="h-4 w-4" />
              For Beginners
            </div>
            <h1 className="text-balance text-4xl font-bold text-foreground">
              New to Internships? Start Here.
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {"We've put together everything you need to know to find and apply for your first opportunity. Let's get started!"}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
          <p className="mt-2 text-muted-foreground">
            Follow these steps to find and apply for your first opportunity.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-4xl font-bold text-primary/20">
                  {step.number}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-warning" />
            <h2 className="text-2xl font-bold text-foreground">
              Tips for Success
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <tip.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {tip.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes a Good Application */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            What Makes a Good Application
          </h2>
          <p className="mt-2 text-muted-foreground">
            Stand out from other applicants by focusing on these key areas.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Clear, well-written essays that show your personality",
              "Specific examples of your achievements and experiences",
              "Demonstrated passion for the field or subject",
              "Strong letters of recommendation from teachers or mentors",
              "A polished resume with relevant activities",
              "Attention to detail - no typos or missing materials",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Friendly Opportunities */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Beginner-Friendly Opportunities
              </h2>
              <p className="mt-2 text-muted-foreground">
                These are perfect starting points for students new to
                internships and programs.
              </p>
            </div>
            <Link
              href="/opportunities?difficulty=Easy"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all easy opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beginnerOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/opportunities?difficulty=Easy"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all easy opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Ready to Find Your First Opportunity?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              {"You've got the knowledge - now it's time to take action!"}
            </p>
            <div className="mt-8">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Browse All Opportunities
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
