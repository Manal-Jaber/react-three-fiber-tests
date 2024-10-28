// PreventScrollNavigation.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PreventScrollNavigation() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = (event) => {
            // Prevent horizontal scrolling but allow vertical scrolling
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                event.preventDefault();
            }
        };

        // Add event listener for wheel (scroll) events
        window.addEventListener('wheel', handleScroll, { passive: false });

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [navigate]);

    return
}

export default PreventScrollNavigation;
