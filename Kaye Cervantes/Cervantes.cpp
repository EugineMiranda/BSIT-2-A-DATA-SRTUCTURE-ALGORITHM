#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    // Seed the random number generator
    srand(static_cast<unsigned int>(time(0)));

    // Generate a random number between 1 and 100
    int secretNumber = rand() % 100 + 1;
    
    int guess;
    int attempts = 0;

    cout << "Welcome to the Guess the Number Game!\n";
    cout << "Can you guess the secret number between 1 and 100?\n";

    do {
        cout << "Enter your guess number: ";
        cin >> guess;
        attempts++;

        if (guess == secretNumber) {
            cout << "Congratulations! You guessed the number in " << attempts << " attempts.\n";
        } else if (guess < secretNumber) {
            cout << "No Too low! Try again.\n";
        } else {
            cout << "No Too high! Try again.\n";
        }

    } while (guess != secretNumber);

    return 0;
}