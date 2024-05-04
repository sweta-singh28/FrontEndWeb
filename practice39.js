 
 //ALERT
 //Alert in in-browser JavaScript - Doesnot return anything
 //When you want to give any message to th user
  //alert("This is a message");


  //PROMPT
  //To ask something from the user
 //let name = prompt("What is your name?", "Guest");
 //console.log(name);


 //CONFIRM
 //When you want the give any warning to the user (or to double check)
 //let deletePost = confirm("Do you relly want to delete this post?");
 //console.log(deletePost);

 //if(deletePost){
    //Code to delete the post 
   // console.log("Your post has been deleted successfully");
 //}
 //else{
   //Code to cancel deletion of the post
  //  console.log("Your post has been not deleted successfully");
// }

  
 let age = prompt("What is your age?", "");
 if(age>=18){
    console.log("YOU ARE ALLOWED INSIDE THE CLUB.");
 }
 else{
    console.log("YOU ARE NOT ALLOWED INSIDE THE CLUB.");
 }