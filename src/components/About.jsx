import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="my-10 container mx-auto space-y-5">
            <h2 className="text-center font-bold text-3xl">📚 Welcome to Book Vibe</h2>
            <p>At Book Vibe, we&apos;re passionate about books and the joy of reading. Our mission is to inspire and empower readers to discover new worlds, broaden their horizons, and connect with stories that resonate deeply.</p>
            <h2 className="font-bold text-xl">🔍 Discover Your Next Read</h2>
            <p>With our curated recommendations, personalized suggestions, and vibrant community, we&apos;re here to help you find your perfect book match. Whether you're seeking literary classics, gripping thrillers, heartwarming romances, or thought-provoking non-fiction, we've got something for every reader.</p>
            <h2 className="font-bold text-xl">🌟 Join Our Community</h2>
            <p>Join a community of fellow book enthusiasts who share your love for reading. Connect with like-minded individuals, engage in lively discussions, and share your passion for great literature.</p>
            <h2 className="font-bold text-xl">📖 Explore, Engage, Enjoy</h2>
            <p>At Book Vibe, we believe that reading is more than just a hobby—it&apos;s a journey of discovery, learning, and growth. So come on in, explore our virtual shelves, engage with our content, and immerse yourself in the wonderful world of books.</p>
            <p className="font-bold">Ready to embark on your next reading adventure? Let&apos;s dive in together!</p>

            <Link to={"/newsletter"} className="btn bg-green-500 text-white font-bold">Subscribe Our Newsletter</Link>
        </div>
    );
};

export default About;