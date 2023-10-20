function showGraph(valueType) {
    // Create a new graph element
    const graphElement = document.createElement('div');
    graphElement.className = 'graph';
    graphElement.innerHTML = `<h2>${valueType} Graph</h2><p>Graph content goes here...</p>`;

    // Append the graph to the container
    document.getElementById('graph-container').appendChild(graphElement);
}
