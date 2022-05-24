import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <div className="overflow-x-auto mx-28 mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Pay Order</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control </td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support </td>
        <td>Purple</td>
        <td>Purple</td>
        <td>Purple</td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Red</td>
        <td>Red</td>
      </tr>
      {/* <!-- row 4 --> */}
      <tr>
        <th>4</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Red</td>
        <td>Red</td>
      </tr>
      {/* <!-- row 5 --> */}
      <tr>
        <th>5</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Red</td>
        <td>Red</td>
      </tr>
    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;