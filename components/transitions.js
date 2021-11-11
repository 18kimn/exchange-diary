const transitionSpecs = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}
const config = {
  animationEnabled: true,
  transitionSpec: {
    open: transitionSpecs,
    close: transitionSpecs,
  },
  cardStyleInterpolator: ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
}

export default config
