import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
        "Access to group classes",
        "1 personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
        "Unlimited group classes",
        "3 personal training sessions per month",
        "Access to sauna and steam room",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 99.99,
      features: [
        "Access to all gym equipment and facilities",
        "Locker room access with personal locker",
        "Unlimited group classes",
        "Unlimited personal training sessions",
        "Free access to all workshops",
        "Access to sauna, steam room, and pool",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
