/**
 * Filter out release notes from release-notes.md
 *
 * It will only print out the content under the first headline.
 */

const fs = require('fs');

const content = fs.readFileSync('CHANGELOG.md', 'utf-8');

let headlineCounter = 0;

content.split('\n').filter(line => {
    if (line.startsWith('#')) {
        headlineCounter++;
    } else {
        if (headlineCounter === 1) {
            return true;
        }
    }
    return false
}).forEach(filteredLine => {
    console.log(filteredLine);
});