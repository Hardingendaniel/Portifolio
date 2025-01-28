import React, { useState } from "react";
import './Readmore.css';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={{ color: "#466754" }}
            >
                {isReadMore ? "...vis meir" : " vis mindre"}
            </span>
        </p>
    );
};

export default ReadMore;