import React from 'react'
import AboutBanner from './AboutBanner'
import AboutMain from './AboutMain'
import AboutChoose from './AboutChoose/AboutChoose'
import AboutTeam from './AboutTeam/AboutTeam'

export default function AboutPage() {
    return (
        <div className='about-page'>
            <AboutBanner />
            <AboutMain />
            <AboutChoose />
            <AboutTeam />
        </div>
    )
}
