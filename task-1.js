const listRef = document.querySelectorAll("#categories li.item");
console.log(listRef);
const listLength = listRef.length;
console.log(`В списке ${listLength} категории`);

listRef.forEach((elem, index) => {
  const h2 = document.querySelectorAll("h2");
  console.log(`Категория ${h2[index].textContent}`);
  const li = document.querySelectorAll("li.item ul ");
  console.log(`Количество: ${li[index].children.length}`);
});



