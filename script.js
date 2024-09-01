const searchBox=document.querySelector('#inputBox');
const List=document.getElementById('listContainer');
const button=document.getElementById('button');
button.addEventListener('click',()=>{
    if(searchBox.value ===''){
        alert('Please write something !!')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=searchBox.value;
        List.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    searchBox.value='';
    saveData();
})
List.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem('data',List.innerHTML);
}
function displayData(){
    List.innerHTML =localStorage.getItem('data');
}
displayData();
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    localStorage.clear(); // Clears all data in localStorage
    List.innerHTML = ''; // Clears the displayed list
})
searchBox.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
       e.keyCode =button.click();
    }

})
