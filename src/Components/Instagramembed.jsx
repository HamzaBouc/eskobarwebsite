import React, { useEffect, useState } from 'react';

const InstagramEmbed = () => {
  const [profileData] = useState(null);

  useEffect(() => {
    // Fetch Instagram profile data here (replace with your actual data)
    fetch('https://www.instagram.com/eskobar.ofc/?__a=1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data here
  })
  .catch((error) => {
    console.error('Error fetching Instagram profile:', error);
  });


  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { username, full_name, profile_pic_url_hd } = profileData.graphql.user;

  return (
    <div>
      <h3>{full_name}</h3>
      <p>@{username}</p>
      <img src={profile_pic_url_hd} alt={`${full_name}'s profile`} />
    </div>
  );
});
  
}


export default InstagramEmbed;
