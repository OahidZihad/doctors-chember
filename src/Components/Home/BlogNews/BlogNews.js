import React from "react";
import dr1 from "../../../images/Ellipse 1.png";
import dr2 from "../../../images/Ellipse 2.png";
import dr3 from "../../../images/Ellipse 3.png";
import BlogNewsDetail from "../BlogNewsDetail/BlogNewsDetail";

const blogData = [
  {
    img: dr3,
    name: "Habiba Jannati",
    date: "05 Dec 2021",
    title: "Check at least a doctor in a year for your teeth",
  },
  {
    img: dr1,
    name: "Oahid Zihad",
    date: "19 Oct 2021",
    title: "Check at least a doctor in a year for your teeth",
    description:
      "It is a long established fact that by the readable content of a lot layout. The point",
  },
  {
    img: dr2,
    name: "Mimi Chowdhury",
    date: "22 Aug 2021",
    title: "Check at least a doctor in a year for your teeth",
    description:
      "It is a long established fact that by the readable content of a lot layout. The point",
  },
];
const BlogNews = () => {
  return (
    <section>
      <div className="mt-5 pt-5">
        <div>
          <h5
            className="text-center"
            style={{ color: "#6ACECE", fontWeight: "bold" }}
          >
            OUR BLOG
          </h5>
          <h2 className="text-center" style={{ color: "#3E465A" }}>
            From Our Blog News
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row">
          {blogData.map((blog) => (
            <BlogNewsDetail blog={blog}></BlogNewsDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
