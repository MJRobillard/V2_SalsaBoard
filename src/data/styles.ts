export const backgroundGradient = (colorMode: string) =>
  (colorMode === "light"
    ? [
        // Light mode gradients
        "radial-gradient(circle 40vw at 0px 700px, #ff5e5e, transparent)", // Bold Salsa Red
        "radial-gradient(circle 40vw at 50% 600px, #ffcc00, transparent)", // Bright Gold Yellow
        "radial-gradient(circle 40vw at 70% 800px, #ff7b00, transparent)", // Deep Salsa Orange
        "linear-gradient(transparent, 0px, transparent, 1000px, hsla(0, 100%, 50%, 0.15), #ff5e5e)", // Soft Salsa Red overlay
      ]
    : [
        // Dark mode gradients
        "radial-gradient(circle 40vw at 0px 700px, #d40000, transparent)", // Deep Salsa Red
        "radial-gradient(circle 40vw at 50% 600px, #9a0060, transparent)", // Dark Purple-Red
        "radial-gradient(circle 40vw at 70% 800px, #b65100, transparent)", // Dark Orange
        "linear-gradient(transparent, 0px, transparent, 1000px, hsla(0, 100%, 50%, 0.25), #d40000)", // Strong Salsa Red overlay
      ]
  ).join(", ");
