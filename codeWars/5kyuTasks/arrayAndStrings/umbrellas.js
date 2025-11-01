function minUmbrellas(weather) {
    let home = 0;
    let office = 0;
    
    for (let i = 0; i < weather.length; i++) {
      if (["thunderstorms", "rainy"].includes(weather[i])) {
          if (i%2) {
            if (home) home--;
            office++;
          } else {
            if (office) office--;
            home++;
          }
      }
    }
    return home + office;
  }

console.log(
	minUmbrellas([
		"thunderstorms",
		"thunderstorms",
		"thunderstorms",
		"sunny",
		"sunny",
		"clear",
		"thunderstorms",
		"thunderstorms",
		"sunny",
		"thunderstorms",
	])
);
// console.log(minUmbrellas(["cloudy"]));
// console.log(minUmbrellas(["rainy"]));

// console.log(minUmbrellas(["rainy", "rainy", "sunny", "rainy"]));

// console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]));
// console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]));
// console.log(
// 	minUmbrellas([
// 		"overcast",
// 		"rainy",
// 		"clear",
// 		"thunderstorms",
// 		"thunderstorms",
// 		"clear",
// 		"rainy",
// 	])
// );

// console.log(
// 	minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
// );
