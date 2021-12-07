import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([10, -30, 0, 1, -2, 3, 33, 4])
numbersCollection.sort();
console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection("ZxyaMn")
charactersCollection.sort();
console.log(charactersCollection.data)


const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.sort();
linkedList.print();


