import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-contacts'>
                    <div>Contact us:</div>
                    <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.4695 10.4344C27.6828 10.2648 28 10.4234 28 10.6914V21.875C28 23.3242 26.8242 24.5 25.375 24.5H2.625C1.17578 24.5 0 23.3242 0 21.875V10.6969C0 10.4234 0.311719 10.2703 0.530469 10.4398C1.75547 11.3914 3.37969 12.6 8.95781 16.6523C10.1117 17.4945 12.0586 19.2664 14 19.2555C15.9523 19.2719 17.9375 17.4617 19.0477 16.6523C24.6258 12.6 26.2445 11.3859 27.4695 10.4344ZM14 17.5C15.2688 17.5219 17.0953 15.9031 18.0141 15.2359C25.2711 9.96953 25.8234 9.51016 27.4969 8.19766C27.8141 7.95156 28 7.56875 28 7.16406V6.125C28 4.67578 26.8242 3.5 25.375 3.5H2.625C1.17578 3.5 0 4.67578 0 6.125V7.16406C0 7.56875 0.185937 7.94609 0.503125 8.19766C2.17656 9.50469 2.72891 9.96953 9.98594 15.2359C10.9047 15.9031 12.7312 17.5219 14 17.5Z" fill="white" />
                        </svg>
                        <Link to='mailto:novadesignslondon@gmail.com' >novadesignslondon@gmail.com</Link>
                    </div>
                    <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_13_35)">
                                <path d="M26.9828 1.34542L21.2953 0.0329156C20.6774 -0.109272 20.043 0.213384 19.7914 0.793072L17.1664 6.91807C16.9367 7.45401 17.0899 8.08292 17.5438 8.44932L20.8578 11.1618C18.8891 15.3564 15.4492 18.8454 11.1672 20.8524L8.45471 17.5384C8.08284 17.0845 7.4594 16.9314 6.92346 17.161L0.798458 19.786C0.213302 20.0431 -0.109355 20.6774 0.0328328 21.2954L1.34533 26.9829C1.48205 27.5735 2.00705 28.0001 2.62502 28.0001C16.6305 28.0001 28 16.6524 28 2.6251C28 2.0126 27.5789 1.48213 26.9828 1.34542Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_13_35">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Link to='tel:+447843303975 '>+447843303975</Link>
                        <div></div>
                    </div>

                </div>

                <div className='footer-menu'>

                </div>

                <div className='footer-following'>

                </div>

            </div>
        </div>
    )
}

export { Footer };