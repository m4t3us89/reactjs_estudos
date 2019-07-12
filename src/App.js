import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes'
import './styles.css'

export default () => (
    <div className="App">
      <Header />
      <main className="content"><Routes /></main>
      <Footer />
    </div>
)


