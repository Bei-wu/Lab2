let buttons = document.getElementsByTagName("button");
let paragraphs = document.getElementsByTagName("p");

// Latte
buttons[0].onclick = function() {
    paragraphs[5].innerHTML = "Latte selected.";
    paragraphs[6].innerHTML = "Total: $5.00";
};

// Americano
buttons[1].onclick = function() {
    paragraphs[5].innerHTML = "Americano selected.";
    paragraphs[6].innerHTML = "Total: $4.00";
};

// Cappuccino
buttons[2].onclick = function() {
    paragraphs[5].innerHTML = "Cappuccino selected.";
    paragraphs[6].innerHTML = "Total: $5.50";
};

// Add Sugar
buttons[3].onclick = function() {
    paragraphs[4].innerHTML = "Sugar: Added";
};

// Clear Order
buttons[4].onclick = function() {
    paragraphs[4].innerHTML = "Sugar: Not Added";
    paragraphs[5].innerHTML = "No coffee selected yet.";
    paragraphs[6].innerHTML = "Total: $0.00";
};
