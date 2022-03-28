import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from "gatsby-plugin-image";

export default function Part_B_A() {
  return (
    <div>
      <Layout>
      <div className="container">
        <h1>Why start with shading?</h1>

        <p>Let's master your airbrush control first. In STEP2, I'll mainly be explaining "panel lining" and "shading" that you can use to add shadow color to your GunPla to produce a feeling of solidity.</p>
        
        <StaticImage src="../../images/pba_01.jpg" placeholder="blurred" />
        
        <p>"Shading" is an airbrushing technique. It's a work where, On the part's edges and grooves, you thinly spray with an airbrush shadow colors to produce a feeling of solidity. There are many places where you can tough up an already painted Gunpla, but here we'll paint on a gunpla in a simply assembled state (straightbuilt). Even if you make a mistake and spray too much, you can easily clean it off with thinner. Anyways, let's just challenge it without treating it like a big deal.</p>

        <StaticImage src="../../images/pba_02.jpg" placeholder="blurred" />

        <p>All you need is smoke gray, or some sort of clear gray.</p>

        <StaticImage src="../../images/pba_03.jpg" placeholder="blurred" />

        <p>It's also great practice for getting an intuitive grasp of the effect of distance. Shading also encourages more variety of effect compared to regular coats, which can be useful knowledge for later.</p>

        <p>Much less effort than a full paint job, looks just as good, and can be done on an already assembled kit.</p>


      </div>
      </Layout>
    </div>
  );
}