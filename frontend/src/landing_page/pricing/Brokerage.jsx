import React from "react";

function Brokerage() {
  return (
    <div className="container p-5" style={{width:"60%", margin:"auto"}}>
        <div className="div">
            <h2 className="mx-5">Charges for account opening</h2>
        </div>
      
      <div className="row mt-5">
        <table className="mx-5 ps-5">
          <thead className="border">
            <tr className="">
              <th className="p-2">Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody className="border p-2">
            <tr> <td className="p-2">Individual account</td> <td className="p-2">Free</td> </tr>
            <tr> <td className="p-2">Minor account account</td> <td className="p-2">Free</td> </tr>
            <tr> <td className="p-2">NRI account</td> <td className="p-2">₹500</td> </tr>
            <tr> <td className="p-2">HUF account</td> <td className="p-2"> free (online) / ₹ 500 (offline)</td> </tr>
            <tr> <td className="p-2">Partnership, LLP, and Corporate accounts (offline only) </td> <td className="p-2">₹500</td> </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
