'use strict';


// describe
// beforeEach
// it
// expect

describe("The Controller", Controller(){
  beforeEach(module('module'));
  it("should do something awesome", function(){
    Controller


    
  });
});

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cvcc6App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an empty list of speakers to the scope', function () {
    expect(scope.speakers.length).toBe(0);
  });

  it("should add a speaker", function(){
    scope.speaker = 'Jenna';
    scope.addSpeaker();
    expect(scope.speakers.length).toBe(1);
  });

  it("should remove a speaker", function(){
    scope.removeSpeaker(0);
    expect(scope.speakers.length).toBe(0);
  });
});
