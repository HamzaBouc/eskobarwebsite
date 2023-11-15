import React, { useState } from 'react';

import Sofia from '../images/Sofia.png';
import THEDON from '../images/THEDON.png';
import Marko from '../images/Marco.png';
import Alejandro from '../images/Alejandro.png';
import Isabella from '../images/Isabella.png';
import Alejandroicon from '../images/Alejandroicon.png';
import Sofiaicon from '../images/Sofiaicon.png';
import THEDONICON from '../images/THE DONICON.png';
import Markoicon from '../images/Markocion.png';
import Isabellaicon from '../images/Isabellaicon.png';

function History() {
  const imageAndIconData = [
    { largeImage: THEDON, icon: THEDONICON },
    { largeImage: Isabella, icon: Isabellaicon },
    { largeImage: Alejandro, icon: Alejandroicon },
    { largeImage: Sofia, icon: Sofiaicon },
    { largeImage: Marko, icon: Markoicon},
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
      <img src={selectedImageData.largeImage} height="800px" width="1900px" alt="#" />
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

export default History;
