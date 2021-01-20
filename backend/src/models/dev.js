const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String, 
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],        // Vetor de techs
});

module.exports = mongoose.model('Dev', DevSchema);