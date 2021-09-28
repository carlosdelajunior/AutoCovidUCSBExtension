let shhh = 50 * Math.random();
function autofill() {
    // Get all 'span' elements on the page
    let inputs = document.getElementsByTagName("input");
    if(location.href === "https://studenthealthoc.sa.ucsb.edu/home.aspx") {
        location.href = "https://studenthealthoc.sa.ucsb.edu/Mvc/Patients/QuarantineSurvey";
    }
    if(location.href === "https://studenthealthoc.sa.ucsb.edu/CheckIn/Survey/Intro/24") {
        location.href = "https://studenthealthoc.sa.ucsb.edu/CheckIn/Survey/ShowAll/24";
    }
    if(location.href === "https://studenthealthoc.sa.ucsb.edu/CheckIn/Survey/ShowAll/24") {
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].name.indexOf(".AnswerID") != -1
            && inputs[i].value == "2"){
                inputs[i].click();            
            }
        }
        setTimeout(function(){ 
            let btns = document.getElementsByTagName("input");
            for(let j = 0; j < btns.length; j++){
            if(btns[j].classList.contains("btn-success")){
                let continueBtn = btns[j];
                continueBtn.click();
                break;
            }
        }
        
    
        }, shhh);
    }
    if(location.href === "https://studenthealthoc.sa.ucsb.edu/SurveyFormsHome.aspx?success=1"){
        document.getElementById("showQuarantineBadge").click();
    }

    
    
}

chrome.storage.local.get(['state'], function(result) {
    if(result.state) {
        autofill();
    }
})

// Ensures ads will be removed as the user scrolls
// setInterval(function () {
//     removeAds();
// }, 100)
