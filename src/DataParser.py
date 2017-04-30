import os
import sys

#Function that validates the input string path that was given by the User
def ValidatePath(path):
	error = ''
	if os.path.exists(path) == False:
		error = 'INVALID PATH: The file specified does not exist.'

	return error

if len(sys.argv) > 1:
	print("\n The path is = " + sys.argv[1] + "\n")
	print("\n Validating the path to the XML file... \n")
	message = validationResult = ValidatePath(sys.argv[1])

	if message != '':
		print("\n" + message + "\n")
	else:
		print("\n Formatting the CDA XML Data to JSON\n")
		from CDAContainerXMLParser import *
		CreateContainerJSON(sys.argv[1])