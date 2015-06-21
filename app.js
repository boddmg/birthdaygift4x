(function() {
  var RecordRTC, onData, onTune, recorder, shifter;

  RecordRTC = require("recordrtc");

  recorder = RecordRTC(mediaStream, {
    type: 'audio'
  });

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  shifter = require("pitch-shift")(onData = function(frame) {
    return console.log(frame);
  }, onTune = function(t, pitch) {
    console.log("Got pitch ", pitch, " at time ", t);
    return 1.0;
  });

  console.log("start");

  shifter(new Float32Array([1, 1, 0, 1, 0, 0, 0]));

  console.log("end");

  window.onRecordClick = function() {
    if (this.recording) {
      this.isRecording = false;
      recorder.stopRecording(function(audioURL) {
        return console.log(recorder.bufferSize);
      });
    } else {
      this.recording = true;
      recorder.startRecording();
    }
    return console.log("click");
  };

  this.testing = 1;

}).call(this);
