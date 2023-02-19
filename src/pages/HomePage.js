import React from 'react'
import DestinationCard from '../components/DestinationCard'
import PictureCard from '../components/PictureCard';
import TrendingCard from '../components/TrendingCard';
import SearchPage from './SearchPage';

export default  function HomePage(props){
    const destinations=[
        {
            name:'Batum, East Java',
            destNumber:86,
            image:'https://media.istockphoto.com/id/1347162722/photo/batu-cave-in-kuala-lumpur.jpg?b=1&s=170667a&w=0&k=20&c=2Ebra52l-j58IOgAMbGeJ1v6ipI60qp_mqydvFLbaac='
        },
        {
            name:'Kute',
            destNumber:86,
            image:'https://upload.wikimedia.org/wikipedia/commons/f/fe/Kuta_Beach_%286924448550%29.jpg'
        },
        {
            name:'Surabaya',
            destNumber:86,
            image:'https://media.istockphoto.com/id/1082929112/photo/surabaya-cityscape-indonesia.jpg?s=612x612&w=0&k=20&c=l9mI5bfy-a7_numep1Bcc8tlHJzv5lR4-K6dQK6wvc0='
        },
        {
            name:'Malang, East Java',
            destNumber:186,
            image:'https://upload.wikimedia.org/wikipedia/commons/9/96/Tugu_Malang.jpg'
        },
        {
            name:'Dieng, Central Java',
            destNumber:86,
            image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNehSXXBHuIXhxi5wq4jyq9EL5YJUYhWVUQf3Id0Gq5W8RPUjUil-CY9Gpi5IYWD1_lvET4S4YckpK118k1cRf_7VQKJI7Q1GzCyTxVluckHBn4E3s3HG6n-_ThfISDCj-9l0BQOt2wLuQVHp1nMBKYjkAP_PrU4CIfmFvUzzTIxZ68NYBugRLgDQc7g/s3199/5D444A87-C496-4A6F-9794-1DBDC8166A0C.jpg'
        },
        {
            name:'Nusa Dua, Lombok',
            destNumber:86,
            image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17848952.jpg?k=c53a64d42dd66ff1ab6375521c92603bdd78d94d28699ce7f7e34b0434024961&o=&hp=1'
        },
        {
            name:'Bandung, West Java',
            destNumber:86,
            image:'https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt7f86b6cf7e72ffe7/61bc491f85b59c201581b414/US_Bandung_ID_Header.jpg?width=1680&quality=70&auto=webp://media.istockphoto.com/id/1347162722/photo/batu-cave-in-kuala-lumpur.jpg?b=1&s=170667a&w=0&k=20&c=2Ebra52l-j58IOgAMbGeJ1v6ipI60qp_mqydvFLbaac='
        },
        {
            name:'Wakatobi,Sumatera',
            destNumber:186,
            image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e4/6e/bd/wakatobi-dive-resort.jpg?w=700&h=-1&s=1'
        },
        ];

    const featuredDestinations=[
        {
            name:"Barcelona Tour",
            rating:"3.5",
            activityNumber:196,
            image:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/attractions-Park%20G%C3%BCell.jpg?imwidth=680" 
        },
        {
            name:"Australia Tour",
            rating:"3.5",
            activityNumber:196,
            image:"https://a.cdn-hotels.com/gdcs/production5/d1996/54fdb73f-eee5-4612-a3e7-6fc7ed2f7bee.jpg?impolicy=fcrop&w=800&h=533&q=medium://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/attractions-Park%20G%C3%BCell.jpg?imwidth=680" 
        },
        {
            name:"London, United Kingdom",
            rating:"3.5",
            activityNumber:196,
            image:"https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/attractions-Park%20G%C3%BCell.jpg?imwidth=680" 
        },
        {
            name:"Australia Tour",
            rating:"3.5",
            activityNumber:196,
            image:"https://seduniatravel.com/wp-content/uploads/2021/01/AUSTRALIA.jpg" 
        },
        {
            name:"Japan Tour",
            rating:"3.5",
            activityNumber:196,
            image:"https://www.celebritycruises.com/blog/content/uploads/2022/01/beautiful-places-in-japan-itsukushima-shrine-hiroshima-1920x890.jpg" 
        },
        {
            name:"Japan Tour",
            rating:"3.5",
            activityNumber:196,
            image:"https://viatravelers.com/wp-content/uploads/2022/03/Osaka-Castle-Osaka-Japan.jpg" 
        },
    ];

    const trendingDestinations=[
        {
            name:"Flight to Manila",
            rating:"4.91",
            price:"250.00",
            image:"https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Manila1-1125x624_biy6ej.png",
        },
        {
            name:"Flight to San Francisco",
            rating:"4.91",
            price:"250.00",
            image:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iiKKfYY5_BWk/v1/-1x-1.jpg",
        },
        {
            name:"Flight to Frankfurt main",
            rating:"4.91",
            price:"250.00",
            image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
        },
        {
            name:"Flight to Washington",
            rating:"4.91",
            price:"250.00",
            image:"https://colombianabroad.com/wp-content/uploads/washington-dc-feature-1024x768.jpg",
        },
        {
            name:"Flight to Stockholm",
            rating:"4.91",
            price:"250.00",
            image:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTKTv-8vqCqV5cLTBJrzK_bsZe6hHReJTYE-w6vOjBfhJk1B5yWndlh-drGGHru31K8",
        },
        {
            name:"Flight to Seattle",
            rating:"4.91",
            price:"250.00",
            image:"https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel_3x2.jpg",
        },
    ]


    return(
        <>
        <div className='main-home '>
         <div  className="banner  bg-no-repeat bg-[url('https://media.wired.com/photos/5955af5fad90646d424bb358/master/w_2500,h_1667,c_limit/GettyImages-498118341.jpg')]" >
            <h1 className='w-1/2 text-5xl font-extrabold text-white'>
                Amazing Flight to Switzerland
            </h1>
            <h4 className='w-1/2 text-3xl font-extrabold text-white'>
                Find and book a great a experience
            </h4>
         
         </div>
        <SearchPage/>
         <div className='p-14 text-center'>
            <h3 className='text-gray-700 text-4xl font-extrabold'>
                Search a best place in the world
            </h3>
            <p className='text-gray-500 w-1/2 mx-auto mt-4'>
                Whether you are looking for places a vacation, We are here to Guide you
                about the details you need to check in and ease your trips in advance
            </p>

        <div className=' grid grid-cols-4 gap-12 mb-4 px-24 py-4'>
            {
                destinations.map((destination,index) =>{
                    return <DestinationCard key={index} destination = {destination}/>
                })}
        </div>

         </div>
         <div className='text-start px-32'>
            <h4 className='text-3xl font-bold text-gray-900'>
                Featured Destination
            </h4>
            <p className='text-md text-gray-500 '>
                Popular destination for visitors from Indonesia
            </p>
            <div className='flex  '>
                <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-5'>
                <div className='col-span-2'>
                    <PictureCard destination = {featuredDestinations[0]} />

                
                </div>
                <div className='row-span-2'>
                <PictureCard destination = {featuredDestinations[1]}/>
                <div>

                <PictureCard destination = {featuredDestinations[4]}/>
                </div>

                <div>
                <PictureCard destination = {featuredDestinations[5]}/>
                </div>

                </div>
               
                <div className='row-span-4 '>
                <PictureCard destination = {featuredDestinations[2]}/>
                </div>
                <div className='row-span-4 '>
                <PictureCard destination = {featuredDestinations[3]}/>
                </div>
                </div>
               
            </div>
         </div>


         <div>
            <div className='p-14 text-center'>
            <h3 className=' text-4xl font-extrabold text-gray-700 r'>
                Trending cites
            </h3>
            <p className='text-gray-500 w-1/2 mx-auto mt-4 font-semibold'>
                The most searched for cities on TripGuide
            </p>
            </div>
         </div >

         <div className=' px-24 py-4 grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-12'>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[0]} />
        </div>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[1]} />
        </div>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[2]} />
        </div>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[3]} />
        </div>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[4]} />
        </div>
        <div className='hover:shadow-lg'>
        <TrendingCard destination = {trendingDestinations[5]} />
        </div>
        
         </div>
         {/* <div> Search best place</div>
         <div> Featured destinations</div>
         <div> Trending cities</div>
         <div> Explore</div> */}
         </div>
        </>
       
    )
}