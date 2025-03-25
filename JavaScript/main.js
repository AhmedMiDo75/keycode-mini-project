window.addEventListener(`keypress`, function (e) {
  const insert = document.getElementById(`insert`);
  insert.innerHTML = ""
  const keys = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  for (const item in keys) {
    const div = document.createElement(`div`);
    const small = document.createElement(`small`);
    const divText = document.createTextNode(keys[item]);
    const smText = document.createTextNode(item);
    div.className = "key";
    div.appendChild(divText);
    small.appendChild(smText);
    div.appendChild(small);
    insert.appendChild(div);
  }
});
