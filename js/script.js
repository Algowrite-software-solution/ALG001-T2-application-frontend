document.addEventListener("DOMContentLoaded", () => {
    fetch(
        "http://localhost/project_area/Algowrite/ALG001-T2-application-frontend/pages/profile.php",
        { method: "GET", headers: { "Content-Type": "text/html" } }
    )
        .then(response => response.text())
        .then(data => {
            rootLoader(data);
            document.title= "Your profile page"
        });
});

function rootLoader(content) {
    document.getElementById("root").innerHTML = content;
}