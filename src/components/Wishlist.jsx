import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "./utility";
import ReadCard from "./ReadCard";
import { Asset } from "./ListedBooks";




const Wishlist = () => {
    const sortValue = useContext(Asset)

    const books = useLoaderData()
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        if (sortValue) {
            const sortedReaded = [...wishlist].sort((a, b) => {
                if (sortValue === 'rating') {
                    return b.rating - a.rating;
                }
                else if (sortValue === 'numberofpages') {
                    return a.totalPages - b.totalPages;
                } else if (sortValue === 'publishingyear') {
                    return a.yearOfPublishing - b.yearOfPublishing;
                }
                return 0;
            });
            setWishlist(sortedReaded);
        }
    }, [sortValue]);


    useEffect(() => {
        const storedBooks = getWishlist()
        if (books.length > 0) {
            const wishlistBook = books.filter(book => storedBooks.includes(book.bookId))
            setWishlist(wishlistBook)
        }
    }, [books])

    console.log(wishlist)

    
    return (
        <div>
            {
                wishlist.map((read, idx) => <ReadCard read={read} key={idx}></ReadCard>)
            }
        </div>
    );
};

export default Wishlist;