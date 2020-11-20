import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
  <div class="avatar">
    <img src="https://randomuser.me/api/portraits/lego/1.jpg"/>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
      xml:space="preserve">  
      <circle cx="50" cy="50" r="40" />
    </svg>
  </div>
  <div class="gif">
    <div class="close">X</div>
    <iframe src="https://giphy.com/embed/tL3Nkk58oeWEo" width="480" height="219" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
</div>
`;

//Open story 
document.querySelector('.avatar').addEventListener('click', evt => {
  document.querySelector('.gif').classList.add('show');
})

// Close story 
document.querySelector('.close').addEventListener('click', evt => {
  document.querySelector('.gif').classList.remove('show');
})

