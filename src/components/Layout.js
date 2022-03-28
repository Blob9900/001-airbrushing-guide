import React from 'react';
import { Helmet } from "react-helmet"
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.scss';


const Layout = ({ children }) => {
  return ( 
    <body>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>

      <Navbar />

      <main>
        <section className="section">
          { children }
        </section>
      </main>
      <hr />

      <Footer />
    </body>
     );
}
 
export default Layout;
