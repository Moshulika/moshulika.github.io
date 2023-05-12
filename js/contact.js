function mail()
{
    var value = document.getElementById("message").value.toLowerCase();
    window.location.href = "mailto:edwardnanescu@gmail.com&subject=Website&body=" + value;
}