const inputRef = document.getElementById('validation-input')
let length = +inputRef.dataset.length;
console.log(length);

inputRef.addEventListener('change', (event)=>{
 let textLength =inputRef.value.length
console.log(textLength);
if(textLength === length){
inputRef.classList.remove('invalid')
inputRef.classList.add('valid')
} else{
  inputRef.classList.remove('valid')
  inputRef.classList.add('invalid')

}
})
