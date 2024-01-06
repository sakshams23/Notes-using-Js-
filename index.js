/* Shree Ganeshaye Namah */
// var text="India";
// document.querySelector('.notehere').value=text;
var    note1="";
var    note2="";
var    note3="";
var    note4="";
var    note5="";
function addnew() {
    document.querySelector('.notehere').value="";
}
function save(){
    var unote=document.querySelector('.notehere').value;
    const n1=document.querySelector('#note1');
    const n2=document.querySelector('#note2');
    const n3=document.querySelector('#note3');
    const n4=document.querySelector('#note4');
    const n5=document.querySelector('#note5');

    if(note1==""){
        note1=unote;
        n1.style.display='flex';
        document.querySelector('.notehere').value="";
    }
    else{
        if(note2==""){
            note2=unote;
            n2.style.display='flex';
            document.querySelector('.notehere').value="";
        }
        else{
            if(note3==""){
                note3=unote;
                n3.style.display='flex';
                document.querySelector('.notehere').value="";
            }
            else{
                if(note4==""){
                    note4=unote;
                    n4.style.display='flex';
                    document.querySelector('.notehere').value="";
                }
                else{
                    note5=unote;
                    n5.style.display='flex';
                    document.querySelector('.notehere').value="";
                }
            }
        }
    }
}
function shown1(){
    document.querySelector('.notehere').value=note1;
}
function shown2(){
    document.querySelector('.notehere').value=note2;
}
function shown3(){
    document.querySelector('.notehere').value=note3;
}
function shown4(){
    document.querySelector('.notehere').value=note4;
}
function shown5(){
    document.querySelector('.notehere').value=note5;
}
function clearall(){
    note1="";
    note2="";
    note3="";
    note4="";
    note5="";
    const n1=document.querySelector('#note1');
    const n2=document.querySelector('#note2');
    const n3=document.querySelector('#note3');
    const n4=document.querySelector('#note4');
    const n5=document.querySelector('#note5');
    n1.style.display='none';
    n2.style.display='none';
    n3.style.display='none';
    n4.style.display='none';
    n5.style.display='none';
    document.querySelector('.notehere').value="";
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuicon = document.querySelector('.menuicon');
    sidebar.style.display='flex';
    menuicon.style.display='none';
    
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuicon = document.querySelector('.menuicon');
    sidebar.style.display='none';
    menuicon.style.display='flex';
}
function readOnly() {
    document.getElementById("myTextarea").readOnly = true;
}

function writeOnly() {
    document.getElementById("myTextarea").readOnly = false;
}
function bold(){
    const notes = document.querySelector('.notehere');
    if(notes.style.fontWeight !== "bold"){
        notes.style.fontWeight = "bold";
        notes.style.fontWeight = "bold";
    }
    else{
        notes.style.fontWeight = "normal";
        notes.style.fontWeight = "normal";
    }
}	 
function black() {
    const notes = document.querySelector('.notehere');
    notes.style.color='black';
}
function blue() {
    const notes = document.querySelector('.notehere');
    notes.style.color='blue';
}
function green() {
    const notes = document.querySelector('.notehere');
    notes.style.color='green';
}
function yellow() {
    const notes = document.querySelector('.notehere');
    notes.style.color='yellow';
}
function red() {
    const notes = document.querySelector('.notehere');
    notes.style.color='red';
}
function underline() {
    const notes = document.querySelector('.notehere');
    
    if(notes.style.textDecoration !== "underline"){
        notes.style.textDecoration = "underline";
        notes.style.textDecoration = "underline";
    }
    else{
        notes.style.textDecoration = "none";
        notes.style.textDecoration = "none";
    }
}

function italic(){
    const notes = document.querySelector('.notehere');
    if(notes.style.fontStyle !== "italic"){
        notes.style.fontStyle = "italic";
        notes.style.fontStyle = "italic";
    }
    else{
        notes.style.fontStyle = "normal";
        notes.style.fontStyle = "normal";
    }
}

