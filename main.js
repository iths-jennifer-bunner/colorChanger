let validColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"  ]
let input = document.querySelector('.text')


function toLowerCase(array) {
    let newList = []
    for(let i = 0; i < array.length; i++){
        newList.push(array[i].toLowerCase())   
    }
    return newList
}

function filterArray(array, userInput){     
    let newList = []
    for(let i = 0; i < array.length; i++){
        if(compare(array[i], userInput)){
        newList.push(array[i])
        } 
}
return newList
}

function compare(string, input){                
    for(let i = 0; i < input.length; i++){
        if(input[i] != string[i]){  
        return false
        }    
    }
    return true
}

function render(array){
    let ul = document.querySelector('ul')
    let itemPrototype = document.querySelector('.select')
    for(let  i = 0; i <array.length; i++){
        let newItem = itemPrototype.cloneNode(true)
        newItem.classList.remove('select')
        let p = newItem.querySelector('p')
        p.innerText = array[i]
        ul.append(newItem)  
        p.addEventListener('click', function(){
        document.body.style.backgroundColor = array[i]
        })       
    }
    
}

function error(){
    let div = document.querySelector('div')
    let itemPrototype = document.querySelector('.placeforinput')
    let p = itemPrototype.querySelector('p')
    p.innerText = 'Invalid color!'
    div.append()
}


function clearList(){
    let element = document.querySelector('ul')
    while(element.hasChildNodes()){
        element.removeChild(element.firstChild)
    }
}

function colorChanger(event){    
    let lowercased = toLowerCase(validColors)
    if(input.value.length != 0){
        let colors = filterArray(lowercased, input.value.toLowerCase() )
        clearList()
        if (colors.length == 0){
            error()
        }else{
            let div = document.querySelector('div')
            let itemPrototype = document.querySelector('.placeforinput')
            let p = itemPrototype.querySelector('p')
            p.innerText = ''
            div.append()
            render(colors)  
            if(event.key == "Enter"){
                document.body.style.backgroundColor = colors[0]
            }
        }
    }else{
        clearList()
    }
    
}

input.addEventListener("keyup", colorChanger)

