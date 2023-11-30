// flower

var flowerCenterSizeX = 80 // change the size of the center X
var flowerCenterSizeY = 80 // change the size of the center Y
var lineWidth = 19 // change the stroke weight
var pettelSizeX = 150 // change the size of the pettels X
var pettelSizeY = 150 // change the size of the pettels Y


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(123, 237, 137); // green color
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);

let showTheflower = true;
let someNumber = 10;
if(someNumber > 5){

// Draw flower stem
stroke(0);
strokeWeight(lineWidth);
line(100, 100, 100, 195);

// Draw flower petals
fill(115, 109, 227); // purple color

ellipse(100, 50, pettelSizeX, pettelSizeY);
ellipse(50, 100, pettelSizeX, pettelSizeY);
ellipse(100, 150, pettelSizeX, pettelSizeY);
ellipse(150, 100, pettelSizeX, pettelSizeY);

// Draw flower center
fill(255, 255, 0); // Yellow color
ellipse(100, 100, flowerCenterSizeX, flowerCenterSizeY);

}
}
