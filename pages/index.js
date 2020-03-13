import Head from 'next/head';
import ExternalLink from '../components/SVGs/ExternalLink';
export default () => {
  return (
    <>
      <Head>
        <title>MASSLESS.art</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffdb57" />
        <meta
          name="description"
          content="MASSLESS.art is a website displaying the art that has emerged from my programming adventures."
        />
      </Head>

      <header className="top-bar" />
      <div className="right-bar">
        <h1 className="title"><span className="title-start">MASSLESS</span>.<span className="title-end">art</span></h1>
      </div>
      <div className="diagonal-bar"></div>
      <main>
        <section>
          <h2>Welcome to MASSLESS.art, an emergence of art, out of my programming adventures.</h2>
          <p>I am a programmer dreaming of becoming a digital nomad. Check out my portfolio at <ExternalLink href="http://georgecampbell.co.uk">georgecampbell.co.uk</ExternalLink></p>
        </section>
        <section>
          <div>
            <img src="/flowering00.png" />
            <h3 className="flat-bottom"><ExternalLink href="https://flowering.now.sh">Flowering</ExternalLink> is about the proliferation of new forms through the imbalance between symmetry & asymmetry.</h3>
          </div>
        </section>
        <section>
          <div>
            <img src="/dichotomy00.png" />
            <h3 className="flat-bottom"><ExternalLink href="https://dichotomy.now.sh">Dichotomy</ExternalLink> is about the uncertainty between background & foreground, black & white, ying & yang, and what lives in between.
          The shimmering of an image just loading, the void is always hiding behind veils of meaning, objects, and the known.</h3>
          </div>
        </section>
        <section>
          <div>
            <h3><ExternalLink href="https://interference.now.sh">Interference</ExternalLink> was made while experimenting with GLSL shaders in a three.js context.</h3>
            <img src="/interference00.png" />
          </div>
        </section>
        <section>
          <div>
            <h3><ExternalLink href="https://energy.now.sh">Energy</ExternalLink> visualises gravitational attraction & the dances that emerge from these mathematical models.</h3>
            <img src="/energy00.png" />
          </div>
          <div>
            <img src="/energy01.png" />
            <img src="/energy02.png" />
          </div>
        </section>
        <section>
          <div>
            <h3><ExternalLink href="https://massless.now.sh">Massless</ExternalLink> is a slowly changing animation of a mesh of orbs which repel and attract eachother at varying distances, with interesting effects emerging.</h3>
            <img src="/massless00.png" />
          </div>
        </section>
        <section>
          <div>
            <img src="/wavey01.png" />
            <h3><ExternalLink href="https://wavey.now.sh">Wavey</ExternalLink> shows the conflict between chaos and order, as patterns emerge from overlapping waves of dancing sprites.</h3>
          </div>
          <div>
            <img src="/wavey02.png" />
          </div>
        </section>
        <section>
          <div>
            <h3><ExternalLink href="https://paintgun.now.sh">Paintgun</ExternalLink> is an interactive canvas where you can paint the ground with colours.</h3>
            <img src="/paintgun00.png" />
          </div>

        </section>
        <section>
          <div>
            <img src="/facebook-page.png" />
            <h3 className="flat-bottom"><ExternalLink href="https://www.facebook.com/massless.art">@massless.art</ExternalLink> on Facebook is where you can find more of my art. It has videos and stills of my artwork.</h3>
          </div>
        </section>
      </main>
      <footer className="bottom-bar">
        <span>Copyright George Campbell © 2020</span>
      </footer>

      <style jsx>{`
      
      .flat-bottom {
        margin-bottom: 0;
      }
      .top-bar {
        height: calc(48px * 3);
        width: 100%;
        background-color: rgba(255,200,0,0.66);
      }
      .bottom-bar {
        height: calc(48px * 12);
        width: 100%;
        background-color: rgba(255,200,0,0.66);
      }
      .right-bar {
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        width: auto;
        background-color: rgba(255,0,0,0.33);
      }
      .title {
        font-family: sans-serif;
        position: relative;
        margin: 0;
        top: 0;
        right: 0;
        font-size: 48px;
        padding: 48px;
      }
      .title-end {
        color: white;
      }
      .diagonal-bar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 50vw;
        background-color: rgba(0, 137, 255, 0.2);
        transform: skew(50deg);
      }
      main section {
        position: relative;
        background-color: white;
        border: 8px solid black;
        margin: 48px;
        margin-right: 48px;
        padding: 32px;
        border-radius: 1px;
      }
      main section img {
        width: 100%;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      footer {
        position: relative;
        z-index: -1;
      }
      footer span {
        position: absolute;
        bottom: 48px;
        right: 48px;
      }
      @media only screen and (min-width: 1200px) {
        main section {
          margin-right: calc(440px + 48px);
        }
      }
      @media only screen and (min-width: 1500px) {
        main section div {
          display: flex;
          justify-content: space-between;
        }
        main section div img {
          width: 50%;
        }
        main section div h3 {
          width: 500px;
          margin: 0;
          padding: 48px;
        }
       
    `}</style>
      <style jsx global>{`
      ::-moz-selection {
        color: black;
        background-color: yellow;
      }

      ::selection {
        color: black;
        background-color: yellow;
      }
      body {
        margin: 0;
        overflow-x: hidden;
        font-family: sans-serif;
      }
      a {
        color: #83a0ff;
      }
      a:hover {
        color: #8aa5f3;
      }
      a:visited {
        color: #e683ff;
      }
      a:active {
        color: #ff83a0;
      }
    `}</style>
    </>
  )
};