import Main from '../layouts/main'
import { useState } from 'react';
import api from '../api';
import { ShowLoading, HideLoading } from '../components';

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if( formData.password.length < 8 ) {
      return alert("password min 8 character")
    }

    try {

      ShowLoading()
      const response = await api.post("/login", {
        "email": formData.email,
        "password": formData.password,
      });

      console.log('Response:', response.data);
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("name", response.data.user.name)
      localStorage.setItem("email", response.data.user.email)
      localStorage.setItem("image", response.data.user.image_url)
      localStorage.setItem("id", response.data.user.id)

      return (window.location.href= "/dashboard")

    } catch (error) {
      HideLoading()
      console.error('Error:', error);
      alert("Login Failed")
    }
    
  };

  return (
    <Main>
      <div className="flex justify-center items-center lg:p-0 px-5">
        <div className="mx-auto p-4 bg-gray-100 rounded shadow lg:w-3/5 w-full">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Main>
  )
}
