Student_cred = new Mongo.Collection('studb');
if (Meteor.isClient) {
      Template.create.events({
        'submit form' : function(e) {
          e.preventDefault();
          type = event.target.type1.value;
          name = event.target.name1.value;
          emailvar = event.target.email.value;
          loc = event.target.loc.value;
          sal = event.target.sal.value;
          interest = event.target.interest.value;
          local = event.target.local.value;
          dob = event.target.dob.value;

            Student_cred.insert({
              type    : type,
              name    : name,
              email   : emailvar,
              loc     : loc,
              sal     : sal,
              interest: interest,
              local   : local,
              dob     : dob
        });
    }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup
  });


}
