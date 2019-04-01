const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

// Fill Listeners
fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

// Loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver)
  empty.addEventListener("dragenter", dragEnter)
  empty.addEventListener("dragleave", dragLeave)
  empty.addEventListener("drop", dragDrop)
}

// Drag Functions
function dragStart() {
  //console.log("darg start")
  this.className += " hold"
  // 为了让图片拖拉之后原来的位置消失
  setTimeout(() => (this.className = "invisible"), 0)
}

function dragEnd() {
  //console.log("drag end")
  // 释放之后原来的位置显示
  this.className = "fill"
}

function dragOver(e) {
  e.preventDefault()
  console.log("over")
}

function dragEnter(e) {
  e.preventDefault(e)
  this.className += " hovered"
  console.log("enter")
}

function dragLeave() {
  this.className = "empty"
  console.log("leave")
}

function dragDrop() {
  this.className = "empty"
  this.append(fill)
  console.log("drop")
}
