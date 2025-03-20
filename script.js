// Function to adjust elements for pixel-perfect design
function adjustPixelPerfectElements() {
  const elements = document.querySelectorAll(".pixel-perfect");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    element.style.width = `${Math.round(rect.width)}px`;
    element.style.height = `${Math.round(rect.height)}px`;
  });
}

// Adjust elements on window load and resize
window.addEventListener("load", adjustPixelPerfectElements);
window.addEventListener("resize", adjustPixelPerfectElements);

// Function to calculate total margin of elements with specific classes
function calculateTotalMargin(dev-target-tools) {
  let totalMargin = 0;

  dev-target-tools.forEach(className => {
    const elements = document.querySelectorAll(`.${dev-target-tools)}`);
    elements.forEach(element => {
      const style = window.getComputedStyle(element);
      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);
      const marginLeft = parseFloat(style.marginLeft);
      const marginRight = parseFloat(style.marginRight);
      totalMargin += marginTop + marginBottom + marginLeft + marginRight;
    });
  });

  return totalMargin;
}

// Display the total margin in an element with the class 'margin-counter'
document.addEventListener('DOMContentLoaded', () => {
  const totalMargin = calculateTotalMargin(['html', 'css', 'javascript']);
  const marginCounterElement = document.querySelector('.margin-counter');
  if (marginCounterElement) {
    marginCounterElement.textContent = `Total Margin: ${totalMargin}px`;
  }
});
