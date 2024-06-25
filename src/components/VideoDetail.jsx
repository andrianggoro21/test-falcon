import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from 'react-icons/fa';

export default function VideoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="p-4 bg-gray-900 text-white"> 
      <div className="flex items-center justify-between mb-4">
        <Link href="/home" className="text-blue-500">
          Home
        </Link>
      </div>
      <div className="relative mb-4">
        <Image
          src="/images/banner.jpg"
          alt="Video Banner"
          width={800}
          height={400}
          className="w-full"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2">
          <h1 className="text-2xl">Sujud Terakhir Bapak</h1>
        </div>
      </div>
      <div className="flex">
        <div className="relative mr-4">
          <Image
            src="/images/thumbnail.jpg"
            alt="Video Thumbnail"
            width={192}
            height={192}
            className="rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="flex items-center justify-center text-white rounded-full transform transition-transform duration-300 hover:scale-110"
              style={{ width: '50px', height: '50px', background: 'rgba(0, 0, 0, 0.5)' }}
              onClick={() => router.push(`/play/${id}`)}
            >
              <FaPlay size={20} />
            </button>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="flex items-center space-x-2 text-black">
              <span className="bg-gray-200  px-2 py-1 rounded">68 minutes</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Drama</span>
            </div>
          </div>
          <div className="mb-4">
            <button
              className={`px-4 py-2 ${activeTab === 'info' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black' } rounded mr-2`}
              onClick={() => setActiveTab('info')}
            >
              Info Film
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'detail' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded`}
              onClick={() => setActiveTab('detail')}
            >
              Detail Film
            </button>
          </div>
          {activeTab === 'info' ? (
            <div>
              <h2 className="text-lg font-bold">Info Film</h2>
              <p>Kebaikan yang kita tanam tak perlu di perlihatkan dengan ucapan. Terkadang nilai-nilai kebaikan dan keburukan selalu tampak bias pada diri seseorang</p>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-bold">Detail Film</h2>
              <p>
                <strong>Rating:</strong> Semua Umur<br/>
                <strong>Year:</strong> 2024<br/>
                <strong>Genre:</strong> Drama, Family<br/>
                <strong>Producer:</strong> Sentot Sahid<br/>
                <strong>Director:</strong> Reka Wijaya<br/>
                <strong>Cast:</strong> Aulia Sarah, Indro Warkop, Rey Mbayang, Shennina Cinnamon
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
