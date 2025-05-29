function editElement(reference, match, replacer) {

    let textContent = reference.textContent;
    let result = textContent.replace(new RegExp(match, "g"), replacer);
    reference.textContent = result;
}