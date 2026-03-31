import Link from "next/link";
import {
  MapPin,
  Calendar,
  ExternalLink,
  GraduationCap,
  Gauge,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Opportunity } from "@/lib/data";

interface OpportunityCardProps {
  opportunity: Opportunity;
  featured?: boolean;
}

const difficultyColors = {
  Easy: "bg-success/10 text-success",
  Medium: "bg-warning/10 text-warning",
  Hard: "bg-destructive/10 text-destructive",
};

const typeColors = {
  Internship: "bg-primary/10 text-primary",
  Program: "bg-secondary/10 text-secondary",
  Competition: "bg-accent text-accent-foreground",
};

export function OpportunityCard({
  opportunity,
  featured = false,
}: OpportunityCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg",
        featured && "ring-2 ring-primary/20"
      )}
    >
      {/* Badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            typeColors[opportunity.type]
          )}
        >
          {opportunity.type}
        </span>
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            difficultyColors[opportunity.difficulty]
          )}
        >
          <Gauge className="mr-1 h-3 w-3" />
          {opportunity.difficulty}
        </span>
        {opportunity.closingSoon && (
          <span className="inline-flex items-center rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-medium text-destructive">
            Closing Soon
          </span>
        )}
        {opportunity.beginnerFriendly && (
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
            Beginner Friendly
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
        {opportunity.title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {opportunity.shortDescription}
      </p>

      {/* Meta Info */}
      <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          <span>{opportunity.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span>{opportunity.deadline}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <GraduationCap className="h-4 w-4" />
          <span>Grades {opportunity.gradeEligibility}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {opportunity.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Apply Button */}
      <Link
        href={opportunity.applicationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Apply Now
        <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  );
}
