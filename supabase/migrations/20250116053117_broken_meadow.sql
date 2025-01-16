/*
  # Add update policy for course offers

  1. Changes
    - Add public update policy for course_offers table to allow updating records
*/

-- Create policy to allow public update access
CREATE POLICY "Allow public update access"
ON course_offers FOR UPDATE
TO public
USING (true)
WITH CHECK (true);