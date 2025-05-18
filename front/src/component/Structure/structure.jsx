import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-manrope">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <div className="text-center text-gray-500">
            LES POSTES
          </div>
        </main>
      </div>
    </div>
  );
}
