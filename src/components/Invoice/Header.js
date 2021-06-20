import React from "react";

const Header = () => {
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Rate</th>
        <th scope="col">Quantity</th>
        <th scope="col">Basic Cost</th>
        <th scope="col">Discount (%)</th>
        <th scope="col">Discount Amt</th>
        <th scope="col">Final Basic Cost</th>
        <th scope="col">Taxes (%)</th>
        <th scope="col">Tax Amt</th>
        <th scope="col">Total Cost</th>
        <th scope="col">Tools</th>    
      </tr>
    </thead>
  );
};

export default Header;
