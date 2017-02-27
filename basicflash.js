var fs = require('fs');
//Creates a BasicFlash Card Constructor
var BasicFlash = function(front, back) {
    // (front) is the question
    this.front = front;
    // (back) has the answer
    this.back = back;
    console.log(`
    Front:  ${this.front}
    Back:   ${this.back}`)
};
//code for creating the new basic flash card
BasicFlash.prototype.writeBasic = function() {
    //saves user basic flashcard into the basic.txt file 
    fs.appendFile("basic.txt", JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        };
        console.log("New Basic Flash card was added to the basic.txt file")
    });
};

module.exports = { BasicFlash };