import { useLoaderData, useParams } from "react-router-dom";
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
        <div className="container mx-auto mb-20">
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="flex-1 py-20 md:py-40 rounded-3xl justify-center items-center flex  bg-base-200">
                    <img className="h-96" src={image} alt="" />
                </div>
                <div className="flex-1 space-y-5 items-center flex">
                    <div className="space-y-4">
                    <h2 className="text-5xl font-bold">{bookName}</h2>
                    <p className="font-bold">By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p><span className="font-bold">Review :</span> {review}</p>
                    <div className="flex gap-2 my-5 items-center">
                    <h4 className="font-bold">Tags :</h4>
                        {
                            tags.map((tag, idx)=> <p className="bg-green-50 font-bold px-5 py-2 rounded-full p-3 text-green-500" key={idx}>#{tag}</p>)
                        }
                    </div>
                    <hr />
                    <div className="flex">
                        <p className="flex-1">Number of Pages: </p>
                        <p className="font-bold flex-1">{totalPages}</p>
                    </div>
                    <div className="flex">
                        <p className="flex-1">Publisher: </p>
                        <p className="font-bold flex-1">{publisher}</p>
                    </div>
                    <div className="flex">
                        <p className="flex-1">Year of Publishing: </p>
                        <p className="font-bold flex-1">{yearOfPublishing}</p>
                    </div>
                    <div className="flex">
                        <p className="flex-1">Rating: </p>
                        <p className="font-bold flex-1">{rating}</p>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={()=>handleRead(book)} className="btn font-bold bg-transparent text-black hover:bg-green-500 hover:text-white">Read</button>
                        <button onClick={()=>handleWishlist(book)} className="btn bg-sky-500 font-bold hover:text-black text-white">Wishlist</button>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Book;