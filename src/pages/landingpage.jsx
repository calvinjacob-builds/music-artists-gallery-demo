import { Link } from "react-router-dom";
import React from "react";
import {logo} from "../assets"

export default function LandingPage() {
  return (
    <main>
      <section className="groupIntro">
        <article className="introText">
          <h1>Music Artists' Gallery</h1>
          <p>Discover artists across indie, pop, R&amp;B and rock. Open a featured profile to find music on YouTube or try an event booking in this portfolio demo.</p>

          <div className="exAndSuButton">
            <Link to="/artists" className="btn-explore">Explore</Link>
            <Link to="/about" className="btn-HomeSignup">About MusicaGB</Link>
          </div>
        </article>

        <aside className="homeLogo">
         <img src={logo} alt="logo" className="logo"/>
        </aside>
      </section>
    </main>
  );
}