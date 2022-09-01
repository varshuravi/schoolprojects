let teacherlist =[];

$(document).ready(function () {
    $("#Submit").click(function () {
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let age = $("#age").val();
        let standard = $("#standard").val();
        let address = $("#address").val();
        let gender = $("input[name='gender']:checked").val();
        let dob = $("#dob").val();
        let City = $("City").val();
        let state = $("#state").val();
        let country = $("#country").val();
        let selectlanguage = $("#selectlanguage").val();
        let selectblood = $("#selectblood").val();
        const teacher = {
            fname: fname,
            lname: lname,
            mobile: mobile,
            email: email,
            age: age,
            standard: standard,
            address: address,
            gender: gender,
            dob: dob,
            City: City,
            state: state,
            country: country,
            selectlanguage: selectlanguage,
            selectblood: selectblood,
        };
       console.log(teacher);
        $.ajax({
            url:"https://63071845c0d0f2b801268d97.mockapi.io/teacher",
            method: "post",
            data: teacher,
            datatype: "json",
            success: function (result) {
                teacherlist.push(result);
                // onloadfromAPI();
                // window.location.href = "/html/teacherslist.html"

            },

            error: function (error) {
                console.log(error);
            },

        });
        console.log(teacher);

});

})