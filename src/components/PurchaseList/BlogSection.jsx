import { Link } from "react-router-dom";
import { Slide,JackInTheBox} from "react-awesome-reveal";

const BlogSection = () => {
    return (
        <div className="text-center p-8 md:p-12 dark:bg-black"
       >
        <JackInTheBox>
            <h1 className="font-bold  text-5xl text-red-900 mb-4 underline dark:text-pink-300">About Us</h1> </JackInTheBox>
            <Slide>
            <h1 className="font-bold  text-3xl text-lime-700 dark:text-lime-300 md:px-12">Navigating Educational and Training Events: A Guide to Workshops, Webinars, Career Fairs, and Training Programs</h1> <br />
            <p className="font-medium text-lg dark:text-white md:px-12">In today is rapidly evolving world, staying ahead of the curve is essential for personal and professional growth. Educational and training events have become invaluable resources for individuals looking to acquire new skills, expand their knowledge, and explore exciting opportunities. <br />In this blog, we will take you on a journey through the diverse landscape of educational and training events, including workshops, webinars, career fairs, and training programs.</p>
          <Link to='/purchase'> 
           {/* <button className="rounded bg-lime-300 mt-4 font-bold">Read more</button> */}
          <button className="rounded-2xl border-2 border-dashed border-green-700 bg-white px-6 py-3 font-bold uppercase text-green-700 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none my-8 dark:border-white dark:bg-green-700 dark:text-white dark:hover:shadow-[4px_4px_0px_white]">
          Read more
    </button>
            </Link>
            </Slide>
        </div>
    );
};

export default BlogSection;