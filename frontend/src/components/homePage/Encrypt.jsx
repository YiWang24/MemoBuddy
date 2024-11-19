import React from 'react'

const Encrypt = () => {
    return (
        <section className='px-12 py-16 mb-10'>
            <h1 className='text-3xl md:text-5xl font-semibold text-center mb-14'>End to End Encryption</h1>
            <div className='grid grid-cols-2 w-[80vw] mx-auto items-center gap-20'>
                {/* left */}
                <div className='text-center'>
                    <p className='text-lg'>Memobuddy ensures complete privacy with end-to-end encryption.
                        This advanced security feature guarantees that only you have
                        access to your entries. From the moment you type your thoughts,
                        they are encrypted and stored securely, making it impossible for
                        anyone, even us, to read them. . Enjoy peace of mind knowing that
                        your private moments and thoughts are always secure and accessible
                        only to you with your unique password.</p>
                </div>
                {/* right */}
                <div className='flex justify-center items-center'>
                    <img src='https://c.animaapp.com/2oLABxhm/img/image-4.png' className='' alt='encryption'></img>
                </div>
            </div>

        </section>
    )
}

export default Encrypt
