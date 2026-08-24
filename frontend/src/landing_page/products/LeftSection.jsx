import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
        <div className="row py-4">
            <div className="col text-center">
                <img src={imgURL} style={{width:"100%"}}/>
            </div>
            <div className="col m-5 px-5" style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.5rem"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className="">
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} className="mx-4">learn More</a>
                </div>
                
                <div className="">
                    <a href={googlePlay}>
                    <img src="/media/images/google-play-badge.svg" alt="" />
                    </a>
                    <a href={appStore}>
                        <img src="/media/images/appstore-badge.svg" alt="" />
                    </a>
                </div> 
            </div>
        </div>
    </div>

  );
}

export default LeftSection;
