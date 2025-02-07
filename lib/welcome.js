const {drawCard,Gradient} = require('discord-welcome-card');
const welcome = async (judul,gc,pp,nomer) => {
let image = await drawCard({
    theme: 'circuit',
    text: {
      title: judul,
      text: nomer,
      subtitle: gc,
      font: 'Panton Black Caps',
      color: `#88f`,
    },
    avatar: {
      image: pp,
      outlineWidth: 5,
      outlineColor: new Gradient('linear', [0, '#33f'], [1, '#f33']),
    },
    background: 'https://i.imgur.com/yV5e2jw.jpeg',
    //blur: false,
    border: true,
    rounded: true,
});
return image
}
module.exports = welcome;