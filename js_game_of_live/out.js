/**
 * Created by Alex on 15.07.2017.
 */

function outputTD(matrix)
{
    var field = document.getElementById("field");
    field.innerHTML = "";

    for(var i = 0; i < matrix.length; ++i)
    {
        var tr = document.createElement("tr");

        var row = matrix[i];
        for(var j = 0; j < row.length; ++j)
        {
            var value = row[j];

            var td = document.createElement("td");
            td.setAttribute("class", value ? "alive" : "dead");

            tr.appendChild(td);
        }

        field.appendChild(tr);
    }
}

function outputCanvas(matrix)
{
    var field = document.getElementById("field");
    var ctx = field.getContext('2d');
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, matrix.length * pixelSize, matrix[0].length * pixelSize);

    for(var i = 0; i < matrix.length; ++i)
    {
        var row = matrix[i];
        for(var j = 0; j < row.length; ++j)
        {
            var value = row[j];
            if (value)
            {
                ctx.fillStyle = "#000000"
                ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
            }
        }
    }
}

