import { useEffect, useState, useCallback } from 'react';
import Dashboard from '../../layouts/dashboard'
import { Button, Space, Table } from 'antd';
import { ShowLoading, HideLoading } from '../../components';
import { GetListJobs } from '../../controllers';
import { useNavigate } from 'react-router-dom';

export default function ManagementData() {

  const navigate = useNavigate()

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {

    ShowLoading()
    const res = await GetListJobs()
    res !== undefined ? setData(res) : setData([])
    HideLoading()

  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const filterTitle = data.map((items) => {
    return {
      text: items.title,
      value: items.title,
    }
  })

  const filterCompany = data.map((items) => {
    return {
      text: items.company_name,
      value: items.company_name,
    }
  })

  const filterCity = data.map((items) => {
    return {
      text: items.company_city,
      value: items.company_city,
    }
  })

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'name',
      key: 'name',
      filters: filterTitle,

      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.startsWith(value),
      filterSearch: true,
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Company',
      dataIndex: 'company_name',
      key: 'company_name',
      filters: filterCompany,

      filteredValue: filteredInfo.company_name || null,
      onFilter: (value, record) => record.company_name.includes(value),
      filterSearch: true,
      sorter: (a, b) => a.company_name.length - b.company_name.length,
      sortOrder: sortedInfo.columnKey === 'company_name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Min Salary',
      dataIndex: 'salary',
      key: 'salary',
      sorter: (a, b) => a.salary - b.salary,
      sortOrder: sortedInfo.columnKey === 'salary' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Max Salary',
      dataIndex: 'salary_max',
      key: 'salary_max',
      sorter: (a, b) => a.salary_max - b.salary_max,
      sortOrder: sortedInfo.columnKey === 'salary_max' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'City',
      dataIndex: 'address',
      key: 'address',
      filters: filterCity,

      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      filterSearch: true,
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Job Type',
      dataIndex: 'job_type',
      key: 'job_type',
    },
    {
      title: 'Job Tenure',
      dataIndex: 'job_tenure',
      key: 'job_tenure',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
    },
  ];

  const datas = data.map((items) => {
    return {
      key: items.id,
      name: items.title,
      company_name: items.company_name,
      salary: items.salary_min,
      salary_max: items.salary_max,
      address: items.company_city,
      job_type: items.job_type,
      job_tenure: items.job_tenure,
      status: items.job_status === 0 ? "Dibuka" : "Ditutup",
      detail: <div><button onClick={()=>navigate("/detail-list-job/"+items.id)} className='bg-blue-400 hover:bg-blue-700 px-2 py-1 rounded-md text-white'>Details</button></div>
    }
  });

  return (
    <Dashboard>
      <div className="p-4">
        <h2 className="text-md font-semibold mb-4">Management Data</h2>
        <div className="bg-white p-4 shadow-md rounded-md">
          <Space
            style={{
              marginBottom: 16,
            }}
          >
            <button onClick={()=>navigate("/create-job")} className='bg-blue-500 py-1 px-3 rounded-md text-white'>
              Create
            </button>
            <Button onClick={clearFilters}>Clear filters</Button>
          </Space>
          <Table columns={columns} dataSource={datas} onChange={handleChange} />
        </div>
      </div>
    </Dashboard>
  )
}
