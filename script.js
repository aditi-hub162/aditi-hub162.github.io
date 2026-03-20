function toggleMode(){
  document.body.classList.toggle("dark");
}

function buy(){
  alert("Redirecting to payment 💳 (demo)");
  window.open("https://buy.stripe.com/test", "_blank");
}