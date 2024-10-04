import { CompanyResponse } from '@/types/company';
import { NextRequest, NextResponse } from 'next/server';

const companyData = [
  { id: 1, name: 'Evergreen Landscaping' },
  { id: 2, name: 'Sunrise Bakery' },
  { id: 3, name: 'Blue Ocean Seafood' },
  { id: 4, name: 'Mountain Peak Ski Resort' },
  { id: 5, name: 'Urban Threads Clothing' },
  { id: 6, name: 'Harmony Music Academy' },
  { id: 7, name: 'Paws & Claws Veterinary' },
  { id: 8, name: 'Golden Grain Farms' },
  { id: 9, name: 'Starlight Cinema' },
  { id: 10, name: 'Cozy Corner Cafe' },
  { id: 11, name: 'Swift Courier Services' },
  { id: 12, name: 'Greenleaf Organic Market' },
  { id: 13, name: 'Sapphire Jewelers' },
  { id: 14, name: 'Sunset Yoga Studio' },
  { id: 15, name: 'Rapid Auto Repair' },
  { id: 16, name: "Bookworm's Haven" },
  { id: 17, name: 'Flavor Fusion Restaurant' },
  { id: 18, name: 'Pixel Perfect Photography' },
  { id: 19, name: 'Wellness Springs Spa' },
  { id: 20, name: 'Tiny Tots Daycare' },
  { id: 21, name: 'Elite Sports Academy' },
  { id: 22, name: 'Whiskers & Tails Pet Grooming' },
  { id: 23, name: 'Fresh Finds Farmers Market' },
  { id: 24, name: 'Bright Smiles Dental Clinic' },
  { id: 25, name: 'Everest Expeditions' },
  { id: 26, name: 'Crafty Creations Art Supply' },
  { id: 27, name: 'Blossom Florists' },
  { id: 28, name: 'Speedy Wheels Bicycle Shop' },
  { id: 29, name: 'Serene Waters Aquarium' },
  { id: 30, name: 'Tasty Bites Food Truck' },
  { id: 31, name: 'Helping Hands Home Care' },
  { id: 32, name: 'Vintage Vogue Boutique' },
  { id: 33, name: 'Sunny Days Solar Solutions' },
  { id: 34, name: 'Melody Makers Music Store' },
  { id: 35, name: 'Furry Friends Pet Hotel' },
  { id: 36, name: 'Green Thumb Nursery' },
  { id: 37, name: 'Stitch in Time Tailoring' },
  { id: 38, name: 'Smooth Sailing Boat Rentals' },
  { id: 39, name: 'Culinary Delights Cooking School' },
  { id: 40, name: 'Fit & Fab Gym' },
  { id: 41, name: 'Whimsical Wonders Toy Store' },
  { id: 42, name: 'Tranquil Escapes Travel Agency' },
  { id: 43, name: 'Brew & Bean Coffee Roasters' },
  { id: 44, name: 'Polished Perfection Car Wash' },
  { id: 45, name: 'Enchanted Events Wedding Planning' },
  { id: 46, name: 'Healing Touch Massage Therapy' },
  { id: 47, name: 'Timeless Treasures Antiques' },
  { id: 48, name: 'Crisp & Clean Laundromat' },
  { id: 49, name: 'Sweet Dreams Mattress Store' },
  { id: 50, name: 'Petal Pushers Flower Shop' },
  { id: 51, name: 'Tech Innovators Inc.' },
  { id: 52, name: 'Global Logistics Solutions' },
  { id: 53, name: 'Eco-Friendly Products Co.' },
  { id: 54, name: 'Gourmet Delights Catering' },
  { id: 55, name: 'Precision Engineering Ltd.' },
  { id: 56, name: 'Wellness Retreat Center' },
  { id: 57, name: 'Urban Mobility Solutions' },
  { id: 58, name: 'Creative Design Studio' },
  { id: 59, name: 'Financial Freedom Advisors' },
  { id: 60, name: 'Adventure Outfitters' },
  { id: 61, name: 'Innovative Learning Academy' },
  { id: 62, name: 'Gourmet Pet Treats' },
  { id: 63, name: 'Eco-Friendly Cleaning Services' },
  { id: 64, name: 'Luxury Car Rentals' },
  { id: 65, name: 'Artisanal Cheese Shop' },
  { id: 66, name: 'Virtual Reality Experiences' },
  { id: 67, name: 'Sustainable Fashion Boutique' },
  { id: 68, name: 'Organic Beauty Products' },
  { id: 69, name: 'Smart Home Solutions' },
  { id: 70, name: 'Craft Beer Brewery' },
  { id: 71, name: 'Mindfulness Meditation Center' },
  { id: 72, name: 'Extreme Sports Equipment' },
  { id: 73, name: 'Vintage Vinyl Records' },
  { id: 74, name: 'Gourmet Coffee Roasters' },
  { id: 75, name: 'Eco-Friendly Packaging Co.' },
  { id: 76, name: 'Personal Fitness Coaching' },
  { id: 77, name: 'Artisanal Soap Company' },
  { id: 78, name: 'Drone Photography Services' },
  { id: 79, name: 'Sustainable Energy Solutions' },
  { id: 80, name: 'Exotic Pet Supplies' },
  { id: 81, name: 'Gourmet Ice Cream Parlor' },
  { id: 82, name: 'Virtual Event Planning' },
  { id: 83, name: 'Customized Gift Baskets' },
  { id: 84, name: 'Outdoor Adventure Tours' },
  { id: 85, name: 'Specialty Tea House' },
  { id: 86, name: 'Vintage Fashion Rentals' },
  { id: 87, name: 'Eco-Friendly Home Decor' },
  { id: 88, name: 'Personalized Nutrition Plans' },
  { id: 89, name: 'Luxury Pet Spa' },
  { id: 90, name: 'Sustainable Furniture Design' },
  { id: 91, name: 'Artisanal Chocolate Factory' },
  { id: 92, name: 'Virtual Reality Gaming Center' },
  { id: 93, name: 'Eco-Friendly Baby Products' },
  { id: 94, name: 'Specialty Cocktail Bar' },
  { id: 95, name: 'Sustainable Landscaping Services' },
  { id: 96, name: 'Vintage Camera Shop' },
  { id: 97, name: 'Gourmet Popcorn Company' },
  { id: 98, name: 'Eco-Friendly Travel Agency' },
  { id: 99, name: 'Personalized Book Recommendations' },
  { id: 100, name: 'Luxury Camping Gear' },
  { id: 101, name: 'Quantum Computing Solutions' },
  { id: 102, name: 'Sustainable Fashion Collective' },
  { id: 103, name: 'Artisanal Bread Bakery' },
  { id: 104, name: 'Virtual Reality Fitness Studio' },
  { id: 105, name: 'Eco-Friendly Toy Manufacturer' },
  { id: 106, name: 'Gourmet Vegan Restaurant' },
  { id: 107, name: 'Smart Home Automation Services' },
  { id: 108, name: 'Vintage Watch Restoration' },
  { id: 109, name: 'Sustainable Packaging Solutions' },
  { id: 110, name: 'Personalized Genetic Testing' },
  { id: 111, name: 'Luxury Pet Accessories' },
  { id: 112, name: 'Eco-Friendly Surfboard Manufacturer' },
  { id: 113, name: 'Artisanal Cheese Making Workshops' },
  { id: 114, name: 'Virtual Interior Design Services' },
  { id: 115, name: 'Sustainable Beekeeping Supplies' },
  { id: 116, name: 'Gourmet Mushroom Farm' },
  { id: 117, name: 'AI-Powered Language Learning' },
  { id: 118, name: 'Vintage Motorcycle Restoration' },
  { id: 119, name: 'Eco-Friendly Party Supplies' },
  { id: 120, name: 'Personalized Wine Subscriptions' },
  { id: 121, name: 'Luxury Treehouse Rentals' },
  { id: 122, name: 'Sustainable Fishing Gear' },
  { id: 123, name: 'Artisanal Hot Sauce Company' },
  { id: 124, name: 'Virtual Reality Art Gallery' },
  { id: 125, name: 'Eco-Friendly Funeral Services' },
  { id: 126, name: 'Gourmet Insect Protein Snacks' },
  { id: 127, name: 'Smart Gardening Solutions' },
  { id: 128, name: 'Vintage Typewriter Repair' },
  { id: 129, name: 'Sustainable Activewear Brand' },
  { id: 130, name: "Personalized Children's Books" },
  { id: 131, name: 'Luxury Tiny House Builders' },
  { id: 132, name: 'Eco-Friendly Pet Grooming Products' },
  { id: 133, name: 'Artisanal Kombucha Brewery' },
  { id: 134, name: 'Virtual Team Building Experiences' },
  { id: 135, name: 'Sustainable Outdoor Furniture' },
  { id: 136, name: 'Gourmet Salt Company' },
  { id: 137, name: 'AI-Powered Personal Stylist' },
  { id: 138, name: 'Vintage Jukebox Restoration' },
  { id: 139, name: 'Eco-Friendly Gift Wrapping' },
  { id: 140, name: 'Personalized Meal Planning Service' },
  { id: 141, name: 'Luxury Houseplant Delivery' },
  { id: 142, name: 'Sustainable Ski Equipment' },
  { id: 143, name: 'Artisanal Perfume Laboratory' },
  { id: 144, name: 'Virtual Reality Travel Experiences' },
  { id: 145, name: 'Eco-Friendly Office Supplies' },
  { id: 146, name: 'Gourmet Popsicle Company' },
  { id: 147, name: 'Smart Mirror Manufacturer' },
  { id: 148, name: 'Vintage Radio Restoration' },
  { id: 149, name: 'Sustainable Swimwear Brand' },
  { id: 150, name: 'Personalized Fitness Programs' },
  { id: 151, name: 'Luxury Cat Hotel' },
  { id: 152, name: 'Eco-Friendly Yarn Company' },
  { id: 153, name: 'Artisanal Mustard Company' },
  { id: 154, name: 'Virtual Reality Escape Rooms' },
  { id: 155, name: 'Sustainable Shoe Manufacturer' },
  { id: 156, name: 'Gourmet Nut Butter Company' },
  { id: 157, name: 'AI-Powered Resume Writing' },
  { id: 158, name: 'Vintage Pinball Machine Repair' },
  { id: 159, name: 'Eco-Friendly Diaper Service' },
  { id: 160, name: 'Personalized Vitamin Subscriptions' },
  { id: 161, name: 'Luxury Doghouse Builders' },
  { id: 162, name: 'Sustainable Kayak Rentals' },
  { id: 163, name: 'Artisanal Jerky Company' },
  { id: 164, name: 'Virtual Cooking Classes' },
  { id: 165, name: 'Eco-Friendly Mattress Company' },
  { id: 166, name: 'Gourmet Olive Oil Tastings' },
  { id: 167, name: 'Smart Luggage Manufacturer' },
  { id: 168, name: 'Vintage Polaroid Camera Restoration' },
  { id: 169, name: 'Sustainable Stationery Brand' },
  { id: 170, name: 'Personalized Art Therapy Sessions' },
  { id: 171, name: 'Luxury Birdhouse Designs' },
  { id: 172, name: 'Eco-Friendly Car Wash Products' },
  { id: 173, name: 'Artisanal Soda Company' },
  { id: 174, name: 'Virtual Reality Music Concerts' },
  { id: 175, name: 'Sustainable Umbrella Manufacturer' },
  { id: 176, name: 'Gourmet Spice Blends' },
  { id: 177, name: 'AI-Powered Financial Planning' },
  { id: 178, name: 'Vintage Arcade Game Restoration' },
  { id: 179, name: 'Eco-Friendly Pest Control' },
  { id: 180, name: 'Personalized Poetry Writing' },
  { id: 181, name: 'Luxury Aquarium Design' },
  { id: 182, name: 'Sustainable Bicycle Accessories' },
  { id: 183, name: 'Artisanal Vinegar Company' },
  { id: 184, name: 'Virtual Reality Museum Tours' },
  { id: 185, name: 'Eco-Friendly Candle Company' },
  { id: 186, name: 'Gourmet Seaweed Snacks' },
  { id: 187, name: 'Smart Doorbell Manufacturer' },
  { id: 188, name: 'Vintage Synthesizer Repair' },
  { id: 189, name: 'Sustainable Backpack Brand' },
  { id: 190, name: 'Personalized Sleep Coaching' },
  { id: 191, name: 'Luxury Terrarium Designs' },
  { id: 192, name: 'Eco-Friendly Sunscreen' },
  { id: 193, name: 'Artisanal Maple Syrup Farm' },
  { id: 194, name: 'Virtual Reality Meditation Retreats' },
  { id: 195, name: 'Sustainable Kitchenware Brand' },
  { id: 196, name: 'Gourmet Pickles and Ferments' },
  { id: 197, name: 'AI-Powered Home Security' },
  { id: 198, name: 'Vintage Telescope Restoration' },
  { id: 199, name: 'Eco-Friendly Laundry Detergent' },
  { id: 200, name: 'Personalized Travel Itineraries' },
];

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 2)); // Simulated slow API call
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);
  const offset = (page - 1) * limit;
  const totalCount = companyData.length;
  const companyList = companyData.slice(offset, offset + limit);

  return NextResponse.json<CompanyResponse>({
    companies: companyList,
    totalCount,
    page,
    limit,
    hasMore: page * limit < totalCount,
  });
}
