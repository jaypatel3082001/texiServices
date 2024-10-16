import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCenter, setCurrentUser, setDropup, setPickUp } from '../reduxFiles/inputSlice';
import { useNavigate } from 'react-router-dom';

function Popbox() {
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.input);
    const navigate=useNavigate()
    const [autocompletePickup, setAutocompletePickup] = useState([]);
    const [autocompleteDropoff, setAutocompleteDropoff] = useState([]);
    const [autocompletebox, setAutocompleteBox] = useState(false);
    const [pickupInput, setPickupInput] = useState('');
    const [Isloding, setIsloding] = useState(false);
    const [dropoffInput, setDropoffInput] = useState('');
    const [totalDuration, setTotalDuration] = useState(inputs?.totalDuration);
    const [totalDistance, setTotalDistance] = useState(inputs?.totalDistance);
    const [name, setName] = useState('');
    const [contactNum, setContactNum] = useState('');
    const [disabledAccess, setDisabledAccess] = useState(false);
    const [childAvailability, setChildAvailability] = useState(false);

    // State for radio buttons (Payment Mode)
    const [paymentMode, setPaymentMode] = useState('');

    useEffect(() => {
        setTotalDuration(inputs?.totalDuration)
        setTotalDistance(inputs?.totalDistance)


    }, [inputs?.totalDuration, inputs?.totalDistance])

    const handlePlaceChanged = (type, place) => {
        console.log("first", place.geometry)

        if (place && place.geometry) {
            const location = {
                lat: place?.geometry?.location?.lat,
                lng: place?.geometry?.location?.lng,
            };
            console.log("type", type)

            if (type === 'pickup') {
                setPickupInput(place.description)
                setAutocompletePickup(place.predictions || []);
                console.log(location, "locationlocation")
                dispatch(setPickUp(location));
                setAutocompleteBox(false)
                // setAutocompleteBox(false)
            } else if (type === 'dropoff') {
                setDropoffInput(place.description)
                setAutocompleteDropoff(place.predictions || []);
                dispatch(setDropup(location));
                setAutocompleteBox(false)
            }


            // Dispatch the location to update the map

        }

        console.log("inside ", autocompletebox)

    };

    const handleAutocompleteFetch = async (input, type) => {
        const apiKey = import.meta.env.VITE_MAPS_API_KEY; // Replace with your actual API key
        const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${apiKey}`;

        try {
            const response = await fetch(url, {
                method: "GET",
            });

            const data = await response.json();
            console.log("data:", data);

            if (type === 'pickup') {
                setAutocompletePickup(data.predictions || []);
            } else if (type === 'dropoff') {
                setAutocompleteDropoff(data.predictions || []);
            }

        } catch (error) {
            console.error("Error fetching autocomplete data:", error);
        }
    };

    const handlePickupChange = (e) => {
        const value = e.target.value;
        setAutocompleteBox(true)
        setPickupInput(value);
        handleAutocompleteFetch(value, 'pickup');
    };

    const handleDropoffChange = (e) => {
        const value = e.target.value;
        setAutocompleteBox(true)
        setDropoffInput(value);
        handleAutocompleteFetch(value, 'dropoff');
    };

    console.log("autocompletePickupautocompletePickupautocompletePickup", autocompletePickup)
    console.log("pickupInput", pickupInput)

    const handleSubmit = async () => {
        setIsloding(true)
        const data={
            name:name,
            contactNum:contactNum,
            disabledAccess:disabledAccess,
            childAvailability:childAvailability,
            paymentMode:paymentMode,
            source:dropoffInput,
            destination:pickupInput,
            totalDistance:totalDistance
        }
        console.log(data, "data");
        const apiUrl=import.meta.env.VITE_BACKEND_LINK

        try {
            const response = await fetch(`${apiUrl}/user/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }finally{
            navigate(0)
            setIsloding(false)
        }
        

    }

    return (
        Isloding ? (
          <div className="absolute w-full h-screen top-0 flex justify-center items-center bg-white z-30">
            {/* You can customize your loading spinner here */}
          <div className='text-xl font-bold'>Loading...</div>
          </div>
        ) : (
        <div className='w-full h-screen absolute top-0 flex'>
            <div className='w-full flex justify-start items-start mt-0'>
                <div className="bg-white shadow-lg rounded-md z-20 p-6 space-y-4 w-[350px] h-screen max-w-[350px]:">
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-700 font-medium">Contact Number</label>
                            <input
                                type="number"
                                name="phone"
                                value={contactNum}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={(e) => setContactNum(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="pickUp" className="text-gray-700 font-medium">Pick-Up Point</label>
                            <input
                                type="text"
                                name="pickUp"
                                value={pickupInput}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handlePickupChange}
                            />
                            {/* Render autocomplete suggestions */}
                            {autocompletePickup.length > 0 && autocompletebox === true && (
                                <ul className="border border-gray-300 rounded-md mt-1 max-h-40 overflow-auto">
                                    {autocompletePickup.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handlePlaceChanged('pickup', suggestion)}
                                        >
                                            {suggestion.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="dropOff" className="text-gray-700 font-medium">Drop-Off Point</label>
                            <input
                                type="text"
                                name="dropOff"
                                value={dropoffInput}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={handleDropoffChange}
                            />
                            {/* Render autocomplete suggestions */}
                            {autocompleteDropoff.length > 0 && (
                                <ul className="border border-gray-300 rounded-md mt-1 max-h-40 overflow-auto">
                                    {autocompleteDropoff.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handlePlaceChanged('dropoff', suggestion)}
                                        >
                                            {suggestion.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {totalDistance && totalDuration && (<div className="space-y-4">
                            <div className="flex flex-col">
                                <div>Distance : {totalDistance} Km</div>
                                <div>Approximately Time : {totalDuration}</div>
                            </div>
                        </div>
                        )}

                        <div className="space-y-4">
                {/* Special Options */}
                <div className="flex flex-col">
                    <label htmlFor="specialOption" className="text-gray-700 font-medium">Special Options</label>
                    <div className="flex flex-col space-y-2 mt-1">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="disabledAccess"
                                checked={disabledAccess}
                                onChange={(e) => setDisabledAccess(e.target.checked)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-gray-700">Disabled Access</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="childAvailability"
                                checked={childAvailability}
                                onChange={(e) => setChildAvailability(e.target.checked)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-gray-700">Child Availability</label>
                        </div>
                    </div>
                </div>

                {/* Payment Mode */}
                <div className="flex flex-col">
                    <label htmlFor="paymentMode" className="text-gray-700 font-medium">Payment Mode</label>
                    <div className="flex flex-col space-y-2 mt-1">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMode"
                                value="Cash"
                                checked={paymentMode === 'Cash'}
                                onChange={(e) => setPaymentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label className="ml-2 text-gray-700">Cash</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMode"
                                value="Card"
                                checked={paymentMode === 'Card'}
                                onChange={(e) => setPaymentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label className="ml-2 text-gray-700">Card</label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                    <button
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
          
        
       
    )
    )
    // return (
    //     {Isloading ? (
    //       <div className="spinner">
    //         {/* You can customize your loading spinner here */}
    //         Loading...
    //       </div>
    //     ) : (
           
    //     )}
    //   );
}

export default Popbox;
