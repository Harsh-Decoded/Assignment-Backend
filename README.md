
# Backend for Frontend Server

## Getting Started

To get started with this template, follow these steps:

1. **Clone this repository to your local machine:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <path-where-cloned>
    ```

3. **Install dependencies using npm or yarn:**

    ```bash
    npm install
    # or
    yarn install
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open your web browser and visit [http://localhost:3000/api/users](http://localhost:3000/api/users) to see the app running.**

## API Information

### 1. Get All Users

- **Endpoint:** `/api/users`
- **Method:** `GET`
- **Response:** Returns all users as an array of objects in `JSON` format.

    ```json
    {
        "displayMessage": "",
        "data": [
            {
                "id": 1,
                "userName": "jdoe",
                "email": "jdoe@example.com"
            },
            ...
        ],
        "isSuccess": true
    }
    ```

### 2. Sign Up a New User

- **Endpoint:** `/api/signup`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
        "userName": "required",
        "email": "required",
        "password": "required"
    }
    ```

    **Note:** You need to fill in the `userName`, `email`, and `password` fields with valid data.

- **Response:**

    ```json
    {
        "displayMessage": "", // Empty if request is successful, else error message included
        "data": {}, // Empty if request is unsuccessful, else data according to API will be served
        "isSuccess": true // Indicates whether the request is successful or not
    }
    ```

### Example Error Response

If the request is unsuccessful due to missing or invalid data, the response will be:

```json
{
    "displayMessage": "Error message detailing the issue",
    "data": null,
    "isSuccess": false
}
```

## Notes

1. Make sure your request body is properly formatted with valid `userName`, `email`, and `password` values for the `/api/signup` endpoint.
2. All API responses will follow a consistent format with `displayMessage`, `data`, and `isSuccess` fields to indicate the result of the request.

Feel free to reach out if you have any questions or run into any issues!