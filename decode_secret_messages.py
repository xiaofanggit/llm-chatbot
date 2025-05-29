###
# You are given a Google Doc like this one: https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub
# that contains a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.
# The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.
# 
# The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.
# 
# Any positions in the grid that do not have a specified character should be filled with a space character.
# 
# You can assume the document will always have the same format as the example document linked above.
# 
# For example, the simplified example document linked above draws out the letter 'F':
# 
# █▀▀▀
# █▀▀ 
# █   
###