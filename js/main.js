var siteName = document.getElementById('siteName')
var siteLink = document.getElementById('siteLink')
var siteList = [];

if(localStorage.getItem('site') !== null){
    siteList = JSON.parse(localStorage.getItem('site'));
    displaySite()
    } else{
    siteList=[]
    }
// add site 
function addSite(){
    if (validateSiteName() && validateSiteLink()){
    var site={
    sName : siteName.value,
    sLink : siteLink.value,
    }
    siteList.push(site);
    localStorage.setItem('site',JSON.stringify(siteList))
    clearForm()
    displaySite()
    }
}
// display site 
function displaySite(){
    var box =``;
    for(var i=0;i<siteList.length;i++){
    box += `
    <tr>
        <td>${i+1}</td>
        <td>${siteList[i].sName}</td>
        <td><a href="${siteList[i].sLink}" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i> Visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>
    `
    }
    document.getElementById('contentTable').innerHTML=box;
    }

// delete site 
function deleteSite(index){
    siteList.splice(index,1)
    displaySite()
    localStorage.setItem('site',JSON.stringify(siteList))
}
// validation for Site name
function validateSiteName() {
    var regex = /^[A-Z][a-z]{1,20}$/;
    if (regex.test(siteName.value)) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
        return true;
    } else {
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");
        return false;
    }
}
// validation for Site link
function validateSiteLink() {
    var regex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
    if (regex.test(siteLink.value)) {
        siteLink.classList.add("is-valid");
        siteLink.classList.remove("is-invalid");
        return true;
    } else {
        siteLink.classList.add("is-invalid");
        siteLink.classList.remove("is-valid");
        return false;
    }
}
// clear form 
function clearForm(){
    siteName.value = '';
    siteLink.value = '';
    siteName.classList.remove("is-valid")
    siteLink.classList.remove("is-valid")
}