const FullDetailsTable = ({ invoiceData = [] }) => {
  let totalBasicCost = invoiceData.reduce((acc, item) => acc + item?.basicCost, 0).toFixed(2);
  let totalDiscount = invoiceData.reduce((acc, item) => acc + item?.discountAmount, 0).toFixed(2);
  let totalFinalBasicCost = invoiceData.reduce((acc, item) => acc + item?.finalBasicCost, 0).toFixed(2);
  let totalTax = invoiceData.reduce((acc, item) => acc + item?.taxAmount, 0).toFixed(2);
  let totalFinalPrice = invoiceData.reduce((acc, item) => acc + item?.totalCost, 0).toFixed(2);

  return (
    <div className="table-responsive">
      <table className="table w-100 d-flex justify-content-end pe-5 mt-5">
        <tbody>
          <tr>
            <th>Total Basic Cost</th>
            <td>{totalBasicCost}</td>
          </tr>
          <tr>
            <th>Total Discount</th>
            <td>{totalDiscount}</td>
          </tr>
          <tr>
            <th>Total Final Basic Cost</th>
            <td>{totalFinalBasicCost}</td>
          </tr>
          <tr>
            <th>Total Tax</th>
            <td>{totalTax}</td>
          </tr>
          <tr>
            <th>Final Price</th>
            <td>{totalFinalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FullDetailsTable;
