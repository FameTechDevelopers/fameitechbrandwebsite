"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataTable = () => {

  const [data,setData] = useState([])

useEffect(() => {
const getData = async ()=>{

try {
  
const response = await axios.get('https://portal.famewheels.com/get-queries')

console.log(response?.data)

setData(response?.data)

} catch (error) {
  console.log(error)
}

}

getData()

},[])

  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">#</th>
                <th scope="col" className="px-6 py-4">name</th>
                <th scope="col" className="px-6 py-4">email</th>
                <th scope="col" className="px-6 py-4">phone</th>
                <th scope="col" className="px-6 py-4">message</th>
              </tr>
            </thead>
            <tbody>

             {data?.map((order)=>(

               <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{order.id}</td>
                <td className="whitespace-nowrap px-6 py-4">{order.name}</td>
                <td className="whitespace-nowrap px-6 py-4">{order.email}</td>
                <td className="whitespace-nowrap px-6 py-4">{order.phone}</td>
                <td className="whitespace-nowrap px-6 py-4">{order.message}</td>
              </tr>
              )) 
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DataTable