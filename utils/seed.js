const db = require('./../config/connection');
const User = require('./../models/User');
const Thought = require('./../models/Thought');

async function seedDB() {
  try {
    // Remove all existing users and thoughts from the database
    await User.deleteMany({});
    await Thought.deleteMany({});
  

  const users = await User.create([
    { username: 'User 1', email: 'email1@example.com' },
    { username: 'User 2', email: 'email2@example.com' },
    { username: 'User 3', email: 'email3@example.com' },
    { username: 'User 4', email: 'email4@example.com' },
    { username: 'User 5', email: 'email5@example.com' },
    { username: 'User 6', email: 'email6@example.com' },
    { username: 'User 7', email: 'email7@example.com' },
    { username: 'User 8', email: 'email8@example.com' },
  ]);

  const thoughts = await Thought.create([
    {
      thoughtText: 'This Social Network platonfrom is awesome 😊',
      username: users[1].username,
      reactions: [
        { reactionBody: 'I like it too!', username: users[2].username },
        { reactionBody: "It's ok", username: users[3].username },
      ],
    },
    {
      thoughtText: 'PWAs for the win! 🧨💥',
      username: users[2].username,
      reactions: [
        { reactionBody: 'Wait until React...', username: users[0].username },
        { reactionBody: 'Coding is the bomb.', username: users[3].username },
      ],
    },
    {
      thoughtText: 'Node.js and Express are like the butter to my bread!',
      username: users[3].username,
      reactions: [
        {
          reactionBody: 'Making me hungry.',
          username: users[4].username,
        },
        {
          reactionBody: 'Express.js is my favorite.',
          username: users[2].username,
        },
      ],
    },
    {
      thoughtText: 'About to start our 3rd project...!',
      username: users[2].username,
      reactions: [
        { reactionBody: 'Congrats!', username: users[5].username },
        { reactionBody: 'Time flies!', username: users[2].username },
        { reactionBody: "That's huge!", username: users[1].username },
      ],
    },
    {
      thoughtText: 'Are you going to learn Python? 🐍',
      username: users[3].username,
      reactions: [
        { reactionBody: "Don't need it for my work!", username: users[4].username },
        { reactionBody: 'I will for sure.', username: users[2].username },
      ],
    },
    {
      thoughtText: 'C Sharp??',
      username: users[2].username,
      reactions: [
        {
          reactionBody: 'What about it.',
          username: users[7].username,
        },
        { reactionBody: '?', username: users[6].username },
      ],
    }
  ]);

 // running a for loop to update the users with the thoughts
 // Add friends to users
 for (let i = 0; i < users.length; i++) {
  const friend1 = users[(i + 1) % users.length]._id; // Next user in array, with wrap-around
  const friend2 = users[(i + 2) % users.length]._id; // Two users over, with wrap-around
  await User.findByIdAndUpdate(
    users[i]._id,
    { $push: { friends: [friend1, friend2] } },
    { new: true, runValidators: true }
  );
}

console.log('Database seeded successfully!');
} catch (error) {
console.error('Error seeding the database:', error);
} finally {
process.exit(0);
}
}

db.once('open', () => {
seedDB();
});





