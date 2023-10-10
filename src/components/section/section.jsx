
const Section = () => {
    return (
        <div className="bg-lime-50">
            <h1 className="text-center font-bold text-emerald-500 text-5xl mt-10">Why choose us</h1>
            <p className="text-sm text-center mt-4">We are ready to give you full computer skill development and freelancing services.
Our Strong team can give you 100% Satisfied support</p>
<div className=" grid-cols-1  lg:flex  p-10 ">
    <div>
        <h1 className="text-2xl font-medium text-emerald-900 text-center">Expert Instructors</h1>
        <p className="text-sm text-center mt-4 mb-8"> Our events are led by industry experts and experienced professionals who are passionate about sharing their knowledge. </p>
    </div>
    <div>
        <h1 className="text-2xl font-medium text-emerald-900 text-center ">Interactive Learning</h1>
        <p className="text-sm text-center mt-4 mb-8"> We believe in hands-on learning. Our events include practical exercises, real-world projects, and interactive Q&A sessions to help you apply what you have learned.</p>

    </div>
    <div>
        <h1 className="text-2xl font-medium text-emerald-900 text-center">Certification</h1>
        <p className="text-sm text-center mt-4">Receive certificates of participation or achievement upon successful completion of our programs. Showcase your commitment to learning and career growth.</p>
    </div>
</div>
        </div>
    );
};

export default Section;