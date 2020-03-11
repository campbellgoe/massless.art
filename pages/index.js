import Head from 'next/head';
const ExternalLink = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer noopener">{children}<img src="external-link.png" style={{width: '1em', verticalAlign: 'bottom', margin: '0 4px'}}></img></a>;
export default () => (
  <>
    <Head>
      <title>MASSLESS.art</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>

    <div className="top-bar" />
    <div className="right-bar">
      <h1 className="title"><span className="title-start">MASSLESS</span>.<span className="title-end">art</span></h1>
    </div>
    <div className="diagonal-bar"></div>
    <main>
      <section>
        <h2>Welcome to MASSLESS.art, an ermergence of art, out of my programming adventures.</h2>
        <p>I am a programmer dreaming of becoming a digital nomad. Check out my portfolio at <ExternalLink href="http://georgecampbell.co.uk">georgecampbell.co.uk</ExternalLink></p>
      </section>
      <section>
        <img src="/dichotomy00.png"/>
        <h3><ExternalLink href="https://dichotomy.now.sh">Dichotomy</ExternalLink> is about the uncertainty between background & foreground, black & white, ying & yang, and what lives in between.
        The shimmering of an image just loading, the void is always hiding behind veils of meaning, objects, and the known.</h3>
      </section>
      <section>
        <img src="/flowering00.png"/>
        <h3><ExternalLink href="https://flowering.now.sh">Flowering</ExternalLink> is about the proliferation of new forms through the imbalance between symmetry & asymmetry.</h3>
      </section>
      <section>
        <img src="/interflection00.png"/>
        <h3><ExternalLink href="https://massless.art">Interflection</ExternalLink> consists of denser & denser spirals of different colours, weaving a moire fractal pattern. Signal is found from the noise through interference.</h3>
        <img src="/interflection01.png"/>
      </section>
      <section>
        <p>Main content of page goes here</p>
      </section>
      <section>
        <p>Main content of page goes here</p>
      </section>
      
    </main>


    <style jsx>{`
      .top-bar {
        height: calc(48px * 3);
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
      @media only screen and (min-width: 1200px) {
        main section {
          margin-right: calc(440px + 48px);
        }
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        overflow-x: hidden;
        font-family: sans-serif;
      }
    `}</style>
  </>
);