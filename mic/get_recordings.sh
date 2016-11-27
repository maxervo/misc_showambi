#!/bin/bash
SEGMENT_LENGTH=$1
NUMBER_OF_SEGMENTS=$2
i=0
while [ $i -lt $NUMBER_OF_SEGMENTS ]
do
	arecord -D plughw:1 -c 1  --duration $SEGMENT_LENGTH -f U8 -vv ~/record.wav
	i=$((i + 1))
	echo "segment number"
	echo $i
done

