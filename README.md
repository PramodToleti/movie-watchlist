# Movie Watchlist

A full-stack web application to track your watched and unwatched movies. Built with React, Express, MongoDB, and Tailwind CSS.

## Features

- Add, edit, and delete movies
- Mark movies as watched or unwatched
- Filter movies by status (all, watched, unwatched)
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Other:** dotenv, morgan, cors

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/movie-watchlist.git
cd movie-watchlist
```

#### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:

```
MONGOURI=your_mongodb_connection_string
PORT=9000
```

#### 3. Install Dependencies

Install server dependencies:

```bash
cd server
npm install
```

Install client dependencies:

```bash
cd ../client
npm install
```

#### 4. Run the Application

Start the backend server:

```bash
cd ../server
npm run dev
```

Start the frontend development server:

```bash
cd ../client
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:9000](http://localhost:9000)

## API Endpoints

- `GET /movies` - List all movies (supports `?status=watched|unwatched`)
- `POST /movies` - Add a new movie
- `GET /movies/:id` - Get movie details
- `PUT /movies/:id` - Update a movie
- `DELETE /movies/:id` - Delete a movie

## Deployed Link

You can try the app live here:  
**[https://movie-watchlist-ashy.vercel.app/](https://movie-watchlist-ashy.vercel.app/)**
