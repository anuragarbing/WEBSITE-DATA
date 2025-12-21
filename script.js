document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const deal = document.getElementById("deal").value;
    const message = document.getElementById("message");

    if (phone.length < 10) {
        message.style.color = "red";
        message.textContent = "Enter a valid phone number";
        return;
    }

    message.style.color = "#2ecc71";
    message.textContent =
        "M-Pesa STK Push will be sent to " + phone + " for " + deal;

    /*
    🔔 READY FOR MPESA STK PUSH
    Send phone & deal to backend (PHP / Node / Python)
    which will call Safaricom Daraja API
    */
});
