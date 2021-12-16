let sus = ["A", "a", "B", "C", "c", "E", "e", "H", "i", "M", "O", "o", "P", "p", "S", "s", "X", "x", "y"];
let amogus = ["\u0410", "\u0430", "\u0412", "\u0421", "\u0441", "\u0415", "\u0435", "\u041D", "\u0456", "\u041C", "\u041E", "\u043E", "\u0420", "\u0440", "\u0405", "\u0455", "\u0425", "\u0445", "\u0443"];

function submit() {
    let text = document.getElementById("form").value;
    console.log(text);
    for (i = 0; i < sus.length; i++) {
        text = text.split(sus[i]).join(amogus[i]);
    }
    console.log(text);
    document.getElementById("yeah").innerText = text;
} 

var textarea = document.getElementById("form");

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
textarea.style.height = textarea.scrollHeight + "px"
};

function copyButton() {
    var copyText = document.getElementById("yeah");
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied to the clipboard!");
  }







