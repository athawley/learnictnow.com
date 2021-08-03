"""
This is a car racing game
The player will choose a car 1-6
Then they choose a race length 5-15

The race then starts
A number is randomly generated
The if a 1 is rolled the car 1 moves one space
and the same applies for all other cars.

The first car to get to the end will win.
At the end the number of steps (rolls)
should be displayed e.g. it took 10 rolls
to win.
"""
import random

#Setup Variables
player_car = None
race_length = None
# each position in list refers to a player
# e.g. player_position[0] is player ones place
player_position = [0,0,0,0,0,0]
game_won = False
rounds_played = 0

# Game Setup
def get_player():
    global player_car
    user_input = input("Please choose a player car 1-6: ")
    while (not user_input.isdigit()) or int(user_input) < 1 or int(user_input) > 6:
        print("Invalid Input")
        user_input = input("Please choose a player car 1-6: ")
    player_car = int(user_input)
    race_length = int(input("Please enter the race length 5-15: "))



# Run Race

    # Play Round (random number)


# Display end

# Play Game
get_player()
print(player_car)