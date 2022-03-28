import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from "gatsby-plugin-image"

export default function Part_A_A() {
  return (
    <div>
      <Layout>
        <div className="container">
          <h1 className="title has-text-centered">What's an airbrush?</h1>

          <p>An airbrush is a painting tool that sprays paint in a fine mist using the pressure of compressed air. There are many kinds of airbrushes, so let's take a look at some.</p>        

          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_00.jpg" placeholder="blurred" />
          </div>

          <p>The <b>Procon BOY WA Double Action 0.3mm airbrush</b> is a typical modeling airbrush. Press the button trigger on the top to release air, then pull it back to spray paint. It's called "double action" because you have to do two actions to paint.</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_01.jpg" placeholder="blurred" />
          </div>

          <p>The <b>Procon BOY WA Trigger Type Double Action airbrush</b> replaces the button-style trigger with a pistol-style trigger. It can be used for long painting sessions without tiring your finger as much. The paint cup is detachable.</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_02.jpg" alt="Procon BOY SAe Single Action" placeholder="blurred" />
          </div>

          <p>The <b>Procon BOY SAe Single Action airbrush</b> sprays air and paint simultaneously when you press the button. Since you only need to do one action to paint, it's called a "single action". Use the dial in the middle to adjust the quantity of paint being sprayed.</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_03.jpg" alt="Pro Spray Series" placeholder="blurred" />
          </div>

          <p>The <b>Pro Spray Series</b> are simple siphon-feed airbrushes that run off cans of compressed air. They suck up paint from inside the attached bottle and spray it out the nozzle. They're rather affordable, so they're useful if you want to get some painting experience before buying a proper airbrush. There's both a basic version and a deluxe version that includes a stand and a spiral hose.</p>
          <br />
          <p>Choose your airbrush based on your needs. The usual recommendation is a double action airbrush because it makes complex paint jobs possible, but if all you want is to spray solid coats of paint then a single action airbrush will do the job.</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_04.jpg" alt="Procon BOY WA Platinum 0.3 Ver.2 Double Action" placeholder="blurred" />
          </div>

          <p>I'll be using a <b>Procon BOY WA Platinum 0.3 Ver.2 Double Action airbrush</b> for this guide. It has two special features to help control the amount of paint being sprayed.</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_05.jpg" alt="Using needle stopper." placeholder="blurred" />
          </div>

          <p>The needle stopper at the back regulates how much paint is sprayed. Tighten it to reduce the amount (helpful for gradients or small parts) or loosen it to increase it (helpful for broad surfaces).</p>
          
          <div className="level-item py-3">
            <StaticImage className="box" src="../../images/paa_06.jpg" alt="Using the air adjust system." placeholder="blurred" />
          </div>

          <p>The air adjust system at the front regulates how much air flows through the brush. Press the trigger to release air, then spin the screw to make fine adjustments in air pressure.</p>
          <br />
          <p>If your airbrush has its own special features, try to use them. You already paid for them, after all.</p>
          
          <div className="level-item pt-3">
            <StaticImage className="box" src="../../images/paa_07.jpg" alt="Airbrush cross section." placeholder="blurred" />
            <div className="ml-6">
              <ol>
              <li>Needle Cap</li>
              <li>Nozzle Cap</li>
              <li>Nozzle</li>
              <li>Paint Cup</li>
              <li>Paint Cup Cap</li>
              <li>Trigger</li>
              <li>Needle</li>
              <li>Needle Chuck</li>
              <li>Needle Spring</li>
              <li>Needle Spring Case</li>
              <li>Needle Chuck Screw</li>
              <li>Needle Stopper</li>
              <li>Handle</li>
              <li>Body</li>
              <li>Air Adjustment Screw</li>
              </ol>
            </div>
          </div>
          
          <p className="is-size-7 has-text-centered pb-3">When you push the trigger, air starts flowing through the airbrush's interior.<br /> When you pull the button back, the needle moves back with it, opening a gap that paint can flow through to reach the nozzle.<br /> The pressure of the air will push the paint out the nozzle in the form of a fine mist.</p>

          <p>To conclude, here's a teardown and a cross section of my airbrush. Most airbrushes share the same basic components, regardless of whether they're single or double action, so the listed components should be in your airbrush too (barring uncommon parts like the air adjustment screw). You don't need to know the names of these components to use your airbrush, but it's helpful knowledge when you're maintaining it.</p>
        </div>

      </Layout>
    </div>
  );
}