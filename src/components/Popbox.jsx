import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserCenter,setCurrentUser,setDropup,setPickUp } from '../reduxFiles/inputSlice';

function Popbox() {
    const dispatch = useDispatch();
    const [autocompletePickup, setAutocompletePickup] = useState([]);
    const [autocompleteDropoff, setAutocompleteDropoff] = useState([]);
    const [autocompletebox, setAutocompleteBox] = useState(false);
    const [pickupInput, setPickupInput] = useState('');
    const [dropoffInput, setDropoffInput] = useState('');

    const handlePlaceChanged = (type, place) => {
        console.log("first",place.geometry)

        if (place && place.geometry) {
            const location = {
                lat: place?.geometry?.location?.lat,
                lng: place?.geometry?.location?.lng,
            };
            console.log("type",type)

            if (type === 'pickup') {
                setPickupInput(place.description)
                setAutocompletePickup(place.predictions || []);
                console.log(location,"locationlocation")
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

        console.log("inside ",autocompletebox)

    };

    const handleAutocompleteFetch = async (input, type) => {
        const apiKey = import.meta.env.REACT_APP_MAPS_API_KEY; // Replace with your actual API key
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

    console.log("autocompletePickupautocompletePickupautocompletePickup",autocompletePickup)
    console.log("autocompletebox",autocompletebox)

    const handleSubmit = async()=>{

    }

    return (
        <div className='w-full h-screen absolute top-0 flex'>
            <div className='w-full flex justify-start items-start mt-0'>
                <div className="bg-white shadow-lg rounded-md z-20 p-6 space-y-4 w-[350px] h-screen max-w-[350px]:">
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-700 font-medium">Contact Number</label>
                            <input
                                type="number"
                                name="phone"
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
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
                            {autocompletePickup.length > 0 && autocompletebox===true && (
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



                        <div className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="specialOption" className="text-gray-700 font-medium">Special Options</label>
                <div className="flex flex-col space-y-2 mt-1">
                    <div className="flex items-center">
                        <input type="checkbox" name="specialOption" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-gray-700">Disabled Access</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="specialOption" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-gray-700">Child Availability</label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="paymentMode" className="text-gray-700 font-medium">Payment Mode</label>
                <div className="flex flex-col space-y-2 mt-1">
                    <div className="flex items-center">
                        <input type="radio" name="paymentMode" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label className="ml-2 text-gray-700">Cash</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="paymentMode" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <label className="ml-2 text-gray-700">Card</label>
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition" onClick={handleSubmit}>
                    Submit
                </button>
            {/* </div> */}
        </div>
    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popbox;
