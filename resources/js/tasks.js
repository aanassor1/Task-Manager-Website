function openSideNav() {
    var sidenav = document.getElementById("theSideNav");
    if (sidenav.style.width == "0px") {
        sidenav.style.width = "250px";
    } else {
        sidenav.style.width = "0px";
    }
}

function meetingButton() {
    var menu = document.getElementById("meeting-tasks");
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

function websiteButton() {
    var menu = document.getElementById("website-tasks");
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

function openAlert() {
    var alertBox = document.getElementById("alert-box");
    var settingsBox = document.getElementById("settings-box");
    if (alertBox.style.display == "none") {
        alertBox.style.display = "block";
        settingsBox.style.display = "none";
    } else {
        alertBox.style.display = "none";
    }
};

function openSettings() {
    var alertBox = document.getElementById("alert-box");
    var settingsBox = document.getElementById("settings-box");
    if (settingsBox.style.display == "none") {
        alertBox.style.display = "none";
        settingsBox.style.display = "block";
    } else {
        settingsBox.style.display = "none";
    }
};

function homeClick() {
    window.location = "hub.html";
};

function reminderClick() {
    window.location = "reminders.html";
};

function todayScheduleClick() {
    window.location = "today-schedule.html";
};

function calenderClick() {
    window.location = "calender.html";
};

function tasksClick() {
    window.location = "tasks.html";
};

function signOutClick() {
    window.location = "index.html";
};