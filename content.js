var elements = document.getElementsByTagName('*');
var bad2fab = {
  bitch: "boss",
  slut: "charmer",
  ho: "icon",
  whore: "confident woman",
  tease: "charismatic woman",
  fat: "beautiful",
  airhead: "CEO",
  aggressive: "passionate",
  bossy: "articulate",
  emotional: "generous",
  hormonal: ""
  pussy: "warrior",
  cunt: "heroine",
  sweetie: ""
  girly: "professional",
  unattractive: "photogenic",
  ugly: "dazzling",
  spinster: "independent woman",
  bimbo: "genius",
  doll: "respectable woman",
  skank: "good egg",
  tramp: "first-in-command",
  prude: ""
};
str = str.replace(/cat|dog|goat/gi, function(matched){
  return mapObj[matched];
});


var powerWords = [
  "boss",
  "queen",
  "goddess",
  "babe"




];



for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          for(var k = 0; k < meanWords.length; k++)
          {
            var text = node.nodeValue;
            var oldText = meanWords[k];
            var newText = powerWords[k];
            var replacedText = text.replace(oldText, newText);
          }

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
