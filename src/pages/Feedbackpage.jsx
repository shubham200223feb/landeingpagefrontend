import axios from "axios";
import { useEffect, useState } from "react";

export default function FeedbackList() {

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchFeedback = async () => {

      try {

        const res = await axios.get(
          "https://backendlandeing.onrender.com/api/feedbackdata"
        );

        setFeedbacks(res.data.data);

      } catch (err) {

        console.log("Error fetching feedback", err);

      } finally {

        setLoading(false);

      }

    };

    fetchFeedback();

  }, []);

  return (

    <div className="bg-black min-h-screen w-screen text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Feedback
      </h1>

      {loading ? (

        <p className="text-center text-gray-400">Loading feedback...</p>

      ) : feedbacks.length === 0 ? (

        <p className="text-center text-gray-400">No feedback found</p>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {feedbacks.map((item, index) => (

            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition"
            >

              <h2 className="text-xl font-semibold text-yellow-500 mb-2">
                {item.name}
              </h2>

              <p className="text-gray-300 mb-2">
                {item.email}
              </p>

              <p className="text-gray-400">
                {item.message}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}
