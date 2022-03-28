import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Gunpla Airbrushing Guide</title>
      </Helmet>

      <Layout>
        <div className="container">
          <h1 className="title has-text-centered">Gunpla Airbrushing Guide</h1>

          <StaticImage className="level-item mb-4" src="../images/index_banner.jpg" placeholder="blurred" />

          <p>I created this website both to practice web design and to share a book I found to be helpful. I hope it will be similarly helpful to others even buried under JPEG artifacts. But this is blatant copyright infringement, so read it before it gets DMCAed.</p>
          <br />
          <p>Disclaimer: the painting style this book teaches is at least a decade out of date. Back then, hobby air compressors were weak and paints/thinners were basic, forcing modelers to spray 4+ coats of overly thinned paint. Nowadays, unless you're shooting for a complex paint job, you don't have to do that. <Link to="/article">I recommend reading this Hobby Japan article to get an idea of how things have changed.</Link></p>
        </div>
      </Layout>
    </div>
  );
}
