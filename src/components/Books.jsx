import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
const books = useLoaderData()


    return (
        <div className="my-20">
            <h3 className="text-6xl text-center font-bold">Books</h3>
            <div className="grid grid-cols-3 gap-5">
            {
                books.map((book, idx)=><BookCard book={book} key={idx}></BookCard>)
            }
            </div>
        </div>
    );
};

export default Books;