import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

interface RsvpData {
  id: string;
  name: string;
  email: string;
  attending: string;
  guests: number;
  message: string;
  created_at: string;
}

export const Rsvp = () => {
  const [rsvpData, setRsvpData] = useState<RsvpData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRsvp = async () => {
      try {
        const { data, error } = await supabase
          .from("rsvp")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setRsvpData(data || []);
      } catch (error) {
        console.error("Error fetching RSVP data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRsvp();
  }, []);

  const filteredData = rsvpData.filter(rsvp =>
    rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rsvp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalGuests = rsvpData.reduce((sum, rsvp) => 
    rsvp.attending === 'yes' ? sum + rsvp.guests : sum, 0
  );

  if (loading) return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-400"></div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-script text-center gradient-text mb-2">RSVP Summary</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-rose-50 p-3 rounded-lg">
            <p className="text-lg font-semibold">{rsvpData.length}</p>
            <p className="text-sm text-gray-600">Total Responses</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-lg font-semibold">
              {rsvpData.filter(r => r.attending === 'yes').length}
            </p>
            <p className="text-sm text-gray-600">Attending</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-lg font-semibold">{totalGuests}</p>
            <p className="text-sm text-gray-600">Total Guests</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-rose-400 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredData.map((rsvp) => (
          <div
            key={rsvp.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{rsvp.name}</h3>
                <p className="text-sm text-gray-500">{rsvp.email}</p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  rsvp.attending === "yes"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {rsvp.attending === "yes" ? "Attending" : "Not Attending"}
              </span>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-gray-600">Guests: {rsvp.guests}</span>
              {rsvp.message && (
                <p className="text-gray-600 mt-1 italic text-xs">"{rsvp.message}"</p>
              )}
            </div>
            <div className="mt-2 text-xs text-gray-400">
              {new Date(rsvp.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
