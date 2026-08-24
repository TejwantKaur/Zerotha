import React from "react";

function RightSection({ 
    productName, 
    productDescription, 
    learnMore, 
    imgURL // "/media/images/products-console.png"
}) {
  return (
    <div className="container my-5">
      <div className="row py-4">
        <div className="col ms-5 px-5" style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.5rem"}}>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={learnMore}>{learnMore} →</a>
        </div>
        <div className="col text-center">
            <img src={imgURL} alt="img" />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
