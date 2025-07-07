// If you receive a worker whose dizziness property is set to true it means he needs to intake some water to be able to work correctly.
// The required amount is 0.1ml per kilogram per year of experience.
// The required amount must be added to the existing amount (to the levelOfHydrated).
// Once the water is administered, change the dizziness property to false.

function constructionCrew(worker) {
  if (!worker.dizziness) {
    return worker;
  }

  worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
  worker.dizziness = false;

  return worker;
}

let result = constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});

let secondResult = constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

console.log(result);
console.log(secondResult);
