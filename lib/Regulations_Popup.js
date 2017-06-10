function RegPopup (title, text){
    Popup.call(this, title);
    this.text = text;
}

RegPopup.prototype = Object.create(Popup.prototype);
RegPopup.prototype.constructor = RegPopup;

RegPopup.prototype.build = function (className, callback){
    var content = callback(className, this.title);
    var text = document.createElement('p');
    text.textContent = this.text;
    var button = document.createElement('button');
    button.textContent = "I agree";
    content.appendChild(text);
    button.addEventListener('click', this.destroy.bind(this));
    content.appendChild(button);
}  
