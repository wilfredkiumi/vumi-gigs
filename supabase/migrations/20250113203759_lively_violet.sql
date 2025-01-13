/*
  # Create permissions system

  1. New Tables
    - `permissions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `resource_type` (text)
      - `resource_id` (text)
      - `can_edit` (boolean)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS
    - Add policies for permission checks
*/

CREATE TABLE IF NOT EXISTS permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  resource_type text NOT NULL,
  resource_id text NOT NULL,
  can_edit boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, resource_type, resource_id)
);

ALTER TABLE permissions ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own permissions
CREATE POLICY "Users can read own permissions"
  ON permissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Only allow admins to modify permissions
CREATE POLICY "Only admins can modify permissions"
  ON permissions
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );