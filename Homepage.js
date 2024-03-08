
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.querySelector("form");

            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Verhindert das Absenden des Formulars

                // Überprüfen, ob das Formular korrekt ausgefüllt ist
                if (validateForm()) {
                    // Wenn das Formular validiert ist, senden Sie die Daten
                    sendData();
                } else {
                    // Wenn das Formular nicht validiert ist, geben Sie eine Fehlermeldung aus
                    alert("Bitte füllen Sie alle Felder korrekt aus.");
                }
            });

            function validateForm() {
                const name = form.elements["name"].value;
                const email = form.elements["email"].value;
                const discord = form.elements["discord"].value;

                // Einfache Validierung: Überprüfen, ob alle Felder ausgefüllt sind
                return name !== "" && email !== "" && discord !== "";
            }

            function sendData() {
                // Daten aus dem Formular sammeln
                const formData = new FormData(form);

                // AJAX-Anfrage zum Senden der Formulardaten an die Google Sheets Web-App
                fetch(form.action, {
                    method: "POST",
                    body: formData
                })
                .then(response => {
                    // Überprüfen, ob die Anfrage erfolgreich war
                    if (response.ok) {
                        // Wenn die Anfrage erfolgreich war, leiten Sie den Benutzer auf die Dankeseite weiter
                        window.location.href = "thankyou.html";
                    } else {
                        // Wenn die Anfrage nicht erfolgreich war, geben Sie eine Fehlermeldung aus
                        alert("Beim Senden des Formulars ist ein Fehler aufgetreten.");
                    }
                })
                .catch(error => {
                    // Wenn ein Fehler auftritt, geben Sie eine Fehlermeldung aus
                    console.error("Fehler beim Senden der Formulardaten:", error);
                    alert("Beim Senden des Formulars ist ein Fehler aufgetreten.");
                });
            }
        });
 