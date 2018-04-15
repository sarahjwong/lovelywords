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
  hormonal: "inspiring",
  pussy: "warrior",
  cunt: "heroine",
  sweetie: "champion",
  girly: "professional",
  unattractive: "photogenic",
  ugly: "dazzling",
  spinster: "independent woman",
  bimbo: "genius",
  doll: "respectable woman",
  skank: "good egg",
  tramp: "first-in-command",
  prude: "gem"
};

var fab = [
  "boss",
  "charmer",
   "icon",
  "confident woman",
  "charismatic woman",
  "beautiful",
  "CEO",
  "passionate",
  "articulate",
  "generous",
  "inspiring",
  "warrior",
  "heroine",
  "champion",
  "professional",
  "photogenic",
  "dazzling",
  "respectable woman",
  "genius",
  "respectable woman",
  "good egg",
  "first-in-command",
  "gem"
];

var bad = [
  "bitch",
  "slut",
   "ho",
  "whore",
  "tease",
  "fat",
  "airhead",
  "aggressive",
  "bossy",
  "emotional",
  "hormonal",
  "pussy",
  "cunt",
  "sweetie",
  "girly",
  "unattractive",
  "ugly",
  "spinster",
  "bimbo",
  "doll",
  "skank",
  "tramp",
  "prude"
];
var replacedText = "";




for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node) {

          var text = node.nodeValue;
          console.log("Original: " + text);

          for(var k = 0; k < bad.length; k++)
          {
            if(text)
            {
              console.log("Text found");
              var oldWord = new RegExp(bad[k] , 'gi');
              console.log("regex " + oldWord);
              replacedText = text.replace(oldWord, fab[k]);
              if (replacedText !== text) {
                  console.log("Replaced with" + replacedText);
                  element.replaceChild(document.createTextNode(replacedText), node);
              }

            }
          }



    }







        }
    }
