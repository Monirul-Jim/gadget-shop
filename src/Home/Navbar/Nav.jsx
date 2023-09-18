import { useEffect, useState } from "react";


const Nav = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        // Function to format the time with the international time zone
        const formatTime = () => {
            const options = {
                timeZone: "Asia/Dhaka",// Replace with the desired time zone
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            };

            const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
                new Date()
            );
            setTime(formattedTime);
        };

        // Call the formatTime function to set the initial time
        formatTime();

        // Update the time every second
        const intervalId = setInterval(formatTime, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);







    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false, // Disable automatic display
        }, 'google_translate_element');
    }

    // Function to open the language dropdown
    const openTranslateDropdown = () => {
        const widget = window.google.translate.TranslateElement.getInstance();
        if (widget) {
            widget.showBanner();
            widget.show();
        }
    }


    return (
        <div>
            <div className='flex justify-end' id="google_translate_element">

                <button onClick={openTranslateDropdown}></button>
                <p className="mr-4 text-2xl">International Time: {time}</p>
            </div>
        </div>
    );
};

export default Nav;