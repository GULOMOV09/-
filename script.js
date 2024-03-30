let api = prompt('undovli harif kiriting')
let box = [ ]
let box2 = []
let num = '!!!Hi!'
function luboy() {
    let num2 = api.split('')
    for (let i = 1; i < num2.length; i++) {
        if (num2[i] != '!') {
            box2.push(num2[i])
        } 
    }
    console.log(box2.join(''))
}
luboy()