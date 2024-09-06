# Micro Project Work Form

## Overview

This is a simple **Micro Project Work Form** built using Node.js, Express.js, and MongoDB. It allows users to save, update, and reset project details in a MongoDB database. The form contains the following fields:

- Project ID (Primary Key)
- Project Name
- Assigned To
- Assignment Date
- Deadline

The form enables users to:
- Save new project data if the **Project ID** does not exist.
- Update existing project data if the **Project ID** exists.
- Reset the form at any time.

## Features

- **Data Validation**: Ensures all fields are properly filled before saving or updating the data.
- **Form Control**: Dynamically enables and disables buttons and fields based on the primary key and form data.
- **MongoDB Integration**: Stores and retrieves project data from the MongoDB database.
- **Basic User Interface**: Built with HTML and minimal styling.

### Files:

- **`server.js`**: Main server file that handles routes and database connection.
- **`models/project.js`**: Mongoose schema for the project form.
- **`public/form.html`**: The HTML form where users enter project details.
- **`.env`**: Holds environment variables like the MongoDB connection string and the port number.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: NoSQL database for storing project details.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **HTML**: Simple form interface.
- **dotenv**: To load environment variables.

## Prerequisites

- Node.js
- MongoDB
- VS Code or another text editor
- Postman (for API testing if needed)

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/project-management-form.git

2. Navigate into the project directory:
    cd project-management-form

3. Install the dependencies:
    npm install

4. Create a `.env` file in the root of the project with the following contents:
    MONGO_URI=mongodb://localhost:27017/college-db
    PORT=3000

5. Start MongoDB (if it's not running):
    mongod

6. Run the server:
    - For **production mode**:
      npm start
   
    - For **development mode** (auto-restart on changes using `nodemon`):
      npm run dev

7. Open the form in your browser:
    http://localhost:3000/form.html

## Usage

- On page load, an empty form appears with the cursor in the **Project ID** field.
- If the **Project ID** does not exist, the form enables the "Save" and "Reset" buttons, and the user can fill in other fields.
- If the **Project ID** exists, the form loads the corresponding data and enables the "Update" and "Reset" buttons. The user can edit any fields except the primary key.
- Clicking "Save" will store the new project in the database.
- Clicking "Update" will update the existing project data in the database.
- Clicking "Reset" will clear the form and reset its state.

## API Endpoints

- **POST `/save`**: Saves a new project to the database.
- **PUT `/update/:id`**: Updates an existing project with the given **Project ID**.
- **GET `/project/:id`**: Fetches project data based on **Project ID**.

## Development

- **Database**: Ensure MongoDB is running locally or use a remote MongoDB service.
- **Frontend**: The form is a simple HTML file located in the `public/` directory.

## Future Improvements

- Add frontend validation to provide better feedback to the user.
- Improve UI design and add CSS for better user experience.
- Add more error handling and edge case validation in the backend.
- Integrate a frontend framework (e.g., React.js) for a more dynamic user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Thank you Ashvani !!!!!!!!!!







