# Implementation Plan - SyncTalents Landing Page Migration

Migrate the existing `code.html` prototype to a modern Next.js stack with Tailwind CSS v4 and shadcn/ui.

## User Review Required

> [!IMPORTANT]
> The project is initialized with **Tailwind CSS v4**. I will be using the new CSS-first theme configuration in `globals.css`.
> I will replace the default `Geist` font with `Inter` as per the original design.

## Proposed Changes

### Core Setup

#### [MODIFY] [globals.css](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/app/globals.css)
- Update CSS variables for `--primary`, `--accent`, and `--dark` colors.
- Define Tailwind v4 theme extensions for these colors.
- Add utility classes for the hero background and step lines.

#### [MODIFY] [layout.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/app/layout.tsx)
- Replace `Geist` font with `Inter` from `next/font/google`.
- Update metadata (Title, Description) from `code.html`.

---

### Components

#### [NEW] [Header.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/Header.tsx)
- Sticky header with logo, navigation links, and "Book a Call" CTA.

#### [NEW] [Hero.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/Hero.tsx)
- Hero section with left-side content and right-side lead capture form.
- Use shadcn/ui `Button`, `Input`, and `Select` for the form.

#### [NEW] [TrustBar.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/TrustBar.tsx)
- "Trusted By" section with partner logos.

#### [NEW] [ValueProps.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/ValueProps.tsx)
- "Why Companies Choose SyncTalents" section with feature icons.

#### [NEW] [Roles.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/Roles.tsx)
- "Roles We Can Fill" grid of cards.

#### [NEW] [HowItWorks.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/HowItWorks.tsx)
- 3-step process section with connecting lines.

#### [NEW] [CTABanner.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/CTABanner.tsx)
- Dark CTA section with decorative background pattern.

#### [NEW] [FAQ.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/FAQ.tsx)
- Frequently Asked Questions section (Accordion style).

#### [NEW] [Footer.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/components/sections/Footer.tsx)
- Multi-column footer with company info, links, and contact details.

---

### Page Assembly

#### [MODIFY] [page.tsx](file:///Users/m1/Documents/Coding%20Folder/synctalents/src/app/page.tsx)
- Import and render all sections in order.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no TypeScript or build errors.
- Use the browser tool to verify the visual fidelity against the original `code.html`.

### Manual Verification
- Check responsiveness on mobile and desktop.
- Verify form elements and button hover states.
