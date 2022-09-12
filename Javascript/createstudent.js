let student =[]
$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
  let param = searchParams.get('id');
  if(param!=null){
    getEdit(param);
  }
  $("#submit").click(function (e) {
    e.preventDefault();
      let fname = $("#fname").val();
      let lname = $("#lname").val();
      let mobile = $("#mobile").val();
      let email = $("#email").val();
      let password = $("#password").val();
      let standard =$("#standard").val();
      let address=$("#address").val();
      var gender = $("input[name='gender']:checked").val();
      let dob = $("#dob").val();
      let city = $("#city").val();
      let state = $("#state").val();
      let country = $("#country").val();
      let language = $("#selectlanguage").val();
      let bloodgroup= $("#selectbloodgroup").val();
      let id=$("new").val();

      let check = $("#check:checked");
    let flag = false;
    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);
    $(".error").remove();
    if (language){
      var languages = [];
      $(".language:checked").each(function(i){
        language[i]=$(this).val();
      });
    }    
    
    if (fname.length < 1) {
      $("#fname").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (lname.length < 1) {
      $("#lname").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (mobile.length < 1) {
      $("#mobile").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (mobile.length < 10) {
      $("#mobile").after(
        '<span class="error">mobile must be 10 digit</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (!validEmail) {
      $("#email").after(
        '<span class="error">Enter a valid email address</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (password == "select") {
      $("#password").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (standard == "select") {
      $("#standard").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (address.length < 1) {
      $("#address").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }


    if (!gender) {
      $("#genderErrorId").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (dob) {
      $("#dob").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (age) {
      $("#age").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (city.length < 1) {
      $("#city").after('<span class="error">This field is required</span>');
      flag;
    } else {
      flag = true;
    }

    if (state.length < 1) {
      $("#state").after('<span class="error">This field is required</span>');
      flag;
    } else {
      flag = true;
    }

    if (country.length < 1) {
      $("#country").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
 if (language == " select") {
      $("#language").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (bloodgroup == " select") {
      $("#bloodgroup").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }



    let Address = {address,state,country};

    let studentlist = {
       'fname':fname,
       'lname':lname, 
       'mobile':mobile,
       'email':email,
       'password':password,
       'standard':standard,
       'address':address,
       'Gender':gender,
       'dob':dob,
        'age':age, 
       'city':city,
       'state':state,
       'country':country,
       'language':language,
       'bloodgroup':bloodgroup,
       'id':id,

      };
      console.log(studentlist);
      if(id !=undefined){
        update(studentlist);

      }else{

      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/student/",
        method: "post",
        data: studentlist,
        dataType: "json",

        success: function (result) {

         // student.push(result);
         /// onloadfromAPI(student);
         // window.location.href ="studentlist.html";
        },

        error: function (error) {
          console.log(error);
        },
      });
      }

  });
 onloadfromAPI(student) 
    });


function updatetable(student) {
  $("#tbody").html("");
  let row;
  for (let i = 0; i<student.length; i++) {

//     let date=student[i].joningdate;
//     var dateAr = date.split('-');
//  var date_string = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];  
     row ="<tr><td>" +student[i].id+"</td><td>" +student[i].fname +"</td><td>" +student[i].lname +"</td><td>" +student[i].mobile +
      "</td><td>" +student[i].email + "</td><td>" +student[i].dob
      +"</td><td><button type='button' class='btn btn-warning' onclick='getEditWin(" +
    i +
    "," +
    student[i].id +
    ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteRow(" +
    i +
    "," +
    student[i].id +
    ")'>delete</button></tr>";
    $("#tbody").append(row);

}

}
function onloadfromAPI() {
  $.ajax({
    url: "https://6308908a722029d9ddd23bed.mockapi.io/student",
    method: "get",
    dataType: "json",
    success: function (result) {
      console.log(result);
      updatetable(result);
    },
    error: function (error) {
      console.log(error);
    },
  });
  }


  function deleteRow(index,student_id){
    $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/student/" +student_id,
      method:"delete",
      dataType:"json",
      success:function(result){
        teachers.splice(index,1);
        onloadfromAPI(student);
      },
    error: function (error) {
      console.log(error);
    },
    })
  
    }
    function getEdit(id){

      $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/addstudent/" +id,
        method:"get",
        dataType:"json",
        success: function (result) {
      $("#firstName").val(result.fname);
      $("#lastName").val(result.lname);
      $("input[name='gender']:checked").val(result.gender);
      $("#mobile").val(result.mobile);
      $("#emailid").val(result.email);
      $("#password").val(result.password);
      $("#standard").val(result.standard);
      $("#age").val(result.age);
     $("#bloodGroup").val(result.bloodgroup);
      $("#state").val(result.state);
      $("#country").val(result.country);
      $("#city").val(result.city);
      $("#id").val(result.id);
      $(".language").val(result.language).is(":checked");
      $("#address").val(result.address);

         alert(result.id);
        },
        error: function (error) {
          console.log(error);
        },


      })
    }

    function getEditWin(index,id){
      window.open( "createstudent.html?id="+id);
    }
    function update(studentlist){
      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/student/" + studentlist.id, 
        method: "put",
        data: studentlist,
        dataType: "json",
        success: function (result) {
          student.push(result);

          onloadfromAPI(student);
          window.location.href="studentlist.html"

        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  