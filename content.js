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
  hormonal: "inspiring"
  pussy: "warrior",
  cunt: "heroine",
  sweetie: "champion"
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




for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          bad2fab.forEach(function( word ) {
    var myExp = new RegExp(word, 'gi');
    var replacedText = text.replace(myExp, function(matched){
            return bad2fab[matched];
          });

    });
      }
      }
  }



            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
