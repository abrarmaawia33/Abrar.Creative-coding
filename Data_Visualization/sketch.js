let table;
let titleColor = 'white';

function preload() {
    // Load the CSV file
    table = loadTable("My_Apps.csv", "csv");
}

function setup() {
    createCanvas(600, 400); // Increased canvas size for better display
    background(128); // Set background color to gray
    noStroke(); // No stroke for the bars
}

function draw() {
    background(128); // Clear the background on each draw

    // Interactive title
    if (mouseX > 100 && mouseX < 500 && mouseY > 30 && mouseY < 60) {
        titleColor = color(random(255), random(255), random(255));
    } else {
        titleColor = 'white';
    }

    push();
    textSize(32); // Increased text size for title
    textStyle(BOLD);
    fill(titleColor);

    // Add shadow to the title
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
    
    text('Apps Data Visualization', 100, 50); // Title of the visualization
    textSize(16);
    textStyle(NORMAL);

    translate(100, 100); // Translate to leave space for titles and labels

    let data = table.getRow(1).arr; // Get the data values
    let appNames = table.getRow(0).arr; // Get the app names
  
    let maxDataValue = max(data.map(Number)); // Calculate the max data value for mapping

    // colors for the boxes
    let colors = [color(0), color(168, 50, 141), color(207, 200, 4), color(189, 11, 11), color(38, 111, 222), color(36, 189, 19)];

    for (let i = 0; i < table.getColumnCount(); i++) {
        let rectWidth = map(data[i], 0, maxDataValue, 25, 300); // Map data value to bar width

        fill(colors[i]); // Set the fill color
        textAlign(CENTER, CENTER);
        rect(0, i * 50, rectWidth, 40); // Draw the bar

        fill(255); // Set text color to white
        textSize(15);
        textStyle(BOLD); 
        text(appNames[i], rectWidth / 2, i * 50 + 20); // Display the app name inside the box
      
        text(data[i], rectWidth + 40, i * 50 + 20); // Display the data value outside the box
    }
    pop();
}
