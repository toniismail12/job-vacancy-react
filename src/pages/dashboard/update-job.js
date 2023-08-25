import { UpdateJob, GetDetailJobs } from './../../controllers';
import Dashboard from '../../layouts/dashboard'
import { useState, useEffect, useCallback } from 'react';
import { ShowLoading, HideLoading } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateJobPage() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [job, setData] = useState([])

    const [formData, setFormData] = useState({
        title: '',
        job_description: '',
        job_qualification: '',
        job_type: '',
        job_tenure: '',
        job_status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        salary_min: '',
        salary_max: '',
    });

    const fetchData = useCallback(async () => {

        ShowLoading()
        const res = await GetDetailJobs(id)
        res !== undefined ? setData(res) : setData([])
        HideLoading()

        setFormData({
            title: job.title,
            job_description: job.job_description,
            job_qualification: job.job_qualification,
            job_type: job.job_type,
            job_tenure: job.job_tenure,
            job_status: job.job_status,
            company_name: job.company_name,
            company_image_url: job.company_image_url,
            company_city: job.company_city,
            salary_min: job.salary_min,
            salary_max: job.salary_max,
        })
    
      }, [
        id, 
        job.title, 
        job.job_description, 
        job.job_qualification,
        job.job_type,
        job.job_tenure,
        job.job_status, 
        job.company_name,
        job.company_image_url,
        job.company_city,
        job.salary_min,
        job.salary_max,
    ])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const list = [
            formData.title, 
            formData.job_description, 
            formData.job_qualification, 
            formData.job_status, 
            formData.job_tenure,
            formData.job_type,
            formData.company_city,
            formData.company_image_url,
            formData.company_name,
            formData.salary_min,
            formData.salary_max,
        ]

        if(list.includes("")) {
            return alert("ada field kosong, mohon cek !!!")
        }
        // Handle form submission here
        console.log(formData);

        ShowLoading()

        const res = await UpdateJob(
            formData.title, 
            formData.job_description, 
            formData.job_qualification,
            formData.job_type,
            formData.job_tenure,
            formData.job_status, 
            formData.company_name,
            formData.company_image_url,
            formData.company_city,
            formData.salary_min,
            formData.salary_max,
            id,
        )
        
        HideLoading()

        if(res === 'success') {
            alert("success update data")
            navigate("/management-data")
        }

    };

    if (id === undefined) {
        return
    }

    return (
        <Dashboard>
            <div className="p-4">
                <h2 className="text-md font-semibold mb-4">Update Job</h2>
                <div className="bg-white p-4 shadow-md rounded-md">

                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="title" className="block font-medium mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="job_description" className="block font-medium mb-1">
                                Job Description
                            </label>
                            <textarea
                                id="job_description"
                                name="job_description"
                                value={formData.job_description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                rows="4"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="job_qualification" className="block font-medium mb-1">
                                Job Qualification
                            </label>
                            
                             <textarea
                                id="job_description"
                                name="job_qualification"
                                value={formData.job_qualification}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                rows="4"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Job Type
                            </label>
                            <input
                                type="text"
                                id="job_type"
                                name="job_type"
                                value={formData.job_type}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Job Tenure
                            </label>
                            <input
                                type="text"
                                name='job_tenure'
                                value={formData.job_tenure}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Job Status
                            </label>
                            <input
                                type="number"
                                name="job_status"
                                min={0}
                                max={1}
                                value={formData.job_status}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Company City
                            </label>
                            <input
                                type="text"
                                name='company_city'
                                value={formData.company_city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Company Image Url
                            </label>
                            <input
                                type="url"
                                name='company_image_url'
                                value={formData.company_image_url}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Salary Min
                            </label>
                            <input
                                type="number"
                                name='salary_min'
                                min={0}
                                value={formData.salary_min}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="job_type" className="block font-medium mb-1">
                                Salary Max
                            </label>
                            <input
                                type="number"
                                name='salary_max'
                                min={0}
                                value={formData.salary_max}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </Dashboard>
    )
}
