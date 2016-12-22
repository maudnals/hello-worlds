/* ------------------
VECTOR HELPER
------------------ */

let vectorHelper = (function() {

    function getVectorFromPosition(position) {
        let arr = position.split(" ");
        let x = parseFloat(arr[0]);
        let y = parseFloat(arr[1]);
        let z = parseFloat(arr[2]);
        return new THREE.Vector3(x, y, z);
    }

    function getPositionFromVector(vector) {
        return vector.x + ' ' + vector.y + ' ' + vector.z ;
    }

    function generateNeighborPosition(position, yAngle) {
        // + , zAngle
        //let angleRad = angle.y * 2 * Math.PI / 360;
        let yAxis = new THREE.Vector3(0, 1, 0);
        let angleRad = yAngle * 2 * Math.PI / 360;
        let positionVector = getVectorFromPosition(position);
        let neighborPositionVector = positionVector.applyAxisAngle(yAxis, angleRad);
        let neighborPosition = getPositionFromVector(neighborPositionVector);

        return neighborPosition;
    }

    return {
        generateNeighborPosition: generateNeighborPosition,
        getPositionFromVector: getPositionFromVector
    }
})();



// camera should rotate along y only

// 360 deg = 2Pi radians
// so 1 deg = 2Pi/360 radians
//             .applyAxisAngle ( axis, angle )
// axis - A normalized Vector3.
// angle - An angle in radians.
