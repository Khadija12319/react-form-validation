const Form = () => {
    return (
        <div>
            <h3 className="text-[42px] pb-2 font-semibold">Sign up</h3>
            <form action="">
                <div className="relative">
                    <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg pb-2.5 pt-8 w-[400px] text-lg border-0 border-b-2 appearance-none focus:outline-none border-green-600 peer mt-5" placeholder=" " />
                    <label htmlFor="filled_success" className="absolute text-xl text-green-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                 </div>
                 <div className="relative">
                    <input type="text" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg pb-2.5 pt-8 w-[400px] text-lg text-gray-900  border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:border-green-600 peer mt-5" placeholder=" " />
                    <label htmlFor="filled_success" className="absolute text-xl text-green-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                 </div>
                 <div className="relative">
                    <input type="password" id="filled_success" aria-describedby="filled_success_help" className="block rounded-t-lg pb-2.5 pt-8 w-[400px] text-lg text-gray-900  border-0 border-b-2 border-green-600 appearance-none focus:outline-none focus:border-green-600 peer mt-5 mb-8" placeholder=" " />
                    <label htmlFor="filled_success" className="absolute text-xl text-green-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                 </div>
                 <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-bold rounded-full text-xl px-6 py-3 text-center me-2 mb-2">Sign Up</button>
            </form>
        </div>
    );
};

export default Form;