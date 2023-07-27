const { Thought, User, Reaction } = require('../models');  // we need to import the Thought model to use its database functions
const { Types } = require('mongoose');

// need to define the ThoughtController object to handle the functions for the routes, using a try catch block for each async function, rendering the error message if there is one
const ThoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the GET /api/thoughts/:thoughtId route
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }); // use the findOne Mongoose function to find a single thought by its _id
      if (!thought) {
        res.status(404).json({ message: 'Thought not found! Try again' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the POST /api/thoughts route
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);  // use the create Mongoose function to create a new thought
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the DELETE /api/thoughts/:thoughtId route
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);  // use the findByIdAndDelete Mongoose function to find a single thought by its _id and delete it
      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the PUT /api/thoughts/:thoughtId route
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(  // use the findByIdAndUpdate Mongoose function to find a single thought by its _id and update it
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the POST /api/thoughts/:thoughtId/reactions route
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async handler for the DELETE /api/thoughts/:thoughtId/reactions/:reactionId route
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(  // use the findOneAndUpdate Mongoose function to find a single thought by its _id and update it
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ThoughtController;
