import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { HiArrowCircleDown, HiOutlineDocument, HiOutlineDotsVertical } from 'react-icons/hi';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { LoadingScreen } from './LoadingScreen';

const Lists = () => {
  const [buttonState, setButtonState] = useState(['Unlock Me', 'Unlock Me', 'Unlock Me']);
  const [isButtonDisabled, setIsButtonDisabled] = useState([false, true, true]);
  const [hideOriginalButtons, setHideOriginalButtons] = useState(false);
  const [showSubPage, setShowSubPage] = useState(false);
  const { subpage } = useParams(); // Getting the subpage param (e.g., 'ldoe', 'amongus')

  const navigate = useNavigate(); // To handle navigation to subpage

  useEffect(() => {
    // Reset button state and disable logic when we visit the subpage
    if (subpage) {
      setButtonState(['Unlock Me', 'Unlock Me', 'Unlock Me']);
      setIsButtonDisabled([false, true, true]);
      setHideOriginalButtons(false); // Ensure original buttons are visible when visiting subpage
      setShowSubPage(false); // Hide subpage until buttons are interacted with
    }
  }, [subpage]);

  // Handle button clicks for both links and subpage navigation
  const handleClick = (index, link = '', isSubPage = false) => {
    // If it's not a subpage and button isn't unlocked, prevent action
    if (!isSubPage && buttonState[index] !== 'Unlock Me') return;
  
    // If the button is for external link, open the link and update button state
    if (!isSubPage && link) {
      window.open(link, '_blank'); // Open external link in a new tab
    }
  
    // Update the button state to "Waiting..."
    const updatedButtonState = [...buttonState];
    updatedButtonState[index] = 'Waiting...';
    setButtonState(updatedButtonState);
  
    setTimeout(() => {
      // Mark the button as "Completed"
      updatedButtonState[index] = 'Completed';
      setButtonState(updatedButtonState);
  
      // Enable the next button (if exists)
      const updatedDisabledState = [...isButtonDisabled];
      updatedDisabledState[index] = false;
      if (index + 1 < updatedDisabledState.length) {
        updatedDisabledState[index + 1] = false;
      }
      setIsButtonDisabled(updatedDisabledState);
  
      // Navigate to subpage if it's the third button (index === 2)
      if (index === 2) {
        setHideOriginalButtons(true); // Hide original buttons after third click
        setShowSubPage(true);
        const subpageToNavigate = subpages[index]; // Dynamically select the subpage based on the index
        navigate(`/lists/${subpageToNavigate}`); // Navigate to the selected subpage route
      }
    }, 5000); // Simulate a 1-second delay for "Waiting..." state
  };
  

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <img src="/Ytlogo.png" alt="Logo" className="w-32 rounded-full mt-4 mb-4" />
      <div className="text-3xl font-bold text-gray-800 mb-4">Ansarigaming</div>

      {/* Original Buttons Section */}
      <div className="flex flex-col gap-6 w-full sm:w-80">
        {!hideOriginalButtons && (
          <>
            <button
              onClick={() => handleClick(0, 'https://www.youtube.com/@ansarigamingindia?sub_confirmation=1')}
              className={`${
                buttonState[0] === 'Completed' ? 'bg-green-200 text-black' : 'bg-yellow-300 text-black'
              } py-3 px-8 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full flex items-center justify-between`}
              disabled={isButtonDisabled[0]}
            >
              <FaYoutube className="text-2xl" />
              <span className="mx-auto">{buttonState[0]}</span>
              <HiOutlineDotsVertical />
            </button>

            <button
              onClick={() => handleClick(1, 'https://www.youtube.com/c/MintuAnsari?sub_confirmation=1')}
              className={`${
                buttonState[1] === 'Completed' ? 'bg-green-200 text-black' : 'bg-yellow-300 text-black'
              } py-3 px-8 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full flex items-center justify-between`}
              disabled={isButtonDisabled[1]}
            >
              <FaFacebook className="text-2xl" />
              <span className="mx-auto">{buttonState[1]}</span>
              <HiOutlineDotsVertical />
            </button>

            <button
              onClick={() => handleClick(2)} // No external link provided for this button
              className={`${
                buttonState[2] === 'Completed' ? 'bg-green-200 text-black' : 'bg-red-500 text-white'
              } py-3 px-8 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full flex items-center justify-between`}
              disabled={isButtonDisabled[2]}
            >
              <FaYoutube className="text-2xl" />
              <span className="mx-auto">{buttonState[2]}</span>
              <HiOutlineDotsVertical />
            </button>
          </>
        )}
      </div>

      {/* Conditionally Render Subpage Based on Button State */}
      {showSubPage && (
        <Routes>
          <Route path=":subpage" element={<SubPage />} />
      </Routes>

      
      )}
    </div>
  );
};

// SubPage Component
const SubPage = () => {
  const { subpage } = useParams(); // Extract subpage from URL (e.g., 'ldoe' or 'amongus')
  const [subpageData, setSubpageData] = useState([]);

  useEffect(() => {
    // Fetch the subpage data from the links.json file located in the public folder
    fetch(`/links.json`)
      .then((response) => response.json())
      .then((data) => {
                if (subpage in data) {
          setSubpageData(data[subpage]);
        }
      })
      .catch((error) => console.error('Error loading data:', error));
  }, [subpage]);

  // Render a loading message if data hasn't loaded yet
  if (subpageData.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col gap-6 w-full sm:w-80">
        {subpageData.map((item, index) => (
          <button
            key={index}
            onClick={() => window.open(item.link, '_blank')}
            className="bg-yellow-300 text-black py-3 px-8 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full flex items-center justify-between"
          >
            <HiOutlineDocument className="text-2xl" />
            <span className="mx-auto">{item.name}</span>
            <HiArrowCircleDown className="text-2xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Lists;