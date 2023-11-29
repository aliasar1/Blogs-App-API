# Blogs App API 📑

This is a simple API for managing blogs built using MongoDB, Express, and Node.js. The application features CRUD operations for blogs, user registration, login, and retrieving the current user's information. JWT (JSON Web Token) is used for authentication to protect certain routes.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Token (jsonwebtoken)
- Bcrypt (for password hashing)
- Dotenv (for managing environment variables)
- Express Async Handler (for handling asynchronous errors)

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   npm i nodemon -D
   ```

2. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT = 5050
   DB = your_mongo_db_connection_string
   ACCESS_TOKEN_SECRET = your_jwt_secret
   ```

3. **Run the Application**

   ```bash
   npm run dev
   ```

   The API should be accessible at `http://localhost:5050`.

## API Endpoints

### Blogs

- **GET /api/blogs/all**
  - Get all blogs.

- **GET /api/blogs/:id**
  - Get a specific blog by ID.
  - Requires authentication using jwt token.

- **GET /api/blogs/**
  - Get all blogs for a specific user.
  - Requires authentication using jwt token.

- **POST /api/blogs/**
  - Add a new blog.
  - Requires authentication using jwt token.

- **PUT /api/blogs/:id**
  - Update a blog by ID.
  - Requires authentication using jwt token.

- **DELETE /api/blogs/:id**
  - Delete a blog by ID.
  - Requires authentication using jwt token.

### Users

- **POST /api/users/register**
  - Register a new user.

- **POST /api/users/login**
  - Login with existing credentials.

- **GET /api/users/current**
  - Get information about the currently logged-in user.
  - Requires authentication using jwt token.

## Authentication

Routes that require authentication use JWT. Include the generated token in the `Authorization` header as a bearer token.

Example:

```http
GET /api/users/current
Authorization: Bearer your_generated_token
```

## Additional Features

Feel free to enhance the functionality by adding features such as liking and commenting on blogs. You can extend the API by creating new routes and models to support these features. Don't forget to secure these new routes with JWT if necessary.
