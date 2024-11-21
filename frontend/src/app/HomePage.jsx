import Banner from '@/components/homePage/Banner'
import Cost from '@/components/homePage/Cost'
import Encrypt from '@/components/homePage/Encrypt'
import Values from '@/components/homePage/Values'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Values></Values>
            <Cost></Cost>
            <Encrypt></Encrypt>
        </div>
    )
}

export default HomePage
