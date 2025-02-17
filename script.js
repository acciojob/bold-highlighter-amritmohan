function highlight() {
  const boldWords = document.querySelectorAll('strong');
  
  // Loop through each <strong> element and change its color to green
  boldWords.forEach(word => {
    word.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  
  // Loop through each <strong> element and revert its color to black
  boldWords.forEach(word => {
    word.style.color = 'rgb(0, 0, 0)';
  });
}
