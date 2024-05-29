# Go Game Score
This is a Node.js application that calculates the maximum possible number of draws in a game given the scores of three players. The application is built using Express.js and includes unit tests using Jest and Supertest.

## Table of Contents
###### Installation
###### Usage
###### API Endpoints
###### Testing
###### Project Structure

### Installation
Clone the repository:
git clone https://github.com/yourusername/go-game-score.git
cd go-game-score

#### Install the dependencies:

npm install

##### Usage

Start the server:

npm start
The server will run on http://localhost:3000 by default.

Make a GET request to the endpoint with three parameters representing the scores of the players.

#### API Endpoints
GET /:p1/:p2/:p3
Calculate the maximum possible number of draws for the given scores.

##### URL Parameters:

p1: Score of player 1 (integer, 0-30)

p2: Score of player 2 (integer, 0-30)

p3: Score of player 3 (integer, 0-30)

Response:

200 OK if the input is valid and the calculation is successful.

{
    "max_draws": <number>
}

400 Bad Request if the input is invalid.

{
    "max_draws": -1
}

##### Example Request

curl http://localhost:3000/3/4/5

##### Example Response

{
    "max_draws": -1
}

#### Testing
To run the tests, use the following command:

npm test

The tests are written using Jest and Supertest to ensure the API behaves as expected.

#### Project Structure
app.js: The main application file containing the Express server and endpoint logic.

app.test.js: Test file containing the unit tests for the application.

index.js: Entry point to start the server.

package.json: Node.js project configuration file.

jest.config.js: Configuration file for Jest.

README.md: This file.
