import mongoose from 'mongoose';

const userReviewSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    agenda: {
        type: String,
    },
    time: {
        type: String,
    },
    user: {
        type: String,
    },
   
});

const review = mongoose.model('review', userReviewSchema);

export default review;