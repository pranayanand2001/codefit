import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    const fetchWorkouts = async () => {
        try {
            const snapshot = await getDocs(collection(db, "workouts"));
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setWorkouts(data);
        } catch (error) {
            console.error("Error fetching workouts:", error);   
        } finally { 
            setLoading(false);
        }
    };

    fetchWorkouts();
}, []);
    if (loading) {
        return <p className="text-white p-8">Loading workouts...</p>;
    }   
    
    return (
        <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Workouts</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map(workout => (
                <Link 
                    key={workout.id} 
                    to={`/workouts/${workout.id}`}
                    className="bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition"
                >
                <h2 className="text-2xl font-semibold mb-2">{workout.title}</h2>
                <p className="text-gray-400 text-sm mb-3">{workout.description}</p>

                <div className="flex justify-between text-sm text-gray-300">
                    <span>{workout.level}</span>
                </div>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default Workouts;