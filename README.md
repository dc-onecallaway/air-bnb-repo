# 🏡 Delta Project

> A full-stack Airbnb-style property listing platform built with **Node.js, Express.js, MongoDB, and EJS**, featuring authentication, property CRUD operations, image uploads, reviews, validation, and interactive maps.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-46E3B7?logo=render&logoColor=white)](https://delta-project-un1r.onrender.com/listings)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![EJS](https://img.shields.io/badge/EJS-Templating-A91E50)](https://ejs.co/)

---

## 📌 Overview

**Delta Project** is a server-rendered full-stack web application inspired by property-rental and marketplace platforms.

The application allows users to:

- Browse available properties
- View detailed property information
- Register and authenticate securely
- Create and manage their own listings
- Upload property images
- Edit and delete listings
- Add and manage reviews
- View property locations on interactive maps
- Receive feedback through flash messages
- Validate listing and review data before processing requests

The project demonstrates the implementation of a complete **MVC-style Express application**, integrating authentication, database persistence, cloud file storage, geolocation services, validation, middleware, and server-side rendering.

---

## 🔗 Live Application

### 🌐 [Open Delta Project](https://delta-project-un1r.onrender.com/listings)

The deployed application is hosted on **Render**.

> **Note:** The main application page is `/listings`. The root `/` route redirects to `/listings`.

---

## ✨ Features

### 👤 Authentication & Authorization

- User registration
- User login/logout
- Password hashing through Passport-Local-Mongoose
- Persistent authenticated sessions
- Protected routes for listing management
- Ownership-based authorization
- Flash messages for authentication and authorization feedback

### 🏠 Property Listings

- Browse all available listings
- View individual listing details
- Create new listings
- Edit existing listings
- Delete listings
- Associate listings with their owners
- Store listing information in MongoDB

### 📷 Image Management

- Upload listing images
- Handle multipart form data using Multer
- Store images using Cloudinary
- Save cloud-hosted image information with listings

### 🗺️ Maps & Location

- Mapbox integration
- Location geocoding
- Interactive listing maps
- Display property locations based on listing data

### ⭐ Reviews

- Add reviews to listings
- Display reviews on listing pages
- Delete reviews
- Associate reviews with authenticated users
- Validate review input

### 🛡️ Validation & Error Handling

- Joi-based server-side validation
- Custom Express error handling
- Centralized 404 handling
- Flash-based success/error notifications
- Middleware-based request validation and authorization

### 🎨 Server-Side Rendering

- EJS templates
- EJS-Mate layouts
- Reusable views and layouts
- Static assets served through Express

---

## 🧰 Technology Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Backend | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | Passport.js |
| Authentication Strategy | Passport-Local |
| User Model | Passport-Local-Mongoose |
| Templating | EJS |
| Layouts | EJS-Mate |
| Styling | CSS |
| Image Upload | Multer |
| Image Storage | Cloudinary |
| Maps / Geocoding | Mapbox |
| Validation | Joi |
| Sessions | Express-Session |
| Flash Messages | Connect-Flash |
| HTTP Method Support | Method-Override |
| Environment Configuration | Dotenv |
| Deployment | Render |
| Database Hosting | MongoDB Atlas |

---

## 🏗️ Application Architecture

The project follows a modular **MVC-inspired architecture**:

```text
                         ┌──────────────────────┐
                         │       Browser        │
                         └──────────┬───────────┘
                                    │ HTTP
                                    ▼
                         ┌──────────────────────┐
                         │      Express.js      │
                         │       Routing        │
                         └──────────┬───────────┘
                                    │
                   ┌────────────────┼────────────────┐
                   │                │                │
                   ▼                ▼                ▼
             ┌──────────┐    ┌────────────┐    ┌────────────┐
             │Middleware│    │ Controllers│    │   Routes   │
             └──────────┘    └─────┬──────┘    └────────────┘
                                   │
                                   ▼
                            ┌────────────┐
                            │   Models   │
                            │  Mongoose  │
                            └─────┬──────┘
                                  │
                                  ▼
                            ┌────────────┐
                            │  MongoDB   │
                            └────────────┘

External Services:
  ├── Cloudinary → Image storage
  └── Mapbox     → Geocoding & maps
```

### Request Flow

A typical listing request follows this flow:

```text
Browser
   ↓
Express Route
   ↓
Authentication / Authorization Middleware
   ↓
Controller
   ↓
Mongoose Model
   ↓
MongoDB
   ↓
Controller
   ↓
EJS View
   ↓
HTML Response
```

---

## 📂 Project Structure

```text
Delta-project/
│
├── controllers/
│   ├── listings.js          # Listing controller logic
│   ├── reviews.js           # Review controller logic
│   └── users.js             # Authentication/user logic
│
├── init/
│   ├── data.js              # Sample listing data
│   └── index.js              # Database initialization/seeding
│
├── models/
│   ├── listing.js           # Listing Mongoose model
│   ├── review.js            # Review Mongoose model
│   └── user.js              # User Mongoose model
│
├── public/
│   ├── css/                 # Stylesheets
│   └── js/                  # Client-side JavaScript
│
├── routes/
│   ├── listing.js           # Listing routes
│   ├── review.js            # Review routes
│   └── user.js              # Authentication routes
│
├── utils/
│   └── ExpressError.js      # Custom Express error class
│
├── views/
│   ├── layouts/             # EJS layouts
│   ├── listings/            # Listing views
│   ├── users/               # Authentication views
│   └── includes/            # Reusable EJS partials
│
├── app.js                   # Application entry point
├── cloudConfig.js           # Cloudinary configuration
├── middleware.js            # Authentication/authorization middleware
├── schema.js                # Joi validation schemas
├── package.json             # Dependencies and project metadata
├── package-lock.json        # Locked dependency versions
└── README.md
```

> Directory contents can evolve as the application is extended.

---

## 🔀 Main Routes

### Listings

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/listings` | Display all listings |
| `GET` | `/listings/new` | Show listing creation form |
| `POST` | `/listings` | Create a listing |
| `GET` | `/listings/:id` | Display a listing |
| `GET` | `/listings/:id/edit` | Show edit form |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |

### Reviews

| Method | Route | Purpose |
|---|---|---|
| `POST` | `/listings/:id/reviews` | Create a review |
| `DELETE` | `/listings/:id/reviews/:reviewId` | Delete a review |

### Users

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/signup` | Registration page |
| `POST` | `/signup` | Register a user |
| `GET` | `/login` | Login page |
| `POST` | `/login` | Authenticate a user |
| `GET` | `/logout` | Log out |

---

## 🗄️ Database Design

The application uses MongoDB with Mongoose.

### Users

Stores authentication and user information.

```text
User
├── username
├── email
└── authentication data
```

### Listings

Stores property information and ownership.

```text
Listing
├── title
├── description
├── image
├── price
├── location
├── country
├── geometry
├── owner → User
└── reviews → Review[]
```

### Reviews

Stores user-generated reviews associated with listings.

```text
Review
├── comment
├── rating
├── author → User
└── listing → Listing
```

Relationships:

```text
User
 ├── owns ────────► Listings
 └── writes ──────► Reviews

Listing
 ├── belongs to ──► User
 └── contains ────► Reviews

Review
 ├── belongs to ──► Listing
 └── written by ──► User
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root for local development.

```env
ATLASDB_URL=your_mongodb_atlas_connection_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret

MAPBOX_TOKEN=your_mapbox_access_token

SECRET=your_session_secret
```

### Environment Variable Reference

| Variable | Purpose |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_KEY` | Cloudinary API key |
| `CLOUDINARY_SECRET` | Cloudinary API secret |
| `MAPBOX_TOKEN` | Mapbox access token |
| `SECRET` | Express session secret |
| `PORT` | Server port; provided automatically by Render in production |

### ⚠️ Security

Never commit the `.env` file to Git.

Make sure `.gitignore` contains:

```gitignore
.env
node_modules/
.DS_Store
```

Never expose:

- MongoDB credentials
- Cloudinary API secrets
- Session secrets
- Private API keys

---

## 🚀 Local Development

### Prerequisites

Install:

- Node.js 22.x
- npm
- MongoDB Atlas account or a local MongoDB instance
- Cloudinary account
- Mapbox account

### 1. Clone the repository

```bash
git clone https://github.com/dc-onecallaway/Delta-project.git
cd Delta-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` and add the required variables described above.

### 4. Start the application

```bash
node app.js
```

The server uses:

```text
PORT from environment
```

or falls back to:

```text
8080
```

### 5. Open the application

```text
http://localhost:8080/listings
```

---

## 🌱 Database Initialization

The repository contains initialization scripts under `init/` for inserting sample data.

Before running database seed scripts against a new database:

1. Configure the correct MongoDB connection string.
2. Verify the database you intend to modify.
3. Ensure listing ownership references correspond to users in the current database.
4. Run the initialization script only when you intentionally want to seed/reset data.

> Avoid running seed scripts against production data unless you understand exactly what the script modifies.

---

## ☁️ Deployment

The production application is deployed on **Render**.

### Production Architecture

```text
GitHub
   │
   │ Deploy
   ▼
Render
   │
   ├── Node.js / Express application
   │
   ├──────────────► MongoDB Atlas
   │
   ├──────────────► Cloudinary
   │
   └──────────────► Mapbox
```

### Deployment Configuration

Set the following environment variables in the Render service:

```text
ATLASDB_URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET
MAPBOX_TOKEN
SECRET
```

Render provides the production `PORT` automatically.

### Live URL

https://delta-project-un1r.onrender.com/listings

---

## 🧪 Testing Checklist

Before pushing a new production version, verify:

### Authentication

- [ ] User can register
- [ ] User can log in
- [ ] User can log out
- [ ] Invalid credentials are rejected
- [ ] Protected routes require authentication

### Listings

- [ ] Listings page loads
- [ ] Individual listing pages load
- [ ] Authenticated users can create listings
- [ ] Owners can edit listings
- [ ] Owners can delete listings
- [ ] Non-owners cannot modify another user's listing

### Images

- [ ] Image upload works
- [ ] Images are stored in Cloudinary
- [ ] Uploaded images display correctly

### Reviews

- [ ] Authenticated users can add reviews
- [ ] Reviews display correctly
- [ ] Review deletion works
- [ ] Unauthorized review deletion is blocked

### Maps

- [ ] Listing location is geocoded
- [ ] Map loads correctly
- [ ] Listing location is displayed correctly

### Deployment

- [ ] Production environment variables are configured
- [ ] MongoDB Atlas accepts the production connection
- [ ] Render deployment completes successfully
- [ ] Production `/listings` page loads
- [ ] Authentication works in production

---

## 🛡️ Security Considerations

The application implements several basic security practices:

- Password authentication through Passport-Local-Mongoose
- Server-side input validation using Joi
- Authentication middleware for protected routes
- Authorization based on listing/review ownership
- HTTP-only session cookies
- Environment variables for sensitive configuration
- Centralized Express error handling

### Production Improvements

For a production-grade system, the following can be added:

- Persistent MongoDB-backed session storage
- Secure cookies in production
- CSRF protection
- Rate limiting
- Helmet security headers
- More comprehensive input sanitization
- Automated security testing
- Automated dependency updates

---

## 📈 Future Improvements

### Product Features

- [ ] Property booking/reservation system
- [ ] Advanced search
- [ ] Filters by price, location, category, and amenities
- [ ] Pagination/infinite scrolling
- [ ] User profile pages
- [ ] Wishlist/favorites
- [ ] Availability calendar
- [ ] Host dashboard
- [ ] Booking history

### Engineering Improvements

- [ ] Add automated unit and integration tests
- [ ] Add API documentation
- [ ] Add centralized logging
- [ ] Add MongoDB-backed session storage
- [ ] Add rate limiting
- [ ] Add security headers with Helmet
- [ ] Improve error monitoring
- [ ] Improve mobile responsiveness
- [ ] Optimize image delivery
- [ ] Add CI/CD with automated tests

### UI/UX Improvements

- [ ] Modernize the visual design
- [ ] Improve responsive layouts
- [ ] Add loading states
- [ ] Improve empty states
- [ ] Improve form validation feedback
- [ ] Add skeleton loaders
- [ ] Improve accessibility

---

## 🖼️ Screenshots

Add screenshots here to make the repository more portfolio-friendly.

Recommended screenshots:

```text
screenshots/
├── listings.png
├── listing-details.png
├── create-listing.png
├── login.png
├── map.png
└── reviews.png
```

Example:

```markdown
![Listings](screenshots/listings.png)
```

---

## 📊 Project Highlights

This project demonstrates practical experience with:

- Full-stack JavaScript development
- RESTful routing
- MVC architecture
- MongoDB data modeling
- Mongoose relationships and population
- Authentication and authorization
- Session management
- Cloud-based image storage
- Geolocation and map APIs
- Server-side rendering
- Form and schema validation
- Middleware design
- Error handling
- Cloud deployment

---

## 👨‍💻 Author

### Deepak Chauhan

B.Tech — Mathematics & Computing, Delhi Technological University

**Profiles**

- GitHub: [dc-onecallaway](https://github.com/dc-onecallaway)
- LinkedIn: [Deepak Chauhan](https://www.linkedin.com/in/chauhan-deepak/)
- LeetCode: [dc_one_call_away](https://leetcode.com/u/dc_one_call_away/)
- CodeChef: [dc_one_call_aw](https://www.codechef.com/users/dc_one_call_aw)
- Codeforces: [chauhandeepak21103](https://codeforces.com/profile/chauhandeepak21103)

---

## 📄 License

This project is intended for educational and portfolio purposes.

Unless a separate license is added to this repository, the source code should not be assumed to be freely reusable or redistributable.

---

## 🙌 Acknowledgements

This project was developed as a full-stack learning and portfolio project, with inspiration from modern property-listing platforms and the concepts taught through the Apna College web development curriculum.

---

⭐ If you find this project useful, consider giving the repository a star!
