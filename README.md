# Sri Satyadeva Nursery Website

A responsive React + Vite starter website for Sri Satyadeva Nursery, using custom CSS and WhatsApp click-to-chat order enquiries.

## Requirements
- Node.js 18+ (recommended)
- VS Code

## Run locally
1. Extract the ZIP.
2. Open the `sri-satyadeva-nursery` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## GitHub Pages deployment
Pushing to `main` builds and deploys the site to:
`https://malleshgithub8919.github.io/Srisatyadevanursery/`

In **Repository Settings → Pages**, select **GitHub Actions** as the build and deployment source once. After enabling Pages, push a commit to `main` or run **Deploy to GitHub Pages** from the Actions tab to start the first deployment. The workflow configures the repository subpath for Vite assets and client-side routes; deployment may take a few minutes.

## Configure before publishing
Edit `src/config/business.js`:
- Add the WhatsApp number with country code and digits only, for example `919876543210` (replace with the actual nursery number).
- Add the correct contact number, address, email, opening hours and social links.
- Do not publish placeholder details as real business information.

## Catalogue content
Edit:
- `src/data/plants.js`
- `src/data/categories.js`

The current plant names, images, descriptions and categories are sample content. Confirm stock and replace with actual nursery photos and details before launch. Prices are not invented; catalogue items show “Price on request”.

## WhatsApp form behaviour
The order form validates required fields and opens WhatsApp with a pre-filled message. The customer must review and press **Send** in WhatsApp. A selected reference image is not uploaded automatically; the customer must attach it manually in WhatsApp.

## Image note
Nursery, plant, and gallery photos are stored in `public/images` and are included in the site build. Decorative background photos and web fonts may still load from external services.

## Important limitations
- This is a frontend starter; it does not save orders to a database or send automatic confirmations.
- Payment processing and admin inventory management are not included.
- Business-specific details and availability must be confirmed before launch.
