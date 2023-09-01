import React from 'react'

import BarChart from '../charts/BarChart'
import LineChart from '../charts/LineChart'
import PieChart from '../charts/PieChart'
import RadarChart from '../charts/RadarChart'
import ScatterChart from '../charts/ScatterChart'
import PolarAreaChart from '../charts/PolarAreaChart'

import { useState } from 'react'
import { UserGainLostData } from '../data'
import { ProfitData } from '../data'

function Charts() {
  const [usersGainedData, setUserGainedData] = useState({
    labels: UserGainLostData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserGainLostData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })
  const [usersLostData, setUser] = useState({
    labels: UserGainLostData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Lost',
        data: UserGainLostData.map((data) => data.userLost),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })
  const [profitData, setProfitData] = useState({
    labels: ProfitData.map((data) => data.year),
    datasets: [
      {
        label: 'Profit Percentage',
        data: ProfitData.map((data) => data.profitPercentage),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })
  return (
    <div className="flex flex-wrap gap-x-16 gap-y-4 mt-8 justify-center">
      <h3 className="w-full text-xl text-center font-bold mt-8">
        Users Gained / Lost
      </h3>
      <div className="flex flex-grow flex-wrap gap-4 justify-center items-stretch">
        <div className="bg-[#fff] p-4 lg:w-1/3 text-center flex justify-center items-center">
          <LineChart chartData={usersGainedData} />
        </div>
        <div className="bg-[#fff] p-4 lg:w-1/3 text-center flex justify-center items-center">
          <LineChart chartData={usersLostData} />
        </div>
      </div>

      <h3 className="w-full text-xl text-center font-bold mt-8">
        Profit Percentages over years
      </h3>
      <div className="bg-[#fff] lg:w-1/3 p-4 text-center flex justify-center items-center">
        <BarChart chartData={profitData} />
      </div>
      <div className="bg-[#fff] lg:w-1/3 p-4 text-center flex justify-center items-center">
        <RadarChart chartData={profitData} />
      </div>

      <div className="bg-[#fff] lg:w-1/3 p-4 text-center flex justify-center items-center">
        <ScatterChart chartData={profitData} />
      </div>

      <h3 className="w-full text-xl text-center font-bold mt-8">
        Profit Percentages over years
      </h3>
      <div className="bg-[#fff] lg:w-1/3 p-4 text-center flex justify-center items-center">
        <PolarAreaChart chartData={profitData} />
      </div>
      <div className="bg-[#fff] lg:w-1/3 p-4 text-center flex justify-center items-center">
        <PieChart chartData={profitData} />
      </div>
    </div>
  )
}

export default Charts
