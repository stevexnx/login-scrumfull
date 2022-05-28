const mongo = require('mongoose');
const uniqueValidater = require('mongoose-unique-validator');
const postSchema = mongo.Schema({
    "name": {type: String,required: true},
    "avatarUrl": {type: String},
    "email": {type: String,required: true, unique: true },
    "password": {type: String,required: true}
    
});
postSchema.plugin(uniqueValidater);
module.exports = mongo.model('users',postSchema);