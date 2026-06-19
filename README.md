# Miccoli Official Website

A simple, premium static website for Miccoli, built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — page structure, editable content sections and placeholder links.
- `styles.css` — visual design, responsive layout, typography and atmospheric styling.
- `script.js` — lightweight navigation, header state and scroll reveal interactions.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing guide

### Hero imagery

The hero currently uses CSS gradients and decorative placeholders. To add official photography or video, edit the `.hero-media` area in `index.html` and update supporting styles in `styles.css`.

### Music links

Search for `streaming-links` in `index.html` and replace `#` with final Spotify, Apple Music, YouTube Music, Amazon Music or other platform URLs.

### Video embeds

The videos section uses placeholder cards. Replace each `.video-placeholder` block with official YouTube iframe embeds when final video URLs are ready.

### Live dates

The live section currently displays a polished fallback message. Replace the fallback copy with a tour date list when shows are announced.

### Store

The store section is intentionally placeholder-only. Replace product cards and the `Shop Official Store` link with official store content when available.

### Newsletter

The newsletter form has first name, email, country and consent fields. Connect the form `action` to the chosen email platform, such as Mailchimp, Klaviyo or ConvertKit.

### Contact details

Placeholder emails are included for general, booking, press and collaboration enquiries. Replace them with official contacts before launch if different.

## Deployment

Because the site is static, it can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages or any standard web server.
