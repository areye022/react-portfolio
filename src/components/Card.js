import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards'>
      <h1>Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/weatherdashboard.jpg'
              text='This application allows users to generate a 5-day forecast for a searched city.'
              label='Weather Forecast'
              path='/portfolio'
            />
            <CardItem
              src='images/healthapp.jpg'
              text='This application allows a user to search for local health-oriented business based on individual needs and goals.'
              label='Healthapp'
              path='/portfolio'
            />            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fitnesstracker.JPG'
              text='This Fitness Tracker allows users to add new workouts, and keep track of progess.'
              label='Fitness'
              path='/portfolio'
            />  
            <CardItem
              src='images/wanderlust.jpg'
              text='This application allows users to generate an a list of destinations they would like to travel to.'
              label='Adventure'
              path='/portfolio'
            />
            <CardItem
              src='images/notetaker.jpg'
              text='This application allows users to write, save, and delete notes.'
              label='Notetaker'
              path='/portfolio'
            />
            <CardItem
              src='images/workdayscheduler.jpg'
              text='This application allows users to generate a daily work schedule.'
              label='Workday Scheduler'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;