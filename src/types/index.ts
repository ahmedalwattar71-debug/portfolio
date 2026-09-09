/**
 * Shared domain types for the portfolio content model.
 *
 * All user-facing content is data-driven (see `src/data/profile.ts`) so the site
 * can be updated without touching presentation components.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface Profile {
  name: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  /** One-line positioning statement used in the hero. */
  tagline: string;
  /** Longer positioning statement, 1–2 sentences. */
  positioning: string;
}

export interface AboutContent {
  /** Narrative paragraphs for the About section. */
  paragraphs: string[];
  /** Short factual highlights rendered as a side panel. */
  highlights: { label: string; value: string }[];
}

export interface ExpertiseArea {
  /** Two-digit index label, e.g. "01". */
  index: string;
  title: string;
  summary: string;
  /** Concrete, CV-supported keywords. */
  points: string[];
  icon: ExpertiseIcon;
}

export type ExpertiseIcon = 'code' | 'network' | 'shield' | 'server';

export interface TechBadge {
  label: string;
  /** Optional short note shown on hover / as caption. */
  note?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  /** Short tagline shown under the title. */
  tagline: string;
  /** Narrative description, CV-accurate. */
  overview: string[];
  stack: TechBadge[];
  /** For the RADIUS case study: an ordered request/data flow. */
  architecture?: ArchitectureNode[];
  /** "Why this matters" bullet points. */
  significance?: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyNote: string;
  role: string;
  period: string;
  /** Bullet points, taken/condensed from the CVs. */
  contributions: string[];
  /** Domain tags. */
  tags: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
  icon: ExpertiseIcon;
}

export interface TimelinePhase {
  period: string;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  timeframe: string;
}

export interface Certification {
  name: string;
  fullName: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
  /** Position on a fixed 4-step scale: Basic → Conversational → Intermediate → Native. */
  scaleStep: 1 | 2 | 3 | 4;
}

export interface CVVariant {
  id: string;
  label: string;
  description: string;
  href: string;
  filename: string;
}
