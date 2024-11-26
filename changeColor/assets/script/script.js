const button = document.querySelector("button");
const hexChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


button.addEventListener('click', event => {

    function getCharacter(index) {
        return hexChar[index]
    }
    
    function generateColor() {
        let hexColor = '#';
        for (let index = 0; index < 6; index++) {
            const randomPos = Math.floor(Math.random() * hexChar.length);
            hexColor += getCharacter(randomPos);
        }
        return hexColor;
    }

    button.style.backgroundColor = generateColor();
    button.style.color = 'white'
})
