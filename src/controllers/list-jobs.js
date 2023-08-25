import API from '../api';

async function GetListJobs() {
    try {
        const res = await API.get(`/job-vacancy`);
        // console.log('Response:', res.data.data);

        return res.data.data

    } catch (error) {
        console.error('Error:', error);
        return undefined
    }
}

export default GetListJobs
