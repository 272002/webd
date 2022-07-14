document.getElementById('text').innerHTML = "Hello world";
// document.getElementsByClassName('text')[0].innerHTML="bye";



function greet() {
  let total_text_class_in_html = document.getElementsByClassName("text").length;
  console.log(total_text_class_in_html);
  for (var i = 0; i < total_text_class_in_html; i++) {
    document.getElementsByClassName('text')[i].innerHTML = 'Some Text'
  }
}

greet();

function tag() {
  alert("getlost");
}