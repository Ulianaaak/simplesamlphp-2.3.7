ready(function () {
    window.onpageshow = function () {
        var button = document.getElementById("submit_button");
        var replacement = document.createTextNode(button.getAttribute("data-default"));
        button.replaceChild(replacement, button.childNodes[0]);
        button.disabled = false;
    }

    var form = document.getElementById("login-form");
    form.onsubmit = function () {
        var button = document.getElementById("submit_button");
        var replacement = document.createTextNode(button.getAttribute("data-processing"));
        button.replaceChild(replacement, button.childNodes[0]);
        button.disabled = true;
    }

    document.querySelector(".idis_login_li").classList.add("active");
    document.getElementById('pass-eye').addEventListener('click', function () {
        var input = document.getElementById('pass');
        if (input.getAttribute('type') === 'password') {
            this.classList.add('view');
            input.type = 'text';
        } else {
            this.classList.remove('view');
            input.type = 'password';
        }
    });

});