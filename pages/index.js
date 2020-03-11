import Head from 'next/head';

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
        <h2>Welcome to MASSLESS.art, a collection of art pieces which emerged from my programming adventures.</h2>
      </section>
      <section>
        <img src="/dichotomy00.png"/>
      </section>
      <section>
        <p>Main content of page goes here</p>
      </section>
      <section>
        <p>Main content of page goes here</p>
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
        margin-right: calc(440px + 48px);
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