/**
 * Created by Alex on 15.07.2017.
 */
function createInitialValue(w, h)
{
    var field = [];
    for(var i = 0; i < w; ++i)
    {
        var newRow = [];
        for(var j = 0; j < h; ++j)
        {
            newRow.push(Math.random() > cellIsAlive);
        }
        field.push(newRow);
    }
    return field;
}