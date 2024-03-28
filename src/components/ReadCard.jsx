import { SlLocationPin } from "react-icons/sl";
import { MdOutlineGroup } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ReadCard = ({ read }) => {

    const { bookName, author, bookId, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = read

    return (
        <div>
            <div className="card card-side bg-base-100 border flex-col lg:flex-row">
                <div className="rounded-2xl bg-base-200 m-5 flex justify-center items-center"><img className="lg:h-60 h-52 p-5" src={image} alt={bookName} /></div>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <div className="flex gap-2 my-5 items-center">
                            <h4 className="font-bold text-xl">Tags :</h4>
                            {
                                tags.map((tag, idx) => <p className="bg-green-50 px-5 py-2 rounded-full p-3 text-green-500" key={idx}>#{tag}</p>)
                            }
                        </div>
                        <div className="flex items-center gap-3">
                            <SlLocationPin />
                            <p>Year of publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 flex-col lg:flex-row">
                        <div className="flex items-center gap-3">
                            <MdOutlineGroup />
                            <p>Publisher : {publisher}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaRegFileAlt />
                            <p>Pages {totalPages}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-2 flex-col sm:flex-row">
                        <div className="flex gap-3 justify-between">
                        <button className="bg-sky-100 px-3 py-1 text-sky-500 rounded-full">Category : {category}</button>
                        <button className="bg-amber-100 px-3 py-1 text-amber-500 rounded-full">Rating : {rating}</button>
                        </div>
                        <Link to={`/${bookId}`} className="bg-green-500 px-3 py-2 sm:py-1 text-center text-white rounded-full">View Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadCard.propTypes = { 
    read: PropTypes.object.isRequired
} 

export default ReadCard;