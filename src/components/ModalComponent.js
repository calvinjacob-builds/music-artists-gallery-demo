import React, { useRef, useState } from "react";

function BookingPreview({ artist, onCancel }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const now = new Date();
  const today = [now.getFullYear(), String(now.getMonth()+1).padStart(2,"0"), String(now.getDate()).padStart(2,"0")].join("-");
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    if (data.end <= data.start || !data.venue.trim()) {
      setError("Enter a venue and choose an end time after the start time.");
      return;
    }
    setPreview(data);
  }
  if (preview) return <section aria-live="polite"><h3>Booking preview</h3><p>{artist} at {preview.venue} · {preview.date}, {preview.start}–{preview.end}</p><p>Demo only. No reservation was sent.</p><button onClick={onCancel} className="btn btn-light">Back to artist</button></section>;
  return <form onSubmit={submit} className="booking-demo"><h3>Try a booking</h3><p>Use a sample venue. Your preview stays in this window.</p>
    <label>Event date<input required type="date" name="date" min={today}/></label>
    <label>Start time<input required type="time" name="start"/></label>
    <label>End time<input required type="time" name="end"/></label>
    <label>Sample venue<input required name="venue" maxLength="100" placeholder="Campus auditorium"/></label>
    {error && <p role="alert">{error}</p>}
    <div><button className="btn btn-light">Preview booking</button> <button type="button" onClick={onCancel} className="btn btn-outline-light">Cancel</button></div>
  </form>;
}

export default function ModalComponent({ artist }) {
  const dialog = useRef(null);
  const [booking, setBooking] = useState(false);
  return <>
    <button type="button" className="btn btn-light btn-sm rounded-pill" aria-label={'More about ' + artist.name} onClick={() => dialog.current.showModal()}>More</button>
    <dialog ref={dialog} className="artist-dialog text-start" aria-label={artist.name} onClose={() => setBooking(false)}>
      <button className="btn-close btn-close-white float-end" aria-label="Close profile" onClick={() => dialog.current.close()} />
      <img src={artist.image} className="artist-image rounded-circle mb-3" alt="" />
      <h2>{artist.name}</h2>
      {booking ? <BookingPreview artist={artist.name} onCancel={() => setBooking(false)} /> : <>
        <p>{artist.description}</p><a className="link-light" href={artist.youtube} target="_blank" rel="noreferrer">Artist on YouTube</a>
        <h3 className="h5 mt-3">Find songs on YouTube</h3>
        <ul>{artist.songs.map(song => <li key={song.title}><a className="link-light" target="_blank" rel="noreferrer" href={'https://www.youtube.com/results?search_query=' + encodeURIComponent(artist.name + ' ' + song.title)}>{song.title}</a></li>)}</ul>
        <button className="btn btn-light" onClick={() => setBooking(true)}>Try demo booking</button>
      </>}
    </dialog>
  </>;
}
