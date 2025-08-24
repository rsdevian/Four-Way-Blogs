# BlogSite

A simple blog website where users can create and share blogs publicly. Each blog post includes the author’s name, subject, and content, and is visible to everyone visiting the site.

---

## Features

- User can create blog posts with:
  - Author name
  - Subject/title of the blog
  - Content body
- All blog posts are displayed publicly for everyone to read
- Responsive and user-friendly interface
- Basic CRUD operations for blog posts (Create, Read, optionally Update and Delete)

---

## Technologies Used

- **Frontend:** React for dynamic rendering and user interaction
- **Backend:** Node.js with Express for API endpoints
- **Database:** MongoDB to store blog posts

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
```
git clone https://github.com/rsdevian/Four-Way-Blogs.git
```

2. Backend setup:
```
cd server
```
Add ENV (.env) file 
```
npm install
node server.js
```

3. Frontend setup:
```
cd ..\client
npm install
npm start
```
