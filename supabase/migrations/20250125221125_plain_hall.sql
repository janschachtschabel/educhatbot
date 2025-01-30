/*
  # Add email field to profiles table

  1. Changes
    - Add email column to profiles table
    - Make email required and unique
    - Add index for faster lookups

  2. Security
    - No changes to existing RLS policies
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'email'
  ) THEN
    ALTER TABLE profiles ADD COLUMN email text NOT NULL;
    ALTER TABLE profiles ADD CONSTRAINT profiles_email_unique UNIQUE (email);
    CREATE INDEX idx_profiles_email ON profiles (email);
  END IF;
END $$;