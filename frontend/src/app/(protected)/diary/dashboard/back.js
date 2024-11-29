<div className='w-full grid grid-cols-3 gap-4'>
    {/* col1 */}
    <div className='flex flex-col justify-start space-y-4'>
        <div className='flex gap-2 items-center'>
            <p className='text-md font-semibold'>{weatherData.name}
            </p>
            <img className="h-[20px] w-[25px]"
                src={`https://flagcdn.com/144x108/${weatherData?.sys?.country.toLowerCase()}.png`}
                alt={`Flag of ${weatherData?.sys?.country}`}
            />
        </div>
        <div className='font-bold text-2xl'>
            <h2>{weatherData?.main?.temp} °C</h2>
        </div>
    </div>

    {/* col2 */}
    <div className='flex flex-col justify-center'>
        <div className='flex justify-center'>
            <img src="/wind.png" alt='windspeed' className='h-[35px] w-[35px]'></img>
        </div>
        <div className='flex flex-col justify-center'>
            <p className='flex justify-center'>Windspeed</p>
            <p className='flex justify-center'>{weatherData?.wind?.speed} m/s</p>
        </div>
    </div>
    <div>
        test
    </div>

</div>