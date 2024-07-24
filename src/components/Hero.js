import React, {useState, useEffect} from 'react';
import Card from './Card';
import {IMAGE_URL} from "../utils/constants";
import { getData } from '../api/restaurant';
import Shimmer from './Shimmer';
import CORS from './CORS';


const Hero = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [searchText, setSearchText] = useState([]);
    const [apiFailed, setApiFailed] = useState(false);

    useEffect(() => {
        handleGetData();
    }, []);

    
    const handleGetData = async () => {
        const restaurantList = await getData();

        if(!restaurantList){
            setApiFailed(true);
        }

        setListOfRestaurant(restaurantList);
        setFilteredRestaurant(restaurantList);
    }

    const toggleTopRated = () => {
        
        if(!isFiltered){
            const filtered = filteredRestaurant.filter(res => res.info.avgRating >= 4);
            setFilteredRestaurant(filtered);
            setIsFiltered(true);
        }
        else{
            setFilteredRestaurant(listOfRestaurant);
            setIsFiltered(false);
        }
    }

    const handleSearch = () => {
        const filterList = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(filterList);
    }

    if (apiFailed) {
        return <CORS />;
    }

    return  listOfRestaurant?.length === 0 ? (<Shimmer/>) : (
        <div className="hero-section">

            <div className='search-container'>
                <input type='text' placeholder='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleSearch()
                    }
                }}/>
                <button className='search-btn' onClick={handleSearch}>Search</button>

                <button className={`rated-btn + ${isFiltered ? "filtered" : ''} `} onClick={toggleTopRated}>Top Rated Restaurant</button>
            </div>

            
            <h1 className='main-title'>Restaurants chains in Chennai</h1>
            
            <div className="card-container">
                {
                    filteredRestaurant?.map((res) => {
                        res = res.info;
                        return <Card img={IMAGE_URL + res?.cloudinaryImageId} resName={res?.name} rating={res?.avgRating} deliveryTime={res?.sla?.slaString} cuisine={res?.cuisines.join(', ')} key={res?.id}/>
                    })
                }
            </div>
        </div>        
    )
};


export default Hero;

