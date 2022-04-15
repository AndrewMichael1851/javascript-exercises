const findTheOldest = function(people) {
    /*
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        return oldestAge < currentAge ? currentPerson : oldest;
    });
    */
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = peopleAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = peopleAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const peopleAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
