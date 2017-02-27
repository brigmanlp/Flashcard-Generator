var fs = require('fs');
//Creates a ClozeFlash Card Constructor
var ClozeFlash = function(text, cloze) {
    // (text) is the full question
    this.text = text;
    // (cloze) has the missing word answer
    this.cloze = cloze;
};
//replace the (cloze) with a blank space, to be used when displaying the flash cards for studying
ClozeFlash.prototype.displayCloze = function() {
    var display = this.text.replace(this.cloze, "...");
    return display;
    console.log(display);
};

//code for creating the new cloze flash card
ClozeFlash.prototype.writeCloze = function() {
    //write the user input to a separate text file
    fs.appendFile("cloze.txt", JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        };
        console.log("New Cloze Flash card was added to the cloze.txt file")
    });
};

ClozeFlash.prototype.findCloze = function() {
    var find = this.text.search(this.cloze);
    if (find !== -1) {
        this.writeCloze();
        this.displayCloze();
    } else {
        console.log("That answer is incorrect. Please try again.")
    }
};


module.exports = { ClozeFlash };