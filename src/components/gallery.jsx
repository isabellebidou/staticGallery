export default function Gallery({ data, onSelectPhoto }) {
  const BASE_URL = "https://ib-photo-gallery.s3.amazonaws.com/"
  return (
    <>
      <div className="maincontent">
        <div className="grid-container">
          {data.map((photo) => (
            <div className="tooltip" key={photo.photoId}>
              <div className="photothumbnail">
                <img
                  onClick={() => onSelectPhoto(photo)}
                  //src={`http://isabellebidou.com/images/${photo.photoThumbnail}`}
                  src={`${BASE_URL}${photo.photoThumbnail}`}
                  alt={photo.photoThumbnail}
                  loading="lazy"
                  width="200"
                />

                <span
                  className="tooltiptext"
                  onClick={() => onSelectPhoto(photo)}
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
