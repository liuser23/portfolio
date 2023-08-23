import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import Typewriter from "typewriter-effect/dist/core";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

let heroTypewriter = document.getElementById("hero-typewriter");

let typewriter = new Typewriter(heroTypewriter, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString(
    'I\'m a <span class="text-color-between">full stack developer</span>.'
  )
  .pauseFor(1000)
  .deleteChars(21)
  .pauseFor(600)
  .typeString('<span class="text-color-between">student</span>.')
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(600)
  .typeString("Thanks for visiting!")
  .pauseFor(1000)
  .start();
