const getElementsByClassName = (targetName) => {
  const result = [];

  function findElements(element) {
    if (element.classList && element.classList.contains(targetName)) {
      result.push(element);
    }

    if (element.childNodes) {
      for (const el of element.childNodes) {
        findElements(el);
      }
    }
  }

  findElements(document.body);
  return result;
};
module.exports = { getElementsByClassName };
