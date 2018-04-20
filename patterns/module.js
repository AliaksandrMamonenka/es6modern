// standart pattern
// const module = (function() {
//   // private data
//   let text = 'some text data here';

//   return {
//     // publick methods
//     getText: function() {
//       return text;
//     }
//   };
// })();

// console.log(module.getText());

// revealing pattern
// const module2 = (function() {
//   // private data
//   let _data = [];

//   function addItem(item) {
//     _data.push(item);
//   }

//   function getItem(id) {
//     return _data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: addItem,
//     get: getItem
//   };
// })();

// module2.add({ id: 1, name: 'Alex' });
// console.log(module2.get(1));
