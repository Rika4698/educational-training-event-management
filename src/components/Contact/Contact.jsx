
const Contact = () => {
    return (
        <div className=" bg-red-50">
            <h1 className="p-8 text-center text-5xl font-bold text-lime-900">Contact Us</h1>
           <div className="grid-cols-1 lg:flex justify-between mx-8">
           <div>
           <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Call us :</h1>
            <p className="mb-8 text-center text-xl font-bold text-blue-600">Mobile: 01791234674</p>
           </div>
           <div>
            <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Address:</h1>
            <p className="mb-8 text-center text-xl font-bold text-blue-600">Darussalam, Mirpur-1
Dhaka-1216</p>
           </div>
           <div>
            <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Email:</h1>
            <p className="pb-8 text-center text-xl font-bold text-blue-600">r4techskill@gmail.com</p>
           </div>
           </div>
           <p className="py-4 text-center text-3xl font-bold text-sky-800">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>

        </div>
    );
};

export default Contact;