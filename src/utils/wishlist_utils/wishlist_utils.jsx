// wishlistUtils.js
import axios from "axios";
export const getWishlist = async() => {
    let response =  await axios.get(`${API_URL}/mfsolars/v1/product/wishlist`,{
        withCredentials:true
    });
    return response.data.wishlist;
};

export const setWishlist = (wishlist) => {
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
};

export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    wishlist[product.id] = { ...product };
    setWishlist(wishlist);
};

export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    delete wishlist[productId];
    setWishlist(wishlist);
};

export const getWishlistItems = () => {
    return Object.values(getWishlist());
};
