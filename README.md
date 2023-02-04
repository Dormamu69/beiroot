## The name of the game
- A game where you have to use 4 [fixes] to match the given word to a given description.

### The rules
- You can rotate a character by 90, 180 or 270 degrees.
- You can flip a character horizontally or vertically.
- You can add a - or a | to a character, provided that the new character is still a valid character.
- You can remove a - or a | from a character, provided that the new character is still a valid character.
And that's it!

### The goal
- The goal is to match the given word to the given description.
    - Example: The word qwe could be converted to "cat" to be matched to a picture of a cat.

### Pages of the game
- Main menu
    - Play
    - Settings
    - Exit
- Settings
    - Volume
    - Back
- Play
    - easy (can be solved in 2-3 steps [maybe], and there are multiple solutions)
    - medium (can be solved in 5-6 steps [maybe], and there are multiple solutions)
    - hard (can be solved in 10-15 steps [maybe], and there probably is only one solution)
    - back
- Game
    - The center word -> at the center of the screen, with good spacing
    - The description -> at the right of the screen, a picture of the word
    - The buttons -> at the bottom of the screen, a list of buttons scrollable horizontally,
        - Rotate -> on hover, a tooltip with the possible angles (the button is disabled if the word can't be rotated)
        - Flip -> on hover, a tooltip with the possible directions (the button is disabled if the word can't be flipped)
        - Add -> on hover, a tooltip with the possible characters (the button is disabled if the word can't be added)
        - Remove -> on hover, a tooltip with the possible characters (the button is disabled if the word can't be removed)
    - The timer -> at the top of the screen, a timer that starts when the game starts
    - The score -> at the top of the screen, a score that starts at 0 and increases when the player makes a move
    