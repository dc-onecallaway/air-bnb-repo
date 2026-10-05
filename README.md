# Delta Project

<!-- TODO: One or two sentences describing what the app actually does — e.g. "A full-stack listings platform where users can create, browse, and book properties, with map-based location search and photo uploads." -->

A full-stack web application built with Node.js, Express, and MongoDB, featuring user authentication, image uploads, and interactive maps.

## 🔗 Live Demo

<!-- TODO: Add your deployed link here, e.g. https://delta-project.onrender.com -->
Coming soon

## ✨ Features

<!-- TODO: Confirm/edit this list based on what's actually implemented -->
- User authentication and session management (sign up, log in, log out)
- Create, read, update, and delete (CRUD) functionality for listings
- Image upload and cloud storage via Cloudinary
- Interactive maps and geolocation powered by Mapbox
- Form validation with Joi
- Server-rendered views using EJS

## 🛠️ Tech Stack

**Backend**
- Node.js / Express.js
- MongoDB with Mongoose (ODM)
- Passport.js + Passport-Local (authentication)
- Passport-Local-Mongoose (user model integration)

**Frontend**
- EJS + EJS-Mate (templating and layouts)
- CSS

**Other Tools & Services**
- Cloudinary + Multer-Storage-Cloudinary (image hosting/uploads)
- Mapbox SDK (maps and geocoding)
- Joi (schema validation)
- Connect-Flash (flash messages)
- Method-Override (support for PUT/DELETE in forms)
- Dotenv (environment variable management)

## 📂 Project Structure

```
Delta-project/
├── controllers/     # Route handler logic
├── init/            # Database seeding/initialization scripts
├── models/          # Mongoose schemas/models
├── public/          # Static assets (CSS, client-side JS, images)
├── routes/          # Express route definitions
├── uploads/         # Uploaded file storage (local, if applicable)
├── utils/           # Helper functions and utilities
├── views/           # EJS templates
├── app.js           # Application entry point
├── cloudConfig.js   # Cloudinary configuration
├── middleware.js    # Custom Express middleware
└── schema.js         # Joi validation schemas
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v22.7.0 recommended — see `package.json` engines field)
- MongoDB instance (local or Atlas)
- Cloudinary account (for image uploads)
- Mapbox account (for map features)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dc-onecallaway/Delta-project.git
   cd Delta-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_access_token
   SECRET=your_session_secret
   ```
   <!-- TODO: Confirm the exact env variable names your code actually uses in app.js / cloudConfig.js -->

4. Start the server
   ```bash
   node app.js
   ```

5. Visit `http://localhost:3000` (or your configured port) in your browser

## 📸 Screenshots

<!-- TODO: Add a few screenshots or a short GIF of the app in action — this matters a lot for portfolio visibility -->

## 🗺️ Roadmap / Future Improvements

<!-- TODO: Optional, but shows growth mindset — e.g. -->
- [ ] Add automated tests
- [ ] Add pagination for listings
- [ ] Improve mobile responsiveness

## 👤 Author

<!-- TODO: Your name, portfolio link, LinkedIn, etc. -->

## 📄 License

<!-- TODO: Add a license, e.g. MIT, or note "No license — for portfolio/educational purposes" -->
