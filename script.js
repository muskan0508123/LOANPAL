document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".loan-slider");
    const loanAmount = document.getElementById("loan-amount");
    const weeklyPayment = document.getElementById("weekly-payment");
    const decreaseBtn = document.querySelector(".decrease-btn");
    const increaseBtn = document.querySelector(".increase-btn");

    function updateValues() {
        const amount = parseInt(slider.value);
        loanAmount.textContent = amount;
        weeklyPayment.textContent = "$" + Math.round(amount / 52);
    }

    // Update slider on input change
    slider.addEventListener("input", updateValues);

    // Increase button
    increaseBtn.addEventListener("click", function () {
        let value = parseInt(slider.value);
        if (value < 10000) {
            slider.value = value + 500;
            updateValues();
        }
    });

    // Decrease button
    decreaseBtn.addEventListener("click", function () {
        let value = parseInt(slider.value);
        if (value > 1000) {
            slider.value = value - 500;
            updateValues();
        }
    });

    // Initialize values on load
    updateValues();
});

document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar if needed
                    behavior: "smooth"
                });
            }
        });
    });
});

