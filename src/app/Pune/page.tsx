import Image from 'next/image';

export default function PuneRoute() {
  // List of cities and routes
  const routes = [
    { "name": "Pune to Mumbai", "description": "A comfortable and hassle-free ride from Pune to Mumbai, ensuring you reach your destination with ease and enjoy the vibrant city life.", "link": "/Pune-to-Mumbai-Cab-Service" },
    { "name": "Pune to Kolhapur", "description": "Enjoy a smooth and scenic journey from Pune to Kolhapur, perfect for both business and leisure trips, and explore the rich history and culture of Kolhapur.", "link": "/Pune-to-Kolhapur-Cab" },
    { "name": "Pune to Satara", "description": "Travel comfortably from Pune to Satara and enjoy a peaceful ride through the scenic Western Ghats, famous for its natural beauty and historic landmarks.", "link": "/Pune-to-Satara-Cab" },
    { "name": "Pune to Shirdi", "description": "Embark on a serene journey from Pune to Shirdi and experience divine blessings at the holy Sai Baba temple, a place of spiritual significance.", "link": "/Pune-to-Shirdi-Cab" },
    { "name": "Pune to Mahabaleshwar", "description": "Enjoy a refreshing escape from Pune to Mahabaleshwar, surrounded by scenic hills and serene views, perfect for a relaxing getaway.", "link": "/Pune-to-Mahabaleshwar-Cab" },
    { "name": "Pune to Panchgani", "description": "Take a scenic drive from Pune to Panchgani, a charming hill station known for its lush landscapes, cool climate, and panoramic views.", "link": "/Pune-to-Panchgani-Cabs" },
    { "name": "Pune to Nashik", "description": "Embark on a peaceful journey from Pune to Nashik, a city known for its rich history, vineyards, and sacred temples, making it a must-visit destination.", "link": "/Pune-to-Nashik-Cab" },
    { "name": "Pune to Thane", "description": "Travel comfortably from Pune to Thane, a bustling city offering a perfect blend of urban convenience and scenic beauty, including lakes and parks.", "link": "/pune-to-thane-cab" },
    { "name": "Pune to Kalyan", "description": "Enjoy a smooth ride from Pune to Kalyan, a vibrant city known for its rich history, bustling markets, and cultural landmarks.", "link": "/pune-to-kalyan-cab" },
    { "name": "Pune to Ahmednagar", "description": "Embark on a scenic drive from Pune to Ahmednagar, a historic city known for its forts, temples, and cultural heritage, perfect for history enthusiasts.", "link": "/pune-to-ahmednagar-cab" },
    { "name": "Pune to Solapur", "description": "Experience a smooth journey from Pune to Solapur, a city known for its historical sites, temples, and thriving textile industry, offering a blend of culture and commerce.", "link": "/pune-to-solapur-cab" },
    { "name": "Pune to Alibaug", "description": "Enjoy a coastal drive from Pune to Alibaug, a popular beach destination known for its sandy shores, historic forts, and vibrant atmosphere.", "link": "/City/PuneToAlibaug" },
    { "name": "Pune to Lonavala", "description": "Experience a refreshing drive from Pune to Lonavala, famous for its picturesque landscapes, cool weather, and popular tourist spots like Karla and Bhaja caves.", "link": "/pune-to-lonavala-cab" },
    { "name": "Pune to Karjat", "description": "Travel from Pune to Karjat, a peaceful town nestled between lush green mountains, ideal for adventure activities like trekking and camping.", "link": "/pune-to-karjat-cab" },
    { "name": "Pune to Igatpuri", "description": "Discover the serene beauty of Igatpuri, a hill station near Pune famous for its lush green hills, waterfalls, and the Vipassana International Meditation Centre.", "link": "/pune-to-igatpuri-cab" },
    { "name": "Pune to Bhimashankar", "description": "Embark on a spiritual journey from Pune to Bhimashankar, home to one of the twelve Jyotirlingas of Lord Shiva, nestled in the Western Ghats.", "link": "/pune-to-bhimashankar-cab" },
    { "name": "Pune to Aurangabad", "description": "Explore the historical city of Aurangabad from Pune, known for its magnificent monuments like Ajanta and Ellora caves, and the iconic Bibi Ka Maqbara.", "link": "/pune-to-aurangabad-cab" },
    { "name": "Pune to Khandala", "description": "Travel from Pune to Khandala, a scenic hill station perfect for nature lovers, offering breathtaking views of valleys, lakes, and hills.", "link": "/pune-to-khandala-cabs" },
    { "name": "Pune to Pandharpur", "description": "Enjoy a spiritual journey from Pune to Pandharpur, a city known for its temples dedicated to Lord Vithoba and its significant religious importance.", "link": "/pune-to-pandharpur-cab" },
    { "name": "Pune to Baramati", "description": "Travel from Pune to Baramati, a city known for its agricultural history, cultural landmarks, and the famous Kesari Wada.", "link": "/pune-to-baramati-cab" },
    { "name": "Pune to Lavasa", "description": "Relax and rejuvenate on your trip from Pune to Lavasa, a planned hill city known for its lakeside views, modern infrastructure, and serene ambiance.", "link": "/pune-to-lavasa-cab" },
    { "name": "Pune to Dapoli", "description": "Enjoy a coastal drive from Pune to Dapoli, a beach town offering peaceful getaways with its pristine beaches and rich marine life.", "link": "/pune-to-dapoli-cab" },
    { "name": "Pune to Ganpati Pule", "description": "Experience a smooth journey from Pune to Ganpati Pule, a coastal town known for its Ganapati temple and beautiful beaches.", "link": "/City/PuneToGanpatiPule" },
    { "name": "Pune to Ratnagiri", "description": "Take a journey from Pune to Ratnagiri, a coastal city famous for its Alphonso mangoes, scenic beaches, and historical forts.", "link": "/pune-to-ratnagiri-cab-service" },
    { "name": "Pune to Islampur", "description": "Travel from Pune to Islampur, a town known for its picturesque surroundings, agricultural landscapes, and religious sites.", "link": "/City/PuneToIslampur" },
    { "name": "Pune to Karad", "description": "Enjoy a scenic drive from Pune to Karad, a town surrounded by lush hills, known for its agricultural prosperity and serene landscapes.", "link": "/karad-to-pune-cab" },
    { "name": "Pune to Chiplun", "description": "Travel from Pune to Chiplun, a town known for its natural beauty, waterfalls, and as a gateway to the Konkan coast.", "link": "/City/PuneToChiplun" },
    { "name": "Pune to Sangli", "description": "Experience a smooth ride from Pune to Sangli, a city famous for its mangoes, temples, and rich cultural heritage.", "link": "/pune-to-sangli-cab" },
    { "name": "Pune to Miraj", "description": "Discover the vibrant city of Miraj, known for its musical heritage, temples, and historical significance on your journey from Pune.", "link": "/City/PuneToMiraj" },
    { "name": "Pune to Hubali", "description": "Enjoy a smooth journey from Pune to Hubli, a bustling city known for its educational institutions, cultural landmarks, and historical monuments.", "link": "/City/PuneToHubali" },
    { "name": "Pune to Belgaon", "description": "Travel from Pune to Belgaon, a city known for its mix of Kannada and Marathi cultures, historical sites, and scenic landscapes.", "link": "/City/PuneToBelgaon" },
    { "name": "Pune to Nippani", "description": "Experience a smooth journey from Pune to Nippani, a town that boasts a blend of historical sites, agriculture, and vibrant local culture.", "link": "/City/PuneToNippani" },
    { "name": "Pune to Goa", "description": "Enjoy a breezy drive from Pune to Goa, the ultimate destination for sandy beaches, vibrant nightlife, and rich Portuguese heritage.", "link": "/pune-to-goa-cab" },
    { "name": "Pune to Malvan", "description": "Travel from Pune to Malvan, a coastal town known for its seafood, beautiful beaches, and the famous Sindhudurg Fort.", "link": "/City/PuneToMalvan" },
    { "name": "Pune to Karwar", "description": "Take a scenic journey from Pune to Karwar, a coastal town famous for its pristine beaches and serene backwaters.", "link": "/City/PuneToKarwar" },
    { "name": "Pune to Hyderabad", "description": "Embark on a cultural journey from Pune to Hyderabad, a city renowned for its historical monuments, rich cuisine, and diverse heritage.", "link": "/pune-to-hyderabad-cab" },
    { "name": "Pune to Bangalore", "description": "Travel from Pune to Bangalore, the Silicon Valley of India, known for its pleasant weather, tech hubs, and vibrant culture.", "link": "/City/PuneToBanglore" },
    { "name": "Pune to Indore", "description": "Experience a smooth journey from Pune to Indore, a city known for its food, culture, and rapid urban development.", "link": "/pune-to-indore-cab" },
    { "name": "Pune to Ujjain", "description": "Take a spiritual journey from Pune to Ujjain, home to one of the twelve Jyotirlingas and known for its grand temples and historical significance.", "link": "/City/PuneToUjjain" },
    { "name": "Pune to Nagpur", "description": "Travel from Pune to Nagpur, a city famous for its oranges, temples, and historical landmarks.", "link": "/City/PuneToNagpur" },
    { "name": "Pune to Amravati", "description": "Journey from Pune to Amravati, a city known for its ancient temples, rich culture, and lush green landscapes.", "link": "/City/PuneToAmravati" },
    { "name": "Pune to Dhule", "description": "Experience a smooth ride from Pune to Dhule, a city known for its historic temples, educational institutions, and agricultural fields.", "link": "/City/PuneToDhule" },
    { "name": "Pune to Jalgaon", "description": "Travel from Pune to Jalgaon, a city famous for its banana production, religious sites, and beautiful surroundings.", "link": "/City/PuneToJalgaon" },
    { "name": "Pune to Jalna", "description": "Enjoy a smooth ride from Pune to Jalna, known for its vibrant agricultural activity, rich culture, and historic landmarks.", "link": "/City/PuneToJalna" },
    { "name": "Pune to Beed", "description": "Take a peaceful journey from Pune to Beed, a city rich in culture, historical temples, and scenic landscapes.", "link": "/City/PuneToBeed" },
    { "name": "Pune to Barshi", "description": "Travel from Pune to Barshi, a town known for its temples, cultural significance, and surrounding natural beauty.", "link": "/City/PuneToBarshi" },
    { "name": "Pune to Akkalkot", "description": "Embark on a religious journey from Pune to Akkalkot, known for its sacred temples and spiritual significance.", "link": "/City/PuneToAkkalkot" },
    { "name": "Pune to Tuljapur", "description": "Experience a spiritual journey from Pune to Tuljapur, a town famous for its historic temple of Goddess Tulja Bhavani.", "link": "/pune-to-tuljapur-cab" },
    { "name": 'Pune to Akola', "description": "Enjoy a scenic and peaceful journey from Pune to Akola, known for its agricultural heritage and vibrant culture.", "link": '/City/PuneToAkola' },
    { "name": "Pune to Surat", "description": "Travel comfortably from Pune to Surat, a bustling city famous for its textile industry and rich cultural heritage.", "link": "/pune-to-surat-cab" },
    { "name": "Pune to Ahmedabad", "description": "Embark on a journey from Pune to Ahmedabad, a vibrant city known for its historical sites, rich culture, and thriving textile industry.", "link": "/City/PuneToAhmedabad" },
    { "name": "Pune to Vapi", "description": "Travel from Pune to Vapi, a growing industrial town in Gujarat known for its chemical industries and proximity to the Arabian Sea.", "link": "/City/PuneToVapi" },
    { "name": "Pune to Silvasa", "description": "Enjoy a scenic drive from Pune to Silvasa, the capital of Dadra and Nagar Haveli, known for its lush greenery, wildlife sanctuaries, and tribal culture.", "link": "/City/PuneToSilvasa" },
    { "name": "Pune to Tarapur", "description": "Embark on a journey from Pune to Tarapur, a town known for its historical significance and the famous Tarapur Temple dedicated to Lord Shiva.", "link": "/City/PuneToTarapur" },
    { "name": "Pune to Baroda", "description": "Travel from Pune to Baroda (Vadodara), a city renowned for its cultural heritage, majestic palaces, and vibrant festivals.", "link": "/City/PuneToBaroda" },
    { "name": "Pune to Rajkot", "description": "Embark on a journey from Pune to Rajkot, a city known for its rich history, vibrant culture, and historical landmarks.", "link": "/City/PuneToRajkot" },
    { "name": "Pune to Bharuch", "description": "Travel from Pune to Bharuch, a city known for its rich history, scenic surroundings, and the holy Shri Swaminarayan Mandir.", "link": "/City/PuneToBharuch" },
    { "name": "Pune to Anand", "description": "Embark on a journey from Pune to Anand, known as the 'Milk Capital of India' and home to the famous Amul dairy.", "link": "/City/PuneToAnand" },
    { "name": "Pune to Bhavnagar", "description": "Travel from Pune to Bhavnagar, a vibrant city known for its rich history, culture, and the famous Takhteshwar Temple.", "link": "/City/PuneToBhavnagar" },
    { "name": "Pune to Diu", "description": "Enjoy a scenic and relaxing journey from Pune to Diu, a coastal paradise known for its pristine beaches, historical forts, and vibrant culture.", "link": "/City/PuneToDiu" },
    { "name": "Pune to Daman", "description": "Embark on a peaceful journey from Pune to Daman, a beautiful coastal city famous for its serene beaches, colonial architecture, and vibrant nightlife.", "link": "/City/PuneToDaman" },
    { "name": "Pune to Valsad", "description": "Take a scenic journey from Pune to Valsad, a town known for its lush greenery, beautiful beaches, and proximity to the famous Daman and Diu.", "link": "/City/PuneToValsad" },
    { "name": "Pune to Navsari", "description": "Embark on a delightful journey from Pune to Navsari, a town known for its historical significance, beautiful gardens, and proximity to the serene Surat.", "link": "/City/PuneToNavsari" },
    { "name": "Pune to Nadiad", "description": "Take a peaceful journey from Pune to Nadiad, a city known for its vibrant culture, temples, and proximity to the holy town of Anand.", "link": "/City/PuneToNadiad" },
    { "name": "Pune to Dahej", "description": "Embark on a journey from Pune to Dahej, a town known for its industrial significance and proximity to the scenic coastal areas.", "link": "/City/PuneToDahej" },
    { "name": "Pune to Jamnagar", "description": "Travel from Pune to Jamnagar, a vibrant city known for its rich cultural heritage, historical landmarks, and the famous Lakhota Lake.", "link": "/City/PuneToJamnagar" }

    // Add more routes as needed...
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB Pune Routes</h1>
        <p className="mt-2 text-lg">Book your cab and explore Pune with ease</p>
      </header>

      {/* Route Information Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Popular Routes in Pune</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render routes */}
          {routes.map((route, index) => (
            <a
              key={index}
              href={route.link}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-500">{route.name}</h3>
              <p className="text-gray-600 mt-2">{route.description}</p>
            </a>
          ))}
        </div>
      </section>
       {/* Footer */}
       <div>
          {/* Redesigned Responsive Footer */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 sm:py-8">
            {/* Footer content area */}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Additional footer columns can be added here */}
              </div>
            </div>

            {/* Popular Cities Section */}
            <div className="container mx-auto px-4 text-center mb-4">
              <b className="text-yellow-400 text-lg transition-all duration-300 ease-in-out hover:text-white">
                POPULAR CITIES:
              </b>
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-2">
                {/* Pune Button */}
                <a
                  href="/Pune"
                  className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                             bg-gradient-to-r from-blue-400 to-yellow-300 
                             text-gray-800 font-bold uppercase shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-200 hover:shadow-lg hover:text-gray-900"
                >
                  Pune
                </a>

                {/* Mumbai Button */}
                <a
                  href="/Mumbai"
                  className="relative inline-block px-8 sm:px-16 md:px-20 py-4 rounded-full 
                             bg-gradient-to-r from-blue-400 to-yellow-300 
                             text-gray-800 font-bold uppercase shadow-md 
                             transform transition-all duration-500 ease-in-out 
                             hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:text-white"
                >
                  Mumbai
                </a>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 my-8" />

            {/* Quick Links Section */}
            <div className="container mx-auto px-4 text-center mb-8">
              <b className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                QUICK LINKS:
              </b>
              <div className="mt-2 flex flex-wrap justify-center">
                {[
                  "HOME",
                  "UPDATES",
                  "ABOUT",
                  "SERVICES",
                  "CONTACT US",
                  "CAREER",
                  "FAQ's",
                  "PRIVACY POLICY",
                  "TERMS & CONDITIONS",
                ].map((link, i) => (
                  <a
                    key={i}
                    href="/"
                    className="text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-black mx-2 mb-2 sm:mb-0"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 my-8" />

            {/* Designed by Section */}
            <div className="container mx-auto px-4 text-center mb-8">
              <h4 className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-white">
                DESIGNED BY
              </h4>
              <a
                href="https://cobaztech.com"
                target="_blank"
                className="text-white transition-all duration-300 ease-in-out font-semibold block mt-1 hover:text-black hover:scale-105"
              >
                COBAZTECH
              </a>
            </div>

            {/* Social Media Section */}
            <div className="container mx-auto px-4 text-center mt-6">
              <span className="flex justify-center flex-wrap">
                <a
                  href="https://wa.me/9130030054"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Aimcab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@AimCab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/youtube.png"
                    alt="YouTube"
                  />
                </a>
                <a
                  href="https://twitter.com/aim_cab"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aim-cab-77356b208/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/linked-in.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://join.skype.com/invite/sRT2FTyb7d1H"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/skype.png"
                    alt="Skype"
                  />
                </a>
                <a
                  href="https://www.instagram.com/aimcabs/"
                  target="_blank"
                  className="mx-2 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    className="w-8 h-8 inline-block mb-2"
                    src="images/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </span>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="container mx-auto px-4 text-center">
            <p className="transition-all duration-300 ease-in-out hover:text-green-200">
              &copy; {new Date().getFullYear()} Aim Cab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
 
  );
};

