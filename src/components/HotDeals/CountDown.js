import { useEffect, useState } from "react";

function CountDown() {


    const [expiryTime, setExpiryTime] = useState("30 dec 2022 15:30:25");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );

    const countdownTimer = () => {

        const timeInterval = setInterval(() => {

            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        countdownTimer();
    });

    return (
        <div className="row">
            <div className="col-sm-6">
                <h4 className="text-center font-bold text-2xl mb-5 text-orange-600">Deal Of The Month</h4>
                <div className="btn-group my-3">
                    {expiryTime !== false ?
                        <div className="grid grid-cols-4 gap-6 justify-center items-center text-center">
                            <div className="bg-white rounded-full p-6 shadow">
                                <button type="button" className="font-bold text-4xl text-orange-500">{countdownTime.countdownDays} </button>
                                <p className="font-medium text-orange-600 text-sm">Days</p>
                            </div>
                            <div className="bg-white rounded-full p-6 shadow">
                                <button type="button" className="font-bold text-4xl text-orange-500">{countdownTime.countdownHours} </button>
                                <p className="font-medium text-orange-600 text-sm">Hours</p>
                            </div>
                            <div className="bg-white rounded-full p-6 shadow">
                                <button type="button" className="font-bold text-4xl text-orange-500 ">{countdownTime.countdownMinutes} </button>
                                <p className="font-medium text-orange-600 text-sm">Minutes</p>
                            </div>
                            <div  className="bg-white rounded-full p-6 shadow">
                                <button type="button" className="font-bold text-4xl text-orange-500">{countdownTime.countdownSeconds} </button>
                                <p className="font-medium text-orange-600 text-sm">Seconds</p>
                            </div>
                        </div>
                        : <p>Deal has been Expired</p>}
                </div>
                <div>
                    <button type="" className="btn btn-outline mt-10 px-10 font-bold text-orange-500">SHOP NOW</button>
                </div>
            </div>
        </div>
    )

}
export default CountDown;