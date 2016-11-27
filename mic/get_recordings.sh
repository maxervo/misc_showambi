#!/bin/bash
SEGMENT_LENGTH=$1
NUMBER_OF_SEGMENTS=$2
i=0
while [ $i -lt $NUMBER_OF_SEGMENTS ]
do
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record0.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record1.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record2.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record3.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record4.wav
	arecord	-D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record5.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record6.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record7.wav
	arecord	-D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record8.wav
	arecord -D plughw:1 -c 1 --duration $SEGMENT_LENGTH -f U8 -r22050 -vv ~/record9.wav
	sox ~/record0.wav ~/record0.wav ~/record1.wav ~/record2.wav ~/record3.wav ~/record4.wav ~/record5.wav ~/record6.wav ~/record7.wav ~/record8.wav ~/record9.wav ~/record.wav
	i=$((i + 1))
	echo "segment number"
	echo $i
done

