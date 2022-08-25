<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
    <div class="container">
        <div class="left">
            <div class="profileImage">
                <img id="img-content" src="" alt="profile-img">
            </div>

            <div class="education">
                <h3>EDUCATION</h3>

                <div id="edu-content">
                        <!-- the education details will appear here -->
                </div>
            </div>

            <div class="interests">
                <h3>HOBBIES</h3>

                <div class="list">
                    <ul id="hobbie-content">
                           <!-- the hobbie details will appear here -->
                    </ul>

                </div>
            </div>

            <div class="contact">
                <div class="details">
                    <h4>Phone</h4>
                    <p>+91 <span id="phone"></span></p>
                </div>

                <div class="details">
                    <h4>Email</h4>
                    <p id="email"></p>
                </div>

                <div class="details">
                    <h4>Website</h4>
                    <p id="website"></p>
                </div>

                <div class="details">
                    <h4>Address</h4>
                    <p> <span id="address"></span> - <span id="pincode"></span></p>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="profileName">
                <h2> <span id="fname"></span> <span id="lname"></span></h2>
                <p id="jobtitle"></p>
            </div>

            <div class="personalInfo">
                <div class="aboutMe">
                    <h3>ABOUT ME</h3>
                    <p id="aboutme"></p>
                </div>
            </div>

            <div class="projects">
                <h3>MINI PROJECTS</h3>
                <div id="project-content">
                    <!-- the project details will appear here -->
                </div>
            </div>

            <div class="skills">
                <h3>PROGRAMMING SKILLS</h3>
                <div class="skillList">
                    <div class="skill" id="skill-content"> 
                        <!-- the skill details will appear here -->
                    </div>
            </div>
        </div>
    </div>
</body>
</html>
