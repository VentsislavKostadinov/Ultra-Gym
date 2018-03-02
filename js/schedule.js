$(document).ready(function () {


    $("#monday").click(function () {

        $("#mondayEffect").slideToggle("slow");

        $("#tuesdayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#fridayEffect").hide();
        $("#saturdayEffect").hide();
        $("#sundayEffect").hide();

        });

    $("#tuesday").click(function () {

        $("#tuesdayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#fridayEffect").hide();
        $("#saturdayEffect").hide();
        $("#sundayEffect").hide();

    });

    $("#wednesday").click(function () {

        $("#wednesdayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#tuesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#fridayEffect").hide();
        $("#saturdayEffect").hide();
        $("#sundayEffect").hide();

    });

    $("#thursday").click(function () {

        $("#thursdayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#tuesdayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#fridayEffect").hide();
        $("#saturdayEffect").hide();
        $("#sundayEffect").hide();

    });

    $("#friday").click(function () {

        $("#fridayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#tuesdayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#saturdayEffect").hide();
        $("#sundayEffect").hide();
    });

    $("#saturday").click(function () {

        $("#saturdayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#tuesdayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#fridayEffect").hide();
        $("#sundayEffect").hide();

    });

    $("#sunday").click(function () {

        $("#sundayEffect").slideToggle("slow");

        $("#mondayEffect").hide();
        $("#tuesdayEffect").hide();
        $("#wednesdayEffect").hide();
        $("#thursdayEffect").hide();
        $("#fridayEffect").hide();
        $("#saturdayEffect").hide();
    });

});