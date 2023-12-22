// 1 задание
function check1() {
    if (coord_y1.value > 0 && coord_x1.value < 0) {
        alert(`Точка (${coord_x1.value};${coord_y1.value}) лежит во 2 координатной четверти`)
    } else {
        alert(`Точка (${coord_x1.value};${coord_y1.value}) не лежит во 2 координатной четверти`)
    }
}


const button_checker1 = document.getElementById("checker1")
const coord_x1 = document.getElementById("coord_x1")
const coord_y1 = document.getElementById("coord_y1")

button_checker1.addEventListener("click", check1)

// 2 задание
function check2() {
    const choice1 = (coord_x2.value == 0 && coord_y2.value == 0)
    const choice2 = coord_y2.value == 0
    const choice3 = coord_x2.value == 0

    const list_choices = [choice1, choice2, choice3]

    flag = false

    for (let i = 0; i < list_choices.length; i++) {
        if (list_choices[i] == true) {
            alert(i)
            flag = true
            break
        }
    }
    if (flag == false) {
        alert(3)
    }
}


const button_checker2 = document.getElementById("checker2")
const coord_x2 = document.getElementById("coord_x2")
const coord_y2 = document.getElementById("coord_y2")

button_checker2.addEventListener("click", check2)


//3 Задание
function result_print() {
    let x = document.getElementById("x_value").value

    if ((x > 6) && (x <= 8)) {
        y = (Math.E**(a*x) + Math.E**(-b*x))/2
    } else if (x <= 6) {
        y = Math.sin(a*x) + 2
    } else if (x > 8) {
        y = (Math.cos(b*x))**2
    }
    alert(y)
}


const a = 3.6
const b = 1.7

let y

const button_equation = document.getElementById("equation")

button_equation.addEventListener("click", result_print)


// 4 Задание
function result_print1() {
    let x1 = Number(document.getElementById("x_value1").value)
    
    switch (x1) {
        case 8:
            y1 = (Math.E**(a1*x1) + Math.E**(-b1*x1))/2
            alert(y1)
            break
        case 6:
            y1 = Math.sin(a1*x1) + 2
            alert(y1)
            break
        case 9:
            y1 = (Math.cos(b*x1))**2
            alert(y1)
            break
        default:
            alert("Ошибка!")
            break
    }
}


const a1 = 3.6
const b1 = 1.7

let y1

const button_equation1 = document.getElementById("equation1")

button_equation1.addEventListener("click", result_print1)