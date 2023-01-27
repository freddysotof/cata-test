Object.defineProperty(String.prototype, 'capitalize', {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

// export const capitalize = (string) =>
//   string[0].toUpperCase() + string.slice(1);