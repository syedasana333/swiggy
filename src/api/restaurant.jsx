
export const getData = async () => {

    try{
        
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'); 

        const dataJson = await data.json();
        const restaurants = dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        return restaurants;
    }
    catch(error){
        console.error(error);
    }
}

