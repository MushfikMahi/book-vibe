import { useLoaderData, useParams } from "react-router-dom";
import bookImage from "../assets/headerBooks.png"
import { saveReadedBook, saveWishlist } from "./utility";

const Book = () => {

    const books = useLoaderData()
    const {bookId} = useParams()
    const intId = parseInt(bookId)

    const book = books.find(book=> book.bookId ===intId)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book



    const handleRead = (e) => {
        console.log(e.bookId)
        saveReadedBook(e.bookId)
    }

    const handleWishlist = (e) =>{
        saveWishlist(e.bookId)
    }
    


    return (
        <div>
            <div className="flex min-h-screen items-center">
                <div className="flex-1 justify-center flex">
                    <img src={bookImage} alt="" />
                </div>
                <div className="flex-1 space-y-5">
                    <h2>{bookName}</h2>
                    <p>By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p>Review : {review}</p>
                    <div className="flex gap-2 my-5 items-center">
                    <h4 className="font-bold text-xl">Tags :</h4>
                        {
                            tags.map((tag, idx)=> <p className="bg-green-50 px-5 py-2 rounded-full p-3 text-green-500" key={idx}>#{tag}</p>)
                        }
                    </div>
                    <hr />
                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div className="flex gap-5">
                        <button onClick={()=>handleRead(book)} className="btn bg-green-500 text-white">Read</button>
                        <button onClick={()=>handleWishlist(book)} className="btn bg-sky-500 text-white">Wishlist</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Book;