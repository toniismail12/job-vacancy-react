import api from '../api';

async function CreateJob(
    title,
    job_description,
    job_qualification,
    job_type,
    job_tenure,
    job_status,
    company_name,
    company_image_url,
    company_city,
    salary_min,
    salary_max,
) {

    try {
        const res = await api.post(`/job-vacancy`, {
            "title": title,
            "job_description": job_description,
            "job_qualification": job_qualification,
            "job_type": job_type,
            "job_tenure": job_tenure,
            "job_status": job_status,
            "company_name": company_name,
            "company_image_url": company_image_url,
            "company_city": company_city,
            "salary_min": salary_min,
            "salary_max": salary_max,
          });
          
        console.log('Response:', res);

        return "success"

    } catch (error) {
        console.error('Error:', error);
        return error.response.data.message
    }

}

export default CreateJob
