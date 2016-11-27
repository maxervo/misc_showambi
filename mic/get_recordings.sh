#!/bin/bash
SEGMENT_LENGTH=$1
NUMBER_OF_SEGMENTS=$2
i=0
while [ $i -lt $NUMBER_OF_SEGMENTS ]
do
	arecord -D plughw:1 --duration $SEGMENT_LENGTH -c 1 -f cd -vv ~/record.wav
	i=$((i + 1))
	echo "segment number"
	echo $i
done

