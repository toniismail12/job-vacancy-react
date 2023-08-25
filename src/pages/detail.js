import React from 'react'
import Main from '../layouts/main'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import JobDetail from '../components/job-detail';

export default function Detail() {

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    if (id === undefined) {
        return
    }

    return (
        <Main>
            <div className='mt-5 lg:px-12 px-7'>
                <h2 className="text-2xl font-semibold mb-4">Jobs Detail</h2>
                <JobDetail id={id} />
            </div>
        </Main>
    )
}
