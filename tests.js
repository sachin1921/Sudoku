// UNIT TESTS

// Test startNewPuzzle() function

// Test solve() function

// Test populateSudoku() function

// Test populateSolution() function

// Test checkSolution() function

// Test showChoice() function

// Test restartPuzzle() function

// Test showInstructions() function


// Povides solution to puzzle
function getSolved() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cell = document.getElementById(i + "-" + j);
            var input = cell.getElementsByClassName("input-text")[0];
            input.style.backgroundColor = "white";
            if (solvedPuzzle["solution"][i][j] != 0) {
                cell.style.color = "#000000";
                input.value = solvedPuzzle["solution"][i][j];
                input.readOnly = true;
            } else {
                input.value = "";
                input.readOnly = false;
                cell.style.color = "#74D3BB";
            }
        }
    }
}
