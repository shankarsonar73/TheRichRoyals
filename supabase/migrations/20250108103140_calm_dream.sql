/*
  # Course Offers Schema

  1. New Tables
    - `course_offers`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on course_offers table
    - Add policies for public read access
    - Add policies for authenticated user insert access
*/

-- Create the course_offers table if it doesn't exist
CREATE TABLE IF NOT EXISTS course_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE course_offers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON course_offers;
DROP POLICY IF EXISTS "Allow authenticated create access" ON course_offers;

-- Create policies
CREATE POLICY "Allow public read access"
  ON course_offers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated create access"
  ON course_offers
  FOR INSERT
  TO authenticated
  WITH CHECK (true);