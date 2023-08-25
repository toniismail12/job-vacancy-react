import React from 'react'
import Dashboard from '../../layouts/dashboard'
import LS from '../../utils'

export default function HomeDashboard() {
  return (
    <Dashboard>
     <div className="p-4">
      <h2 className="text-md font-semibold mb-4">Dashboard Overview</h2>
      <div className="bg-white p-4 shadow-md rounded-md">
        Welcome <span className='font-semibold italic'>{LS("name")}</span> in Job Vacancy APP
      </div>
    </div>
    </Dashboard>
  )
}
