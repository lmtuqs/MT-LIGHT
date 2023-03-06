export function createListRandom(list, start, end, limit) {       
    var number
    do number = random(start, end);
    while(list.includes(number))

    list.push(number);        
   
    while(list.length < limit) createListRandom(list, start, end, limit);
}

export function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

export function getParentElement(element, selector) {                  
    while ($(element).hasClass(selector) == false) element = element.parentNode;
    return element        
} 