let tab = 1;

var tabs = document.getElementsByClassName('tab');
var newTabs = document.getElementsByClassName('new');

function backShow() {
    if (tab == 1) {
        document.getElementById('back').style.display = 'none';
    } else {
        document.getElementById('back').style.display = 'inline';
    }
}

function submitShow() {
    if (tab == tabs.length) {
        document.getElementById('next').style.display = 'none';
        document.getElementById('submit').style.display = 'inline';
    }
}

function submitHide() {
    if (tab < tabs.length) {
        document.getElementById('next').style.display = 'inline';
        document.getElementById('submit').style.display = 'none';
    }
}

// function addShow(){
//     if (tab < 3){
//         document.getElementById('add').style.display = 'none';
//     }else{
//         document.getElementById('add').style.display = 'inline';
//     }
// }

// function removeShow() {
//     //console.log(tab)

//     if (tab < 3) {
//         //console.log('working')
//         document.getElementById('removeEdu').style.display = 'none';
//     } else {
//         if (newTabs.length == 0) {
//             document.getElementById("removeEdu").style.display = 'none';
//         } else {
//             document.getElementById("removeEdu").style.display = 'inline';
//         }
//     }
// }

// function removeHide(){
//     if (tab < tabs.length){
//         document.getElementById('next').style.display = 'inline';
//         document.getElementById('submit').style.display = 'none';
//     }
// }


function Next() {
    if (tab < tabs.length) {
        document.getElementById(tab).classList.remove("active");
        document.getElementById(++tab).classList.add("active");
        //console.log(tab)

        //removeShow()
        submitShow()
        backShow()

    }
}

function Back() {
    document.getElementById(tab).classList.remove("active");
    document.getElementById(--tab).classList.add("active");
    backShow()
    submitHide()
    //removeShow()
}

count = 3;

// function AddEdu() {
//     var new_row = document.createElement("div");
//     new_row.setAttribute('id', count + 1)
//     new_row.setAttribute('class', 'tab edu new')
//     new_row.innerHTML = document.getElementById("3").innerHTML;
//     document.getElementById("main").append(new_row);
//     count++;
//     submitHide()
//     //removeShow()
// }

$(function () {
    var count = 1;
    $('#add-edu').on('click', function () {
        //   //console.log("add workng")
        if (count < 5) {
            $(".edu-main").append(`<div class="edu" id="e` + count + `">
                                    <input type="text" id="major_`+ count + `" class="major" placeholder="Major">
                                    <input type="text" id="institution_`+ count + `" class="institution" placeholder="Institution">
                                    <input type="number" id="jyear_`+ count + `" class="jyear" placeholder="Joining Year">
                                    <input type="number" id="pyear_`+ count + `" class="pyear" placeholder="Pass Out Year">
                                    <button type="button" class="remove remove-edu">x</button>
                            </div>`);
            count++;
        }
    });

    $(document).on('click', '.remove-edu', function () {
        // //console.log("remove workng")
        $(this).closest('div.edu').remove();
        count--;
    });
});

$(function () {
    var count = 1;
    $('#add-hobbie').on('click', function () {
        //   //console.log("add workng")
        if (count < 6) {
            $(".hobbie-main").append(`<div class="hobbie" id="h` + count + `">
                                <input type="text" id="hobbie_`+ count + `" placeholder="Hobbie">
                                    <button type="button" class="remove remove-hobbie">x</button>
                            </div>`);
            count++;
        }
    });

    $(document).on('click', '.remove-hobbie', function () {
        // //console.log("remove workng")
        $(this).closest('div.hobbie').remove();
        count--;
    });
});

$(function () {
    var count = 1;
    $('#add-project').on('click', function () {
        //   //console.log("add workng")
        if (count < 5) {
            $(".project-main").append(`<div class="project" id="p` + count + `">
                                            <input type="text" id="pro_title_`+ count + `" placeholder="Project Title">
                                            <input type="text" id="pro_category_`+ count + `" placeholder="Project Category">
                                            <input type="text" id="pro_month_`+ count + `" placeholder="Month">
                                            <input type="number" id="pro_year_`+ count + `" placeholder="Year">
                                            <textarea id="pro_desc_`+ count + `"  cols="30" rows="5" placeholder="Project Description" ###></textarea>
                                            <button type="button" class="remove remove-project">x</button>
                                    </div>`);
            count++;
        }
    });

    $(document).on('click', '.remove-project', function () {
        // //console.log("remove workng")
        $(this).closest('div.project').remove();
        count--;
    });
});

$(function () {
    var count = 1;
    $('#add-skill').on('click', function () {
        //   //console.log("add workng")
        if (count < 8) {
            $(".skill-main").append(`<div class="skill" id="s` + count + `">
                                        <input type="text" id="skill_title_` + count + `" placeholder="Skill">
                                        <div class="slider-container">
                                            <input class="slider" id="skill_range_` + count + `" type="range" min="0" max="100" value="0" step="5" oninput="rangeValue` + count + `.innerText = this.value">
                                            <p id="rangeValue` + count + `">0</p>
                                        </div>
                                        <button type="button" class="remove remove-skill">x</button>
                                    </div>`);
            
            count++;
        }
    });

    // <div class="skill id="s` + count + `">
    //                                     <input type="text" id="skill_title_`+ count + `" placeholder="Skill">
    //                                     <div class="skill-slider">
    //                                         <input class="slider" id="skill_range_`+ count + `" type="range" value="0" min="0" max="100" step="5">
    //                                     </div>
    //                                     <button type="button" class="remove remove-project">x</button>
    //                                  </div>`

    $(document).on('click', '.remove-skill', function () {
        // //console.log("remove workng")
        $(this).closest('div.skill').remove();
        count--;
    });
});




// let hobbie = document.createElement('div');
// hobbie.setAttribute('class', 'hobbie');
// let parent = document.getElementById('hobbies-list');
// parent.appendChild(hobbie);

// let addHobbie = document.getElementById('addHobbie');
// addHobbie.addEventListener('click',addHobbieFunction);

// // function addHobbieFunction()(
//     let html = '<div class="hobbie-new">
//     <input type="text" class="hobbie" id="hobbie-${count}" placeholder="Hobbie">
//     <button type="button" id="removeHobbie" onclick="removeHobbies()">Remove</button>
//     </div>';
// )
// function addHobbies(){
//     var new_hobbie = document.createElement("div");
//     // new_hobbie.setAttribute('type','text')
//     // new_hobbie.setAttribute('class','hobbie')
//     // new_hobbie.setAttribute('id', "hobbie-" + (count+1))
//     // new_hobbie.setAttribute('placeholder', 'Hobbie')
//     html = "<input type='text' class='hobbie' id='hobbie-1' placeholder='Hobbie'><button>"
//     document.getElementById("hobbies-list").appendChild(new_hobbie);
//     count++;
//     hobbies = document.getElementsByClassName("hobbie");
//     //console.log("<input type='text' class='hobbie' id='hobbie-%d' placeholder='Hobbie'",count)
//     document.getElementById("removeHobbie").style.display = 'inline';
//     submitHide()
//     removeShow()
// }

// function remove(){
//     var arr = [...newTabs];
//     var last = document.getElementById(count);
//     last.parentElement.removeChild(last);
//     //console.log(arr.length,arr,arr[arr.length-1])
// }

// function remove() {
//     if (count > 3) {
//         let element = document.getElementById(count);
//         element.remove();
//         //console.log(element)
//         count--;
//     }
// }

// function removeEdu() {
//     var arr = [...newTabs];
//     if (newTabs.length > 0) {
//         if (tab == tabs.length) {
//             Back()
//             remove()
//             submitShow()
//         } else {
//             remove()
//             submitShow()
//         }
//     } if (newTabs.length == 0) {
//         document.getElementById('remove').style.display = 'none';
//     }


// }

// function removeHobbies() {
//     if (count > 3) {
//         const element = document.getElementById(count);
//         element.remove();
//         //console.log(element)
//         count--;
//     }
//     var arr = [...newHobbies];
//     if (newHobbies.length > 0) {
//         if (tab == tabs.length) {
//             Back()
//             remove()
//             submitShow()
//         } else {
//             remove()
//             submitShow()
//         }
//     } if (newTabs.length == 0) {
//         document.getElementById('remove').style.display = 'none';
//     }}

//SUBMIT

var x = 0;
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

function handleSubmit() {

    arrPersonal[0] = document.getElementById('fname').value;
    arrPersonal[1] = document.getElementById('lname').value;
    arrPersonal[2] = document.getElementById('jobtitle').value;
    arrPersonal[3] = document.getElementById('aboutme').value;

    arrContact[0] = document.getElementById('phone').value;
    arrContact[1] = document.getElementById('email').value;
    arrContact[2] = document.getElementById('website').value;
    arrContact[3] = document.getElementById('address').value;
    arrContact[4] = document.getElementById('pincode').value;

    const inputImg = document.querySelector('#profileImage');
    const readImg = new FileReader();
    if (inputImg.files[0]) {
        readImg.readAsDataURL(inputImg.files[0])
        //console.log('img working', inputImg.files[0])

    }
    // imageResult = document.querySelector('#imageResult')
    // imageResult.style.width = "100%"
    readImg.onloadend = function() {
        sessionStorage.setItem("Image", readImg.result);
        //console.log('imgURL working',readImg.result)
    }
    //console.log('imgURL not working')
    // new_element.setAttribute('src', 'resume_original/resources/profilepic-default.png')


    const edu = document.querySelectorAll(".edu");
    //console.log("edu", i)

    var i = 0;
    edu.forEach((e) => {
        arrMajor[i] = document.getElementById('major_' + i).value;
        arrInstitution[i] = document.getElementById('institution_' + i).value;
        arrJyear[i] = document.getElementById('jyear_' + i).value;
        arrPyear[i] = document.getElementById('pyear_' + i).value;
        i++;
        //console.log("edu inside", i)

    });

    var j = 0;
    //console.log("hobbie", j)
    const hobbie = document.querySelectorAll(".hobbie");
    hobbie.forEach((e) => {
        arrHobbie[j] = document.getElementById('hobbie_' + j).value;
        j++;

        //console.log("hobbie", arrHobbie)

    });

    var k = 0;
    //console.log("proj", i)
    const project = document.querySelectorAll(".project");
    project.forEach((e) => {
        arrProTitle[k] = document.getElementById('pro_title_' + k).value;
        arrProCat[k] = document.getElementById('pro_category_' + k).value;
        arrProMonth[k] = document.getElementById('pro_month_' + k).value;
        arrProYear[k] = document.getElementById('pro_year_' + k).value;
        arrProDesc[k] = document.getElementById('pro_desc_' + k).value;
        k++;

        //console.log("t", arrProTitle)
        //console.log("c", arrProCat)
        //console.log("m", arrProMonth)
        //console.log("y", arrProYear)
        //console.log("d", arrProDesc)



    });

    var l = 0;
    //console.log("skill", i)
    const skill = document.querySelectorAll(".skill");
    skill.forEach((e) => {
        arrSkillTitle[l] = document.getElementById('skill_title_' + l).value;
        arrSkillRange[l] = document.getElementById('skill_range_' + l).value;
        l++;

        //console.log("st", arrSkillTitle)
        //console.log("sr", arrSkillRange)

    });


    //console.log("arrayPersonal :", arrPersonal)
    //console.log("arrayContact :", arrContact)

    sessionStorage.setItem("Personal", JSON.stringify(arrPersonal));

    sessionStorage.setItem("Contact", JSON.stringify(arrContact));

    sessionStorage.setItem("Majors", JSON.stringify(arrMajor));
    sessionStorage.setItem("Institutions", JSON.stringify(arrInstitution));
    sessionStorage.setItem("Jyears", JSON.stringify(arrJyear));
    sessionStorage.setItem("Pyears", JSON.stringify(arrPyear));

    sessionStorage.setItem("Hobbies", JSON.stringify(arrHobbie));

    sessionStorage.setItem("Pro_Title", JSON.stringify(arrProTitle));
    sessionStorage.setItem("Pro_Cat", JSON.stringify(arrProCat));
    sessionStorage.setItem("Pro_Month", JSON.stringify(arrProMonth));
    sessionStorage.setItem("Pro_Year", JSON.stringify(arrProYear));
    sessionStorage.setItem("Pro_Desc", JSON.stringify(arrProDesc));


    sessionStorage.setItem("Skill_Title", JSON.stringify(arrSkillTitle));
    sessionStorage.setItem("Skill_Range", JSON.stringify(arrSkillRange));


}

