# Assignment 5 - Fun with JavaScript

Solution files: `fancifymytext.html` and `fancifymytext.js`.

Live page after uploading both files to the repository root:
https://wahid1sher.github.io/fancifymytext.html

## How to use

Type text into the Text box.

- Bigger! sets the font size to 24pt.
- FancyShmancy makes the text bold, blue, and underlined.
- BoringBetty removes those three styles. The larger size stays.
- Moo makes the text uppercase and adds -Moo to the last word of each sentence ending with a period.

Example: `Hello there. Nice day.` becomes `HELLO THERE-Moo. NICE DAY-Moo.`

Text without a final period becomes uppercase but does not get a suffix.

## Alert practice

The assignment uses alerts as early tests, then replaces them with text changes.
To try the button test, uncomment `alert("Hello, world!");` inside `makeBigger()`.
To try the radio test, add `alert("Style changed!");` inside `changeStyle()`.
Save, reload the page, click the matching control, and then remove the test alert.
