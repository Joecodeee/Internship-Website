export type OpportunityType = "Internship" | "Program" | "Competition";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type Location = "Maryland" | "Remote" | "Hybrid";

export interface Opportunity {
  id: string;
  title: string;
  type: OpportunityType;
  location: Location;
  deadline: string;
  gradeEligibility: string;
  difficulty: Difficulty;
  tags: string[];
  applicationLink: string;
  shortDescription: string;
  whyItMatters: string;
  bestFor: string[];
  closingSoon?: boolean;
  featured?: boolean;
  beginnerFriendly?: boolean;
}

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "NASA STEM Internship",
    type: "Internship",
    location: "Maryland",
    deadline: "April 15, 2026",
    gradeEligibility: "9-12",
    difficulty: "Hard",
    tags: ["STEM", "Engineering", "Research"],
    applicationLink: "https://intern.nasa.gov",
    shortDescription:
      "Work alongside NASA scientists and engineers on cutting-edge space exploration projects.",
    whyItMatters:
      "Gain hands-on experience with real aerospace projects and build connections in the space industry.",
    bestFor: ["Future engineers", "Science enthusiasts", "Problem solvers"],
    featured: true,
    closingSoon: true,
  },
  {
    id: "2",
    title: "NIH Summer Research Program",
    type: "Program",
    location: "Maryland",
    deadline: "March 1, 2026",
    gradeEligibility: "11-12",
    difficulty: "Medium",
    tags: ["Medical", "Research", "Biology"],
    applicationLink: "https://www.training.nih.gov",
    shortDescription:
      "Conduct biomedical research at one of the world's leading research institutions.",
    whyItMatters:
      "Perfect for students interested in medicine, biology, or public health careers.",
    bestFor: ["Pre-med students", "Biology majors", "Research enthusiasts"],
    featured: true,
  },
  {
    id: "3",
    title: "Congressional App Challenge",
    type: "Competition",
    location: "Remote",
    deadline: "November 1, 2026",
    gradeEligibility: "9-12",
    difficulty: "Easy",
    tags: ["STEM", "Technology", "Coding"],
    applicationLink: "https://www.congressionalappchallenge.us",
    shortDescription:
      "Create an app and compete for recognition from your congressional representative.",
    whyItMatters:
      "Build your coding portfolio and get recognized at the national level.",
    bestFor: ["Coders", "App developers", "Tech enthusiasts"],
    beginnerFriendly: true,
    featured: true,
  },
  {
    id: "4",
    title: "DECA Business Competition",
    type: "Competition",
    location: "Hybrid",
    deadline: "December 15, 2026",
    gradeEligibility: "9-12",
    difficulty: "Medium",
    tags: ["Business", "Marketing", "Leadership"],
    applicationLink: "https://www.deca.org",
    shortDescription:
      "Compete in business-related challenges and develop entrepreneurial skills.",
    whyItMatters:
      "Build leadership skills and connect with future business leaders.",
    bestFor: ["Future entrepreneurs", "Marketing students", "Leaders"],
    beginnerFriendly: true,
  },
  {
    id: "5",
    title: "Johns Hopkins Pre-College Program",
    type: "Program",
    location: "Maryland",
    deadline: "February 28, 2026",
    gradeEligibility: "10-12",
    difficulty: "Hard",
    tags: ["Medical", "Research", "Science"],
    applicationLink: "https://precollege.jhu.edu",
    shortDescription:
      "Experience college-level learning at a world-renowned university.",
    whyItMatters:
      "Get a head start on your college career and explore advanced topics.",
    bestFor: ["High achievers", "College-bound students", "Science lovers"],
    closingSoon: true,
  },
  {
    id: "6",
    title: "Girls Who Code Summer Immersion",
    type: "Program",
    location: "Remote",
    deadline: "March 15, 2026",
    gradeEligibility: "10-11",
    difficulty: "Easy",
    tags: ["STEM", "Technology", "Coding"],
    applicationLink: "https://girlswhocode.com",
    shortDescription:
      "Learn coding skills in a supportive, collaborative environment.",
    whyItMatters:
      "Join a community of young women in tech and build valuable skills.",
    bestFor: ["Girls in tech", "Beginner coders", "Tech curious"],
    beginnerFriendly: true,
  },
  {
    id: "7",
    title: "Bank of America Student Leaders",
    type: "Internship",
    location: "Maryland",
    deadline: "January 31, 2026",
    gradeEligibility: "11-12",
    difficulty: "Medium",
    tags: ["Business", "Leadership", "Community Service"],
    applicationLink: "https://about.bankofamerica.com/studentleaders",
    shortDescription:
      "Develop leadership skills through a paid internship at a local nonprofit.",
    whyItMatters:
      "Earn money while making a difference in your community.",
    bestFor: ["Community leaders", "Nonprofit enthusiasts", "Future managers"],
    closingSoon: true,
  },
  {
    id: "8",
    title: "Science Olympiad",
    type: "Competition",
    location: "Hybrid",
    deadline: "September 30, 2026",
    gradeEligibility: "9-12",
    difficulty: "Medium",
    tags: ["STEM", "Science", "Competition"],
    applicationLink: "https://www.soinc.org",
    shortDescription:
      "Compete in team-based STEM events at regional, state, and national levels.",
    whyItMatters:
      "Build teamwork skills and deepen your understanding of science.",
    bestFor: ["Science lovers", "Team players", "Competitive spirits"],
    beginnerFriendly: true,
  },
];

export function getFilteredOpportunities(filters: {
  type?: OpportunityType;
  location?: Location;
  difficulty?: Difficulty;
  tag?: string;
  search?: string;
}): Opportunity[] {
  return opportunities.filter((opp) => {
    if (filters.type && opp.type !== filters.type) return false;
    if (filters.location && opp.location !== filters.location) return false;
    if (filters.difficulty && opp.difficulty !== filters.difficulty)
      return false;
    if (filters.tag && !opp.tags.includes(filters.tag)) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        opp.title.toLowerCase().includes(searchLower) ||
        opp.shortDescription.toLowerCase().includes(searchLower) ||
        opp.tags.some((t) => t.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });
}

export function getFeaturedOpportunities(): Opportunity[] {
  return opportunities.filter((opp) => opp.featured);
}

export function getClosingSoonOpportunities(): Opportunity[] {
  return opportunities.filter((opp) => opp.closingSoon);
}

export function getBeginnerFriendlyOpportunities(): Opportunity[] {
  return opportunities.filter((opp) => opp.beginnerFriendly);
}

export const allTags = [
  "STEM",
  "Business",
  "Medical",
  "Technology",
  "Research",
  "Leadership",
  "Coding",
  "Engineering",
  "Marketing",
  "Biology",
  "Science",
  "Community Service",
  "Competition",
];
