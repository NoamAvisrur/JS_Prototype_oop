function SignPopup (title, text) {
    Popup.call(this, title);
    this.text = text;
}

SignPopup.prototype = Object.create(Popup.prototype);
SignPopup.prototype.constructor = SignPopup;

SignPopup.prototype.build = function (className, callback){
    var content = callback(className, this.title);
    var p = document.createElement('p');
    p.textContent = this.text;
    var form = document.createElement('form');
    content.appendChild(p);
    content.appendChild(form);
    var button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener('click', this.destroy.bind(this));
    content.appendChild(button);
    getForm();
};

function getForm(){
    fetch("view/form.html").then(function(response) {
        return response.text();
    })
    .then(function(data){
        var form = document.querySelector('form');
        form.innerHTML = data;
        return new Promise(function (resolve, reject) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                resolve(e);
            });
        });
    }).then(function (e) {
        var formData = "first_name=" + document.querySelector('input[name="first_name"]').value + "&last_name=" + document.querySelector('input[name="last_name"]').value + "&email=" + document.querySelector('input[type="email"]').value;
        var request = new Request('api.php', {
            method: 'POST',
            body: formData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        });
        return fetch(request);
    }).then(function(data){
        if(data.status == 201){
            document.querySelector('.popup_container').remove();
        }
    })
};
