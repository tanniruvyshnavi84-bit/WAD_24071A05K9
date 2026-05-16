function Subscription() {

  const plans = [
    {
      name: "Basic",
      price: "₹499 / Month",
      features: [
        "Music Streaming",
        "720p Quality",
        "Limited Downloads"
      ]
    },

    {
      name: "Premium",
      price: "₹999 / Month",
      features: [
        "Unlimited Streaming",
        "HD Audio",
        "Offline Downloads"
      ]
    },

    {
      name: "Gold",
      price: "₹1499 / Month",
      features: [
        "Ultra HD Audio",
        "Unlimited Downloads",
        "Ad Free Experience"
      ]
    }
  ];

  return (

    <div className="page-container">

      <h1 className="page-title">
        Premium Subscription
      </h1>

      <div className="plans-container">

        {plans.map((plan, index) => (

          <div className="plan-card" key={index}>

            <h2>{plan.name}</h2>

            <h3>{plan.price}</h3>

            <ul>

              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}

            </ul>

            <button>
              Subscribe Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Subscription;