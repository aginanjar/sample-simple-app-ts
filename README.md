## Project Structure

- **src/**: Contains the source code.
  - **controllers/**: Handles HTTP requests and responses.
  - **services/**: Contains business logic.
  - **routes/**: Defines the routes for the API.
  - **middleware/**: Contains middleware for authentication, validation, etc.
  - **tests/**: Contains unit tests.
- **.env**: Environment variables.

## Setup

### Prerequisites

- Docker
- Docker Compose

### Running the App

1. Clone the repository:
   ```sh
   git clone https://github.com/aginanjar/sample-simple-app-ts.git
   cd sample-simple-app-ts
   ```

2. Create a .env file (if don't exist) in the root directory with the following contents:
    ```sh
    DATABASE_URL=postgresql://user:password@localhost:5432/simpleapp
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```
3. Run the app using Docker Compose:
    ```sh
    docker compose up -d
    ```

4. Install all packages 
    ```sh
    npm install
    ```
5. Migrate the prisma 
    ```sh
    npx prisma migrate dev --name init
    npx prisma generate
    ```
6. Run the app
    ```sh
    npm run dev
    ```