import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect( () => {
        const email = user.email;
        const url = `https://blooming-stream-16978.herokuapp.com/myitems?email=${email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [user])
    console.log(myOrders);
    return (
        <div>
            <div className="overflow-x-auto mx-28 mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Pay Order</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
      {
          myOrders.map(myorder => <tr>
               <td>
                      {myorder.name}
                  </td>
                  <td>{myorder.email}</td>
                  <td>{myorder.productName}</td>
                  <td><button class="btn btn-success btn-xs">Pay</button></td>
                  <td><button class="btn btn-error btn-xs">Cancel</button></td>
          </tr>)
      }
      
    </tbody>

    </table>
            </div>
        </div>
    );
};

export default MyOrders;