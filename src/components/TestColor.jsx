
const TestColor = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1C1C1C] font-sans p-8 space-y-12">
      {/* Hero Section */}
      <section className="bg-[#E0C097] p-12 rounded-lg text-center">
        <h1 className="text-4xl font-serif mb-4">Hero Section</h1>
        <p className="text-lg">This is the tagline for the Rohingya documentary site.</p>
        <button className="mt-6 px-6 py-3 bg-[#C84B31] text-white rounded-lg hover:bg-[#A63B28] transition">
          Call to Action
        </button>
      </section>

      {/* Typography Examples */}
      <section>
        <h2 className="text-3xl font-serif mb-2">Heading H2</h2>
        <h3 className="text-2xl font-serif mb-2">Heading H3</h3>
        <p className="text-base mb-2">
          Body text example: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm text-gray-600 mb-2">Secondary text example</p>
        <a href="#" className="text-[#3A7CA5] underline hover:text-[#1C1C1C]">
          Example link
        </a>
      </section>

      {/* Cards / Content Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-serif mb-2">Card Title</h4>
          <p className="text-sm">Card content goes here. Example of body text in card.</p>
          <button className="mt-2 px-4 py-2 bg-[#C84B31] text-white rounded hover:bg-[#A63B28] transition">
            Learn More
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-serif mb-2">Card Title</h4>
          <p className="text-sm">Another card example. Shows spacing, shadows, and buttons.</p>
          <button className="mt-2 px-4 py-2 bg-[#C84B31] text-white rounded hover:bg-[#A63B28] transition">
            Learn More
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-serif mb-2">Card Title</h4>
          <p className="text-sm">Third card example with accent colors applied.</p>
          <button className="mt-2 px-4 py-2 bg-[#C84B31] text-white rounded hover:bg-[#A63B28] transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer Example */}
      <footer className="bg-[#1C1C1C] text-white p-6 rounded-lg space-y-4">
        <div>
          <h5 className="font-serif text-lg">Site Logo</h5>
          <p className="text-sm text-gray-300">Documenting the Rohingya struggle</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-[#C84B31]">Rohingya Genocide Gallery</a>
          <a href="#" className="hover:text-[#C84B31]">Rohingya History</a>
          <a href="#" className="hover:text-[#C84B31]">News & Updates</a>
          <a href="#" className="hover:text-[#C84B31]">Videos</a>
          <a href="#" className="hover:text-[#C84B31]">Articles</a>
          <a href="#" className="hover:text-[#C84B31]">Contact</a>
        </div>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Subscribe..."
            className="px-4 py-2 rounded-l-lg border-none outline-none"
          />
          <button className="px-4 py-2 bg-[#C84B31] text-white rounded-r-lg hover:bg-[#A63B28] transition">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4 mt-4 text-[#3A7CA5]">
          <a href="#">FB</a>
          <a href="#">YT</a>
          <a href="#">X</a>
          <a href="#">IG</a>
        </div>
      </footer>
    </div>
  );
};

export default TestColor;
