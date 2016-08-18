line1Array = [];
line2Array = [];
line3Array = [];
line4Array = [];
line5Array = [];
// line6Array = [];
// line7Array = [];
// line8Array = [];
excessCharArray = [];

// (input.length/(Math.ceil(Math.sqrt(input.length)))))

// if (input[i] === " ") {
//   input[i].slice();
// }

var cryptocoder = function(input) {
debugger;
  for (var i = 0; i < input.length; i++)
    if (i >= 0 && i <= 4) {
      line1Array.push(input[i]);
    } else if (i > 4 && i <= 9) {
      line2Array.push(input[i]);
    } else if (i > 9 && i <= 14) {
      line3Array.push(input[i]);
    } else if (i > 14 && i <= 19) {
      line4Array.push(input[i]);
    } else if (i > 19 && i <= 24) {
      line5Array.push(input[i]);
    }
  console.log(line1Array);
  console.log(line2Array);
  console.log(line3Array);
  console.log(line4Array);
  console.log(line5Array);
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var messageInput = $("input#message").val().toLowerCase().split("");
    cryptocoder(messageInput);
    var codedMessage = line1Array[0] + line2Array[0] + line3Array[0] + line4Array[0] + line5Array[0] + " " + line1Array[1] + line2Array[1] + line3Array[1] + line4Array[1] + line5Array[1] + " " + line1Array[2] + line2Array[2] + line3Array[2] + line4Array[2] + line5Array[2] + " " + line1Array[3] + line2Array[3] + line3Array[3] + line4Array[3] + line5Array[3] + " " + line1Array[4] + line2Array[4] + line3Array[4] + line4Array[4] + line5Array[4] + " " + line1Array[5] + line2Array[5] + line3Array[5] + line4Array[5] + line5Array[5];
    $("#output").text(codedMessage);
  });
});
