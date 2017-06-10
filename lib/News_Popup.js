function NewsPopup (title, textArr){
    Popup.call(this, title);
    this.textArr = textArr;
}

NewsPopup.prototype = Object.create(Popup.prototype);
NewsPopup.prototype.constructor = NewsPopup;

NewsPopup.prototype.build = function (className, callback){
    var content = callback(className, this.title);
    this.textArr.forEach(function (p, i){
        var article = document.createElement('article');
        var text = document.createElement('p');
        text.textContent = p.text;
        var img = document.createElement('img');
        img.src = p.img;
        article.appendChild(text);
        article.appendChild(img);
        content.appendChild(article);
    })
    var button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', this.destroy.bind(this));
    content.appendChild(button);
}
