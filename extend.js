module.exports = function(to) {
    var dest = to;
    [].slice.call(arguments, 1).forEach(function(from){
        var props = Object.getOwnPropertyNames(from);
        props.forEach(function(name) {
            var destination = Object.getOwnPropertyDescriptor(from, name);
            Object.defineProperty(dest, name, destination);
        });
    })
    return dest;
};