import Card from "../components/common/Card";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid place-items-center">
      <Card
        title="Card Title (Next.js)"
        description="This is a reusable card component with Tailwind + TypeScript!"
        image="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
      >
      </Card>
      <Button label="Another Button" onClick={() => alert("Clicked!")} />
    </div>
  );
}
