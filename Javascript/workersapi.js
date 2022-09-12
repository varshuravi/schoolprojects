let workerslist =[];

$(document).ready(function () {
    $("#Submit").click(function () {
        let fname = $("#fname").val();
        let email = $("#email").val();
        let Phonenumber= $("#Phonenumber").val();
        let age = $("#age").val();
        let city = $("#city").val();
        let job= $("#job").val();
        let education = $("#education").val();
        let experience = $("#experience").val();
        let Gender = $("input[name='Gender']:checked").val();
        let Address = $("Address").val();
        let Languageworker = $("#Languageworker").val();
alert(fname);
        const worker = {
            fname: fname,
            email:email,
            Phonenumber:Phonenumber,
            age:age,
            job:job,
            City:City,
            education:education,
            experience:experience,
            Gender:Gender,
            Address:Address,
            Languageworker:Languageworker,
    
        };
       console.log(workers);
        $.ajax({
            url: "",
            method: "post",
            data:worker,
            datatype: "json",
            success: function (result) {
                teacherlist.push(result);
                // onloadfromAPI();
                // window.location.href = "/html/workerslist.html"

            },

            error: function (error) {
                console.log(error);
            },

        });
        console.log(student);

});

})