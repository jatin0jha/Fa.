    document.addEventListener("DOMContentLoaded", () => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbyBWiiLVZzb6eNJG-7onPddBaNkq3How4v4T0l_VfecyWSfKSNUmEDSuwzEVgsTZ7dGzA/exec"; // Replace with your Apps Script URL

        fetch(scriptURL, {
            method: "GET",
            mode: "no-cors"
        })
            .then(() => console.log("Visit recorded successfully"))
            .catch(err => console.error("Error recording visit:", err));
    });
