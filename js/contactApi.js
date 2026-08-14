const CONTACT_API_URL = "https://a6ntwixiydf3keezuaaclqwtku0vvqom.lambda-url.us-east-2.on.aws/";

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = document.getElementById("contact-submit");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();
    const website = document.getElementById("website").value;

    // Honeypot spam check
    if (website) {
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {

        const response = await fetch(CONTACT_API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                subject,
                message,
                website
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Unable to send message.");
        }

        formStatus.textContent =
            "Your message has been sent successfully. Thank you!";

        formStatus.className = "form-status success";

        contactForm.reset();

    } catch (error) {

        console.error("Contact form error:", error);

        formStatus.textContent =
            "Sorry, your message could not be sent. Please try again.";

        formStatus.className = "form-status error";

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

    }

});