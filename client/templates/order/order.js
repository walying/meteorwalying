Template.order.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
};
