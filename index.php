<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Multistep Form</title>
</head>
<body>
    <div class="container">
        <form action="resume_original/index.php" method="get" id="resumeForm">
            <div class="content" id="main">
                <div class="tab active" id="1">
                    <h2>PERSONAL INFO</h2>
                    <input type="text" id="fname" placeholder="First Name" >
                    <input type="text" id="lname" placeholder="Last Name" >
                    <input type="text" id="jobtitle" placeholder="Designation" >
                    
                    <textarea id="aboutme"  cols="30" rows="5" placeholder="About Yourself" ></textarea>
                    <div class="pic">
                        <label for="pic" >Profile Photo</label>
                        <input type="file" id="profileImage" name="pic">
                    </div>
                </div>

                <div class="tab" id="2">
                    <h2>CONTACT INFO</h2>
                    <div class="phone">
                        <input type="text" value="+91" id="country-code">
                        <input type="number" id="phone" placeholder="Phone" >
                    </div>
                    <input type="email" id="email" placeholder="Email" >
                    <input type="text" id="website" placeholder="Website" >
                    <textarea id="address"  cols="30" rows="3" placeholder="Address" ></textarea>
                    <input type="number" id="pincode" placeholder="Pincode" >
                    
                </div>

                <!-- <div class="tab" id="3">
                        <h2>HOBBIES</h2>
                        <div id="hobbies-list">
                            <input type="text" class="hobbie" id="hobbie-1" placeholder="Hobbie" >
                            <input type="text" class="hobbie" id="hobbie-2" placeholder="Hobbie" >
                            <input type="text" class="hobbie" id="hobbie-3" placeholder="Hobbie" >
                             <div class="hobbie-new">alert(arrMajor[i]);"addHobbies()">Add</button>
                            <button type="button" id="removeHobbie" onclick="removeHobbies()">Remove</button>
                        </div>
                </div> -->

                <div class="tab" id="3">
                    <h2>EDUCATION</h2>
                    <div class="edu-main">
                        <div class="edu" id="e0">
                            <input type="text" id="major_0" class="major" placeholder="Major">
                            <input type="text" id="institution_0" class="institution" placeholder="Institution">
                            <input type="number" id="jyear_0" class="jyear" placeholder="Joining Year">
                            <input type="number" id="pyear_0" class="pyear" placeholder="Pass Out Year">
                    </div>
                    </div>
                    <div class="btn">
                        <button type="button" class="add" id="add-edu"><span>+</span></button>
                    </div>
                </div>

                <div class="tab" id="4">
                    <h2>HOBBIES</h2>
                    <div class="hobbie-main">
                        <div class="hobbie" id="h0">
                            <input type="text" id="hobbie_0" placeholder="Hobbie">
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" class="add" id="add-hobbie"><span>+</span></button>
                    </div>
                </div>

                <div class="tab" id="5">
                    <h2>PROJECTS</h2>
                    <div class="project-main">
                        <div class="project" id="p0">
                            <input type="text" id="pro_title_0" placeholder="Project Title">
                            <input type="text" id="pro_category_0" placeholder="Project Category">
                            <input type="text" id="pro_month_0" placeholder="Month">
                            <input type="number" id="pro_year_0" placeholder="Year">
                            <textarea id="pro_desc_0"  cols="30" rows="5" placeholder="About Project" ></textarea>
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" class="add" id="add-project"><span>+</span></button>
                    </div>
                </div>

                <div class="tab" id="6">
                    <h2>SKILLS</h2>
                    <div class="skill-main">
                        <div class="skill" id="s0">
                            <input type="text" id="skill_title_0" placeholder="Skill">
                            <div class="slider-container">
                                <input class="slider" id="skill_range_0" type="range" min="0" max="100" step="5" value="0" oninput="rangeValue.innerText = this.value">
                                <p id="rangeValue">0</p>
                            </div>
                        </div>
                        <!-- <div class="skill" id="s0">
                            <input type="text" id="skill_title_0" placeholder="Skill">
                            <div class="skill-slider">
                                <input class="slider" id="skill_range_0" type="range" value="0" min="0" max="100" step="5">
                            </div>
                        </div> -->
                    </div>
                    <div class="btn">
                        <button type="button" class="add" id="add-skill"><span>+</span></button>
                    </div>
                </div>

                <!-- <div class="tab edu" id="3">
                    <div>
                        <h2>EDUCATION</h2>
                        <input type="text" id="major" placeholder="Major" >
                        <input type="text" id="institution" placeholder="Institution" >
                        <input type="number" id="jyear" placeholder="Joining Year" >
                        <input type="number" id="pyear" placeholder="Pass Out Year" >
                    </div>
                    <div class="btn btn-edu add-remove">
                        <button type="button" id="addEdu" onclick="AddEdu()">Add</button>
                        <button type="button" id="removeEdu" onclick="removeEdu()">Remove</button>
                    </div>
                </div> -->

            </div>
            <div class="btns">
                <!-- <div class="btn btn-edu">
                    <button type="button" id="add" onclick="Add()">Add</button>
                    <button type="button" id="remove" onclick="Remove()">Remove</button>
                </div> -->
                <div class="btn btn-main">
                    <button type="button" id="back" onclick="Back()">Back</button>
                    <button type="button" id="next" onclick="Next()">Next</button>
                    <button type="submit" id="submit"  onclick="handleSubmit()">Submit</button>
                </div>
            </div>
        </form>
    </div>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>
