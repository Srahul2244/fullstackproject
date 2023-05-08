import React from 'react'
import { Nav } from "./Navbar"
import { Card } from './Card'
import { Footer } from "./Footer"
import Cards from './Cards'
import Services from './Land'
import { Landing } from './Landing'
import { Landings } from './LandingBody/Landing'


const Main = () => {
    return (
        <div>
            <Landing />
            <Landings />
            <Services />
            <Cards />
            <Card />

        </div>
    )
}

export default Main
