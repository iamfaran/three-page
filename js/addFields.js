let id = 0;
let objectArr = [];

const form = document.querySelector(".myform");
const newEl = document.getElementById("newElementId");
const addBtn = document.querySelector(".add-field-btn");
const inputWrap = document.createElement("div");
inputWrap.innerHTML = `<input type="text" required="required" name="field${id}" placeholder="Enter Text Here"  />
  <select name="relation${id}">
                  <option value="">Pull Down Menu</option>
                  <option value="sibling">Sibling</option>
                  <option value="parent">Parent</option>
                  <option value="grandparent">Grandparent</option>
                  <option value="friend">Friend</option>
                </select>`;
//   form.insertBefore(inputWrap, form.childNodes[0]);
newEl.appendChild(inputWrap);
id++;


addBtn.addEventListener("click", addFields);
function addFields() {
  const inputWrap = document.createElement("div");
  inputWrap.innerHTML = `<input type="text"  name="field${id}" placeholder="Enter Text Here" required="required" />
  <select name="relation${id}">
                  <option value="">Pull Down Menu</option>
                  <option value="sibling">Sibling</option>
                  <option value="parent">Parent</option>
                  <option value="grandparent">Grandparent</option>
                  <option value="friend">Friend</option>
                </select>`;
  //   form.insertBefore(inputWrap, form.childNodes[0]);
  newEl.appendChild(inputWrap);
  id++;
  localStorage.setItem("key", id);
}
