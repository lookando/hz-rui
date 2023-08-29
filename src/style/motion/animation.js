export const slide_in = `
@keyframes slide_in {
  0% {
    transform: scaleY(0.8);
    transform-origin: 0% 0%;
    opacity: 0
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1
  }
}; `
export const slide_out = `
@keyframes slide_out {
  0% {
    transform: scaleY(1);
    transform-origin: 0% 0%;
    opacity: 1
  }
  100% {
    transform: scaleY(0);
    transform-origin: 0% 0%;
    opacity: 0
  }
};
`