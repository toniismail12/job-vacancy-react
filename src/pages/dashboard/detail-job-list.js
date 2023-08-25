import Dashboard from '../../layouts/dashboard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import JobDetail from '../../components/job-detail';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

export default function DetailListJob() {

    const navigate = useNavigate()
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    if (id === undefined) {
        return
    }

    async function Delete () {

        // eslint-disable-next-line no-restricted-globals
        const Confir = confirm("are you sure want to delete ? click OK to Delete.")

        if (Confir) {

            try {

                const response = await api.delete("/job-vacancy/"+id);
            
                console.log('Response:', response.data);
            
                alert("Delete Success")
                return navigate("/management-data")
        
            } catch (error) {
                console.error('Error:', error);
                alert("Delete Failed")
            }

        }
    }

    return (
        <Dashboard>
            <div className="p-4">
                <h2 className="text-md font-semibold mb-4">Detail Job</h2>
                <div className="bg-white p-4 shadow-md rounded-md">
                    <div className='flex space-x-2 text-white'>
                        <button onClick={()=>navigate("/update-job/"+id)} className='bg-green-500 p-2 rounded-md'>Update</button>
                        <button onClick={Delete} className='bg-red-500 p-2 rounded-md'>Delete</button>
                    </div>
                    <JobDetail id={id} />
                </div>
            </div>
        </Dashboard>
    )
}
