import { GetDetailJobs } from '../controllers';
import { useEffect, useState, useCallback } from 'react';
import { ShowLoading, HideLoading } from './loading';

const JobDetail = ({ id }) => {

  const [job, setData] = useState([])

  const fetchData = useCallback(async () => {

    ShowLoading()
    const res = await GetDetailJobs(id)
    res !== undefined ? setData(res) : setData([])
    HideLoading()

  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if(job.length < 1) {
    return <div className='text-center'>Loading ...</div>
  }

  const formattedQualification = job.job_qualification !==  undefined && job.job_qualification !== null ? job.job_qualification.replace(/\n/g, '<br /><br />') : "";

  return (
    <div className="p-5 max-w-screen mx-auto bg-white rounded-xl shadow-md space-y-4">
      <img className="mx-auto w-36" src={job.company_image_url} alt="Company Logo" />
      <div className="text-center">
        <h2 className="text-xl font-medium text-black">{job.title}</h2>
        <p className="text-gray-500">{job.company_name} - {job.company_city}</p>
      </div>
      <p className="text-gray-600">{job.job_description}</p>
      <div className="text-gray-600">
        <h3 className="text-md font-semibold mb-2">Job Qualifications:</h3>
        <div dangerouslySetInnerHTML={{ __html: formattedQualification }} />
      </div>
      <div className="text-gray-800">
        <p><span className="font-semibold">Job Type:</span> {job.job_type}</p>
        <p><span className="font-semibold">Job Tenure:</span> {job.job_tenure}</p>
        <p><span className="font-semibold">Salary:</span> {job.salary_min} - {job.salary_max}</p>
        <p className={job.job_status === 0 ? 'bg-green-400 p-2' : 'bg-red-400 p-2'}><span className="font-semibold">Job Status:</span> {job.job_status === 0 ? "Dibuka" : "Ditutup"}</p>
      </div>
    </div>
  );
};

export default JobDetail;
