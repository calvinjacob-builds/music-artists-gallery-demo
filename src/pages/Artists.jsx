import React from "react";
import { sombr, lana, taylor, drake, breent, tory, oned, queen, creed } from "../assets";
import ModalComponent from "../components/ModalComponent.js";
import "../style.css";

export default function Artists({searchQuery}) {
  const artists = [
    {
      artist_id: 1,
      name: "SOMBR",
      genre: "Alternative / Indie",
      image: sombr,
      description: "Explore SOMBR’s alternative and indie music.",
      youtube: "https://www.youtube.com/channel/UCXlqFQmZZOb78teSnAqhuwA",
      songs: [
        { title: "Back to Friends" },
        { title: "Long Way Home" },
        { title: "Dreaming" },
        { title: "Lost at Night" },
        { title: "Stay Awhile" },
      ],
    },
    {
      artist_id: 2,
      name: "Lana Del Rey",
      genre: "Alternative / Indie",
      image: lana,
      description: "Lana Del Rey blends cinematic pop with nostalgic Americana themes.",
      youtube: "https://www.youtube.com/@lanadelrey",
      songs: [
        { title: "Summertime Sadness" },
        { title: "Born to Die" },
        { title: "Young and Beautiful" },
        { title: "Video Games" },
        { title: "West Coast" },
      ],
    },
    {
      artist_id: 3,
      name: "Taylor Swift",
      genre: "Pop",
      image: taylor,
      description: "Taylor Swift is one of the most influential pop artists of her generation.",
      youtube: "https://www.youtube.com/@TaylorSwift",
      songs: [
        { title: "Shake It Off" },
        { title: "Love Story" },
        { title: "Blank Space" },
        { title: "Anti-Hero" },
        { title: "Cruel Summer" },
      ],
    },
    {
      artist_id: 4,
      name: "Drake",
      genre: "RNB/Rap",
      image: drake,
      description: "Drake is a Canadian artist known for blending rap, R&B, and pop styles.",
      youtube: "https://www.youtube.com/@drake",
      songs: [
        { title: "Hotline Bling" },
        { title: "One Dance" },
        { title: "God's Plan" },
        { title: "In My Feelings" },
        { title: "Passionfruit" },
      ],
    },
    {
      artist_id: 5,
      name: "Brent Faiyaz",
      genre: "RNB/Rap",
      image: breent,
      description: "Brent Faiyaz delivers soulful vocals and introspective R&B lyrics.",
      youtube: "https://www.youtube.com/@brentfaiyaz",
      songs: [
        { title: "Poison" },
        { title: "All Mine" },
        { title: "Clouded" },
        { title: "Gravity" },
        { title: "Dead Man Walking" },
      ],
    },
    {
      artist_id: 6,
      name: "Tory Lanez",
      genre: "RNB/Rap",
      image: tory,
      description: "Tory Lanez is known for his energetic blend of rap and R&B.",
      youtube: "https://www.youtube.com/@torylanez",
      songs: [
        { title: "Traphouse" },
        { title: "Say It" },
        { title: "Controlla" },
        { title: "Broke in a Minute" },
        { title: "The Color Violet" },
      ],
    },
  ];
  const filteredArtists = artists.filter(
    artist =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/*Featured Artists*/}
      <section className="container-fluid py-4" style={{ color: "white" }}>
        <h2 className="fw-bold mb-3">FEATURED ARTISTS</h2>
        <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded-3">
            <div className="carousel-item active">
              <img src={oned} className="d-block w-100" alt="Featured Artist 1" />
            </div>
            <div className="carousel-item">
              <img src={queen} className="d-block w-100" alt="Featured Artist 2" />
            </div>
            <div className="carousel-item">
              <img src={creed} className="d-block w-100" alt="Featured Artist 3" />
            </div>
          </div>
          <button aria-label="Previous featured artist" className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button aria-label="Next featured artist" className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/*For You Section*/}
      <section className="container-fluid py-4" style={{ color: "white" }}>
        <h3 className="fw-bold mb-4">FOR YOU</h3>
        <div className="row g-4">
          {filteredArtists.length === 0 && <p role="status">No matching featured artists.</p>}
          {filteredArtists.map((artist, index) => (
            <div key={index} className="col-md-6">
              <div className="card bg-dark text-white h-100 rounded-4 p-3">
                <div className="d-flex align-items-center">
                  <img
                    src={artist.image}
                    className="rounded-3 me-3"
                    style={{ width: "100px", height: "100px" }}
                    alt={artist.name}
                  />
                  <div>
                    <h5 className="fw-bold">{artist.name}</h5>
                    <p className="mb-1">{artist.genre}</p>
                    <p className="mb-1">HIT SONG: {artist.songs[0].title}</p>
                    <p>{artist.description}</p>
                  </div>
                </div>
                <div className="text-end">
                  <ModalComponent artist={artist} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
