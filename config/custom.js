document.querySelectorAll('div').forEach(element => {
    const textContent = element.textContent;
    if (textContent === "READY") {
        console.log("Found READY: ", element);
        element.classList.add("ready");
    } else if (textContent === "NOT_READY") {
        console.log("Found NOT_READY: ", element);
        element.classList.add("not-ready");
    }
});