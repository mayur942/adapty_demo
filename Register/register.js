// var firstName = document.querySelector('#firstName').value;
// var lastName = document.querySelector('#lastName').value;
// var username = document.querySelector('#username').value;
// var password = document.querySelector('#password').value;
// var gender = document.querySelector('#gender').value;
// var phoneNumber = document.querySelector('#telephone').value;

// document.getElementById("registerNew").addEventListener("click", function(event){
//     // event.preventDefault()
//     //     console.log(firstName);
//     //     console.log(lastName);
//     //     console.log(email);
//     //     console.log(password);
//     //     console.log(gender);
//     //     console.log(phoneNumber);
//     // }
    
//     // console.log(document.querySelector('#firstName').value)
    
//     // console.log(document.querySelector('#lastName').value);
//     // console.log(document.querySelector('#email').value);
//     // console.log(document.querySelector('#password').valu);
//     // console.log(document.querySelector('#gender').value);
//     // console.log(document.querySelector('#telephone').value);

//     var firstName = document.querySelector('#firstName').value;
//     var lastName = document.querySelector('#lastName').value;
//     var email = document.querySelector('#email').value;
//     var password = document.querySelector('#password').value;
//     var gender = document.querySelector('#gender').value;
//     var phoneNumber = document.querySelector('#telephone').value;
//     if(firstName && lastName && email && gender && phoneNumber !== null){
//         // console.log(firstName);
//         // console.log(lastName);
//         // console.log(email);
//         // console.log(password);
//         // console.log(gender);
//         // console.log(phoneNumber);
//         fetch("./employees.json")
//         .then( res => {
//             return res.json()
//         })
//         .then( data => {
//             console.log(data[0]);
//             var lenOfObj = data.length;
//             console.log(lenOfObj);
//             let newObj = data[lenOfObj] = {
//                 "firstName": document.querySelector('#firstName').value,
//                 "lastName": document.querySelector('#lastName').value,
//                 "userName": document.querySelector('#email').value,
//                 "password" : document.querySelector('#password').value,
//                 "gender": document.querySelector('#gender').value,
//                 "phoneNumber": document.querySelector('#telephone').value,  
//                 "Details": [{
//                     "companyName": "",
//                     "startDate": "",
//                     "endDate": ""
//                 }],
//                 "city": "",
//                 "skillSet": [{
//                     "skillName": "",
//                     "yearsOfExperience": ""
//                 },{
//                     "skillName": "",
//                     "yearsOfExperience": ""
//                 },{
//                     "skillName": "",
//                     "yearsOfExperience": ""
//                 }],
//                 "primarySkill": "",
//                 "secondarySKill": "",
//                 "currentProject": ""
//             }
//             let a = data.push(newObj);
//             console.log(data[a-1]);
//             // data[lenOfObj].Details[0].companyName = "Adapty"
//             // console.log("just-checking",data[lenOfObj].Details[0].companyName)
//             // console.log(info.Details[0].companyName)
//         })
//     }
//     else{
//         alert("Enter values")
//     }
// });

// // console.log(firstName);

// // fetch("./employees.json")
// // .then( res => {
// //     return res.json()
// // })
// // .then( data => {
// //     console.log(data[0]);
// //     var lenOfObj = data.length;
// //     console.log(lenOfObj);
// //     data[lenOfObj] = {
// //         "firstName": document.querySelector('#firstName').value,
// //         "lastName": document.querySelector('#lastName').value,
// //         "userName": document.querySelector('#email').value,
// //         "password" : document.querySelector('#password').value,
// //         "gender": document.querySelector('#gender').value,
// //         "phoneNumber": document.querySelector('#telephone').value,  
// //         "Details": [{
// //             "companyName": "",
// //             "startDate": "",
// //             "endDate": ""
// //         }],
// //         "city": "",
// //         "skillSet": [{
// //             "skillName": "",
// //             "yearsOfExperience": ""
// //         },{
// //             "skillName": "",
// //             "yearsOfExperience": ""
// //         },{
// //             "skillName": "",
// //             "yearsOfExperience": ""
// //         }],
// //         "primarySkill": "",
// //         "secondarySKill": "",
// //         "currentProject": ""
// //     }
// //     console.log(data[lenOfObj]);
    
// //     // console.log(info.Details[0].companyName)
// // })

document.getElementById("registerNew").addEventListener("click", function(event){
    // event.preventDefault()

    var firstName = document.querySelector('#firstName').value;
    var lastName = document.querySelector('#lastName').value;
    var uname = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var gender = document.querySelector('#gender').value;
    var notMatchedValue = false
    // var phoneNumber = document.querySelector('#telephone').value;
    if(firstName && lastName && uname && gender !== null){
        fetch("./emp.json")
        .then( res => {
            return res.json()
        })
        .then( data => {
            // console.log(data);
            for( arr in data){
                // console.log(data[arr]);
                let arrData = data[arr];
                let username_matched = document.querySelector('#username-matched');
                // console.log(arrData.username);
                if(arrData.username == uname){
                    // console.log('Matched');
                    // matchedValue = true;
                    // console.log('Matched');
                    notMatchedValue = false;
                    // console.log(matchedValue);
                    username_matched.innerHTML = '*Username already exists'
                    // username_matched.fontcolor('red'); 
                    break;
                }
                else{
                    // matchedValue = false;
                    notMatchedValue = true;
                    username_matched.innerHTML = ''

                    // console.log('Not matched');
                    break;
                }
                // console.log(matchedValue);
                // else{
                //     console.log('Not matched');
                // }
                // if(arrData.username =  username){
                //     console.log("Matched");
                // }
                // else{
                //     console.log("Not Matched");
                // }
            }
            // data.forEach(name => {
            //     if (data.username = username){
            //         console.log('Matched');
            //         // matchedValue = true;
            //     }
            //     else{
            //         console.log('Not matched');
            //     }
            // });
            // var lenOfObj = data.length;
            // console.log(lenOfObj);
            if(notMatchedValue === true){
                let newObj = {
                    "fname": document.querySelector('#firstName').value,
                    "lname": document.querySelector('#lastName').value,
                    "gender": document.querySelector('#gender').value,
                    "uname": document.querySelector('#username').value,
                    "password" : document.querySelector('#password').value,
                    // "phoneNumber": document.querySelector('#telephone').value,  
                    "address": "",
                    "previousOrg": "",
                    "startDate": "Wed Jul 06 2022 15:53:04 GMT+0530 (India Standard Time)",
                    "endDate": "Wed Jul 06 2022 15:53:04 GMT+0530 (India Standard Time)",
                    "primarySkill": "",
                    "priEx": "",
                    "secondarySkill": "",
                    "secEx": "",
                    "isAdmin": false
                    
                }

            //     // ////////////////////////////////////////////
                
            //     // // let newObj = {
            //     // //     "firstName": document.querySelector('#firstName').value,
            //     // //     "lastName": document.querySelector('#lastName').value,
            //     // //     "userName": document.querySelector('#email').value,
            //     // //     "password" : document.querySelector('#password').value,
            //     // //     "gender": document.querySelector('#gender').value,
            //     // //     // "phoneNumber": document.querySelector('#telephone').value,  
            //     // //     "Details": [{
            //     // //         "companyName": "",
            //     // //         "startDate": "",
            //     // //         "endDate": ""
            //     // //     }],
            //     // //     "city": "",
            //     // //     "skillSet": [{
            //     // //         "skillName": "",
            //     // //         "yearsOfExperience": ""
            //     // //     },{
            //     // //         "skillName": "",
            //     // //         "yearsOfExperience": ""
            //     // //     },{
            //     // //         "skillName": "",
            //     // //         "yearsOfExperience": ""
            //     // //     }],
            //     // //     "primarySkill": "",
            //     // //     "secondarySKill": "",
            //     // //     "currentProject": ""
            //     // // }
            //     // // //////////////////////////////////////

                let newArr = data.push(newObj);
                // console.log(newArr);
                localStorage.setItem("employeeDetails", JSON.stringify(newObj));
                for( arr in data){
                    // console.log(data[arr]);
                    let updatedArr = data[arr];
                    console.log(updatedArr);
                }
                window.location.href="./employeeDetails.html";

            // // // let newLen = newArr.length;
            // // console.log(newLen);
            }
            // else{
            //     console.log('Username already taken');
            // }
            // let a = data.push(newObj);
            // // console.log(data[a-1]);

            // // for (const key in data) {

            // //     console.log(`${key}: ${data[key]}`);
            // // }
            
            // // // data[lenOfObj].Details[0].companyName = "Adapty"
            // // // console.log("just-checking",data[lenOfObj].Details[0].companyName)
            // // // console.log(info.Details[0].companyName)
            // // // jsarray = ["cat", "dog", "tiger", "wolf"];
            // localStorage.setItem("employeeDetails", JSON.stringify(newObj));

        })
    }
    else{
        alert("Enter values")
    }
});

// console.log(firstName);

// fetch("./employees.json")
// .then( res => {
//     return res.json()
// })
// .then( data => {
//     console.log(data[0]);
//     var lenOfObj = data.length;
//     console.log(lenOfObj);
//     data[lenOfObj] = {
//         "firstName": document.querySelector('#firstName').value,
//         "lastName": document.querySelector('#lastName').value,
//         "userName": document.querySelector('#email').value,
//         "password" : document.querySelector('#password').value,
//         "gender": document.querySelector('#gender').value,
//         "phoneNumber": document.querySelector('#telephone').value,  
//         "Details": [{
//             "companyName": "",
//             "startDate": "",
//             "endDate": ""
//         }],
//         "city": "",
//         "skillSet": [{
//             "skillName": "",
//             "yearsOfExperience": ""
//         },{
//             "skillName": "",
//             "yearsOfExperience": ""
//         },{
//             "skillName": "",
//             "yearsOfExperience": ""
//         }],
//         "primarySkill": "",
//         "secondarySKill": "",
//         "currentProject": ""
//     }
//     console.log(data[lenOfObj]);
    
//     // console.log(info.Details[0].companyName)
// })

// 2310