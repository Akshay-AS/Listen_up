var songs=JSON.parse(localStorage.getItem('favlist'));
if(songs==null){
  songs=[];
}
DisplayList(songs);
function Submit(){
  let song={
    Name:document.getElementById("SName").value,
    Artist:document.getElementById("SArtist").value,
    Year:document.getElementById("YearReleased").value,
    Album:document.getElementById("AlbumCover").value
  }
  songs.push(song);
  localStorage.setItem('favlist',JSON.stringify(songs));
  DisplayList(songs);
}

var s=document.getElementById("s");
s.addEventListener("click",Submit);



function DisplayList(songList){
    var table=document.querySelector("#SongTable");
    table.innerHTML="<tr><th>SongName</th><th>AlbumCover</th><th>SongArtist</th><th>YearReleased</th></tr>";
    for(var i=0;i<songList.length;i++)
    {
        table.innerHTML+=`
        <tr>
            <td>${songList[i].Name}</td>
            <td><img src="${songList[i].Cover}"></td>
            <td>${songList[i].Artist}</td>
            <td>${songList[i].Year}</td>
        </tr>`
    }
    var counter=document.getElementById("TotalSongs");
    counter.innerHTML=`Total Songs: ${songList.length}`;
}

function Sort(array,key){    
  JSON.stringify(array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  }));
  DisplayList(songs);
}
var sorted=document.getElementById("SortBy");
output=sorted.value;
sorted.addEventListener('change',function() {
  Sort(songs,output);
});


