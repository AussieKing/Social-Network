const { Schema, model} = require('mongoose');  // import the Schema constructor and model function from Mongoose

const ReactionSchema = require('./Reaction');  // import the ReactionSchema

const thoughtSchema = new Schema(  // create the thoughtSchema using the instructions given in the assignment
    {
        thoughtText: {  // thoughtText field
            type: String,  // data type is String
            required: true,  // is required
            minlength: 1,  // min length is 1 character
            maxlenght: 280  // max length is 280 characters
        },
        ccreatedAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),  //! ISSUE Fixed
        },
        username: {  // username field
            type: String,  // data type is String
            required: true  // is required
        },
        reactions: [ReactionSchema]  // reactions field is an array of data that adheres to the ReactionSchema
    },
    {  // add the toJSON property to the schema to tell it to use virtuals and remove the _id and __v fields
        toJSON: {
            virtuals: true,  // use virtuals to display data
            getters: true  // use getters to format data
        },
        id: false  // set id to false because this is a virtual that Mongoose returns, and we don't need it
    }
);

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {  // using the virtual() function, create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
    return this.reactions.length;
});

// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// export the Thought model
module.exports = Thought;
