import React, { useState, useEffect } from 'react'
import anime from 'animejs'
import moment from 'moment'

const Banner = ({ flag }) => {
  const animation = anime({
    targets: '.haha',
    translateX(el) {
      return el.getAttribute('data-x')
    },
    translateY(el, i) {
      return 100 + (-100 * i)
    },
    scale(el, i, l) {
      return (l - i) + 0.05
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
    animation.pause()
  }


  console.log('zhixing')

  return (
    <div>
    </div>
  )
}

export default Banner;
