🧭 The "Why"
I’m building LinkKit because tutorials only take you so far. I wanted to break things and fix them. Specifically tricky stuff like URL-based state, messy async flows, and making a PWA that doesn't feel like a website.

👥 Who it’s for
Mostly for my own growth, but I’m treating it like a real product. That means no shortcuts. It’s got full email and Discord auth and is built to actually be used, not just sit in a portfolio.

💎 The Value
The goal isn't just "making it work." It's about handling the complexity you only find in real products, like managing heavy data without the UI lagging and keeping the architecture clean while adding features.

### User Stories

- [ ] Users should be able to sign in or sign up with Discord or email & password.
- [ ] Users should be able to add new bookmarks with a title, description, website URL, and tags
- [ ] Users should be able to view all their bookmarks
- [ ] Users should be able to search for bookmarks by title in the search bar
- [ ] Users should be able to see bookmark details, including favicon, title, URL, description, tags, view count, last visited date, and date added
- [ ] Users should be able to filter bookmarks by selecting one or multiple tags from the sidebar
- [ ] Users should be able to reset tag filters to view all bookmarks again
- [ ] Users should be able to view archived bookmarks to remove them from the main view without deleting them
- [ ] Users should be able to pin/unpin bookmarks to keep important ones easily accessible
- [ ] Users should be able to edit existing bookmarks to update their details
- [ ] Users should be able to copy bookmark URLs to the clipboard
- [ ] Users should be able to visit bookmarked websites directly from the app
- [ ] Users should be able to sort bookmarks by "Recently added", "Recently visited", or "Most visited"
- [ ] Users should be able to toggle between light and dark color themes
- [ ] Users should be able to view the optimal layout for the interface depending on their device's screen size
- [ ] Users should be able to see hover and focus states for all interactive elements on the page
- [ ] Users should be able to save bookmarks through an extension directly from any webpage
- [ ] User should be able to install the app on their mobile and access it offline
- [ ] Automatically fetch website metadata (favicon, title, description) when adding a bookmark URL


## Tech Stack
- Frontend: React, React Router, Zustand
- Form Management: Zod, React Form Hook
- Styling/ Components: Tailwind CSS, Shadcn
- Backend & Auth: Supabase (Database + Authentication)
- Media Storage: Cloudinary
