const { Schema, Types} = require('mongoose');  // import the Schema constructor from Mongoose

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,  // data type is ObjectId
        default: () => new Types.ObjectId()  // set default value to a new ObjectId
    },
    reactionBody: {  // reactionBody field
        type: String,  // data type is String
        required: true,  // is required
        maxlength: 280  // max length is 280 characters
    },
    username: {  // username field
        type: String,  // data type is String
        required: true  // is required
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toLocaleDateString()  //! ISSUE fixed
    }
},
    {
        toJSON: {  // add the toJSON property to the schema to tell it to use virtuals and remove the _id and __v fields
            getters: true  // use getters to format data
        },
        id: false  // set id to false because this is a virtual that Mongoose returns, and we don't need it
    }
);       

module.exports = ReactionSchema;  // export the ReactionSchema
