class SpaceAgency {
    constructor(agencyName, mission) {
        this.agencyName = agencyName;
        this.mission = mission;
        this.candidates = [];
    }

    acceptApplications(applications) {
        const addedNames = new Set();

        class Candidate {
            constructor(name, education, flightHours) {
                this.name = name;
                this.education = education;
                this.flightHours = flightHours;
            }
        }

        for (const information of applications) {
            const [name, education, flightHoursStr] = information.split("-");
            const flightHours = Number(flightHoursStr);

            const existingCandidate = this.candidates.find(candidate => candidate.name === name);

            if (existingCandidate) {
                if (flightHours > existingCandidate.flightHours) {
                    existingCandidate.flightHours = flightHours;
                }
            } else {
                this.candidates.push(new Candidate(name, education, flightHours));
                addedNames.add(name);
            }
        }
        return `You successfully added candidates: ${[...addedNames].join(", ")}.`;
    }

    chooseForMission(candidateInfo) {
        const [name, minHoursStr] = candidateInfo.split("-");
        const minimumFlightHours = Number(minHoursStr);

        const candidate = this.candidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (typeof candidate.flightHours !== "number" || candidate.flightHours < minimumFlightHours) {
            throw new Error(`${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${minimumFlightHours} hours.`);
        }

        candidate.flightHours = "selected";

        return `Congratulations, ${name} will participate in the ${this.mission} mission!`;
    }

    trainingBonus(name) {
        const candidate = this.candidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let bonus = 80000; // Default bonus
        if (candidate.education === "Pilot") {
            bonus = 100000;
        } else if (candidate.education === "Engineer") {
            bonus = 120000;
        }

        const formattedBonus = `$${bonus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

        return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of ${formattedBonus}!`;
    }

    candidatesReport() {
        if (this.candidates.length === 0) {
            throw new Error("Candidate database is empty!");
        }

        const sorted = this.candidates
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));

        const report = ["Candidates list:"];

        for (const c of sorted) {
            report.push(`${c.name}-${c.flightHours}`);
        }

        return report.join("\n");
    }
}

// let agency = new SpaceAgency("NASA", "Mars Exploration");
// console.log(agency.acceptApplications([
//     "Neil Armstrong-Pilot-1200",
//     "Margaret Hamilton-Engineer-800",
//     "Mae Jemison-Biologist-700"
// ]));
// console.log(agency.chooseForMission("Neil Armstrong-1000"));
// console.log(agency.trainingBonus("Mae Jemison"));
// console.log(agency.candidatesReport());
