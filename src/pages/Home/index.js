import React from 'react'
import Directory from '../../components/Directory'
import Footer from '../../components/Footer'
import "./style.scss"

const Home = props => {
    return (
        <section className='homepage'>
            <Directory/>
            <Footer/>
        </section>
        
    )
}

export default Home