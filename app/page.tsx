import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const companyData = [
  { id: 1, name: "Evergreen Landscaping" },
  { id: 2, name: "Sunrise Bakery" },
  { id: 3, name: "Blue Ocean Seafood" },
  { id: 4, name: "Mountain Peak Ski Resort" },
  { id: 5, name: "Urban Threads Clothing" },
  { id: 6, name: "Harmony Music Academy" },
  { id: 7, name: "Paws & Claws Veterinary" },
  { id: 8, name: "Golden Grain Farms" },
  { id: 9, name: "Starlight Cinema" },
  { id: 10, name: "Cozy Corner Cafe" },
  { id: 11, name: "Swift Courier Services" },
  { id: 12, name: "Greenleaf Organic Market" },
  { id: 13, name: "Sapphire Jewelers" },
  { id: 14, name: "Sunset Yoga Studio" },
  { id: 15, name: "Rapid Auto Repair" },
  { id: 16, name: "Bookworm's Haven" },
  { id: 17, name: "Flavor Fusion Restaurant" },
  { id: 18, name: "Pixel Perfect Photography" },
  { id: 19, name: "Wellness Springs Spa" },
  { id: 20, name: "Tiny Tots Daycare" },
  { id: 21, name: "Elite Sports Academy" },
  { id: 22, name: "Whiskers & Tails Pet Grooming" },
  { id: 23, name: "Fresh Finds Farmers Market" },
  { id: 24, name: "Bright Smiles Dental Clinic" },
  { id: 25, name: "Everest Expeditions" },
  { id: 26, name: "Crafty Creations Art Supply" },
  { id: 27, name: "Blossom Florists" },
  { id: 28, name: "Speedy Wheels Bicycle Shop" },
  { id: 29, name: "Serene Waters Aquarium" },
  { id: 30, name: "Tasty Bites Food Truck" },
  { id: 31, name: "Helping Hands Home Care" },
  { id: 32, name: "Vintage Vogue Boutique" },
  { id: 33, name: "Sunny Days Solar Solutions" },
  { id: 34, name: "Melody Makers Music Store" },
  { id: 35, name: "Furry Friends Pet Hotel" },
  { id: 36, name: "Green Thumb Nursery" },
  { id: 37, name: "Stitch in Time Tailoring" },
  { id: 38, name: "Smooth Sailing Boat Rentals" },
  { id: 39, name: "Culinary Delights Cooking School" },
  { id: 40, name: "Fit & Fab Gym" },
  { id: 41, name: "Whimsical Wonders Toy Store" },
  { id: 42, name: "Tranquil Escapes Travel Agency" },
  { id: 43, name: "Brew & Bean Coffee Roasters" },
  { id: 44, name: "Polished Perfection Car Wash" },
  { id: 45, name: "Enchanted Events Wedding Planning" },
  { id: 46, name: "Healing Touch Massage Therapy" },
  { id: 47, name: "Timeless Treasures Antiques" },
  { id: 48, name: "Crisp & Clean Laundromat" },
  { id: 49, name: "Sweet Dreams Mattress Store" },
  { id: 50, name: "Petal Pushers Flower Shop" },
];

export default function Home() {
  return (
   <div className="p-20">
    <h1 className="text-4xl font-bold text-center mb-8">Data Dashboard Discovery</h1>
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>{companyData[0].name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
   </div>
  );
}
