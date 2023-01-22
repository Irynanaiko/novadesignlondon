import React from 'react';
import '../../scss/icons.scss';

export default function HeartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
            className="icon"
        >
            <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
        </svg>
    );
}