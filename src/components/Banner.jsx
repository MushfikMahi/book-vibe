import { Link } from "react-router-dom";
import book from "../assets/headerBooks.png"
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-col-reverse lg:flex-row m-5 md:m-20">
          <div className="space-y-5">
            <h2 className="md:text-6xl text-4xl font-bold">Books to freshen up your bookshelf</h2>
            <Link to={"/listedbooks"} className="btn bg-green-500 font-bold hover:text-black text-white">View The List</Link>
          </div>
          <div>
            <img src={book} className="md:h-full h-60" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;