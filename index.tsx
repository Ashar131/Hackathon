import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title> Hackhathon Website</title>
        <meta name="description" content="Responsive desktop screen layout using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container */}
      <div className="container mx-auto p-4">
        {/* Navbar */}
        <nav className="bg-blue-500 text-white p-4 mb-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold">My Website</div>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-200">Home</a>
              <a href="/about" className="hover:text-gray-200">About</a>
              <a href="/contact" className="hover:text-gray-200">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul>
              <li><a href="#" className="text-blue-500">Link 1</a></li>
              <li><a href="#" className="text-blue-500">Link 2</a></li>
              <li><a href="#" className="text-blue-500">Link 3</a></li>
            </ul>
          </div>

          {/* Main content area */}
          <div className="col-span-2 bg-white p-6 shadow-md">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Responsive Layout Website</h1>
            <p>This is a basic example of how to create a responsive layout using Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy;  My Website Design Made by Ashar Hussain Student Of GIAIC In 2024 </p>
      </footer>
    </div>
  )
}


