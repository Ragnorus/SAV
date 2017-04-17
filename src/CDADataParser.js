function XMLToJSON(xmlFilePath){
	var request;
	startRequestObject();

	function startRequestObject()
	{
		request = new XMLHttpRequest();

		//Add Listeners
		request.addEventListener("progress", UpdateProgress);
		request.addEventListener("load", LoadComplete);
		request.addEventListener("error", ReportError);
		request.addEventListener("abort", CancelRequest);
		
		request.onreadystatechanged = HandleReadyStateChanged;

		request.open("GET", "./XML Files/hadoop-hdfs.xml", true);
		request.send();
	}

	function HandleReadyStateChanged(){
		if(request.readyState = 4 && request.status == 200){  // 4 = DONE
			ParseXML();
		}
	}

	function ParseXML(){
		var xmlDoc = request.responseXML;		
		var data = xmlDoc.getElementsByTagName("namespace");

		for(var i = 0 ; i < data.length; i++){
			//Gather package data
			var name = data[i].getAttribute("name");

			//Gather package dependencies.
			var containedClasses = data[i].getChildNodes();
			var NumClasses = containedClasses.length;
			var targetPackages = [];			
			for(var j = 0; j < NumClasses; j++){
				var dependencies = containedClasses.getChildNodes();
				for(var t = 0; t < dependencies.length; t++){
					var arr = dependencies[t].split('.');
					arr.pop(); //remove class name from the FullName string.
					var namespaceStr = arr.join('.');
					if(targetPackages.find(namespaceStr) == 'undefined')
					{
						targetPackages.push(namespaceStr);
					}
				}
			}


			console.log(name);			
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
		console.log("Load Complete, start parsing the XML data");
		ParseXML();
	}

	function ReportError(error){
		console.log("ERROR");
	}
}