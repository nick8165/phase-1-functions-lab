function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42;
    } else  {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let feet = (start - destination) * 264;
    return Math.abs(feet);
}

function calculatesFarePrice(start, destination) {
    let travel = distanceTravelledInFeet(start, destination);
    if (travel <= 400 ) {
        return 0;
    } else if (travel > 2500) {
        return 'cannot travel that far';
    } else if (travel > 2000) {
        return 25;
    } else if (travel > 400) {
        return (travel - 400) * .02;
    }
}

let blocks, start, destination;

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
