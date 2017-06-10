function Popup (title){
    this.title = title
    }
Popup.prototype.build = function (className, headtitle){
    var container = document.createElement('div');
    container.className = 'popup_container';
    var content = document.createElement('div');
    content.className = className;
    container.appendChild(content);
    var title = document.createElement('h2');
    title.textContent = headtitle;
    content.appendChild(title);
    document.body.appendChild(container); 
    return content;
}  

Popup.prototype.destroy = function(){
    document.querySelector('.popup_container').remove();
}
