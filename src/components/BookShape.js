// $pink: #d77977;
// $medium_pink: #eb9fa1;
// $light_pink: #ffe7e8;

import React from "react";

function BookShape({ title, pageNum, index }) {
    console.log(title, index);

    return (
        <div
            style={{
                width: "190px",
                minHeight: "20px",
                height: `${pageNum / 10}px`,
                border: "none",
                borderRadius: "5px",
                backgroundColor:
                    index % 3 ? (index % 2 ? "#d77977" : "#eb9fa1") : "#ffe7e8",
                color: index % 3 ? "white" : "black",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft:
                    index % 4
                        ? index % 3
                            ? index % 2
                                ? "43px"
                                : "35px"
                            : "50px"
                        : "37px",
            }}
        >
            {title.length > 14 ? `${title.substr(0, 14)}...` : `${title}`}
        </div>
    );
}

export default BookShape;
