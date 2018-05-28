## Prototype

The prototype works like this:
* record 3s while listening to a story
* parse this file through pocketsphinx
* read the resulting text file
* repeat

## Generate Language Models

Go here: http://www.speech.cs.cmu.edu/tools/lmtool-new.html
Upload your language model text file.



## Install latest nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs


## install pocketsphinx

sudo apt install pocketsphinx libpocketsphinx-dev libsphinxbase-dev cmake pocketsphinx-en-us

//sudo npm install -g cmake-js

//sudo npm install pocketsphinx



## runnign the command

pocketsphinx_continuous -adcdev hw:1,0  -nfft 2048 -samprate 48000 -inmic yes
pocketsphinx_continuous -adcdev hw:1,0 -inmic yes -samprate 44100 -nfft 2048
pocketsphinx_continuous -inmic yes -samprate 44100 -nfft 2048

pocketsphinx_continuous -inmic yes -samprate 44100 -nfft 2048 -allphone_ci 1 -lm language_model.lm -dict dictionary.dic

pocketsphinx_continuous -adcdev plughw:1,0 -inmic yes -lm 6914.lm -dict 6914.dic -kws_delay 1 2>/dev/null

pocketsphinx_continuous -adcdev plughw:1,0 -inmic yes -lm 0916.lm -dict 0916.dic -kws_delay 1 2>/dev/null


## socat to unbuffer



sudi apt install socat

make a socket to pipe to
$ mkfifo messages

pocketsphinx_continuous -inmic yes -lm 0916.lm -dict 0916.dic -kws_delay 1 2>/dev/null

socat EXEC:"listento",pty GOPEN:mylog.log



## from recorded file



pocketsphinx_continuous -infile test16k.wav -lm 6914.lm -dict 6914.dic 2>/dev/null


## node library 

https://github.com/eiriksm/pocketsphinx-continuous-node

## generate the library files

http://www.speech.cs.cmu.edu/tools/lmtool-new.html


## setup alsa

https://stackoverflow.com/questions/47188528/how-to-set-default-microphone-on-raspberry-pi-3b-with-raspbian-stretch



## found code

https://github.com/slowrunner/Pi3RoadTest


---

https://tlk.io/iotdundee