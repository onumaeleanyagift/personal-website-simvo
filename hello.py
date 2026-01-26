
for i in range(1, 51):
    # Precondition: not a multiple of 4
    if i % 4 == 0:
        continue

    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    if i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)


# Nested Loops Challenge
rows = 9

print("For rows = " + str(rows))

for row in range(1, rows + 1):
    printVal = ""
    for column in range(row):
        printVal += "*"
    print(printVal)