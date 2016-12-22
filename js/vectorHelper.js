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

    function generateNeighborPosition(position, yAngle) {
    	// + , zAngle
    	//let angleRad = angle.y * 2 * Math.PI / 360;
    	let yAxis = new THREE.Vector3(0, 1, 0);
    	let angleRad = yAngle * 2 * Math.PI / 360;
    	let positionVector = getVectorFromPosition(position);
    	let neighborPosition = positionVector.applyAxisAngle(yAxis, angleRad);

    	return neighborPosition;
    }

    return {
    	generateNeighborPosition: generateNeighborPosition
    }
})();