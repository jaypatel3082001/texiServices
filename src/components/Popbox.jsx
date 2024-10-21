import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDropup, setPickUp } from '../reduxFiles/inputSlice';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [passengerCount, setPassengerCount] = useState('');

    // State for radio buttons (Payment Mode)
    const [paymentMode, setPaymentMode] = useState('');

    useEffect(() => {
        setTotalDuration(inputs?.totalDuration)
        setTotalDistance(inputs?.totalDistance)


    }, [inputs?.totalDuration, inputs?.totalDistance])

    const handlePlaceChanged = (type, place) => {
        console.log("first", place)

        if (place && place) {
            const location = {
                lat: place?.lat,
                lng: place?.lon,
            };
            console.log("type", type)

            if (type === 'pickup') {
                setPickupInput(place.display_name);
                setAutocompletePickup([]);  // Clear the list after selection
                dispatch(setPickUp(location));
                setAutocompleteBox(false);
            } else if (type === 'dropoff') {
                setDropoffInput(place.display_name);
                setAutocompleteDropoff([]);  // Clear the list after selection
                dispatch(setDropup(location));
                setAutocompleteBox(false);
            }



            // Dispatch the location to update the map

        }

        console.log("inside ", autocompletebox)

    };

    const handleAutocompleteFetch = async (input, type) => {
        const apiKey = import.meta.env.VITE_AUTOCOMPLETE_API_KEY; // Replace with your actual API key
        // const url = `https://api.olamaps.io/places/v1/autocomplete?input=${input}&api_key=${apiKey}`;
        const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${input}&limit=10&countrycodes=au`;

        try {
            const response = await fetch(url, {
                method: "GET",
            });

            const data = await response.json();
            console.log("data:", data);

            if (type === 'pickup') {
                setAutocompletePickup(data || []);
            } else if (type === 'dropoff') {
                setAutocompleteDropoff(data || []);
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsloding(true);
        const data = {
            name: name,
            contactNum: contactNum,
            disabledAccess: disabledAccess,
            childAvailability: childAvailability,
            paymentMode: paymentMode,
            source: dropoffInput,
            destination: pickupInput,
            totalDistance: totalDistance,
            passengerCount: passengerCount,
        };

        console.log(data, "data");
        const apiUrl = import.meta.env.VITE_BACKEND_LINK;

        try {
            const response = await fetch(`${apiUrl}/user/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);

            // Show success toast
            toast.success("Form submitted successfully!");
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);

            // Show error toast
            toast.error("There was an error submitting the form.");
        } finally {
            setIsloding(false);
        }
    };


    return (
        Isloding ? (
          <div className="absolute w-full h-screen top-0 flex justify-center items-center bg-white z-30">
            {/* You can customize your loading spinner here */}
          <div className='text-xl font-bold'>Thank you for contacting us😀! our team will soon contact you👍</div>

          </div>
        ) : (
        <div className='w-full md:h-screen md:absolute mad:top-0 flex'>
          {/* <ToastContainer /> */}
            <div className='w-full flex md:justify-start md:items-start max-md:justify-center mt-0 max-md:bg-[#E2E4E8] max-md:py-10'>
                <div className="bg-white shadow-lg rounded-md z-20 p-6 space-y-3 w-[350px] h-screen max-w-[350px]:">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={(e) => setName(e.target.value)}
                                required
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
                                required
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
                                required
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
                                            {suggestion.display_name}
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
                                required
                            />
                            {/* Render autocomplete suggestions */}
                            {autocompleteDropoff.length > 0 && (
                                <ul className="border border-gray-300 rounded-md mt-1 max-h-40 overflow-auto">
                                    {autocompleteDropoff?.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handlePlaceChanged('dropoff', suggestion)}
                                        >
                                            {suggestion.display_name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {totalDistance && totalDuration && (<div className="space-y-4">
                            <div className="flex flex-col">
                                <div>Distance : {totalDistance} Km</div>
                                <div>Approximately Time : {totalDuration} Min</div>
                            </div>
                        </div>
                        )}

                        <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="paaasengerCount" className="text-gray-700 font-medium">Number of Passenger</label>
                            <input
                                type="text"
                                name="paaasengerCount"
                                value={passengerCount}
                                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                                onChange={(e) => setPassengerCount(e.target.value)}
                                required
                            />
                        </div>
                {/* Special Options */}
                <div className="flex flex-col">
                    <label htmlFor="specialOption" className="text-gray-700 font-medium">Special Options</label>
                    <div className="flex mt-1">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="disabledAccess"
                                checked={disabledAccess}
                                onChange={(e) => setDisabledAccess(e.target.checked)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-gray-700">Disabled</label>
                        </div>
                        <div className="flex items-center ml-4">
                            <input
                                type="checkbox"
                                name="childAvailability"
                                checked={childAvailability}
                                onChange={(e) => setChildAvailability(e.target.checked)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-gray-700">Child seat</label>
                        </div>
                    </div>
                </div>

                {/* Payment Mode */}
                <div className="flex flex-col">
                    <label htmlFor="paymentMode" className="text-gray-700 font-medium">Payment Mode</label>
                    <div className="flex space-y-0 mt-1 items-center">
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
                        <div className="flex items-center mx-3">
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
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMode"
                                value="Cab Charge"
                                checked={paymentMode === 'Cab Charge'}
                                onChange={(e) => setPaymentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label className="ml-2 text-gray-700">Cab Charge</label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                        <button
                            type="submit" // Change button type to submit
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                        >
                            Submit
                        </button>
                    </div>
            </div>
                    </div>
                    </form>
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
