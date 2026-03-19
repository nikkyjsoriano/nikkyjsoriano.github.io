/** A single anchor in the navbar. */
export interface NavItem {
  /** In-page anchor, e.g. `#about`; the id is the substring after `#`. */
  readonly href: `#${string}`;
  readonly label: string;
  /** When true the item is hidden unless the visitor passed the access token. */
  readonly authRequired?: boolean;
}

export const navItems: readonly NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience", authRequired: true },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];
