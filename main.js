var images= [
    "https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-dad-005.jpg",
    "https://clipartstation.com/wp-content/uploads/2018/09/clipart-mother-7.jpg",
    "https://www.netclipart.com/pp/m/18-183564_lukes-little-sister-brother-face-clipart.png",
    "http://i7.photobucket.com/albums/y299/nooranoor82/Blog/RASHA-Outfit-NightGown1.png",
    "https://images.theconversation.com/files/252783/original/file-20190107-32151-ennz8g.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
    ];
  var i = 0;
  function nextslide(){
    if(i == 9)
      {
        i=0;
      }
   document.getElementById("album").src = images[i]
  i++;
  }
  