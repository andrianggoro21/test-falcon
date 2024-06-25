import React from "react";
import VideoThumbnail from "@/components/VideoThumbnail";
import Image from "next/image";
import Slider from "react-slick";

const videos = [
  { id: 1, title: "Sujud Terakhir Bapak" },
  { id: 2, title: "Sujud Terakhir Bapak" },
  { id: 3, title: "Sujud Terakhir Bapak" },
  { id: 4, title: "Sujud Terakhir Bapak" },
  { id: 5, title: "Sujud Terakhir Bapak" },
  { id: 6, title: "Sujud Terakhir Bapak" },
  { id: 7, title: "Sujud Terakhir Bapak" },
  { id: 8, title: "Sujud Terakhir Bapak" },
  { id: 9, title: "Sujud Terakhir Bapak" },
  { id: 10, title: "Sujud Terakhir Bapak" },
];

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="px-8 py-6 md:px-20 bg-gray-900 text-white">
      <div className="mt-2 mb-10">
        <Image
          src="/images/banner.jpg"
          alt="Video Banner"
          width={800}
          height={400}
          className="w-full"
        />
      </div>
      <h2 className="text-xl font-bold mb-4">Drama</h2>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="flex justify-center items-center">
            <div className="w-full flex justify-center">
              <VideoThumbnail id={video.id} title={video.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
