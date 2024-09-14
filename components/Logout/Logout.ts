import axios from "axios";
import { signOut } from 'next-auth/react';

const handleLogOut = async () => {

    localStorage.removeItem('token');

    // Calling backend to invalidate the token
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}quiz/auth/logout`, {
        headers: {
          Authorization: `Token ${localStorage.token}`,
        },
      })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

    // Sign out from NextAuth
    await signOut({ callbackUrl: '/' });
  };

  export default handleLogOut;