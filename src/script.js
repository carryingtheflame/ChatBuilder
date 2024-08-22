/* JavaScript code for Chat Builder
   All custom for security purposes
*/

// Called when the window loads
window.onload = function() {
  
  // Activate the first tabbed card.
  showStageInfoCard("establishingRapport");

  // Make all copyable text elements interactive.
  initializeCopyables();

  // Make all random text elements interactive.
  initializeRandomables();

  // Keybinding
  window.addEventListener('keydown', function (event) {

    // Bind the return key to the copy and clear text function
    /*if (event.key == "Enter") {
        copyAndClearCompositionField();
    }*/
    // Bind Ctrl-X to the copy and clear text function (Windows, Linux)
    if (event.ctrlKey && event.code === 'KeyX') {
      copyAndClearCompositionField();
    }
    // Bind Cmd-X to the copy and clear text function (Mac)
    if (event.metaKey && event.code === 'KeyX') {
      copyAndClearCompositionField();
  }
  });

};

/* Composition Field */

// Appends the given text to the composition field, then shifts focus to the field.
function appendToCompositionField(text) {
  fieldValue = document.getElementById("compositionField").value;
  lastChar = fieldValue.charAt(fieldValue.length - 1)

  // Add a space if a bunch of conditions are met:
  if(fieldValue.length != 0 && // The field is not empty
      lastChar != " " &&       // The last character in the field is not a space
      text.charAt(0) != "." && // The new text does not start with a period
      text.charAt(0) != ","){  // The new text does not start with a comma
    fieldValue += " ";  
  }

  // Append the desired text, followed by a space. 
  fieldValue += text + " ";
  
  // Remove any double spaces
  fieldValue = fieldValue.replace(/\s{2,}/g, ' ');

  // Replace any instances of " ." with "."
  fieldValue = fieldValue.replaceAll(' .', '.');

  // Replace any instances of ".." with "."
  fieldValue = fieldValue.replaceAll('..', '.');

  // Replace any instances of ",," with ","
  fieldValue = fieldValue.replaceAll(',,', ',');

  // Replace any instances of " ," with ","
  fieldValue = fieldValue.replaceAll(' ,', ',');

  document.getElementById("compositionField").value = fieldValue;

  // Then shift focus to the composition field so the user can keep typing.
  document.getElementById("compositionField").focus()

}

// Copies the composition field text to clipboard, then clears the field.
function copyAndClearCompositionField(){

  // Carry out the cut action only if the field is not empty (user error safeguard).
  if (document.getElementById("compositionField").value.length != 0){
    copyCompositionField();
    clearCompositionField();
  }
}

// Clears the text field.
function clearCompositionField(text) {
  document.getElementById("compositionField").value = "";
}

// Copies the composition field text to clipboard
function copyCompositionField() {

  // Get the text field
  var copyText = document.getElementById("compositionField");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Flash the confirmation text
  visuallyConfirmTextCopied();
}

// Gives user visual feedback confirming that the text has been copied
function visuallyConfirmTextCopied(){
  // First, show the text
  //document.getElementById("copiedConfirmationText").style.visibility = "visible";
  document.getElementById("copyAndClearTextButton").innerText = "✅";

  // Then, after a moment, switch the icon back
  window.setTimeout(disableCopyTextVisualConfirmation, 420.69);
}

// Disables the visual confirmation that text has been copied
function disableCopyTextVisualConfirmation(){
  //document.getElementById("copiedConfirmationText").style.visibility = "hidden"
  document.getElementById("copyAndClearTextButton").innerText = "✂️";
  
}


/* Reference Panel */ 

// Makes all copyable text elements interactive. 
function initializeCopyables() {
  copyables = document.getElementsByClassName("copyables");

  const copyableClicked = e => {
    appendToCompositionField(e.target.innerText);
  };

  for (var x = 0; x < copyables.length; x++) {
    copyables[x].addEventListener("click", copyableClicked);
  }
}

// Makes all random text elements interactive. 
function initializeRandomables() {

  // Random name picker.
  document.getElementById("randomName").addEventListener("click", randomNamePickerClicked);
  
}

// Random name picker.
function randomNamePickerClicked(){
  const names = ["Summer", "Ali", "Olive", "Jamie", "Alex", "Blake", "Drew", "Jordan", "Taylor", "Jul", "Emerson", "Charli", "Ryan", "Riley", "Bobbi", "Ash", "Jo", "Finley", "Jessie", "Skyler", "Frankie", "Peyton", "Dakota", "Hunter", "Elm", "Hawthorn", "Avery", "Lennox", "Robin", "Max", "Sam", "Jay", "River", "Rory", "Harbor", "Cam", "Rowan", "Marlowe"];
  const pickedName = names[Math.floor(Math.random() * names.length)];
  appendToCompositionField(pickedName);
}

// Shows the given stage information card.
// Called when initializing webpage and clicking a tab.
function showStageInfoCard(stage){

  // Reset all tabs to background style,
  labelTabList = document.getElementsByClassName("labelTab");
  for (var x = 0; x < labelTabList.length; x++) {
    labelTabList[x].style.border = "1px solid black";
    labelTabList[x].style.boxShadow = "inset 0 -0.25em 0.5em -0.4em black" // "inset x-offset y-offset blur-radius spread-radius gray";
  }

  // Then restyle only the active tab to the foreground style
  activeTab = document.getElementById(stage + "Tab");
  activeTab.style.borderBottom = "none";
  activeTab.style.boxShadow ="none";
  
  // Hide all the stage info cards,
  stageInfoList = document.getElementsByClassName("stageInfoCards");
  for (var x = 0; x < stageInfoList.length; x++) {
    stageInfoList[x].style.display = "none";
  }

  // Then show only the active card
  document.getElementById(stage + "Info").style.display = "block";
}

