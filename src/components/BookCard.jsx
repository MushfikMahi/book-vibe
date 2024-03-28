import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types'; 


const BookCard = ({ book }) => {

    const { bookId, bookName, rating, author, category, tags, image } = book

    return (
        <Link to={`/${bookId}`}>
            <div className="card card-compact bg-base-100 border p-5">
                <div className="rounded-2xl bg-base-200 flex justify-center"><img className="h-60 p-5" src={image} alt={bookName} /></div>
                <div className="flex gap-2 my-5">
                        {
                            tags.map((tag, idx)=> <p className="bg-green-50 px-5 py-2 rounded-full p-3 text-green-500" key={idx}>{tag}</p>)
                        }
                    </div>
                <div className=" space-y-5">
                    
                    <h2 className="card-title text-3xl">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr className="border-dashed" />
                    <div className="flex justify-between">
                        <div>
                            <p>{category}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>{rating}</p>
                            <CiStar className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = { 
    book: PropTypes.object.isRequired
} 



export default BookCard;