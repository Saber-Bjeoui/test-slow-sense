module.exports.SHAPE_TYPE = {
    1: "Circle",
    2: "Rectangle",
    3: "Text"
}

module.exports.shape = function(rawData) {

    let obj = {}

    rawData.forEach((column) => {
        let columnName = column.metadata.colName[0].toLowerCase() + column.metadata.colName.substr(1);
        obj[columnName] = column.value;
    })

    return obj;
    
}