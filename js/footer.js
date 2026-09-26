document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Load Footer Component ---------- */

    const footerContainer = document.getElementById("footer");

    if (footerContainer) {

        fetch("components/footer.html")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Footer file could not be loaded.");
                }

                return response.text();
            })

            .then(data => {

                footerContainer.innerHTML = data;

            })

            .catch(error => {

                console.error("Footer could not be loaded:", error);

            });

    }

});
