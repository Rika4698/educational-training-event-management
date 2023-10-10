import { Link } from "react-router-dom";


const BlogSection = () => {
    return (
        <div className="text-center m-8">
            <h1 className="font-bold  text-5xl text-red-900 mb-4 underline">Blog</h1>
            <h1 className="font-bold  text-3xl text-lime-700">Navigating Educational and Training Events: A Guide to Workshops, Webinars, Career Fairs, and Training Programs</h1> <br />
            <p className="font-medium text-lg">In today is rapidly evolving world, staying ahead of the curve is essential for personal and professional growth. Educational and training events have become invaluable resources for individuals looking to acquire new skills, expand their knowledge, and explore exciting opportunities. <br />In this blog, we will take you on a journey through the diverse landscape of educational and training events, including workshops, webinars, career fairs, and training programs.</p>
          <Link to='/purchase'>  <button className="rounded bg-lime-300 mt-4 font-bold">Read more</button>
            </Link>
        </div>
    );
};

export default BlogSection;