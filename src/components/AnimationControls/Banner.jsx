import React from 'react'
import anime from 'animejs'

const Banner = ({ flag }) => {
  const animation = anime({
    targets: '.haha',
    translateX(el, i) {
      return 60 * i
    },
    translateY(el, i) {
      return -50 * i
    },
    scale(el) {
      return el.getAttribute('level') * 0.25
    },
    rotate() { return anime.random(-360, 360); },
    borderRadius() { return ['50%', `${anime.random(10, 35)}%`]; },
    duration() { return anime.random(1700, 1800); },
    delay() { return anime.random(1200, 1400); },
    direction: 'alternate',
    // loop: true,
  });
  if (flag) {
    animation.play()
  } else {
    animation.play()
  }
  return (
    <div>
    </div>
  )
}

export default Banner;
