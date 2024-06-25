import { useRouter } from 'next/router';

export default function VideoPlayer() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="relative">
      <button
        className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded z-10"
        onClick={() => router.push(`/video/${id}`)}
      >
        Close
      </button>
      <video className="w-full h-screen" controls>
        <source src="https://drm-test.kineticastudios.com/gotg2-trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
