import React, { createContext, useContext, useState } from "react";
import axios from 'axios';
import host from '../utils/constants';
import { toast } from 'react-toastify';



const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //registration
    const register = async (username, email, password) => {
        try {
            const response = await axios.post(`${host}api/v1/users/register`, {
                username: username,
                email: email,
                password: password,
            });

            if (response.status === 200) {
                toast.success('User created successfully!!');
                return true;
            }
            else {
                toast.error('User creation failed!!');
            }

        } catch (error) {
            console.log(error);
            toast.error('User creation failed!!');
        }
    };


    const login = async (email, password) => {
        try {
            const response = await axios.post(`${host}api/v1/users/login`, {
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem('jwt_secret', response.data.token);
                setUser(response.data.user);
                return true;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    };



    //setOtp
    const SendOtp = async (email) => {
        try {
            try {
                const response = await axios.post(`${host}api/v1/users/reset_email`, {
                    email: email,
                });

                if (response.status === 200) {
                    toast.success('Otp Sent Succesfully!');
                }
            } catch (error) {
                console.log(error);
                const errorMessage = error.response?.data?.mssg || 'Error in sending the otp!';
                toast.error(errorMessage);
            }
        } catch (error) {
            console.log(error);
            console.log("nothing")
            throw error;

        }

    }




    const contextValue = {
        user,
        login,
        register,
        SendOtp

    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>

    )

}

//export 
export default { AuthProvider };

