import React from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Artists from "./pages/Artists";
import Indie from "./pages/Client/Genre/Indie";
import Pop from "./pages/Client/Genre/Pop";
import RnB from "./pages/Client/Genre/RnB";
import Rock from "./pages/Client/Genre/Rock";
import { logo } from "./assets";

const genres = { Indie, Pop, RnB, Rock };

function Browse({ Gallery }) {
  const [query, setQuery] = React.useState("");
  return <>
    <div className="px-3 pt-4"><label htmlFor="artist-search" className="text-white mb-1">Search this collection</label>
      <input className="form-control" id="artist-search" style={{maxWidth:420}} type="search" placeholder="Artist name or genre" value={query} onChange={event => setQuery(event.target.value)} />
    </div>
    <Gallery searchQuery={query.trim()} />
  </>;
}

export default function App() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return <>
    <nav className="custom-navbar demo-nav" aria-label="Main navigation">
      <Link className="wordmark" to="/">MusicaGB</Link>
      <Link to="/artists">Artists</Link>
      {Object.keys(genres).map(name => <Link key={name} to={'/Genre/' + name}>{name === 'RnB' ? 'R&B' : name}</Link>)}
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/artists" element={<Browse key="artists" Gallery={Artists} />} />
      {Object.entries(genres).map(([name, Gallery]) => <Route key={name} path={'/Genre/' + name} element={<Browse key={name} Gallery={Gallery} />} />)}
      <Route path="/about" element={<main className="container py-5"><div className="row align-items-center"><div className="col-md-5"><img className="img-fluid" src={logo} alt="MusicaGB" /></div><div className="col-md-7 text-white"><h1>About MusicaGB</h1><p>We built Music Artists’ Gallery as a team web development project connecting music discovery with event booking. Explore artists by genre, open a featured artist’s profile, and try planning a sample event.</p><p>This portfolio edition runs entirely in your browser. Booking previews are temporary and never sent to an artist.</p><Link className="btn btn-light" to="/artists">Browse artists</Link></div></div></main>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>;
}
