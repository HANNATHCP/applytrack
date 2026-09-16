# ApplyTrack

ApplyTrack is a full-stack job application tracking platform designed to help students organize, monitor, and manage their placement journey in one place.

## Live Demo

[View ApplyTrack Live](https://applytrack-kappa.vercel.app)

## Features

- First-visit onboarding experience
- Dashboard with application statistics
- Add new job applications
- Edit existing applications
- Delete applications with confirmation
- Track company name, job role, and application status
- Application statuses:
  - Wishlist
  - Applied
  - Interview
  - Offer
  - Rejected
- Dynamic application counts
- Form validation and error handling
- Success and error messages
- Responsive dashboard layout
- Persistent data storage using MongoDB Atlas

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Node.js
- MongoDB Atlas
- Mongoose
- Vercel

## Project Structure

```text
applytrack/
├── app/
│   ├── api/
│   │   ├── applications/
│   │   └── test-db/
│   ├── onboarding/
│   └── page.js
├── lib/
│   └── mongodb.js
├── models/
│   └── Application.js
├── public/
├── .env.local
├── .gitignore
├── package.json
└── README.md