// create only 1 instance
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Alex' });
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

const inst = Singleton.getInstance();
const inst2 = Singleton.getInstance();
console.log(inst === inst2);
