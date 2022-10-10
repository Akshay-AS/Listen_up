var songs=JSON.parse(localStorage.getItem('favlist'));
if(songs==null){
  songs=[];
}
var reader= new FileReader();
var url = "";








function DisplayList(songs){
  // var table=document.getElementsByClassName("SongTable");
  var data = document.querySelector('.SongTable')
  data.innerHTML="<tr><th>SongName</th><th>AlbumCover</th><th>SongArtist</th><th>YearReleased</th></tr>";
  for(var i=0;i<songs.length;i++)
  {
      console.log(songs[i].imageURL)
      data.innerHTML+=`<tr><td>${songs[i].Name}</td>
          <td><img width = "100%" src="${songs[i].imageURL}"></td>
          <td>${songs[i].Artist}</td>
          <td>${songs[i].Year}</td> </tr>`;
  }
  
  // document.getElementById("SongTable").innerHTML = table;
  // document.getElementById("TotalSongs").innerHTML="Total Songs: " +songList.length;

  
  document.getElementById("TotalSongs").innerHTML=  "Total Songs: " + songs.length;

}
  

function Submit(){
  let song={
    Name:document.getElementById("SName").value,
    Artist:document.getElementById("SArtist").value,
    Year:document.getElementById("YearReleased").value,
    imageURL:url
  }
  songs.push(song);
  localStorage.setItem('favlist',JSON.stringify(songs));
  DisplayList(songs);
}


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('s').addEventListener('click',Submit)
  DisplayList(songs);


  
  
})

// var s=document.getElementById("fm1");
// s.addEventListener("submit",Submit);


// function Sort(){
//   var sorted=document.getElementsByClassName("SortBy");
//   key=sorted.value; 
//   array=songs;
     
//   JSON.stringify(array.sort(function(a, b) {
//     var x = a[key]; var y = b[key];
//     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//   }));
//   DisplayList(songs);
// }
// var sorted=document.getElementsByClassName("SortBy");
// output=sorted.value;
// // sorted.addEventListener('change', Sort);


function Sort(){
  var songget= JSON.parse(localStorage.getItem("favlist"));
  var songid = document.getElementById("SortBy").value;

  console.log(songid)
  switch(songid){
      case 'SongName':
          songget.sort(sortbyname);
          console.log("Sorted by Name");

          break;
      
      case 'SongArtist':
          songget.sort(sortbyartist);
          console.log("Sorted by Artist");

          break;
      case 'YearReleased':
          songget.sort(sortbyyear);
          console.log("Sorted by Year");

          break;
      
      default:
          console.log("break");
  }
  DisplayList(songget);

}




function sortbyname(a,b){
  const songa = a.Name.toUpperCase();
  const songb = b.Name.toUpperCase();

  let comparison = 0;
  if (songa > songb) {
      comparison = 1;
  } else if (songa < songb) {
      comparison = -1;
  }
  return comparison;

}

function sortbyartist(a,b){
  if(a.Artist<b.Artist)
    return -1;
  else{
    return 0
  }  
}

function sortbyyear(a,b){
  
  if(a.Year<b.Year)
  return -1;
else{
  return 0
}  
}

function uploadImage(){
  var file = document.getElementById('AlbumCover').files[0];
  reader.readAsDataURL(file);
}

reader.onloadend = ()=>{
  url=reader.result;
  
}


function search(){

  var songget = JSON.parse(localStorage.getItem('favlist'));
  var srh = document.getElementById("Search").value;

  if (srh==="" || srh===null){
    DisplayList(songget);

  }

  else{
    searchbyname(songget,srh);
    // searchbyartist(songget,srh);
    // searchbyyear(songget,srh);
    
  }
}
var result;
function searchbyname (songget,srh){
  var searching = new RegExp(`${srh}`,"gi");
  result = songget.filter(function(el){
    return searching.test(el.Name)
  })
  DisplayList(result);
}
function searchbyartist(songget,srh){
  result = songget.filter(function(e){return e.artist == srh});
  DisplayList(result);
}
function searchbyyear(songget,srh){
  result = songget.filter(function(e){return e.Year == srh});
}









