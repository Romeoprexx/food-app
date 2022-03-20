import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Comment = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const comments = [
        {
            author: "Kenneth",
            description: "With great pizza, comes with great responsibilities. 10/10",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
            </div>
        },
        {
            author: "Doyin",
            description:
                "Delivered quickly to my doorstep. The pizzas are still steaming hot when it arrived!",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
            </div>,
        },
        {
            author: "Jellili",
            description:
                "Many varieties to choose from! My favorite pizza is the Chicken Pepperoni.",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="unchecked" />
            </div>,
        },
        {
            author: "Adeboyega",
            description:
                "Hands down the best pizza I've ever tasted in the local town. I've never tried dining in their restaurant though.",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
            </div>,
        },
        {
            author: "Caroline",
            description:
                "They taste amazing and affordable as well. Adding side dishes to the menu would be nice.",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="unchecked" />
            </div>,
        },
        {
            author: "Putin",
            description:
                "They have great service and reasonable prices. However, the delivery time was not quite up to my expectation.",
            rating: <div>
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="checked" />
                <FaStar className="unchecked" />
                <FaStar className="unchecked" />
            </div>,
        },
    ];
    return (
        <div className="tried">
            <div className="customer">
                <h1>Our Customers can’t live Without us</h1>
            </div>

            <div className="wrapper">
                <div className="d-flex flex-wrap justify-content-evenly containers">
                    {comments.map((comment) => {
                        return (
                            <div data-aos="fade-up" className="comment-box m-3" key={comment.author}>
                                <div className="comment-author">{comment.author}</div>
                                <div className="comment-description">
                                    <q> {comment.description} </q>
                                </div>
                                 <p>
                                 {comment.rating}
                                 </p>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Comment;
