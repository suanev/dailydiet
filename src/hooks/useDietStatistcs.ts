import { useMemo } from "react";

interface Meal {
  stayedOnDiet: boolean;
}

interface Day {
  date: string;
  meals: Meal[];
}

interface DietStatistics {
  totalMeals: number;
  mealsOnDiet: number;
  percentage: number;
  bestSequenceOfMealsOnDiet: number;
}

const useDietStatistics = (data: Day[]): DietStatistics => {
  const { totalMeals, mealsOnDiet, percentage, bestSequenceOfMealsOnDiet } =
    useMemo(() => {
      const total = data.reduce((acc, day) => acc + day.meals.length, 0);
      const onDiet = data.reduce(
        (acc, day) =>
          acc + day.meals.filter((meal) => meal.stayedOnDiet).length,
        0
      );
      const perc = total > 0 ? (onDiet / total) * 100 : 0;

      let bestSequence = 0;
      let currentSequence = 0;

      data.forEach((day) => {
        day.meals.forEach((meal) => {
          if (meal.stayedOnDiet) {
            currentSequence += 1;
            if (currentSequence > bestSequence) {
              bestSequence = currentSequence;
            }
          } else {
            currentSequence = 0;
          }
        });
      });

      return {
        totalMeals: total,
        mealsOnDiet: onDiet,
        percentage: perc,
        bestSequenceOfMealsOnDiet: bestSequence,
      };
    }, [data]);

  return { totalMeals, mealsOnDiet, percentage, bestSequenceOfMealsOnDiet };
};

export default useDietStatistics;
