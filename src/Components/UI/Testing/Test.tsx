import React, {useState, useEffect} from 'react'

import {slideData} from '../Slide/SlideData'
import './test.css'



const Test = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  useEffect(() => {
    // Automatically scroll every 3 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    setAutoScrollInterval(interval);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

//   const renderItems = () => {
//     const items = [];
//     for (let i = 0; i < 8; i++) {
//       const isActive = currentIndex === i % 4;
//       items.push(<div key={i} className={`item ${isActive ? 'active' : ''}`}>Item {i + 1}</div>);
//     }
//     return items;
//   };

  const renderItems = () => {
    const images = slideData; // Import or define your image sources
    return images.map((imageSrc, index) => {
      const isActive = currentIndex === index;
      return (
        <div key={index} className={`item ${isActive ? 'active' : ''}`}>
          <img src={imageSrc.img} alt={`Image ${index + 1}`} />
        </div>
      );
    });
  };
  return (
    <div className="slider">
      <div className="slider-container">
        {renderItems()}
        <button className="prev" onClick={handlePrev}>
          {/* &lt; */} prev
        </button>
        <button className="next" onClick={handleNext}>
          {/* &gt; */} next
        </button>
      </div>
      <div className="dots">
        {/* {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))} */}
        {
            slideData.map((item)=>(
                <span
                key={item.id}
                className={item.id === currentIndex ? 'active' : ''}
                onClick={() => handleDotClick(item.id)}
              ></span> 
            ))
        }
      </div>
    </div>
  )
}

export default Test