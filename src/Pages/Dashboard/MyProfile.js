import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-2xl font-semibold text-emerald-600 text-center text-semiBold font-mono mt-10'>My Profile</h2>
            <h1 className='text-xl text-center mt-10'>Name: {user.displayName}</h1>
            <h2 className='text-xl text-center mt-10'>Email: {user.email}</h2>
        </div>
    );
};

export default MyProfile;