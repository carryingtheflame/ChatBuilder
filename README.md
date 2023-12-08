# ChatBuilder
 Structures chat service work.


## Installation
1. Click the green button labeled Code up top, then click "Download ZIP."
2. Unzip the folder.
3. Open Chat Builder.html in Google Chrome.


## How to Use
1. Click the appropriate conversation stage.
2. To add blue or green text to the composition field at the bottom, click on that text.
3. Edit the composition field as desired.
4. To cut your composed text, either:
    1. Click the scissors button (✂️), or
    2. Press the Enter key.
5. Paste the text into your chat app.


## Troubleshooting

### Cut Text Too Soon
No worries, the text is probably still on your clipboard. Simply paste it using one of these options:
1. Option 1
    1. Click the composition field.
    2. Click "Edit" from the top of your browser window.
    3. Click "Paste."
2. Option 2
    1. Right click the composition field.
    2. Click "Paste."
3. Option 3
    1. Hold down the Control key (Windows and Linux) or Command key (Mac).
    2. Press the V key.

### Button Label Not Displaying Correctly
If the scissors button label (✂️) is showing up as odd characters instead of as an emoticon, change the character set of your browser to UTF-8.

- Firefox
    1. Click "View" from the top of your browser window.
    2. Click "Text Encoding."
    3. Click "Unicode (UTF-8)" from the dropdown menu.
- Safari
    1. Click "View" from the top of your browser window.
    2. Click "Text Encoding."
    3. Click "Unicode (UTF-8)" from the dropdown menu.
- Internet Explorer
    1. Navigate to the page you're having trouble viewing.
    2. Right-click on the page.
    3. Mouse over "Encoding."
    4. In the expanded menu, click "Unicode (UTF-8)."

Chrome and Edge do not allow the user to change the character encoding. This app was developed for Chrome, so if you are having this problem with Chrome, please write to me and let me know. 

Need clarification, having other issues, or have ideas for improvement? Write me at <carryingtheflame@protonmail.com>.


## Development Notes

### Privacy and Security
Security and privacy are paramount to chat services, and this codebase was designed to support privacy and security goals in a few ways.

First, this code runs entirely on the user's computer, in their Web browser. This ensures there are no marginal risks associated with sending data over the Internet.

Second, this code does not rely on external libraries--they are not linked or copied in. This eliminates risks associated with external libraries which send private data to advertising agencies such as Facebook ([true story](https://www.statnews.com/2023/06/13/suicide-hotlines-988-data-privacy-facebook/)).
