import review from "../model/ReviewSchema.js";

export const userReview = async (request, response) => {
    try {
        let isExist = await review.findOne({ username: request.body.username, movieName: request.body.movieName,review: request.body.review,rating: request.body.rating })
        if(isExist){
            
            return response.status(201).json({message:"not valid"});
        }
        else{
            const user = request.body;
            const newUser = new review(user);
            await newUser.save();
            response.status(200).json({ message: user });
        }
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const bookAppoint = async (request, response) => {
    try {
       
            const user = request.body;
            const newUser = new review(user);
            await newUser.save();
            response.status(200).json({ message: user });
        
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getProfile = async (request, response) => {
    try {
        const products = await review.find({username:request.params.username});
        console.log(products)
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const removeReview = async (request, response) => {
    try {
        const products = await review.deleteOne({username:request.body.userN,movieName:request.body.movNam});
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}