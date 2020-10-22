let vectorHelper = (function () {
  function degToRad(angle) {
    // 360 deg = 2Pi radians
    return (angle * 2 * Math.PI) / 360
  }

  function getVectorFromPosition(position) {
    let arr = position.split(' ')
    let x = parseFloat(arr[0])
    let y = parseFloat(arr[1])
    let z = parseFloat(arr[2])
    return new THREE.Vector3(x, y, z)
  }

  function getPositionFromVector(vector) {
    return vector.x + ' ' + vector.y + ' ' + vector.z
  }

  function generateNeighborPosition(position, yAngle) {
    const yAxis = new THREE.Vector3(0, 1, 0)
    const positionVector = getVectorFromPosition(position)
    const neighborPositionVector = positionVector.applyAxisAngle(
      yAxis,
      degToRad(yAngle)
    )
    const neighborPosition = getPositionFromVector(neighborPositionVector)
    return neighborPosition
  }

  return {
    generateNeighborPosition: generateNeighborPosition,
    getPositionFromVector: getPositionFromVector
  }
})()
