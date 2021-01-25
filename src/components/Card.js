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
              link='https://areye022.github.io/weather-dashboard/'
              alt='image of weatherdashboard'
            />
            <CardItem
              src='images/healthapp.jpg'
              text='This application allows a user to search for local health-oriented business based on individual needs and goals.'
              label='Healthapp'
              link='https://mhans003.github.io/healthapp/index.html'
              alt='image of healthapp'
            />            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/fitnesstracker.jpg'
              text='This Fitness Tracker allows users to add new workouts, and keep track of progess.'
              label='Fitness'
              link='https://dry-sands-32009.herokuapp.com/'
              alt='image of fitnesstracker'
            />  
            <CardItem
              src='images/wanderlust.jpg'
              text='This application allows users to generate an a list of destinations they would like to travel to.'
              label='Adventure'
              link='https://glacial-hamlet-00150.herokuapp.com/'
              alt='image of bucketlistapp'
            />
            <CardItem
              src='images/notetaker.jpg'
              text='This application allows users to write, save, and delete notes.'
              label='Notetaker'
              link='https://desolate-reef-28035.herokuapp.com/'
              alt='image of notetaker'
            />
            <CardItem
              src='images/workdayscheduler.jpg'
              text='This application allows users to generate a daily work schedule.'
              label='Workday Scheduler'
              link='https://areye022.github.io/workdayscheduler/'
              alt='image of workday scheduler'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;