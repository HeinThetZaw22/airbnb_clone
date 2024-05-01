import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import NavSpacer from "../../components/NavSpacer";
import Container from "../../components/Container";
import { MobileSearch } from "../../components/MobileSearch";
import Categories from "../../components/Categories";

const HomePage = () => {
  const categories = [
    {
      "id": 1,
      "icon": "🏠",
      "title": "Apartments",
      "description": "Find your perfect apartment for rent."
    },
    {
      "id": 2,
      "icon": "🏡",
      "title": "Houses",
      "description": "Explore houses available for rent."
    },
    {
      "id": 3,
      "icon": "🏢",
      "title": "Condos",
      "description": "Discover luxury condos for rent."
    },
    {
      "id": 4,
      "icon": "🏘️",
      "title": "Townhouses",
      "description": "Browse townhouses for rent in your desired area."
    },
    {
      "id": 5,
      "icon": "🏚️",
      "title": "Cottages",
      "description": "Escape to a cozy cottage for rent."
    },
    {
      "id": 6,
      "icon": "🏰",
      "title": "Mansions",
      "description": "Experience luxury living in a mansion for rent."
    },
    {
      "id": 7,
      "icon": "🏨",
      "title": "Hotels",
      "description": "Find temporary accommodation in hotels."
    },
    {
      "id": 8,
      "icon": "🛏️",
      "title": "Rooms",
      "description": "Rent a room for short or long-term stay."
    },
    {
      "id": 9,
      "icon": "🏢",
      "title": "Studio Apartments",
      "description": "Discover cozy studio apartments for rent."
    },
    {
      "id": 10,
      "icon": "🏘️",
      "title": "Duplexes",
      "description": "Explore duplexes available for rent."
    },
    {
      "id": 11,
      "icon": "🏞️",
      "title": "Cabins",
      "description": "Rent a cabin for a peaceful getaway."
    },
    {
      "id": 12,
      "icon": "🏠",
      "title": "Lofts",
      "description": "Discover spacious lofts for rent."
    },
    {
      "id": 13,
      "icon": "🌊",
      "title": "Beach Houses",
      "description": "Find a beach house for rent near the shore."
    },
    {
      "id": 14,
      "icon": "🌴",
      "title": "Vacation Homes",
      "description": "Rent a vacation home for your next holiday."
    },
    {
      "id": 15,
      "icon": "🏙️",
      "title": "Penthouses",
      "description": "Experience luxury living in a penthouse for rent."
    },
    {
      "id": 16,
      "icon": "🏡",
      "title": "Farmhouses",
      "description": "Rent a farmhouse for a tranquil rural retreat."
    },
    {
      "id": 17,
      "icon": "🏢",
      "title": "Corporate Housing",
      "description": "Find furnished corporate housing for short-term stays."
    },
    {
      "id": 18,
      "icon": "🌄",
      "title": "Chalets",
      "description": "Rent a cozy chalet for your mountain getaway."
    },
    {
      "id": 19,
      "icon": "🏠",
      "title": "Bungalows",
      "description": "Discover charming bungalows for rent."
    },
    {
      "id": 20,
      "icon": "🏡",
      "title": "Villas",
      "description": "Experience luxury living in a villa for rent."
    },
    {
      "id": 21,
      "icon": "🌊",
      "title": "Lake Houses",
      "description": "Rent a lake house for a serene waterfront experience."
    },
    {
      "id": 22,
      "icon": "🌅",
      "title": "Cottages",
      "description": "Rent a cottage for a peaceful countryside escape."
    },
    {
      "id": 23,
      "icon": "🌆",
      "title": "Urban Apartments",
      "description": "Find modern urban apartments for rent."
    },
    {
      "id": 24,
      "icon": "🌇",
      "title": "City Lofts",
      "description": "Discover trendy city lofts for rent."
    },
    {
      "id": 25,
      "icon": "🌃",
      "title": "City Penthouses",
      "description": "Experience luxury living in a penthouse in the city."
    },
    {
      "id": 26,
      "icon": "🏞️",
      "title": "Mountain Cabins",
      "description": "Rent a cozy cabin in the mountains for a scenic retreat."
    },
    {
      "id": 27,
      "icon": "🌳",
      "title": "Rural Homes",
      "description": "Find homes for rent in tranquil rural settings."
    },
    {
      "id": 28,
      "icon": "🏰",
      "title": "Historic Homes",
      "description": "Rent a historic home for a unique living experience."
    },
    {
      "id": 29,
      "icon": "🏨",
      "title": "Extended Stay Hotels",
      "description": "Find extended stay hotels for longer temporary accommodation."
    },
    {
      "id": 30,
      "icon": "🛏️",
      "title": "Shared Rooms",
      "description": "Rent a shared room for a budget-friendly option."
    }
  ]
  
  return (
    <div className=" h-[200vh]">
      <Container>
        <div className=" max-sm:hidden">
          <Navbar />
          <NavSpacer />
          <SearchBar />
        </div>
        <MobileSearch  />
      </Container>
        <Categories categories={categories} />
      <hr className=" sm:mt-2" />
    </div>
  );
};

export default HomePage;
