import { GetListJobs } from '../controllers';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowLoading, HideLoading } from './loading';

const JobList = () => {
  
  const navigate = useNavigate();

  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [city, setCity] = useState("")

  const fetchData = useCallback(async () => {
    
    ShowLoading()
    const res = await GetListJobs()
    res !== undefined ? setData(res) : setData([])
    HideLoading()

  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="container mx-auto mt-8 px-3 lg:px-0 cursor-pointer min-h-screen">
      <div className='mb-5'>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <li
            className="bg-white p-0 shadow-md rounded-md"
          >
            <input value={title} onChange={e => setTitle(e.target.value)} type='text' className='border p-3 w-full' placeholder='title job' />
          </li>
          <li
            className="bg-white p-0 shadow-md rounded-md"
          >
            <input value={company} onChange={e => setCompany(e.target.value)} type='text' className='border p-3 w-full' placeholder='company' />
          </li>
          <li
            className="bg-white p-0 shadow-md rounded-md"
          >
            <input value={city} onChange={e => setCity(e.target.value)} type='text' className='border p-3 w-full' placeholder='city' />
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data
          .filter((f) => f.title.toLowerCase().includes(title.toLowerCase()))
          .filter((f) => f.company_name.toLowerCase().includes(company.toLowerCase()))
          .filter((f) => f.company_city.toLowerCase().includes(city.toLowerCase()))
          .map((job, index) => (
            <li
              onClick={()=>navigate("/detail/"+job.id)}
              key={index}
              className="bg-white p-0 shadow-md rounded-md border"
            >
              <div className='lg:flex justify-between'>
                <div className='p-3'>
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-900">{job.company_name}</p>
                  {/* <p className="text-gray-600 mt-1">{job.job_description}</p> */}
                  <p className="text-gray-900 mt-2 font-semibold">City: {job.company_city}</p>
                  <p className={job.job_status === 0 ? 'bg-green-400 p-2' : 'bg-red-400 p-2'}><span className="font-semibold">Job Status:</span> {job.job_status === 0 ? "Dibuka" : "Ditutup"}</p>
                </div>

                <img src={job.company_image_url} className='h-auto w-32' alt={job.title} />
              </div>
              
            </li>
          ))}
      </ul>
    </div>
  );
};

export default JobList;
