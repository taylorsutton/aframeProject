//prevent anchor link default on mobile web app
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
    a[i].onclick = function() {
        window.location = this.getAttribute("href");
        return false;
    };
}

$('#showModalBtn').click(function() {
    $('.ui.long.modal').modal('show');
});