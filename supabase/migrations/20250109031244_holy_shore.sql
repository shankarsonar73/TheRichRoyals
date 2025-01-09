/*
  # Add DELETE policy for course offers

  1. Changes
    - Add policy to allow public DELETE access to course_offers table
    
  2. Security
    - Allows anyone to delete course offers (matches current public access pattern)
*/

CREATE POLICY "Allow public delete access"
ON course_offers FOR DELETE
TO public
USING (true);