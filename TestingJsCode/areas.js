// The file or areas

const circleArea = function(radius) {
    if (radius < 0) {
        return 'Invalid radius'
    }
  return radius * radius * Math.PI;
}

// console.log(circleArea(-10));

const rectangleArea = (width, length) => {
    if (width === 0 && length === 0) {
        return {
            message: 'Both width and length can not be zero!'
        }
    }
    else if (width < 0 || length < 0) {
        return { message: 'Invalid negative value!' }
    }
    const area = width * length;
    console.log(area);
    return area;
}

const removeDuplicates = (radii) => {
    const refined = Array.from(new Set(radii));
    return refined;
}

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

module.exports = { circleArea, rectangleArea, removeDuplicates, compileAndroidCode };

