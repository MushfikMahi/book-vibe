import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0)

    const [sortBy, setSortBy] = useState('');
    const [sortedBooks, setSortedBooks] = useState([]);








    const handleSortChange = (e) => {
        setSortBy(e);
    };
console.log(sortBy)

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-5xl font-bold bg-gray-200 rounded-2xl p-10">Books</h2>
            <div className="flex my-10 justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="m-1 btn px-5 bg-green-500 text-white">Sort By <IoIosArrowDown className="text-xl" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleSortChange('rating')}><a>Rating</a></li>
                        <li onClick={()=>handleSortChange('numberofpages')}><a>Number of Pages</a></li>
                        <li onClick={()=>handleSortChange('publishingyear')}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div className={"flex items-center -mx-4 my-5 overflow-x-auto overflow-y-hidden flex-nowrap border-gray-400 text-black"}>
                <Link onClick={() => setTabIndex(0)} to={'/listedbooks'} rel="noopener noreferrer" href="#" className={`flex items-center text-black flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setTabIndex(1)} to={'wishlist'} rel="noopener noreferrer" href="#" className={`flex items-center text-black flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default ListedBooks;