# Product Management API

NestJS REST API for managing products and employees using PostgreSQL and TypeORM.

## Student Information

- **SL:** 13
- **Name:** Junayed Islam
- **Student ID:** 23-50150-1
- **Section:** B

## Technologies Used

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- pnpm
- Postman

## Database Setup

1. Install PostgreSQL.
2. Open pgAdmin.
3. Create a database named:

```text
product_management_api
```

4. Configure the `.env` file with your local PostgreSQL settings.

Example database configuration:

```env
DB_CLIENT="postgres"
DB_DATABASE="product_management_api"
DB_USER="postgres"
DB_PASSWORD=""
DB_HOST="localhost"
DB_PORT="5432"
```

Set `DB_PASSWORD` to your own local PostgreSQL password.

5. Run the database migrations:

```bash
pnpm migration:run
```

## Installation

Install project dependencies:

```bash
pnpm install
```

## Run the Application

Start the application in development mode:

```bash
pnpm start:dev
```

The API runs locally on:

```text
http://localhost:5001
```

## Product Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/products` | Create and save a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update a product by ID |
| DELETE | `/products/:id` | Delete a product by ID |

## Product Fields

- `id` - Generated UUID
- `name` - Product name
- `category` - Product category
- `price` - Product price
- `quantity` - Available stock quantity

## Employee Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/employees` | Create and save an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update an employee by ID |
| DELETE | `/employees/:id` | Delete an employee by ID |

## Employee Fields

- `id` - Generated UUID
- `name` - Employee full name
- `email` - Employee email address
- `phone` - Employee phone number
- `password` - Dummy password
- `age` - Employee age
- `yearsOfWorking` - Completed years of work experience

## Postman Screenshots

The `screenshots` folder contains evidence of the required Product CRUD operations:

```text
01-create.png
02-get-all.png
03-get-by-id.png
04-update.png
05-confirm-update.png
06-delete.png
07-confirm-delete.png
```

## Project Structure

```text
product-management-api/
├── src/
│   ├── database/
│   │   └── migrations/
│   └── modules/
│       ├── product/
│       └── employee/
├── screenshots/
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Notes

- Database operations are handled through the service classes.
- PostgreSQL is used for persistent data storage.
- The real `.env` file is not included in the repository.
- `node_modules` and `dist` are excluded from Git.
