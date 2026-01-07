import React, { useState } from 'react'
import advancedWorkouts from '../data/workouts/advanced.js'

const MuscleParts = {
  abs: "Abs",
  arms: "Arms",
  legs: "Legs",
  chest: "Chest",
  shoulderAndBack: "Shoulder & Back",
}

const WorkoutParts = {
  abs: advancedWorkouts.abs || [],
  arms: advancedWorkouts.arms || [],
  legs: advancedWorkouts.legs || [],
  chest: advancedWorkouts.chest || [],
  shoulderAndBack: advancedWorkouts.shoulderAndBack || [],
}

export default function AdvancedPlan() {
  const [activePart, setActivePart] = useState(Object.keys(MuscleParts)[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl py-2 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Advanced Workout Plan
          </h1>
          <p className="text-gray-600 text-lg">Select a muscle group to view exercises</p>
        </div>

        {/* Muscle Group Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {Object.keys(MuscleParts).map((part) => (
              <button
                key={part}
                onClick={() => setActivePart(part)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base capitalize
                  transition-all duration-300 ease-in-out transform
                  ${activePart === part 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105" 
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                  }`}
              >
                {MuscleParts[part]}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise Cards Grid */}
        {WorkoutParts[activePart].length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WorkoutParts[activePart].map((exercise, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Exercise Image */}
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  {exercise.gif ? (
                    <img 
                      src={exercise.gif} 
                      alt={exercise.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl opacity-20">💪</div>
                    </div>
                  )}
                  {/* Reps Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {exercise.reps}
                  </div>
                </div>

                {/* Exercise Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {exercise.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Exercise #{index + 1}</span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Workout data coming soon!</p>
          </div>
        )}

        {/* Exercise Count Info */}
        {WorkoutParts[activePart].length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">{WorkoutParts[activePart].length}</span> exercises for <span className="font-semibold capitalize">{MuscleParts[activePart]}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

