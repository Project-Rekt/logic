// Parameter path is an array of all [y, x] coordinates.
export default function edgePath(path) {
    let horizontal = false;     // upward or downward movement
    let vertical = false;       // left or right movement
    let edgePath = [];          // variable to store all turning points

    // Initial check to determine starting direction
    if (path[0][0] == path[1][0])
        vertical = true;
    else if (path[0][1] == path[1][1])
        horizontal = true;

    // For loop to compare every coordinate with the next
    // If there is a change in x or y then store the current coordinate and swap bool
    for (let i = 0; i < path.length - 1; i++) {
        if (vertical) {
            if (path[i][0] != path[i + 1][0]) {
                edgePath.push(path[i]);
                vertical = false;
                horizontal = true;
            }
        }
        else if (horizontal) {
            if (path[i][1] != path[i + 1][1]) {
                edgePath.push(path[i]);
                vertical = true;
                horizontal = false;
            }
        }
    }

    // Push the endpoint to the edgePath
    edgePath.push(path[path.length - 1]);
    return edgePath;
}