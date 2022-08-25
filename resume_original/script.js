window.addEventListener('load', () => {

    var arrPersonal = new Array();
    var arrContact = new Array();
    var arrMajor = new Array();
    var arrInstitution = new Array();
    var arrJyear = new Array();
    var arrPyear = new Array();
    var arrHobbie = new Array();
    var arrProTitle = new Array();
    var arrProCat = new Array();
    var arrProMonth = new Array();
    var arrProYear = new Array();
    var arrProDesc = new Array();
    var arrSkillTitle = new Array();
    var arrSkillRange = new Array();
    var imgResult = 0;

    arrPersonal = JSON.parse(sessionStorage.getItem('Personal'));
    imgResult = sessionStorage.getItem('Image')


    arrContact = JSON.parse(sessionStorage.getItem('Contact'));

    arrMajor = JSON.parse(sessionStorage.getItem('Majors'));
    arrInstitution = JSON.parse(sessionStorage.getItem('Institutions'));
    arrJyear = JSON.parse(sessionStorage.getItem('Jyears'));
    arrPyear = JSON.parse(sessionStorage.getItem('Pyears'));

    arrHobbie = JSON.parse(sessionStorage.getItem('Hobbies'));

    arrProTitle = JSON.parse(sessionStorage.getItem('Pro_Title'));
    arrProCat = JSON.parse(sessionStorage.getItem('Pro_Cat'));
    arrProMonth = JSON.parse(sessionStorage.getItem('Pro_Month'));
    arrProYear = JSON.parse(sessionStorage.getItem('Pro_Year'));
    arrProDesc = JSON.parse(sessionStorage.getItem('Pro_Desc'));

    arrSkillTitle = JSON.parse(sessionStorage.getItem('Skill_Title'));
    arrSkillRange = JSON.parse(sessionStorage.getItem('Skill_Range'));
    

    //const aboutme = sessionStorage.getItem('ABOUTME');

    if (arrPersonal){
    document.getElementById('fname').innerHTML = arrPersonal[0];
    document.getElementById('lname').innerHTML = arrPersonal[1];
    document.getElementById('jobtitle').innerHTML = arrPersonal[2];
    document.getElementById('aboutme').innerHTML = arrPersonal[3];
    }

    if (imgResult){
    document.getElementById('img-content').setAttribute('src', imgResult);
    }

    if(arrContact){
    document.getElementById('phone').innerHTML = arrContact[0];
    document.getElementById('email').innerHTML = arrContact[1];
    document.getElementById('website').innerHTML = arrContact[2];
    document.getElementById('address').innerHTML = arrContact[3];
    document.getElementById('pincode').innerHTML = arrContact[4];
    }

    if(arrMajor){
    var i=0;
    var j=0;
    arrMajor.forEach( (e) => {
            $("#edu-content").append(`<ul class="edu">
                                        <li>
                                        <h4 id="major_`+i+`">`+arrMajor[i]+`</h4>
                                        <p id="institution_`+i+`">`+arrInstitution[i]+`</p>
                                        <p> <span id="jyear_`+i+`">`+arrJyear[i]+`</span> - <span id="pyear_`+i+`">`+arrPyear[i]+`</span></p>
                                        </li>
                                      </ul>`);
            //console.log("creating edu",i)
            i++;
    });
    }

    if(arrHobbie){
        var i=0;
        var j=0;
        //console.log("working hobbie")
        arrHobbie.forEach( (e) => {
                $("#hobbie-content").append(`<li id="hobbie_`+i+`">`+arrHobbie[i]+`</li>`);
                //console.log("creating hobbie",i)
                i++;
        });
    }

    if(arrProTitle){
        var i=0;
        var j=0;
        //console.log("working project")
        arrProTitle.forEach( (e) => {
                $("#project-content").append(`<div class="project">
                                                <div class="time">
                                                    <h5><span class="proMonth">`+arrProMonth[i]+`</span>  <span class="proMonth">`+arrProYear[i]+`</span></h5>
                                                </div>
                                                
                                                <div class="work">
                                                    <h5>`+arrProTitle[i]+`</h5>
                                                    <h5>`+arrProCat[i]+`</h5>
                                                    <p>`+arrProDesc[i]+`</p>
                                                </div>
                                            </div>`);
                //console.log("creating project",i)
                i++;
        });
    }

    if(arrSkillTitle){
        var i=0;
        var j=0;
        //console.log("working project")
        arrSkillTitle.forEach( (e) => {
                $("#skill-content").append(`<div class="box">
                                                <h5>`+arrSkillTitle[i]+`</h5>
                                                <div class="percent">
                                                    <div style="width:`+arrSkillRange[i]+`%;"></div>
                                                </div>
                                            </div>`);
                //console.log("creating project",i)
                i++;
        });
    }
})