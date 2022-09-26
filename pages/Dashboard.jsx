import React from 'react'
import '../styles/dashboard.css'
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from '../charts/MileChart';
import CarStatsChart from '../charts/CarStatsChart';
import RecommendCarCard from '../components/UI/RecommendCarCard';

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: 'Total Items',
  totalNumber: 300,
  icon: 'ri-medicine-bottle-line'
};

const tripObj = {
  title: 'Inventory',
  totalNumber: 150,
  icon: 'ri-heart-add-line'
};

const clientObj = {
  title: 'Clients',
  totalNumber: 20,
  icon: 'ri-team-line'
};

const schedObj = {
  title: 'Schedule',
  totalNumber: 10,
  icon: 'ri-time-line'
};

const Dashboard = () => {
  return (<div className="dashboard">
    <div className="dashboard__wrapper">
      <div className="dashboard__cards">
        <SingleCard item={carObj} />
        <SingleCard item={tripObj} />
        <SingleCard item={clientObj} />
        <SingleCard item={schedObj} />
      </div>

      <div className="statics">
        <div className="stats">
          <h3 className='stats__title'>Items Statistics</h3>
          <MileChart />
        </div>

        <div className="stats">
          <h3 className='stats__title'>Client Statistics</h3>
          <CarStatsChart />
        </div>
      </div>

      <div className="recommend__cars-wrapper">
          {
            recommendCarsData.map(item=> 
            <RecommendCarCard item={item} key={item.id} />)
          }
      </div>
    </div>
  </div>
  );
};
export default Dashboard