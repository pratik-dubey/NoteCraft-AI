import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

export default function Marketingpage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes></Heroes>
      </div>
      <Footer />
    </div>
  );
}
