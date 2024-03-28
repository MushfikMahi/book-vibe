
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getReadBooks } from "./utility";
import ReadCard from "./ReadCard";
import { Asset } from "./ListedBooks";




const ListedBook = () => {

    const sortValue = useContext(Asset)


    const books = useLoaderData()
    const [readed, setReaded] = useState([])

    useEffect(() => {
        if (sortValue) {
            const sortedReaded = [...readed].sort((a, b) => {
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
            setReaded(sortedReaded);
        }
    }, [sortValue]);


    
    useEffect(() => {
        const storedBooks = getReadBooks()
        if (books.length > 0) {
            const bookReaded = books.filter(book => storedBooks.includes(book.bookId))
            setReaded(bookReaded)
        }
    }, [books])


    return (
        <div className="space-y-5">
            {
                readed.map((read, idx) => <ReadCard read={read} key={idx}></ReadCard>)
            }
            
        </div>
    );
};

export default ListedBook;