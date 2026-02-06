

## Why this project
I’m building this project to get hands-on with real frontend problems like routing, data fetching, media handling, browser extensions, and Progressive Web App support using React.

## Who it’s for
It’s primarily for my own professional growth, but it’s designed as a real user-facing app with email and social authentication, including Discord, to reflect production use cases.

## Why it’s valuable
The value comes from solving problems I can’t avoid in real products such as state in the URL, async data flows, and feature complexity rather than following tutorials.



### User Stories

- [ ] Users should be able to sign in or sign up with Discord, email and password or Google.
- [ ] Users should be able to add new bookmarks with a title, description, website URL, and tags
- [ ] Users should be able to view all their bookmarks
- [ ] Users should be able to search for bookmarks by title in the search bar
- [ ] Users should be able to see bookmark details, including favicon, title, URL, description, tags, view count, last visited date, and date added
- [ ] Users should be able to filter bookmarks by selecting one or multiple tags from the sidebar
- [ ] Users should be able to reset tag filters to view all bookmarks again
- [ ] Users should be able to view archived bookmarks
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

### Data Models

## - _profile_ (Table)

- profile_id: _uuid
- username: text
- avatar_url: text
- email: text
- theme_preference: text
- created_at: timestamp

## - _bookmarks_ Table:

- user_id: uuid
- url: text (not null)
- title: text
- description: text
- favicon_url: text
- is_archived: boolean
- is_pinned: boolean
- view_count: integer
- last_visited_at: timestamp
- created_at: timestamp

## - bookmark_tags Table:

- bookmark_id: uuid
- user_id: uuid
- name: text

## - _bookmark_tags_ (Join Table)

- bookmark_id: uuid
- tag_id: uuid

### /Components

- App
- MainLayout
- Sidebar
- Topbar
- SearchBar
- BookmarkGrid/ Bookmark List
- BookmarkCard
- TagsShowcase
- AddBookmarkModal
- TagFilterList

### /ui

- Avatar
- Button
- Input
- Badge
- Options
- DropDown
- Toast

### Routes

- /sign-up
- /sign-in
- /forgot-password
- /dashboard
- dashboard/archived
- dashboard/tag/:tagName

### Pages

- SignUpPage
- SignInPage
- ForgotPasswordPage
- Dashboard

### Context

- UserDataContext
- ThemeContext: isDark
- ToastsContext: addToast("Success!", "success)


##### BluePrint

| **Stage** | **Focus Area** | **Key Tool** |
| **Database** | Tables, Foreign Keys, Join Tables | Supabase SQL Editor |
| **Auth** | Social Login + Profile Triggers | Supabase Auth |
| **Navigation** | URL-based filtering (`/tag/:id`) | React Router |
| **Media** | Profile Pictures (Manual upload) | Cloudinary/ Supabase |
| **Feedback** | Success/Error messages | Toast Library (Sonner/Hot-Toast) |
