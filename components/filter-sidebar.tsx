"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { allTags } from "@/lib/data";

const types = ["Internship", "Program", "Competition"] as const;
const locations = ["Maryland", "Remote", "Hybrid"] as const;
const difficulties = ["Easy", "Medium", "Hard"] as const;

interface FilterSidebarProps {
  className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type");
  const currentLocation = searchParams.get("location");
  const currentDifficulty = searchParams.get("difficulty");
  const currentTag = searchParams.get("tag");

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const updateFilter = (name: string, value: string) => {
    const currentValue = searchParams.get(name);
    const newValue = currentValue === value ? null : value;
    router.push(`/opportunities?${createQueryString(name, newValue)}`);
  };

  const clearAllFilters = () => {
    router.push("/opportunities");
  };

  const hasActiveFilters =
    currentType || currentLocation || currentDifficulty || currentTag;

  return (
    <aside className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground">Type</h3>
        <div className="space-y-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => updateFilter("type", type)}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
                currentType === type
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground">Location</h3>
        <div className="space-y-2">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => updateFilter("location", location)}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
                currentLocation === location
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground">Difficulty</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => updateFilter("difficulty", difficulty)}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
                currentDifficulty === difficulty
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-foreground">
          Field / Interest
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => updateFilter("tag", tag)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                currentTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
