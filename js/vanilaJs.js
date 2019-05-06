function $(some) {
    return document.querySelector(some);
}

Element.prototype.toggleClass = function (className) {
    if (this.classList.contains(className)) {
        this.classList.remove(className);
    } else {
        this.classList.add(className);
    }
}
