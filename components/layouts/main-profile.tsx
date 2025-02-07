import Image from "next/image";

export function Profile() {
  return (
    <div className="relative mb-28">
      <Image
        src="/_static/github-banner-light.png"
        width={917}
        height={163}
        className="w-full h-40 object-cover"
        alt="banner"
      />
      <div className="absolute -bottom-28 left-5 flex gap-3 items-center justify-center">
        <Image
          src="/_static/profile.jpg"
          width={958}
          height={960}
          className="size-28 border-4 border-white rounded-full"
          alt="profile"
        />
        <div className="not-prose">
          <p className="font-semibold text-lg">Darshan Dhakal</p>
          <p className="text-sm text-gray-600">Freenalce At Upwork / Student</p>
        </div>
      </div>
    </div>
  );
}
