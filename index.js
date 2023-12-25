function findMatching(array,string){
    let lowerCaseString = string.toLowerCase();
    let newArray = [];
    for(let person in array){
        if(array[person] === lowerCaseString || array[person] === string){
            newArray.push(array[person]);}
        }
    return newArray;
}
function fuzzyMatch(array,string){
    let newArray = [];
    for(let person in array){
        if(array[person].startsWith(string)){
            newArray.push(array[person])};
        }
    return newArray;  
}
function matchName(array,string){
    let newArray = [];
    for(let person of array){
        if(person.name == string){
            newArray.push(person);}
        }
    return newArray;
}
// Code your solution here
