import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa'; // Import Social Icons
import { HiArrowCircleDown, HiOutlineDocument, HiOutlineDotsVertical } from 'react-icons/hi'; // Import Arrow Icon
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Lists = () => {
  const [buttonState, setButtonState] = useState(['Unlock Me', 'Unlock Me', 'Unlock Me']);
  const [isButtonDisabled, setIsButtonDisabled] = useState([false, true, true]);
  const [hideOriginalButtons, setHideOriginalButtons] = useState(false);

  const handleClick = (index, link, isSubPage = false) => {
    if (!isSubPage && buttonState[index] !== 'Unlock Me') return;

    window.open(link, '_blank');
    const updatedButtonState = isSubPage ? [...buttonState] : [...buttonState];
    updatedButtonState[index] = 'Waiting...';
    setButtonState(updatedButtonState);

    setTimeout(() => {
      updatedButtonState[index] = 'Completed';
      setButtonState(updatedButtonState);

      const updatedDisabledState = [...isButtonDisabled];
      updatedDisabledState[index] = false;
      if (index + 1 < updatedDisabledState.length) {
        updatedDisabledState[index + 1] = false;
      }
      setIsButtonDisabled(updatedDisabledState);

      if (!isSubPage && index === 2) {
        setHideOriginalButtons(true);
      }
    }, 1000);
  };

  return (
    <Router>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <img src="/Ytlogo.png" alt="Logo" className="w-32 rounded-full mt-4 mb-4" />
        <div className="text-3xl font-bold text-gray-800 mb-4">Ansarigaming</div>

        {/* Original Buttons Section */}
        <Routes>
          <Route
            path="/lists"
            element={
              <div className="flex flex-col gap-6 w-full sm:w-80">
                {!hideOriginalButtons && (
                  <>
                    <button
                      onClick={() => handleClick(0, 'https://link1.com')}
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
                      onClick={() => handleClick(1, 'https://link2.com')}
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
                      onClick={() => handleClick(2, 'https://link3.com')}
                      className={`${
                        buttonState[2] === 'Completed' ? 'bg-green-200 text-black' : 'bg-red-500 text-white'
                      } py-3 px-8 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 w-full flex items-center justify-between`}
                      disabled={isButtonDisabled[1]}
                    >
                      <FaYoutube className="text-2xl" />
                      <span className="mx-auto">{buttonState[2]}</span>
                      <HiOutlineDotsVertical />
                    </button>
                  </>
                )}
              </div>
            }
          />
        </Routes>

        {/* Dynamic SubPage rendering */}
        <Routes>
          <Route path="/lists/:subpage" element={<SubPage />} />
        </Routes>
      </div>
    </Router>
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

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {subpage === 'ldoe' ? 'Ldoe Mod Apk' : 'Among Us'}
      </h2>
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
