function dropdown() {
    document.getElementById("down_btn").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.down_menu')) {
        var dropdown = document.getElementsByClassName("");
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}