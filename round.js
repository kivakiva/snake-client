function getRandomArbitrary(min, max) {
  console.log('test')
  return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 100; i++) {

  console.log(getRandomArbitrary(1, 5));
}