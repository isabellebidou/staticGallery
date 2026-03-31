export default function Gallery({ data, onSelectPhoto }) {
  return (
    <>
      <div className="maincontent">
        <div className="grid-container">
          {data.map((photo, i) => (
            <div className="tooltip">
              <div className={`photothumbnail`} key={i}>
                <img
                  onClick={() => onSelectPhoto(photo)}
                  src={
                    "http://isabellebidou.com/images/" + photo.photoThumbnail
                  }
                  alt={photo.photoThumbnail}
                />
                <span
                  className="tooltiptext"
                  onClick={() => onSelectPhoto(photo)}
                  src={
                    "http://isabellebidou.com/images/" + photo.photoThumbnail
                  }
                >
                  {[photo.photoPlace, photo.photoCountry, photo.photoComments]
                    .filter((t) => t && t.trim() !== "")
                    .join(" ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
