export default function Carousel({ photo, onClose, next, back, carousel }) {
  console.log("carousel   - visible: ", carousel)
  if (!carousel) return null
  return (
    <>
      <div className="carousel-overlay">
        <img
          className="displayimage"
          src={"http://isabellebidou.com/images/" + photo.photoName}
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
