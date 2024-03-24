export const calculaterAverage =  (
  practicalScore,
  examScore,
  assignmentScore,
  midtermScore,
  finalScore
) => {
  try {
    const totalWeight = 20 + 40 + 20 + 10 + 10; // Tổng trọng số các điểm thành phần
    const weightedPractical = practicalScore * (10 / totalWeight); // Kiểm tra điểm thực hành có tồn tại không
    const weightedExam = examScore * (10 / totalWeight);
    const weightedAssignment = assignmentScore * (20 / totalWeight);
    const weightedMidterm = midtermScore * (20 / totalWeight);
    const weightedFinal = finalScore * (40 / totalWeight);
    const average =
      weightedMidterm +
      weightedFinal +
      weightedAssignment +
      weightedPractical +
      weightedExam;
    return average;
  } catch (error) {
    console.log(error.message);
  }
};
