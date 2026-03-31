import { Suspense } from "react";
import { Search } from "lucide-react";
import { FilterSidebar } from "@/components/filter-sidebar";
import { OpportunityCard } from "@/components/opportunity-card";
import { getFilteredOpportunities } from "@/lib/data";
import type { OpportunityType, Location, Difficulty } from "@/lib/data";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    location?: string;
    difficulty?: string;
    tag?: string;
    search?: string;
  }>;
}

export default async function OpportunitiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  const opportunities = getFilteredOpportunities({
    type: params.type as OpportunityType | undefined,
    location: params.location as Location | undefined,
    difficulty: params.difficulty as Difficulty | undefined,
    tag: params.tag,
    search: params.search,
  });

  const activeFilterCount = [
    params.type,
    params.location,
    params.difficulty,
    params.tag,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground">
            Browse Opportunities
          </h1>
          <p className="mt-2 text-muted-foreground">
            Discover internships, programs, and competitions that match your
            interests.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <Suspense fallback={<div className="w-full lg:w-64">Loading filters...</div>}>
            <FilterSidebar className="w-full shrink-0 lg:w-64" />
          </Suspense>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <form action="/opportunities" method="get">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    name="search"
                    placeholder="Search opportunities..."
                    defaultValue={params.search || ""}
                    className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </form>
            </div>

            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {opportunities.length}
                </span>{" "}
                {opportunities.length === 1 ? "opportunity" : "opportunities"}
                {activeFilterCount > 0 && (
                  <span>
                    {" "}
                    with{" "}
                    <span className="font-medium text-foreground">
                      {activeFilterCount}
                    </span>{" "}
                    {activeFilterCount === 1 ? "filter" : "filters"} applied
                  </span>
                )}
              </p>
            </div>

            {/* Results Grid */}
            {opportunities.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {opportunities.map((opp) => (
                  <OpportunityCard key={opp.id} opportunity={opp} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border py-16 text-center">
                <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  No opportunities found
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your filters or search terms to find more
                  opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
