import React from "react"
import imageOne from "assets/images/screen.png"
import imageTwo from "assets/images/screen.png"
import imageThree from "assets/images/screen.png"

import leftIcon from "assets/images/left.png"
import rightIcon from "assets/images/right.png"
import carouselDot from "assets/images/carousel-dot.png"

import carouselItem from "assets/images/carouselItem.png"

import "./style.scss"

const CCarousel = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(0)
  const [slideOrder, setSlideOrder] = React.useState(["s4", "s5", "s1", "s2", "s3"])
  const [slideStyles, setSlideStyles] = React.useState({})

  const rotate = (slides) => {
    const [s1, s2, s3, s4, s5] = slides
    setSlideStyles({
      [s1]: { transform: "translateX(-80rem)", opacity: 0 },
      [s2]: { transform: "translateX(-40rem)", opacity: 1 },
      [s3]: { transform: "translateX(0)", opacity: 1 },
      [s4]: { transform: "translateX(40rem)", opacity: 1 },
      [s5]: { transform: "translateX(80rem)", opacity: 0 },
    })
    setSlideOrder(slides)
  }

  // rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2]
  const rotateLeft = (spaces = 1) => {
    const s = slideOrder.map((_, i) => slideOrder[(i + spaces) % slideOrder.length])

    setSelectedIdx((selectedIdx + spaces) % 5)
    rotate(s)
  }

  // rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]
  const rotateRight = (spaces = 1) => {
    const s = slideOrder.reduce((result, slide, i) => {
      result[(i + spaces) % slideOrder.length] = slide
      return result
    }, [])

    setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5))
    rotate(s)
  }

  const handleDotClick = (idx) => {
    if (idx > selectedIdx) {
      rotateLeft(idx - selectedIdx)
    } else if (idx < selectedIdx) {
      rotateRight(selectedIdx - idx)
    }
  }

  return (
    <div className="carousel-component w-100">
      <div className="carousel-wrap">
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={() => rotateLeft()}>
            <img src={leftIcon} />
          </button>
          <ul className="carousel-slide-list">
            {slides.map((slide, i) => (
              <CarouselSlideItem
                key={slide.id}
                slide={slide}
                style={slideStyles[`s${slide.id}`]}
                active={selectedIdx === i}
                className={`carousel-slide-item s${slide.id}`}
              />
            ))}
          </ul>
          <button className="carousel-btn next-btn" onClick={() => rotateRight()}>
            <img src={rightIcon} />
          </button>
        </div>
        <div className="carousel-dots">
          {slides.map((_, i) => {
            const className = selectedIdx === i ? "dot active" : "dot"
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleDotClick(i)}
              >
                <img src={carouselDot} />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const CarouselSlideItem = ({ slide, style, className, active }) => (
  <li className={className} style={style}>
    <a className="carousel-slide-item__img-link">
      <img src={slide.image} className={active ? "active" : ""} alt={slide.id} />
    </a>
    <div className="carousel-slide-item__body">
      <h4>{slide.title}</h4>
      <p>{slide.desc}</p>
    </div>
  </li>
)

const slides = [
  {
    id: 1,
    title: "Efren Reyes",
    desc:
      'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: carouselItem,
  },
  {
    id: 2,
    title: `Ronnie O'Sullivan`,
    desc: `Ronnie O'Sullivan professional snooker player who is widely regarded as one of the greatest players in the history of the discipline.`,
    image: carouselItem,
  },
  {
    id: 3,
    title: "Shane Van Boening",
    desc:
      'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',

    image: carouselItem,
  },
  {
    id: 4,
    title: "Mike Sigel",
    desc: `Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.`,
    image: carouselItem,
  },
  {
    id: 5,
    title: "Willie Mosconi",
    desc:
      'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',

    image: carouselItem,
  },
]

export default CCarousel
