import API from '../api';

async function GetDetailJobs(id) {

    try {
        const res = await API.get(`/job-vacancy/${id}`);
        // console.log('Response:', res.data.data);
        return res.data

    } catch (error) {
        console.error('Error:', error);
        return undefined
    }
}

export default GetDetailJobs
