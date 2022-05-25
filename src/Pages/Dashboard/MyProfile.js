import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-emerald-600 text-center text-semiBold font-mono mt-10'>My Profile</h2>
            <div className="overflow-x-auto mx-28 mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control </td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProfile;