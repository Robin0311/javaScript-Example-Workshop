const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus explicabo itaque omnis, labore facilis autem, corrupti culpa ab rem quae eveniet quia fugiat exercitationem saepe beatae at reiciendis consequuntur.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite Color');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    }
}