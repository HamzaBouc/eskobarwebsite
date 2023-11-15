import React, { useState } from 'react';


import Sofia from '../images/Sofia.png';
import THEDON from '../images/THEDON.png';
import Marko from '../images/Marko.png';
import Alejandro from '../images/Alejandro.png';
import Isabella from '../images/Isabella.png';
import Alejandroicon from '../images/Alejandroicon.png';
import Sofiaicon from '../images/Sofiaicon.png';
import THEDONICON from '../images/THE DONICON.png';
import Markoicon from '../images/Markoicon.png';
import Isabellaicon from '../images/Isabellaicon.png';

function History2() {
  const imageAndIconData = [
    { largeImage: Sofia, icon: Sofiaicon },
    { largeImage: THEDON, icon: THEDONICON },
    { largeImage: Marko, icon: Markoicon },
    { largeImage: Alejandro, icon: Alejandroicon },
    { largeImage: Isabella, icon: Isabellaicon },
  ];

  const [selectedImageData, setSelectedImageData] = useState(imageAndIconData[0]);

  const handleClick = (index) => {
    setSelectedImageData(imageAndIconData[index]);
  };

  return (
    <div id='history'>
      <div className='pr-heading'>
        <h1>History</h1>
      </div>
      <div className='Appp'>
        <div className='LargeImage'>
          <img src={selectedImageData.largeImage} alt="#" />
        </div>
        <div className='flex-row'>
          {imageAndIconData.map((data, i) => (
            <div className='thumbnail' key={i}>
              <img
                className={selectedImageData === data ? 'clicked' : ''}
                src={data.icon}
                onClick={() => handleClick(i)}
                alt="#"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History2;
