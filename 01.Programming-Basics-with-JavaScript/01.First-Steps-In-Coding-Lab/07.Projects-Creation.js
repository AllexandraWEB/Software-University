function projectsCreation(input) {
    let architect = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3;

    let result = `The architect ${architect} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`
    console.log(result);
}


//projectsCreation(["George", "4"])
//projectsCreation(["Sanya", "9"])

