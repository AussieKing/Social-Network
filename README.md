# Social-Network

## Description

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

API for my social network that uses a NoSQL database.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Contributing](#contributing)

## Overview

This API application was desifgned for a social network that uses a NoSQL data model. 
It allows the user to create/update/delete Users and Thoughts (CRUD), add/delete users to a friends list, and create/delete Reactions to users Thoughts. 
All users and thoughts can be viewed at once, as well as a single user and thought (searching by the unique id).

## Technologies Used

  - JavaScript
  - Node.js
  - Express.js
  - Mongoose
  - MongoDB

## Usage

This application is not deployed on Herolu, but its usage can be replicated by installing it on your local machine.
In this instance, we were instructed to use Insomnia for testing of the routes.

Please see below a walkthrough video that demonstrates the api routes in Insomnia:

Video Link: [Social Network](https://drive.google.com/file/d/1F1EkjmDIIiJ_sIhg0peQ0Nsam2C5QQaW/view)

Screenshot of structure on Routes on Insomnia:

<img width="959" alt="Screenshot 2023-07-25 at 5 24 14 pm" src="https://github.com/AussieKing/Social-Network/assets/126050763/9a519fce-efb8-42c7-8c1a-f66833480db0">


The API routes are as below.
Please make sure to add to your usual server url.

```
http://localhost:3001/
```

### User Routes

```
GET ../api/user - returns all users in database
GET ../api/user/:userId - returns a specific user by their id
PUT ../api/user/:userId - updates a user by specifying their id
DELETE ../api/user/:userId - deletes a user by specifying their id
POST ../api/user/ - creates a user by providing username and email
```

### Friends Routes
```
POST ../api/user/:userId/friends/:friendId - adds a friend to a user friends list
DELETE ../api/user/:userId/friends/:friendId - deletes a friend from a user friends list
```

### Thought Routes

```
GET ..api/thought/ - returns all thoughts
POST ../api/thought - creates a new thought with a username
GET ../api/thought/:thoughtId - returns a specific thought by its id
PUT ../api/thought/:thoughtId - updates a thought by giving its specific id
DELETE ../api/thought/:thoughtId - deletes a thought by providing its id
```

#### Reaction Routes

```
POST ../api/thought/:thoughtId/reactions - adds a reaction to a thought by the thought id
DELETE ../api/thought/:thoughtId/reactions - deletes a reaction from a thought
```

## Installation

1. Clone the Repository from [GitHub](https://github.com/AussieKing/Social-Network.git) by using the Git Clone command.
2. Open the cloned repository in your code editor of choice (I prefer VS Code).
3. Open the integrated terminal and run the following command to install the dependencies:

```bash
npm install
```

4. Run the following to start the server:

```bash
npm run start
```

6. Use Insomnia to test the api routes.

7. Please note: I have used dummy data in my example (seed.js) : if you want to do the same, between Step 3. and Step 4. run the following

```bash
npm run seed
```

## License

This application is covered under the MIT license. Please refer to the document titled [LICENSE](LICENSE).

## Author

This application was written and developed by [AussieKing.eth](https://github.com/AussieKing) as a part of the University of Adelaide 26 weeks Full Stack Developer Bootcamp (edX).

## Acknowledgments

Microsoft for [Visual Studio Code](https://code.visualstudio.com/)
Mongoose for [Mongoose](https://mongoosejs.com/)
Express.js for [Express.js](https://expressjs.com/)
Day.js for [Day.js](https://day.js.org/)
MongoDB for [MongoDB](https://www.mongodb.com/)
Node.js for [Node.js](https://nodejs.org/en/)

## Contributing

This project is not accepting contributions at this time. Fill free to fork or clone for your own use.
