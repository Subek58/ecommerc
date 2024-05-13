import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return;
        } else if (password.length > 16) {
            toast.error("Password must be most 16 characters long")
            return;
        } else if (password !== confirmpassword) {
            toast.error("confirm password is incorrect")

        }

        else {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                        confirmpassword: confirmpassword

                    })
                

            })
        }
    }


    return (
        <div className="bg-black">
            <form onSubmit={handleSubmit}>
                <h1 className="text-5xl font-semibold text-gray-100">Signup Form</h1>
                <div className="mt-8">
                    <div>
                        <label>Username</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white "
                            placeholder="Enter Your Username"
                            onChange={(event) => setUsername(event.target.value)}
                        />

                    </div>
                    <div>
                        <label className="text-lg font-medium">Email</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white"
                            placeholder="Enter Your Email"
                            onChange={(event) => setEmail(event.target.value)}
                        />

                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white"
                            placeholder="Enter Your Password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />

                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white"
                            placeholder="Enter Your Confirm Password"
                            type="password"
                            onChange={(event) => setConfirmpassword(event.target.value)}
                        />

                    </div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border mt-3 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign in
                    </button>

                    <div>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-5">Forgot Password</button>
                    </div>
                    <div>
                        <h1 className="text-white">Already have account?</h1>
                        <Link to={"/home/login"}>
                            <button className="font-medium text-base text-blue-500 mt-2">Login</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>

    )

}
export default Signup;