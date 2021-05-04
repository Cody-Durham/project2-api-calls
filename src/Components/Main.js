import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import RiverSelection from './RiverSelection'
import RiverWeather from './RiverWeather'

const Main = () => {
    return( 
        <div>
            <div className='main-image'>
                <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1620093668/Project%202_API%20Calls/Fishing_Image_scaled_bur7an.jpg'></img>
            </div>
            <Switch>
                
                <Route path='/riverselection'>
                    <RiverSelection />
                </Route>
                <Link to='/riverselection'>
                    <button className='find-water-button'>Find your water weather
                        <span className="span">
                            <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620098166/Project%202_API%20Calls/Water_Logo-01_sbtnuj.png" id="water-logo"></img>
                        </span>
                    </button>
                </Link>

            
                <Route path='/riverweather/:zip'
                    render={ (routerProps) => <RiverWeather {...routerProps} />}>
                    <RiverWeather />
                </Route> 
           
            </Switch>
        </div>
    )
};

export default Main