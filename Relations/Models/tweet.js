const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/Twitter', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    username: String,
    age: Number
})
const tweetSchema = new mongoose.Schema({
    content: String,
    tags: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    // const user1 = new User({ username: 'mmalpa', age: 25 });
    const user1 = await User.findOne({ username: 'mmalpa' })
    const tweet1 = new Tweet({ content: 'i like it bitch', tags: ['vulgar', 'rude'] });
    tweet1.user = user1;
    // user1.save();
    tweet1.save();
}
// makeTweets();

const findTweets = async () => {
    const tweet = await Tweet.findOne({}).populate('user', 'username');
    console.log(tweet);
}
findTweets();   