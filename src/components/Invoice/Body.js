import React from "react";

const Body = ({ invoiceArr = [], handleDelete }) => {
  let tableData = invoiceArr.map((l, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{l?.name}</td>
        <td>{l?.rate?.toFixed?.(2)}</td>
        <td>{l?.quantity?.toFixed?.(2)}</td>
        <td>{l?.basicCost?.toFixed?.(2)}</td>
        <td>{l?.discount?.toFixed?.(2)}</td>
        <td>{l?.discountAmount?.toFixed?.(2)}</td>
        <td>{l?.finalBasicCost?.toFixed?.(2)}</td>
        <td>{l?.tax?.toFixed?.(2)}</td>
        <td>{l?.taxAmount?.toFixed?.(2)}</td>
        <td>{l?.totalCost?.toFixed?.(2)}</td>
        <td>
          <button onClick={() => handleDelete(l?._id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{tableData}</tbody>;
};

export default Body;
