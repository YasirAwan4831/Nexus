import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';
import { useState } from 'react';

const VideoCallMock = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4">
      <div className="h-48 bg-gray-800 flex items-center justify-center rounded mb-4">
        <span className="text-gray-400">Video Stream (Mock)</span>
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={() => setMicOn(!micOn)} className="p-2 bg-gray-700 rounded-full">
          {micOn ? <Mic /> : <MicOff />}
        </button>

        <button onClick={() => setVideoOn(!videoOn)} className="p-2 bg-gray-700 rounded-full">
          {videoOn ? <Video /> : <VideoOff />}
        </button>

        <button className="p-2 bg-red-600 rounded-full">
          <PhoneOff />
        </button>
      </div>
    </div>
  );
};

export default VideoCallMock;
