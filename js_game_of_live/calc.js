/**
 * Created by Alex on 15.07.2017.
 */
function calc(neibours, desisionStrategy)
{
    var result = neibours.reduce(function (sum, current) {
        if (current === true)
        {
            return sum + 1;
        }
        return sum;
    }, 0);

    return desisionStrategy(result);
}

function isAlive(number)
{
    var min = 2;
    var max = 3;

    if (number < min){
        return false;
    }
    if (number > max){
        return false;
    }
    return true;
}

function gameIteration(input) {
    var rows = input.length;

    var result = [];

    for(var rowIndex = 0; rowIndex < rows; ++rowIndex)
    {
        var currentRow = input[rowIndex];
        var columns = currentRow.length;

        var newRow = [];

        for(var columnIndex = 0; columnIndex < columns; ++columnIndex)
        {
            // collect neibours
            var neibours = [];
            /*
             * 123
             * 4x5
             * 678
             */
            neibours = neibours.concat(collectTopRow(input, rowIndex, columnIndex), collectCurrentRow(currentRow, columnIndex), collectBottomRow(input, rowIndex, columnIndex));
            newRow.push(calc(neibours, isAlive));
        }
        result.push(newRow);
    }

    return result;
}

function collectLeftElement(row, currentColumn) {
    if (currentColumn == 0)
    {
        return false;
    }
    else
    {
        return row[currentColumn - 1];
    }
}

function collectRightElement(row, currentColumn) {
    if (currentColumn == (row.length - 1))
    {
        return false;
    }
    else
    {
        return row[currentColumn + 1];
    }
}

function collectBottomRow(matrix, currentRow, currentColumn) {
    if (currentRow === (matrix.length - 1))
    {
        return [false, false, false];
    }
    else
    {
        var row = matrix[currentRow + 1];
        return [collectLeftElement(row, currentColumn), row[currentColumn], collectRightElement(row, currentColumn)];
    }
}

function collectCurrentRow(row, currentColumn) {
    return [collectLeftElement(row, currentColumn), collectRightElement(row, currentColumn)];
}

function collectTopRow(matrix, currentRow, currentColumn) {
    if (currentRow === 0)
    {
        return [false, false, false];
    }
    else
    {
        var row = matrix[currentRow - 1];
        return [collectLeftElement(row, currentColumn), row[currentColumn], collectRightElement(row, currentColumn)];
    }
}