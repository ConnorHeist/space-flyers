x_coor = 3



def start_game():
    basic.show_string("BEGIN!")
def spaceShip():
    led.plot(x_coor, 0)
    if input.button_is_pressed(Button.A):
        led.unplot(x_coor, 0)
        x_coor = x_coor - 1

        led.plot(0, 0)


    
