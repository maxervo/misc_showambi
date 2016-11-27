import sys

with open('record_amps_small.dat',"r") as f:
	for line in f:
		if line[0] != ";":
			current_amplitude = map(float, line.split())			
			print current_amplitude[1]

