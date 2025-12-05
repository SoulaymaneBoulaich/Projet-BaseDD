# Real Estate Platform

A comprehensive real estate management system built for database course project.

## Team Members
- **Member 1**: Frontend Development
- **Member 2**: Backend Development (Authentication & Users)
- **Member 3**: Backend Development (Database & Properties)
- **Member 4**: Integration & Testing

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure
```
real-estate-platform/
├── frontend/          # All frontend files
├── backend/           # Backend API and logic
├── database/          # Database schema and scripts
└── docs/              # Documentation
```

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/real-estate-platform.git
cd real-estate-platform
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your database credentials
```

### 4. Setup database
```bash
# Import schema
mysql -u root -p < database/schema.sql

# Import sample data (optional)
mysql -u root -p < database/seed.sql
```

### 5. Start the server
```bash
cd backend
npm start
```

### 6. Open frontend
Open `frontend/pages/index.html` in your browser

## Features
- User authentication (register, login, logout)
- Property listing and search
- Property details view
- Admin dashboard
- Add/Edit/Delete properties
- User favorites
- Contact inquiries

## API Endpoints
See [API Documentation](docs/API_DOCUMENTATION.md) for detailed API information.

## Database Schema
See [Database Schema](docs/DATABASE_SCHEMA.md) for database structure.

## Contributing
1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Create Pull Request

## License
This project is for educational purposes only.
