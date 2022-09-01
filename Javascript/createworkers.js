let workers =[]
$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
  let param = searchParams.get('id');
  if(param!=null){
    getEdit(param);
  }
  $("#submit").click(function (e) {
    e.preventDefault();
      let fname = $("#fname").val();
      let email = $("#email").val();
      let Phonenumber = $("#Phonenumber").val();
      let age = $("#age").val();
      let job=$("job").val();
      let maritalstatus=$("maritalstatus").val();
      let address=$("#address").val();
      let homecontactnumber=$("homecontactnumber").val();
      var gender = $("input[name='gender']:checked").val();
      let dob = $("#dob").val();
      let city = $("#city").val();
      let state = $("#state").val();
      let country = $("#country").val();
      let language = $("#selectlanguage").val();
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
    if (Phonenumber.length < 1) {
      $("#Phonenumber").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (Phonenumber.length < 10) {
      $("#Phonenumber").after(
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
    if (age.length < 1) {
      $("#age").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (age < 21) {
      $("#age").after('<span class="error">age should be above 21</span>');
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
    if (homecontactnumber == " select") {
      $("#homecontactnumber").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (maritalstatus == " select") {
      $("#maritalstatus").after('<span class="error">This field is required</span>');
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

    let workerslist = {
       'fname':fname,
       'Phonenumber':Phonenumber,
       'email':email,
        'age':age,
       'address':address,
       'gender':gender,
       'dob':dob, 
       'city':city,
       'maritalstatus':maritalstatus,
       'homecontactnumber':homecontactnumber,
       'state':state,
       'country':country,
       'language':language,
       'id':id,

      };
      console.log(workerslist);
      if(id !=undefined){
        update(workerslist);

      }else{

      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/worker",
        method: "post",
        data:workerslist,
        dataType: "json",

        success: function (result) {

         // workers.push(result);
         /// onloadfromAPI(workers);
         // window.location.href ="workerslist.html";
        },

        error: function (error) {
          console.log(error);
        },
      });
      }

  });
 onloadfromAPI(workers) 
    });


function updatetable(workers) {
  $("#tbody").html("");
  let row;
  for (let i = 0; i<workers.length; i++) {



//     let date=workers[i].joningdate;
//     var dateAr = date.split('-');
//  var date_string = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];  
     row ="<tr><td>" +workers[i].id+"</td><td>" +workers[i].fname +"</td><td>" +workers[i].age + "</td><td>" +workers[i].email +
      "</td><td>" +workers[i].state + "</td><td>" +workers[i].address
      +"</td><td><button type='button' class='btn btn-warning' onclick='getEditWin(" +
    i +
    "," +
    workers[i].id +
    ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteRow(" +
    i +
    "," +
    workers[i].id +
    ")'>delete</button></tr>";
    $("#tbody").append(row);

}

}
function onloadfromAPI() {
  $.ajax({
    url: "https://6308908a722029d9ddd23bed.mockapi.io/worker",
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


  function deleteRow(index,workers_id){
    $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/worker/" +workers_id,
      method:"delete",
      dataType:"json",
      success:function(result){
        workers.splice(index,1);
        onloadfromAPI(workers);
      },
    error: function (error) {
      console.log(error);
    },
    })
  
    }
  
    function getEdit(id){

      $.ajax({
      url:"https://6308908a722029d9ddd23bed.mockapi.io/worker/"+id,
        method:"get",
        dataType:"json",
        success: function (result) {

      $("#firstName").val(result.name);
       $("input[name='gender']:checked").val(result.gender);
    $("#Phonenumber").val(result.Phonenumber);
      $("#emailid").val(result.email);
     $("#age").val(result.age);
      $("#state").val(result.state);
      $("#country").val(result.country);
      $("#city").val(result.city);
      $("#id").val(result.id);
      $("maritalstatus").val(result.maritalstatus);
      $("homecontactnumber").val(result.homecontactnumber);
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
      window.open( "createworkers.html?id="+id);
    }
    function update(workerslist){
      $.ajax({
        url: "https://6308908a722029d9ddd23bed.mockapi.io/worker/" + workerslist.id, 
        method: "put",
        data: workerslist,
        dataType: "json",
        success: function (result) {
          workers.push(result);

          onloadfromAPI(workers);
          window.location.href="workerslist.html"

        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  