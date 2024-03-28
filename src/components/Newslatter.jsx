
const Newslatter = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="space-y-5 md:w-2/3 mx-auto text-center mb-10">
                <h2 className="text-4xl text-center font-bold">Join Our Newsletter</h2>
                <p>Are you a book lover searching for your next literary adventure? Look no further than Book Vibe&apos;s newsletter! Dive into a world of captivating stories, insightful recommendations, and exclusive insights curated just for you.</p>
            </div>
            <div className="space-y-5">
                <h2 className="text-2xl font-bold">What You&apos;ll Receive:</h2>
                <ul className="ml-8 space-y-3">
                    <li className="list-disc"><span className="font-bold">Book Recommendations:</span> Explore handpicked recommendations tailored to your reading preferences. From bestsellers to hidden gems, we&apos;ve got something for every reader.</li>
                    <li className="list-disc"><span className="font-bold">Author Spotlights:</span> Get to know the authors behind your favorite books. Discover their inspirations, writing process, and upcoming projects.</li>
                    <li className="list-disc"><span className="font-bold">Reading Challenges:</span> Challenge yourself to expand your reading horizons with our fun and engaging reading challenges. From genre explorations to themed reading lists, there&apos;s always something new to discover.</li>
                    <li className="list-disc"><span className="font-bold">Community Corner:</span> Connect with fellow book enthusiasts, share your thoughts on recent reads, and participate in lively discussions. Join a vibrant community of readers passionate about all things books.</li>
                </ul>
            </div>
            <section className="p-6 text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="bg-gray-200 text-black p-6 rounded-md shadow-sm">
                        <h3 className="text-black text-center font-bold text-3xl py-3">Join Now!</h3>
                        <div className="grid grid-cols-4 gap-6 ">
                            <div className="space-y-3 col-span-full lg:col-span-1">
                                <p className="font-bold">Personal Information</p>
                                <p className="text-xs">Your digital identity. From your name and contact details to preferences and interactions, it&apos;s the data that makes you uniquely you. Safeguarding your personal information is our top priority. Learn how we collect, use, and protect your data in our privacy policy.</p>
                                <p className="text-center cursor-pointer hover:bg-slate-400 p-3 font-bold rounded-xl bg-green-500 text-white">Subscribe</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label for="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label for="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full">
                                    <label for="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="city" className="text-sm">City</label>
                                    <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="state" className="text-sm">State / Province</label>
                                    <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label for="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-400 border-gray-700" />
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Newslatter;