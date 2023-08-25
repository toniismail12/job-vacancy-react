import { useState } from 'react';
import Main from '../layouts/main'
import api from '../api';
import { ShowLoading, HideLoading } from '../components';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    image_url: '',
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
    // console.log('Form Data:', formData);
    if( formData.password.length < 8 ) {
      return alert("password min 8 character")
    }
    ShowLoading()
    try {
      const response = await api.post("/register", {
        "name": formData.name,
        "image_url": formData.image_url,
        "email": formData.email,
        "password": formData.password,
      });
      console.log('Response:', response.data);
      HideLoading()
      alert("success register, please login.")
      navigate("/login")
    } catch (error) {
      HideLoading()
      console.error('Error:', error);
    }
    
  };

  return (
    <Main>
      <div className="flex justify-center items-center lg:p-0 px-5">
        <div className="mx-auto p-4 bg-gray-100 rounded shadow lg:w-3/5 w-full">
          <h2 className="text-xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Image URL</label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </Main>
  )
}
