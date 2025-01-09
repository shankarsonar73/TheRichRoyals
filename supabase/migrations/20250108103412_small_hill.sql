/*
  # Fix RLS Policies
  
  1. Update storage policies
  2. Update course_offers policies
*/

-- Drop existing storage policies
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;

-- Create more permissive storage policies
CREATE POLICY "Allow public read access for course images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'course-images');

CREATE POLICY "Allow public insert access for course images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'course-images');

-- Update course_offers policies to be more permissive
DROP POLICY IF EXISTS "Allow public read access" ON course_offers;
DROP POLICY IF EXISTS "Allow authenticated create access" ON course_offers;

CREATE POLICY "Allow public read access"
ON course_offers FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert access"
ON course_offers FOR INSERT
TO public
WITH CHECK (true);