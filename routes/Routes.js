import express from "express"
import { userWishlist,getWishlist ,RemoveItemWishlist} from "../Controller/Wishlist.js";
import {removeReview,bookAppoint,getProfile} from "../Controller/Review.js";

const router=express.Router()

router.post('/appointment', bookAppoint);
router.post('/RemoveReview', removeReview);
router.get('/profile/:username',getProfile);
router.post('/wishlist', userWishlist);
router.post('/RemoveWishlist', RemoveItemWishlist);
router.get('/getwishlist/:username', getWishlist);

export default router