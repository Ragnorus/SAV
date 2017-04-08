export function PackageNodes(xmlFilePath){
	//imports
	const d3 = require('./d3/d3');
	
	//Specify the xml file and the callbackwith D3.
	d3.xml(xmlFilePath, xmlCallback);

	//functions
	function xmlCallback(error, data)
	{
		if(error) 
		{
			throw error
		}
	}	
}