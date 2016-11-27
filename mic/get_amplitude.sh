#!/bin/sh
READ_FILENAME=$1
sox $READ_FILENAME -r 1 record_amps_small.dat
echo "new amplitudes file"


