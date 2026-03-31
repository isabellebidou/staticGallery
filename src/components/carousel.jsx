export default function Carousel({ photo, onClose, next, back, carousel }) {
  const BASE_URL = "https://ib-photo-gallery.s3.amazonaws.com/"
  if (!carousel) return null
  return (
    <>
      <div className="carousel-overlay">
        <img
          className="displayimage"
          //src={"http://isabellebidou.com/images/" + photo.photoName}
          src={BASE_URL + photo.photoName}
          alt="{photo.photoName}"
        />

        <div>
          <button className="back" onClick={back}>
            back
          </button>
          <button className="next" onClick={next}>
            next
          </button>
          <button id="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
      </div>
    </>
  )
}
