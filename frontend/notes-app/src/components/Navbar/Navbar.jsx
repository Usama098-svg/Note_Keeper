import React, { useState } from 'react';
import ProfileInfo from './Cards/ProfileInfo';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
  const[searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Call useNavigate as a function to get the navigate function

  const onLogout = () => {
    navigate("/login"); 
  };

  const handleSearch = ()=>{

  };

  const onClearSearch = ()=>{
    setSearchQuery("");

  };

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-medium text-black py-2'>NOTES</h2>
      <SearchBar 
      value={searchQuery}
      onChange={({target}) =>{setSearchQuery(target.value)}}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}
      
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
