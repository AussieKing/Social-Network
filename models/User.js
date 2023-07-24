//! STEP 5: Create the User model

const { Schema, model } = require('mongoose');   // need to import the Schema constructor and model function from Mongoose

const UserSchema = new Schema(   // create the UserSchema using the instructions given in the assignment
    {
        username: {   // username field
            type: String,   // data type is String
            unique: true,   // must be unique
            required: true,   // is required
            trim: true   // removes whitespace from both ends of a string
        },

        email: {   // email field
            type: String,   // data type is String
            required: true,   // is required
            unique: true,   // must be unique
            validator: function (v) {   // validator function to validate correct email format
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);  // regex to validate email format
            },
            message: props => `${props.value} is not a valid email address!`   // error message if email is not in correct format
        },

        thoughts: [   // thoughts field
            {
                type: Schema.Types.ObjectId,   // data type is ObjectId
                ref: 'Thought'   // references the Thought model
            }
        ],

        friends: [   // friends field
            {
                type: Schema.Types.ObjectId,   // data type is ObjectId
                ref: 'User'   // references the User model
            }
        ]
    },

    {  // add the toJSON property to the schema to tell it to use virtuals and remove the _id and __v fields
        toJSON: {
            virtuals: true,  // use virtuals to display data
            getters: true  // use getters to format data
        },
        id: false  // set id to false because this is a virtual that Mongoose returns, and we don't need it
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;