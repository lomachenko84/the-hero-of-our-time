import goblin from "../img/goblin.png"
let field = document.createElement("div")
field.className = "field"
document.body.append(field)
let myFields = []
let index = Math.floor(Math.random() * 15)

for (let i = 0; i < 16; i++) {
  let myField = document.createElement("div")
  myField.className = "myField"
  field.append(myField)
  myFields.push(myField)
}

let img = document.createElement("img")
img.src = goblin
img.className = "img"
myFields[index].append(img)

setInterval(() => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 15)
  } while (newIndex === index);
  index = newIndex
  myFields[newIndex].append(img)
}, 2000)
