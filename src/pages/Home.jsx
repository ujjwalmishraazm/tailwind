import Navbar1 from "../components/Navbar1";

const Home = () => {
    return (
        <div>
            <Navbar1 />
            <div className="flex flex-col items-center justify-center mt-10  w-full ">
                <div className=" bg-gray-300 border-gray-600 rounded-xl text-gray-600 px-3 py-1 hover:bg-gray-400 transition-colors duration-2000 ease-in-out">
                    <span>Incorporation common mistake to aviod</span>
                </div>
                <div> <h1 className="text-5xl font-medium mt-8 text-center tracking-tight text-gray-800   ">Magically Simplify <br /> Accounting And Taxes </h1>
                <h2>this is <menu>buttond  </menu></h2>
                <p className="text-center max-w-[500px] mt-6 text-gray-500 font-light">  Fintech revolutionizes finance by leveraging technology to make banking, investing, and payments faster, safer, and more accessible. 8<span>:</span>30 </p>
                <div className="mt-8">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-2000 ease-in-out">Get Started</button>
                </div>
               
                </div>
            </div>
        </div>
    );
};

export default Home;
