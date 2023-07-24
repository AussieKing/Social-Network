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
    createdAt: {  // createdAt field
        type: Date,  // data type is Date
        default: Date.now,  // default value is the current timestamp
        get: (createdAtVal) => dateFormat(createdAtVal)  //! POTENTIAL ISSUE  // use the dateFormat function to format the timestamp on query
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

        


