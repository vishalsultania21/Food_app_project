import React, { useState, useEffect } from 'react';

function OfferBannerWithTimer() {
    const [secondsLeft, setSecondsLeft] = useState(923);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSecondsLeft((t) => t <= 0 ? 0 : t - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-between py-2 px-5 m-4 rounded-lg text-white shadow-lg">
            
            {/* Left Side: Text */}
            <div className="text-left">
                <h3 className="m-0 text-base font-extrabold">
                    ⚡ Flash Sale!
                </h3>
            </div>
            <div className="text-center"> 
                <p className="m-0 text-2xl opacity-90">
                    50% off on Starters
                </p>
            </div>

            {/* Right Side: Timer */}
            <div className="text-xl font-bold bg-orange-300 bg-opacity-20 py-1 px-2 rounded-md min-w-[100px] text-center">
                {formatTime(secondsLeft)}
            </div>

        </div>
    );
}

export default OfferBannerWithTimer;
