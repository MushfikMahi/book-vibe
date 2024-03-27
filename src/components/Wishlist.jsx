import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "./utility";
import ReadCard from "./ReadCard";




const Wishlist = () => {


    const books = useLoaderData()

    const [readed, setReaded] = useState([])



    useEffect(() => {
        const storedBooks = getWishlist()
        if (books.length > 0) {
            const wishlistBook = books.filter(book => storedBooks.includes(book.bookId))
            setReaded(wishlistBook)
        }
    }, [books])

    console.log(readed)

    
    return (
        <div>
            {
                readed.map((read, idx) => <ReadCard read={read} key={idx}></ReadCard>)
            }
        </div>
    );
};

export default Wishlist;