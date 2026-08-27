# E-Commerce Application

A full-stack e-commerce application with a customer-facing storefront, dedicated admin panel, and RESTful backend. The application supports product management, user authentication, cloud-based image storage, order management, and multiple payment methods.

## Live Demo

- Customer Storefront: https://e-com-frontend-opal-three.vercel.app
- Admin Panel: https://e-com-admin-indol.vercel.app
- Backend API: https://e-com-backend-xi.vercel.app

## Features

### Customer Storefront

- Browse products by category and subcategory
- View individual product details
- Select product sizes and quantities
- Add products to cart
- Manage cart items
- Place orders
- Cash on Delivery (COD) checkout
- Stripe online payments
- Razorpay test-mode payments
- User registration and login

### Admin Panel

- Secure admin authentication
- Add and manage products
- Upload multiple product images
- View product listings
- Manage orders
- Update order status
- Interact with backend APIs through a dedicated admin interface

### Backend

- RESTful API architecture using Node.js and Express.js
- MongoDB database with Mongoose
- JWT-based authentication and authorization
- bcrypt password hashing
- Product CRUD APIs
- User authentication APIs
- Cart and order APIs
- Multiple payment workflows
- Multer-based multipart file handling
- Cloudinary image storage
- Request validation and error handling
- Environment-based configuration for sensitive credentials

Tech Stack
Frontend
React
Vite
Tailwind CSS
React Router
Admin Panel
React
Vite
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt
Multer
Cloudinary
Stripe
Razorpay
validator
dotenv
CORS
Architecture
                         ┌──────────────────┐
                         │  Customer Store  │
                         │  React + Vite    │
                         └────────┬─────────┘
                                  │
                                  │ REST API
                                  ↓
┌──────────────────┐      ┌──────────────────┐
│   Admin Panel    │ ───→ │ Express Backend  │
│ React + Vite     │      │   Node.js        │
└──────────────────┘      └────────┬─────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ↓              ↓              ↓
              ┌──────────┐  ┌────────────┐  ┌─────────────┐
              │ MongoDB  │  │ Cloudinary │  │  Payments   │
              │  Atlas   │  │   Images   │  │ Stripe /    │
              └──────────┘  └────────────┘  │ Razorpay    │
                                             └─────────────┘
Project Structure
my-e-com/
│
├── frontend/                 # Customer-facing React application
│
├── admin/                    # Admin dashboard
│
├── backend/                  # Node.js + Express REST API
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .gitignore
└── README.md
Backend API

The backend exposes APIs for the main application functionality.

User
POST /api/user/register
POST /api/user/login
Products
POST /api/product/add
GET  /api/product/list
POST /api/product/single
POST /api/product/remove
Cart
POST /api/cart

Additional cart endpoints are available in the backend implementation.

Orders

Order endpoints handle order creation, retrieval, payment processing, and order verification.

Payment methods include:

Cash on Delivery
Stripe
Razorpay (test mode)
Authentication

The application uses JSON Web Tokens (JWT) for authentication.

Passwords are securely hashed using bcrypt before being stored in MongoDB.

Protected backend routes use authentication middleware to validate JWTs before allowing access to restricted functionality.

Image Management

Product images are uploaded using Multer and stored on Cloudinary.

The backend stores the resulting secure Cloudinary URLs with the corresponding product data in MongoDB.

Database

MongoDB Atlas is used as the production database, with Mongoose providing schema definitions and database interaction.

Primary data includes:

Users
Products
Cart information
Orders
Environment Variables

Create a .env file inside the backend directory.

Example:

PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Never commit the .env file or expose these credentials publicly.

Running Locally
Backend
cd backend
npm install
npm run server

The backend runs locally on:

http://localhost:4000
Customer Frontend
cd frontend
npm install
npm run dev
Admin Panel
cd admin
npm install
npm run dev
Deployment

The application is deployed using Vercel.

The three applications are maintained as separate Vercel projects while remaining inside the same GitHub repository.

GitHub Repository
        │
        ├── frontend/ → Vercel
        ├── admin/    → Vercel
        └── backend/  → Vercel
Production Backend

https://e-com-backend-xi.vercel.app

Git Workflow

The entire project is maintained in a single Git repository.

my-e-com/
├── frontend/
├── admin/
├── backend/
└── .gitignore

Changes can be committed and pushed from the repository root:

git add .
git commit -m "Your commit message"
git push origin main
Security
Passwords are hashed before database storage.
Authentication uses signed JWTs.
Sensitive configuration is stored in environment variables.
.env files are excluded through .gitignore.
Payment credentials are kept server-side.
Database credentials are not stored in source code.
Future Improvements

Potential future improvements include:

Product editing APIs and UI
Advanced product search and filtering
Pagination
Inventory/stock management
Order analytics and dashboard statistics
Improved request validation
Rate limiting
Automated testing
Production monitoring and logging                                         
