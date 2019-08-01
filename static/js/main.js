var rellax = new Rellax('.rellax');
new WOW().init();
$("#checkin").on("click", function() {
   $("#calendar-title").html("Check In");
    $("#calendar-description").html("For the first hour, participants of Raven Hack will get their goodies (such as stickers & API codes) as well as the basic rundown of the schedule.");
});
$("#teams").on("click", function() {
   $("#calendar-title").html("Team Forming");
    $("#calendar-description").html("Simultaneously to the check in process, teams of 3-4 will be formed in an efficient manner to ensure that everyone at Raven Hack is involved in some regard.");
});
$("#workshop").on("click", function() {
   $("#calendar-title").html("Workshop");
    $("#calendar-description").html("We understand that some students, regardless of their expertise, will have trouble finding a starting point. In light of aiding these very students, we will host workshops throughout Raven Hack to introduce new APIs and technologies for our hackers to use.");
});
$("#food").on("click", function() {
   $("#calendar-title").html("Food");
    $("#calendar-description").html("We know what everyone wants at 1PM... 🍕🍕🍕🍪🍪🥤. Of course, students are also welcome to continue working on their projects whilst eating.");
});
$("#judging").on("click", function() {
   $("#calendar-title").html("Judging");
    $("#calendar-description").html("We'll have judges from all over industry review your well-constructed submissions to determine which projects fit which categories best.");
});
$("#keynote").on("click", function() {
   $("#calendar-title").html("Keynote");
    $("#calendar-description").html("This keynote will bring you the takeaway message of Raven Hack - it's not about hacking, but rather the experience. An idea you take from Raven Hack could emerge as the next big thing.");
});
$("#closing").on("click", function() {
   $("#calendar-title").html("Closing Remarks & Dinner");
    $("#calendar-description").html("You're tired. We're tired. Don't worry, we get - we just want to thank everyone who helped at this point and get you back home (hopefully with good opinions of the event).");
});