print "Welcome to Python!"

# 1. Variable
spam = 5
my_variable = 10

# 2. Boolean
my_int = 7
my_float = 1.23
my_bool = True

# 3. Strings
name = "Pikachu"
age = "1"
food = "Odon"

# Escaping characters backslash \
escape = "I\'m Pikachu"

# Access by Index of String (very difference in concept with PHP)
"""
The string "PYTHON" has six characters,
numbered 0 to 5, as shown below:

+---+---+---+---+---+---+
| P | Y | T | H | O | N |
+---+---+---+---+---+---+
  0   1   2   3   4   5

So if you wanted "Y", you could just type
"PYTHON"[1] (always start counting from 0!)
"""

letter_index = "PIKACHU"[5]

print letter_index # print out letter H

# String method len(), lower(), upper(), str()

query = "Python is so cool with string proccessing"
print len(query);
print query.lower();
