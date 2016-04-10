$(document).ready(function() {
	var gameData = [
		{
			"title": "Adrift", 
			"release": "3/28/16",
			"link": "<a href='http://www.adr1ft.com'/>Home Page</a>",
			"support": "Oculus Rift"
		},
		{
			"title": "Eagle Flight", 
			"release": "Q3 2016",
			"link": "<a href='https://www.ubisoft.com/en-GB/game/eagle-flight/'>Home Page</a>",
			"support": "Oculus Rift, HTC Vive, Playstation VR"
		},
		{
			"title": "Hover Junkers", 
			"release": "4/5/16",
			"link": "<a href='http://store.steampowered.com/app/380220/'>Steam Page</a>",
			"support": "HTC Vive"
		}
	]      
    $('#example').DataTable({
    	processing: true,
        data: gameData,
	    columns: [
	        {data: "title"},                
	        {data: "support"},
	        {data: "link"},
	        {data: "release"},
	    ],
	    "order": [[ 0, "asc" ]]
	});
});

/* Template
		{
			"title": "", 
			"release": "",
			"link": "<a href=''></a>",
			"support": ""
		},
*/