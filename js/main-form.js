window.onload = function(){

    const conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        showProgressBar: true,
        // robotImage: "http://lupanasfinancas.vitorbraganca.com/img/robot-img.svg",
        // userImage: "http://lupanasfinancas.vitorbraganca.com/img/user-img.svg",
        theme: "dark-theme"
    });
};