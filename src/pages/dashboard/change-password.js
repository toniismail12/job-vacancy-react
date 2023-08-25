import React from 'react'
import Dashboard from '../../layouts/dashboard';
import { useState } from 'react';
import { ShowLoading, HideLoading } from '../../components';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

export default function ChangePasswordPage() {
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        current_password: '',
        new_password: '',
        new_confirm_password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (formData.current_password.length < 8 || formData.new_password.length < 8 || formData.new_confirm_password.length < 8) {
            return alert("password min 8 character")
        }

        if (formData.new_password !== formData.new_confirm_password) {
            return alert("new password and confirm password not match !!!")
        }

        try {

            ShowLoading()
            const response = await api.post("/change-password", {
                "current_password": formData.current_password,
                "new_password": formData.new_password,
                "new_confirm_password": formData.new_confirm_password,
            });

            console.log('Response:', response.data);
            localStorage.clear();

            alert("success update password, please login again.")

            return navigate("/")

        } catch (error) {
            HideLoading()
            console.error('Error:', error);
            alert("Failed update password, please check your current password.")
        }

    };

    return (
        <Dashboard>
            <div className="p-4">
                <h2 className="text-md font-semibold mb-4">Update Password</h2>
                <div className="bg-white p-4 shadow-md rounded-md">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Current Password</label>
                            <input
                                type="password"
                                name="current_password"
                                value={formData.current_password}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">New Password</label>
                            <input
                                type="password"
                                name="new_password"
                                value={formData.new_password}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Confirm New Password</label>
                            <input
                                type="password"
                                name="new_confirm_password"
                                value={formData.new_confirm_password}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </Dashboard>
    )
}
