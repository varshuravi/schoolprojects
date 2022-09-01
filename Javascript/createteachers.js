let teachers =[]
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
      let age = $("#age").val();
      let nativeplace=$("#nativeplace").val();
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
    if (bloodgroup == "select") {
      $("#bloodGroup").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    if (age.length < 1) {
      $("#age").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (age < 21) {
      $("#age").after('<span class="error">age should be above 21</span>');
      flag = false;
    } else {
      flag = true;
    }
    if (nativeplace == "") {
      $("#nativeplace").after(
        '<span class="error">This field is required</span>'
      );
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
    if (state.length < 1) {
      $("#state").after('<span class="error">This field is required</span>');
      flag;
    } else {
      flag = true;
    }
    if (city.length < 1) {
      $("#city").after('<span class="error">This field is required</span>');
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
    if (address.length < 1) {
      $("#address").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    let Address = {address,state,country};

    let teacherslist = {
       'fname':fname,
       'lname':lname, 
       'mobile':mobile,
       'email':email,
        'age':age,
       'nativeplace':nativeplace,
       'address':address,
       'gender':gender,
       'dob':dob, 
       'city':city,
       'state':state,
       'country':country,
       'language':language,
       'bloodgroup':bloodgroup,
       'id':id,

      };
      console.log(teacherslist);
      if(id !=undefined){
        update(teacherslist);

      }else{

      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/teacher",
        method: "post",
        data: teacherslist,
        dataType: "json",

        success: function (result) {

         // teachers.push(result);
         /// onloadfromAPI(teachers);
         // window.location.href ="teacherslist.html";
        },

        error: function (error) {
          console.log(error);
        },
      });
      }

  });
 onloadfromAPI(teachers) 
    });


function updatetable(teachers) {
  $("#tbody").html("");
  let row;
  for (let i = 0; i<teachers.length; i++) {

//     let date=teachers[i].joningdate;
//     var dateAr = date.split('-');
//  var date_string = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];  
     row ="<tr><td>" +teachers[i].id+"</td><td>" +teachers[i].fname +"</td><td>" +teachers[i].lname +"</td><td>" +teachers[i].mobile +
      "</td><td>" +teachers[i].email + "</td><td>" +teachers[i].gender
      +"</td><td><button type='button' class='btn btn-warning' onclick='getEditWin(" +
    i +
    "," +
    teachers[i].id +
    ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteRow(" +
    i +
    "," +
    teachers[i].id +
    ")'>delete</button></tr>";
    $("#tbody").append(row);

}

}
function onloadfromAPI() {
  $.ajax({
    url: "https://6308908a722029d9ddd23bed.mockapi.io/teacher",
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


  function deleteRow(index,teachers_id){
    $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/teacher/" +teachers_id,
      method:"delete",
      dataType:"json",
      success:function(result){
        teachers.splice(index,1);
        onloadfromAPI(teachers);
      },
    error: function (error) {
      console.log(error);
    },
    })
  
    }
    function getEdit(id){

      $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/addteacher/"+id,
        method:"get",
        dataType:"json",
        success: function (result) {
      $("#firstName").val(result.name);
      $("#lastName").val(result.lastname);
       $("input[name='gender']:checked").val(result.gender);
    $("#mobile").val(result.mobile);
      $("#emailid").val(result.email);
     $("#bloodGroup").val(result.bloodgroup);
     $("#age").val(result.age);
      $("#state").val(result.state);
      $("#country").val(result.country);
      $("#city").val(result.city);
      $("#id").val(result.id);
      $("#nativeplace").val(result.nativeplace);
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
      window.open( "createteachers.html?id="+id);
    }
    function update(teacherslist){
      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/teacher/" + teacherslist.id, 
        method: "put",
        data: teacherslist,
        dataType: "json",
        success: function (result) {
          teachers.push(result);

          onloadfromAPI(teachers);
          window.location.href="teacherslist.html"

        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  