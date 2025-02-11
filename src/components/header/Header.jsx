import { NavLink } from "react-router-dom";

const links = <>
    <li><NavLink className={({isActive})=> isActive? "border border-green-500 text-green-500": ''} to={"/"}>Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? "border border-green-500 text-green-500": ''} to={"/listedbooks"}>Listed Book</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? "border border-green-500 text-green-500": ''} to={"/pagestoread"}>Pages To Read</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? "border border-green-500 text-green-500": ''} to={"/about"}>About</NavLink></li>
    <li><NavLink className={({isActive})=> isActive? "border border-green-500 text-green-500": ''} to={"/newsletter"}>Newsletter</NavLink></li>
    </>

const Header = () => {

    

    return (
        
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a className="btn bg-green-500 text-white">Sign Up</a>
                    <a className="btn bg-sky-500 text-white">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Header;