let x_coor = 3
function start_game() {
    basic.showString("BEGIN!")
}

function spaceShip() {
    let x_coor: number;
    led.plot(x_coor, 0)
    if (input.buttonIsPressed(Button.A)) {
        led.unplot(x_coor, 0)
        x_coor = x_coor - 1
        led.plot(0, 0)
    }
    
}

