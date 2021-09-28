let thing = document.getElementById("thing");
document.getElementById("thing").addEventListener('click', () => {
   
    if(thing.innerHTML === "On"){
        thing.innerHTML = "Off";
        chrome.storage.local.set({state: false}, function() {
            console.log('Value is set to ' + value);
        });
          
    } else {
        thing.innerHTML = "On"
        chrome.storage.local.set({state: true}, function() {
            console.log('Value is set to ' + value);
        });
    }
})

chrome.storage.local.get(['state'], function(result) {
    if(result.state) {
        thing.innerHTML = "On";
    } else {
        thing.innerHTML = "Off";
    }
    console.log('Value currently is ' + result.state);
})