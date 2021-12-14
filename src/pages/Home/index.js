import React from 'react'
import Directory from '../../components/Directory'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./style.scss"

const Home = props => {
    return (
        <section className='homepage'>
            <Header {...props}/>
            <Directory/>
            <Footer/>
        </section>
        
    )
}

export default Home