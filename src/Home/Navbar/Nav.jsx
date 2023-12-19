import { useEffect, useState } from "react";
import './nav.css'

const Nav = () => {


    useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false,
        }, 'google_translate_element');
    }
    const openTranslateDropdown = () => {
        const widget = window.google.translate.TranslateElement.getInstance();
        if (widget) {
            widget.showBanner();
            widget.show();
        }
    }


    return (
            <div className='flex justify-end' id="google_translate_element">

                <button className="translate" onClick={openTranslateDropdown}></button>
            </div>
    );
};

export default Nav;


// #google_translate_element {
//   }
//   #google_translate_element img{
//     display: none !important;
//   }
//   .goog-te-gadget-simple {
//     background-color: rgb(226 232 240 / var(--tw-bg-opacity)) !important ;   
//     border-left: 0px solid #D5D5D5  !important;
//     border-top: 0px solid #9B9B9B !important;
//     border-bottom: 0px solid #E8E8E8 !important;
//     border-right: 0px solid #D5D5D5 !important;
//     color: #E8E8E8 !important;
//   }
//   .goog-te-gadget {
//     color: white !important;
// }