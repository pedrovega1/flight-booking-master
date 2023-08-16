import React from "react";
import DestinationCard from "../components/DestinationCard";
import PictureCard from "../components/PictureCard";
import TrendingCard from "../components/TrendingCard";
import SearchForm from "./SearchForm";
import SearchPage from "./SearchPage";

export default function HomePage(props) {
  const destinations = [
    {
      name: "Batum, East Java",
      destNumber: 86,
      image:
        "https://media.istockphoto.com/id/1347162722/photo/batu-cave-in-kuala-lumpur.jpg?b=1&s=170667a&w=0&k=20&c=2Ebra52l-j58IOgAMbGeJ1v6ipI60qp_mqydvFLbaac=",
    },
    {
      name: "Kute",
      destNumber: 86,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kuta_Beach_%286924448550%29.jpg",
    },
    {
      name: "Surabaya",
      destNumber: 86,
      image:
        "https://media.istockphoto.com/id/1082929112/photo/surabaya-cityscape-indonesia.jpg?s=612x612&w=0&k=20&c=l9mI5bfy-a7_numep1Bcc8tlHJzv5lR4-K6dQK6wvc0=",
    },
    {
      name: "Malang, East Java",
      destNumber: 186,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Tugu_Malang.jpg",
    },
    {
      name: "Dieng, Central Java",
      destNumber: 86,
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNehSXXBHuIXhxi5wq4jyq9EL5YJUYhWVUQf3Id0Gq5W8RPUjUil-CY9Gpi5IYWD1_lvET4S4YckpK118k1cRf_7VQKJI7Q1GzCyTxVluckHBn4E3s3HG6n-_ThfISDCj-9l0BQOt2wLuQVHp1nMBKYjkAP_PrU4CIfmFvUzzTIxZ68NYBugRLgDQc7g/s3199/5D444A87-C496-4A6F-9794-1DBDC8166A0C.jpg",
    },
    {
      name: "Nusa Dua, Lombok",
      destNumber: 86,
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17848952.jpg?k=c53a64d42dd66ff1ab6375521c92603bdd78d94d28699ce7f7e34b0434024961&o=&hp=1",
    },
    {
      name: "Bandung, West Java",
      destNumber: 86,
      image:
        "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt7f86b6cf7e72ffe7/61bc491f85b59c201581b414/US_Bandung_ID_Header.jpg?width=1680&quality=70&auto=webp://media.istockphoto.com/id/1347162722/photo/batu-cave-in-kuala-lumpur.jpg?b=1&s=170667a&w=0&k=20&c=2Ebra52l-j58IOgAMbGeJ1v6ipI60qp_mqydvFLbaac=",
    },
    {
      name: "Wakatobi,Sumatera",
      destNumber: 186,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/e4/6e/bd/wakatobi-dive-resort.jpg?w=700&h=-1&s=1",
    },
  ];

  const featuredDestinations = [
    {
      name: "Barcelona Tour",
      rating: "3.5",
      activityNumber: 196,
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/attractions-Park%20G%C3%BCell.jpg?imwidth=680",
    },
    {
      name: "Australia Tour",
      rating: "3.5",
      activityNumber: 196,
      image:
        "https://a.cdn-hotels.com/gdcs/production5/d1996/54fdb73f-eee5-4612-a3e7-6fc7ed2f7bee.jpg?impolicy=fcrop&w=800&h=533&q=medium://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/attractions-Park%20G%C3%BCell.jpg?imwidth=680",
    },
    {
      name: "London, United Kingdom",
      rating: "3.5",
      activityNumber: 196,
      image:
        "https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvbmRvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Australia Tour",
      rating: "4.5",
      activityNumber: 196,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Japan Tour",
      rating: "3.5",
      activityNumber: 196,
      image:
        "https://www.celebritycruises.com/blog/content/uploads/2022/01/beautiful-places-in-japan-itsukushima-shrine-hiroshima-1920x890.jpg",
    },
    {
      name: "Japan Tour",
      rating: "3.5",
      activityNumber: 196,
      image:
        "https://viatravelers.com/wp-content/uploads/2022/03/Osaka-Castle-Osaka-Japan.jpg",
    },
  ];

  const trendingDestinations = [
    {
      name: "Flight to Manila",
      rating: "4.91",
      price: "250.00",
      image:
        "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Manila1-1125x624_biy6ej.png",
    },
    {
      name: "Flight to San Francisco",
      rating: "4.91",
      price: "250.00",
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iiKKfYY5_BWk/v1/-1x-1.jpg",
    },
    {
      name: "Flight to Frankfurt main",
      rating: "4.91",
      price: "250.00",
      image:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS1SUGYNL-VOt5dcUOZUkr-ShQ9CF5KuHP_U37NqYXw4uMMRGhRS3Gc8c9VvIa3jFyq",
    },
    {
      name: "Flight to Washington",
      rating: "4.91",
      price: "250.00",
      image:
        "https://colombianabroad.com/wp-content/uploads/washington-dc-feature-1024x768.jpg",
    },
    {
      name: "Flight to Stockholm",
      rating: "4.91",
      price: "250.00",
      image:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTKTv-8vqCqV5cLTBJrzK_bsZe6hHReJTYE-w6vOjBfhJk1B5yWndlh-drGGHru31K8",
    },
    {
      name: "Flight to Seattle",
      rating: "4.91",
      price: "250.00",
      image:
        "https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel_3x2.jpg",
    },
  ];

  return (
    <>
      <div className="main-home ">
        <div className="banner  bg-no-repeat bg-[url('https://media.wired.com/photos/5955af5fad90646d424bb358/master/w_2500,h_1667,c_limit/GettyImages-498118341.jpg')]">
          <h1 className="w-1/2 text-5xl font-extrabold text-white">
            Amazing Flight to Switzerland
          </h1>
          <h4 className="w-1/2 text-3xl font-extrabold text-white">
            Find and book a great a experience
          </h4>
        </div>
        <SearchForm />
        <div className="p-14 text-center">
          <h3 className="text-gray-700 text-4xl font-extrabold">
            Search a best place in the world
          </h3>
          <p className="text-gray-500 w-1/2 mx-auto mt-4">
            Whether you are looking for places a vacation, We are here to Guide
            you about the details you need to check in and ease your trips in
            advance
          </p>

          <div className=" grid grid-cols-4 gap-12 mb-4 px-24 py-4">
            {destinations.map((destination, index) => {
              return <DestinationCard key={index} destination={destination} />;
            })}
          </div>
        </div>
        <div className="text-start px-24 w-full">
          <h4 className="text-3xl font-bold text-gray-900">
            Featured Destination
          </h4>
          <p className="text-md text-gray-500 ">
            Popular destination for visitors from Indonesia
          </p>
          <div className="  ">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 ">
                <PictureCard destination={featuredDestinations[0]} />
              </div>
              <div className="h-24 w-2/3">
                <PictureCard destination={featuredDestinations[1]} />
              </div>
              <div className=" row-span-3 ">
                <PictureCard destination={featuredDestinations[2]} />
              </div>
              <div className=" row-span-3 ">
                <PictureCard destination={featuredDestinations[3]} />
              </div>
              <div className="  h-24 w-2/3  ">
                <PictureCard destination={featuredDestinations[4]} />
              </div>
              <div className="h-24 w-2/3 ">
                <PictureCard destination={featuredDestinations[5]} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-14 text-center">
            <h3 className=" text-4xl font-extrabold text-gray-700 r">
              Trending cites
            </h3>
            <p className="text-gray-500 w-1/2 mx-auto mt-4 font-semibold">
              The most searched for cities on TripGuide
            </p>
          </div>
        </div>

        <div className=" px-24 py-4 grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-12">
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[0]} />
          </div>
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[1]} />
          </div>
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[2]} />
          </div>
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[3]} />
          </div>
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[4]} />
          </div>
          <div className="hover:shadow-lg">
            <TrendingCard destination={trendingDestinations[5]} />
          </div>
        </div>
        {/* <div> Search best place</div>
         <div> Featured destinations</div>
         <div> Trending cities</div>
         <div> Explore</div> */}
      </div>
    </>
  );
}
