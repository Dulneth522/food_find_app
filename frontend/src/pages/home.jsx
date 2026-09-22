import React from 'react'
import Navigation from '../components/navigation'
function home() {
    return (
        <>
            <Navigation/>
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src="/foodimg.jpg"
                    alt="Delicious food"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold">
                        Find Your Favorite Food
                    </h1>
                </div>
            </div>

        
        </>
    )
}

export default home
