// Custom hook to manage workouts, sets, and progress tracking

import { useState, useEffect } from 'react'

export function useWorkoutTracker() {
  const [workouts, setWorkouts] = useState([])
  const [currentWorkout, setCurrentWorkout] = useState(null)
  const [progress, setProgress] = useState({
    totalWorkouts: 0,
    currentStreak: 0,
    caloriesBurned: 0
  })

  // Load workouts from localStorage on mount
  useEffect(() => {
    const savedWorkouts = localStorage.getItem('codefit_workouts')
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts))
    }

    const savedProgress = localStorage.getItem('codefit_progress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Save workouts to localStorage whenever workouts change
  useEffect(() => {
    localStorage.setItem('codefit_workouts', JSON.stringify(workouts))
  }, [workouts])

  // Save progress to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem('codefit_progress', JSON.stringify(progress))
  }, [progress])

  const startWorkout = (workoutType) => {
    const newWorkout = {
      id: Date.now(),
      type: workoutType,
      startTime: new Date().toISOString(),
      exercises: [],
      completed: false
    }
    setCurrentWorkout(newWorkout)
    return newWorkout
  }

  const addExercise = (exerciseName, sets = []) => {
    if (!currentWorkout) return

    const exercise = {
      name: exerciseName,
      sets: sets,
      completed: false
    }

    setCurrentWorkout(prev => ({
      ...prev,
      exercises: [...prev.exercises, exercise]
    }))
  }

  const completeWorkout = () => {
    if (!currentWorkout) return

    const completedWorkout = {
      ...currentWorkout,
      completed: true,
      endTime: new Date().toISOString()
    }

    setWorkouts(prev => [...prev, completedWorkout])
    setCurrentWorkout(null)
    
    // Update progress
    setProgress(prev => ({
      ...prev,
      totalWorkouts: prev.totalWorkouts + 1,
      currentStreak: prev.currentStreak + 1
    }))
  }

  const getWorkoutHistory = () => {
    return workouts.filter(workout => workout.completed)
  }

  const getCurrentStreak = () => {
    return progress.currentStreak
  }

  return {
    workouts,
    currentWorkout,
    progress,
    startWorkout,
    addExercise,
    completeWorkout,
    getWorkoutHistory,
    getCurrentStreak
  }
}