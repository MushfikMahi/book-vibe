import { toast } from "react-toastify";

// const read = () => toast("Wow! greate you have read the book");
//     const wishlist = () => toast("Wow you just added the book in wishlist");



const getReadBooks = ()=>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}
const getWishlist = ()=>{
    const storedWishlist = localStorage.getItem('wshlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return [];
}


const saveReadedBook = id =>{
    const storedReadBooks = getReadBooks();
    const exist = storedReadBooks.find(jobId => jobId === id);
    if(exist){
        return toast("You already read the book")
    }else{
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
        return toast("Wow! greate you have read the book")
    }
}
const saveWishlist = id =>{
    const storedReadBooks = getReadBooks();
    const exist = storedReadBooks.find(jobId => jobId === id);
    const storedWishlist = getWishlist()
    const isExistInWishlist = storedWishlist.find(jobId => jobId === id);
    if(exist){
        return toast("You already read the book")
    }
    else if(!exist && isExistInWishlist){
        return toast("You already added the book in wishlist")
    }
    else{
        storedWishlist.push(id);
        localStorage.setItem('wshlist', JSON.stringify(storedWishlist))
        return toast("Wow! greate you have added the book in wishlist")
    }
}

export {saveReadedBook, getReadBooks, getWishlist, saveWishlist }