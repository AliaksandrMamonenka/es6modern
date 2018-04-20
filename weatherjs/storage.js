class Storage {
  constructor() {
    this.city;
    this.state;
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = 'Miami';
      this.state = 'FL';
    } else {
      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    };
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
