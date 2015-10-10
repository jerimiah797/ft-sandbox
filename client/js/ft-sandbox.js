/* global Holder */

if (Meteor.isClient) {
 
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
  Template.appbody.onRendered(function () {
    Holder.run();
  });
  
  // Meteor.startup(function() {
  //   Holder.run;
  // });
  
  // $(document).on('click','.navbar-collapse.in',function(e) {

  //   if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
  //       $(this).collapse('hide');
  //   }

  // });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
