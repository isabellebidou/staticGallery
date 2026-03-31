import { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Carousel from "./components/carousel"
import Gallery from "./components/gallery"
import data from "./assets/data.json"

import "./App.css"
import "./Portrait.css"

function App() {
  const [photo, setPhoto] = useState(null)
  const [carousel, setCarousel] = useState(false)

  const handleSelectPhoto = async (photo) => {
    setCarousel(true)
    setPhoto({
      ...photo,
    })
  }
  const handleNext = async () => {
    const index = data.findIndex((p) => p.photoId === photo.photoId)
    if (index < data.length - 1) handleSelectPhoto(data[index + 1])
  }
  const handleBack = async () => {
    const index = data.findIndex((p) => p.photoId === photo.photoId)
    if (index >= 1) handleSelectPhoto(data[index - 1])
  }
  useEffect(() => {
    if (photo) {
      setCarousel(true)
    }
  }, [photo])
  const handleClose = async () => {
    console.log("unselect")
    setCarousel(false)
    setPhoto(null)
  }

  return (
    <>
      <Header />
      <Gallery data={data} onSelectPhoto={handleSelectPhoto} />
      <Carousel
        photo={photo}
        onClose={handleClose}
        next={handleNext}
        back={handleBack}
        carousel={carousel}
      />
      <Footer />
    </>
  )
}

export default App
