import { useState } from "react";

function useReview() {
    const data = {
        desc: `Using CVC8.0 digital noise reduction technology
        The latest TWS binaural stereo stereo Bluetooth headset with the 5.1 chip gives you very efficient wireless performance.
        The 5.1 chip manages battery life very well
        It adopts Bluetooth V5.1 chip, 10m connection distance, stable performance, high transmission, low consumption and strong compatibility.`
    }
    const [review, setReview] = useState(data)
    return { review, setReview }
}

export default useReview