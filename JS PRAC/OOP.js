console.log("hello world!");
//example of a constructer
function characters (name ,moves , clan){
    this.name = name;
    this.moves = moves;
    this.run = () => {
        console.log(`the character name is ${this.name} and its uses ${this.moves}`);

    }
    this.clan = clan;
    
}

let char1 = new characters("naruto" , "windStyle : resen-suriken" , "uzumaki");
let char2 = new characters("sasuke" , "amterasu" , "uchiha");
console.log(char2);
console.log(char1);