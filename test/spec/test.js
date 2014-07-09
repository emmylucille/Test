(function () {
  'use strict';

  describe('what does this _.first thing do?', function () {
    describe('it should return a value', function () {
      it('should return the first item of the array', function () {
        var food = ['beans', 'rice', 'turkey', 'spice'];
        expect(_.first(food)).to.deep.equal('beans');
      });
    });
    describe('it should only accept an array', function () {
      it('should throw an error when it is not an array', function () {
        var food = !Array;
        expect(_.first(food)).to.equal(undefined);
      });
    });
    describe('it needs to be given an argument', function () {
      it('should throw an error when it is not given an argument', function () {
        var food = ['beans', 'rice', 'turkey', 'spice'];
        expect(_.first()).to.equal(undefined);
      });
    });
  });
})();

(function () {
  'use strict';

  describe('what does this _.last thing do?', function () {
    describe('it should return a value', function () {
      it('should return the last item of the array', function () {
        var food = ['beans', 'rice', 'turkey', 'spice'];
        expect(_.last(food)).to.deep.equal('spice');
      });
    });
    describe('it should only accept an array', function () {
      it('should throw an error when it is not an array', function () {
        var food = !Array;
        expect(_.last(food)).to.equal(undefined);
      });
    });
    describe('it needs to be given an argument', function () {
      it('should throw an error when it is not given an argument', function () {
        var food = ['beans', 'rice', 'turkey', 'spice'];
        expect(_.last()).to.equal(undefined);
      });
    });
  });
})();

(function () {
  'use strict';

  describe('what does this _.pluck thing do?', function () {
    describe('it should return a value', function () {
      it('should return the name properties from the array', function (){
        var pets = [{name: 'emmitt', age: 5}, {name: 'bella', age: 9}, {name: 'ollie', age: 10}];
        expect(_.pluck(pets,'name')).to.deep.equal(['emmitt', 'bella', 'ollie']);
      });
    });
    describe('it should only accept an array', function () {
      it('should throw an error when it is not an array', function () {
        var food = !Array;
        expect(_.pluck(food)).to.not.equal([]);
      });
    });
    describe('it needs to be given an argument', function () {
      it('should throw an error when it is not given an argument', function () {
        var food = ['beans', 'rice', 'turkey', 'spice'];
        expect(_.pluck()).to.not.equal([]);
      });
    });
  });
})();

//EXAMPLE
// (function() {
// "use strict";
//
//   function Cat(name) {
//     http://this.name = name || 'Milo';
// }
//
// window.Cat = Cat;
//
//   Cat.prototype = {
//     eats: function(target) {
//       if (!target)
//         throw new Error('missing target');
//       return http://this.name + ' eats ' + target;
//     }
//   };
// })(this);
//
//
// //Made everything fo crazy!
// (function() {
//   _ = {};
//   _.firstTwo = function(array) {
//     if (!array) {
//       throw new Error("_.firstTwo must be given an argument.")
//     } else if (!Array.isArray(array)) {
//       throw new Error("_firstssTwo must be given an array as an argument.")
//     } else {
//       return array.slice(-2);
//     }
//   }
// })(this);
