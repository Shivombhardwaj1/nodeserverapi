import wishlist from "../model/WishlistSchema.js";

export const userWishlist = async (request, response) => {
    try {

        let isExist = await wishlist.findOne({ nameUser: request.body.nameUser, movieName: request.body.movieName })
        if(isExist){
            
            return response.status(201).json({message:"not valid"});
        }
        else{
            console.log(request.body)
            const user = request.body;
            const newUser = new wishlist(user);
            await newUser.save();
            response.status(200).json({ message: user });
        }
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}



export const getWishlist = async (request, response) => {
    try {
        console.log(request.params.username)
        const products = await wishlist.find({nameUser:request.params.username});
        console.log("user products:",products)
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const RemoveItemWishlist = async (request, response) => {
    try {
        const products = await wishlist.deleteOne({movieName:request.body.movieName});
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}