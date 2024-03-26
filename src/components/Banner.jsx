import { Link } from "react-router-dom";
import book from "../assets/headerBooks.png"
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-col-reverse lg:flex-row my-20">
          <div className="space-y-5">
            <h2 className="text-6xl font-bold">Books to freshen up your bookshelf</h2>
            <button className="btn bg-green-500 text-white"><Link to={"/listedbooks"}>View The List</Link></button>
          </div>
          <div>
            <img src={book} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;