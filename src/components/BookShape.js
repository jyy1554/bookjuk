// $pink: #d77977;
// $medium_pink: #eb9fa1;
// $light_pink: #ffe7e8;

import React from "react";

function BookShape({ title, pageNum }) {
    console.log(typeof title);

    return (
        <div
            style={{
                width: "190px",
                height: `25px`,
                border: "1px solid black",
                borderRadius: "5px",
                backgroundColor: "#d77977",
                color: "white",
                textAlign: "center",
                lineHeight: "25px",
                fontSize: "15px",
            }}
        >
            {title.substr(0, 14)}...
        </div>
    );
}

export default BookShape;
