function setFooterText() {
    const date = new Date().getFullYear();
    const footerText = `<p>Eirik Vale Aase © ${date.toString()}</p>`

    const footer = document.getElementById('footer');
    footer.innerHTML = footerText;
}

setFooterText();
