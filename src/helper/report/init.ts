// This class required to clear report folder and create new folder

const fs = require("fs-extra");

try {
    fs.ensureDir("test-results");
    fs.emptyDir("test-results");
} catch (error) {
    console.log("Folder not created!!" + error);
}