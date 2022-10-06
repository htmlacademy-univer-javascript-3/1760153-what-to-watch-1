import { useEffect, useRef } from 'react';

type PlayerPreviewProps = {
  previewImage: string,
  previewVideo: string;
};

function PlayerPreview(props: PlayerPreviewProps): JSX.Element {
  const { previewImage, previewVideo } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(() => videoRef.current?.play(), 1000);

    return () => clearTimeout(delay);
  });

  return (
    <video ref={videoRef} poster={previewImage} width="280" height="175" loop muted>
      <source src={previewVideo} type="video/mp4" />
    </video>
  );
}

export default PlayerPreview;
