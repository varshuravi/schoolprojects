let studentlist =[];

$(document).ready(function () {
    $("#Submit").click(function () {
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let  password = $("#password").val();
        let standard = $("#standard").val();
        let address = $("#address").val();
        let gender = $("input[name='gender']:checked").val();
        let dob = $("#dob").val();
        let City = $("#city").val();
        let state = $("#state").val();
        let country = $("#country").val();
        let selectlanguage = $("#selectlanguage").val();
        let selectblood = $("#selectblood").val();
alert(fname);
        const student = {
            fname: fname,
            lname: lname,
            mobile: mobile,
            email: email,
            password:password,
            standard: standard,
            Address: Address,
            Gender: Gender,
            dob: dob,
            city: city,
            state: state,
            country: country,
            selectlanguage: selectlanguage,
            selectblood: selectblood,
        };
       console.log(student);
        $.ajax({
            url: "",
            method: "post",
            data: student,
            datatype: "json",
            success: function (result) {
                teacherlist.push(result);
                // onloadfromAPI();
                // window.location.href = "/html/studentlist.html"

            },

            error: function (error) {
                console.log(error);
            },

        });
        console.log(student);

});

})