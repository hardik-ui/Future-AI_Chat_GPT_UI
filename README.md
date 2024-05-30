# ChatGPT Style App

## Installation

### Backend

1. Navigate to the `backend` directory.
2. Create a virtual environment:
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```
3. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Run the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the React app:
    ```sh
    npm start
    ```

## Features

- Users can send a message and get responses.
- Clicking on the + button creates a new chat (UI only, no functionality).
