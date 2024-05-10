import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-scroll bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/img/img2.jpg")' }}>
      <div className ="font-sans text-9xl font-extrabold inline-block align-middle">
        Where do <span className="text-yellow-500">you</span>
        &nbsp;want to go next?
      </div>
    </main>
  );
}
