
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBooks } from "./utility";
import ReadCard from "./ReadCard";




const ListedBook = () => {

    const books = useLoaderData()
    console.log(books)

    const [readed, setReaded] = useState([])



    useEffect(() => {
        const storedBooks = getReadBooks()
        if (books.length > 0) {
            const bookReaded = books.filter(book => storedBooks.includes(book.bookId))
            setReaded(bookReaded)
        }
    }, [books])
    // console.log(typeof readed)

    
    // console.log(read)
    return (
        <div>
            {
                readed.map((read, idx) => <ReadCard read={read} key={idx}></ReadCard>)
            }
            
        </div>
    );
};

export default ListedBook;