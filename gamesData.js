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
			"link": "<a href='http://store.steampowered.com/app/380220/'>Steam Store</a>",
			"support": "HTC Vive"
		},
		{
			"title": "Werewolves Within", 
			"release": "Fall 2016",
			"link": "<a href='http://www.werewolveswithin.com'>Home Page</a>",
			"support": "Oculus Rift(confirmed), HTC Vive, Playstation VR"
		},
		{
			"title": "Job Simulator", 
			"release": "4/5/16",
			"link": "<a href='http://store.steampowered.com/app/448280/'>Steam Store</a>",
			"support": "HTC Vive"
		},
		{
			"title": "Final Approach", 
			"release": "4/4/16",
			"link": "<a href='http://store.steampowered.com/app/380670/'>Steam Store</a>",
			"support": "HTC Vive"
		},
		{
			"title": "Lucky's Tale", 
			"release": "3/28/16",
			"link": "<a href='http://www.playfulcorp.com/'>Developer Home Page</a>",
			"support": "Oculus Rift"
		},
		{
			"title": "Edge of Nowhere", 
			"release": "Spring 2016",
			"link": "<a href='http://www.insomniacgames.com/games/edge-of-nowhere/'>Home Page</a>",
			"support": "Oculus Rift"
		},
		{
			"title": "EVE: Valkyrie", 
			"release": "3/28/16",
			"link": "<a href='https://www.evevalkyrie.com/'>Home Page</a>",
			"support": "Oculus Rift, Playstation VR(launch title)"
		},
		{
			"title": "Technolust", 
			"release": "Q3 16",
			"link": "<a href='http://irisvirtualreality.com/un-portfolio/technolust-2/'>Home Page</a>",
			"support": "Oculus Rift"
		},
		{
			"title": "Car Car Crash", 
			"release": "4/1/16",
			"link": "<a href='https://www.wearvr.com/apps/car-car-crash2'>App Page</a>",
			"support": "Oculus Rift"
		},
	]      
    $('#gameList').DataTable({
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