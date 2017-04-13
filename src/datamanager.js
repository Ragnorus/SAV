function XMLToJSON(xmlFilePath){
	var request;

	function startRequestObject()
	{
		request = new XMLHttpRequest();

		//Add Listeners
		request.addEventListener("progress", UpdateProgress);
		request.addEventListener("load", LoadComplete);
		request.addEventListener("error", ReportError);
		request.addEventListener("abort", CancelRequest);
		
		request.onreadystatechanged = HandleReadyStateChanged;

		request.open("GET", "./XML Files/hadoop_yarn.xml", true);
		request.send();
	}

	function HandleReadyStateChanged(){
		if(request.readyState = 4 && request.status == 200){  // 4 = DONE
			ParseXML();
		}
	}

	function ParseXML(){
		var xmlDoc = request.responseXML;
		var data = xmlDoc.getElementsByTagName("container");

		for(var i = 0 ; i < data.length; i++){
			//Gather node data
			console.log(data[i]);
			//Gather link data (dependencies between packages)
		}
	}

	function UpdateProgress(progress){
		console.log("Received Progress Report.");
	}

	function CancelRequest(cancelled){
		//TODO: Alert the user we are aborting the download.
		console.log("aborting request");
		request.abort();
	}

	function LoadComplete(complete){
		//TODO: Alert user that the download finished.
		console.log("Load Complete, now what?")
	}

	function ReportError(error){
		console.log("ERROR");
	}
}