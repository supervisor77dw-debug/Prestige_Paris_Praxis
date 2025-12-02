# Implementation Plan - Premium Design Overhaul

## Goal

Elevate the website's visual quality to a "Premium Luxury" standard, replace dark/black backgrounds with elegant imagery, expand testimonials, and ensure a consistent, high-end user experience.

## User Review Required
>
> [!IMPORTANT]
> I will be generating new AI images for the backgrounds to replace the black sections. Please review these images once generated.

## Proposed Changes

### 1. Global Design & CSS (`style.css`)

- **Logo:** Increase size and prominence in the navbar.
- **Colors:** Refine palette to ensure warm, elegant tones (Gold, Beige, Cream) replace harsh blacks.
- **Typography:** Ensure consistent premium font usage.
- **Backgrounds:** Create new CSS classes for section backgrounds (Hero, Prestige Codes, Testimonials, Contact) to support images with overlays.
- **Testimonials:** Update grid layout for 9-12 items with avatar placeholders/icons.
- **Trust Elements:** Add styles for the new "Trust Bar" (500+ Clients, etc.).

### 2. Image Generation

- **Homepage Hero:** Bright, elegant beauty studio/face (replacing black).
- **Prestige Codes:** Abstract gold/nature luxury texture.
- **Kundenstimmen:** Blurry, bright, friendly studio background.
- **Kontakt:** Elegant reception or treatment room detail.

### 3. Content Expansion & Page Updates

#### [MODIFY] [index.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/index.html)

- Update Hero section to use new bright background class.
- Ensure text contrast with overlay.

#### [MODIFY] [prestige_codes.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/prestige_codes.html)

- Apply new background image to the hero/intro section.

#### [MODIFY] [kundenstimmen.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/kundenstimmen.html)

- **Expand Testimonials:** Add 5-8 new realistic testimonials to reach the target of 9-12.
- **Layout:** Switch to a 3-column grid with elegant cards.
- **Trust Bar:** Add the "500+ Clients", "15+ Years", "5 Stars" section at the bottom.
- **Background:** Apply the new bright studio background.

#### [MODIFY] [kontakt.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/kontakt.html)

- Apply new background image.
- Apply new background image.
- Ensure form and text stand out clearly.

#### [MODIFY] [radiofrequenz.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/radiofrequenz.html), [ultraschall.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/ultraschall.html), [mesotherapie.html](file:///C:/Users/dirk/.gemini/antigravity/brain/37a49d4f-a87d-4908-b172-975161c94ad1/mesotherapie.html)

- **Design Overhaul:** Replace continuous text with a customer-friendly, scannable layout.
- **Features:** Use icon grids or feature cards for benefits.
- **Process:** Use a visual step-by-step layout.
- **FAQ:** Ensure accordion or clear separation.

## Verification Plan

### Automated Tests

- None (Visual changes).

### Manual Verification

- **Visual Check:** Open `index.html` and navigate to all pages.
- **Logo:** Verify it is larger and well-positioned.
- **Backgrounds:** Confirm no pure black sections remain; check image quality and text readability.
- **Testimonials:** Count testimonials (must be >= 9), check grid layout and trust bar.
- **Mobile:** Verify responsiveness of new layouts.
