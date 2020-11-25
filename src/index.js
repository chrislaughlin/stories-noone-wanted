import "./styles.css";
document.getElementById("app").innerHTML = `
<div>
  <div class="avatar">
    <img src="https://randomuser.me/api/portraits/lego/1.jpg"/>
  </div>
  <div class="gif">
    <div class="progress-line"></div>
    <div class="progress-line-progress"></div>
    <div class="close">X</div>
    <iframe src="https://giphy.com/embed/SRlNw1Cd86xmFpX4i0" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  </div>
</div>
`;

document
    .querySelector('img')
    .addEventListener('click', event => {
        document
            .querySelector('.gif')
            .classList.add('show');
        setTimeout(() => {
            document
                .querySelector('.progress-line-progress')
                .classList.add('growing');
        }, 0)
    })

document
    .querySelector('.close')
    .addEventListener('click', () => {
        document
            .querySelector('.gif')
            .classList.remove('show');
        document
            .querySelector('.progress-line-progress')
            .classList.remove('growing');
    })
