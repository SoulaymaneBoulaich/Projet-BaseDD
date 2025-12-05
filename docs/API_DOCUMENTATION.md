# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication Endpoints

### Register User
- **POST** `/auth/register`
- Body: `{ username, email, password, full_name, phone, role }`

### Login User
- **POST** `/auth/login`
- Body: `{ email, password }`

## Property Endpoints

### Get All Properties
- **GET** `/properties`
- Query params: `?city=&minPrice=&maxPrice=`

### Get Property by ID
- **GET** `/properties/:id`

### Create Property
- **POST** `/properties`
- Headers: `Authorization: Bearer <token>`
- Body: Property details

### Update Property
- **PUT** `/properties/:id`
- Headers: `Authorization: Bearer <token>`

### Delete Property
- **DELETE** `/properties/:id`
- Headers: `Authorization: Bearer <token>`
