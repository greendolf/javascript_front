export function showError(elem, message, time = 1500) {
    // Show error message
    setValidity(elem, message);

    // Hide error mesage after time ms
    setTimeout(() => {
        setValidity(elem);
    }, time);
}

function setValidity(elem, message = "") {
    elem.setCustomValidity(message);
    elem.reportValidity();
}
