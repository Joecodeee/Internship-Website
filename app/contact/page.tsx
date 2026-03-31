import { Mail, Instagram, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Have a question, suggestion, or want to share an opportunity?
              {"We'd love to hear from you!"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="question">General Question</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="opportunity">Submit an Opportunity</option>
                    <option value="bug">Report an Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Other Ways to Reach Us
              </h2>
              <p className="mt-2 text-muted-foreground">
                Prefer a different method? Here are other ways to connect.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@internhub.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        contact@internhub.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/internhub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        @internhub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">
                        Submit an Opportunity
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Know of an opportunity we should list? Let us know!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-card-foreground">
                      Is InternHub free to use?
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Yes! InternHub is completely free for students. We believe
                      access to opportunities should never be behind a paywall.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-card-foreground">
                      How do you choose which opportunities to list?
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We verify each opportunity to ensure it&apos;s legitimate,
                      valuable, and relevant to students. We prioritize programs
                      with strong track records.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-card-foreground">
                      Can I suggest an opportunity?
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Absolutely! Use the form on this page or email us directly.
                      We review all submissions and add quality opportunities to
                      our listings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
