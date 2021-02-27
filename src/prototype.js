//#region Array
Array.prototype.removeAll = Array.prototype.removeAll || function() {
    this.splice(0,this.length)
}

Array.prototype.remove = Array.prototype.remove || function(item) {
    let index = this.indexOf(item);
    this.splice(index,1)
}

Array.prototype.append = Array.prototype.append || function(items) {
    this.push.apply(this, items);
}

Array.prototype.clone = Array.prototype.clone || function(items) {
    return this.map(item => {
        if (item instanceof Object) {
            return {...item};
        }
        return item;
    });
}
//#endregion Array
